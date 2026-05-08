<?php

use App\Support\RichText;

test('it sanitizes unsafe rich text html', function () {
    $html = '<p>Hello</p><script>alert(1)</script><p><a href="javascript:alert(1)" onclick="evil()">Bad</a></p><p><strong>Safe</strong></p>';

    $sanitized = RichText::sanitize($html);

    expect($sanitized)->toContain('<p>Hello</p>');
    expect($sanitized)->toContain('<strong>Safe</strong>');
    expect($sanitized)->not->toContain('<script>');
    expect($sanitized)->not->toContain('onclick=');
    expect($sanitized)->not->toContain('javascript:alert(1)');
});

test('it keeps safe links and allowed heading tags', function () {
    $html = '<h4>Sub Judul</h4><h5>Judul Kecil</h5><p><a href="https://example.com/profil">Kunjungi profil</a></p>';

    $sanitized = RichText::sanitize($html);

    expect($sanitized)->toContain('<h4>Sub Judul</h4>');
    expect($sanitized)->toContain('<h5>Judul Kecil</h5>');
    expect($sanitized)->toContain('href="https://example.com/profil"');
    expect($sanitized)->toContain('rel="noopener noreferrer"');
    expect($sanitized)->toContain('target="_blank"');
});

test('it renders plain text content into readable paragraphs', function () {
    $rendered = RichText::render("Paragraf pertama\nbaris kedua\n\nParagraf kedua");

    expect($rendered)->toContain('<p>Paragraf pertama<br');
    expect($rendered)->toContain('Paragraf kedua</p>');
});

test('it converts div based editor output into paragraphs', function () {
    $rendered = RichText::render('<div>Paragraf pertama</div><div>Paragraf kedua</div>');

    expect($rendered)->toContain('<p>Paragraf pertama</p>');
    expect($rendered)->toContain('<p>Paragraf kedua</p>');
    expect($rendered)->not->toContain('<div>');
});

test('it strips invisible spacing characters from rich text content', function () {
    $rendered = RichText::render("<p>Baris\u{00A0}pertama</p><p>\u{200B}Baris kedua</p>");

    expect($rendered)->toContain('<p>Baris pertama</p>');
    expect($rendered)->toContain('<p>Baris kedua</p>');
});

test('it sanitizes microsoft word style html into clean readable markup', function () {
    $html = <<<'HTML'
<p class="MsoNormal" style="margin-bottom:0cm;line-height:normal">
    <span style="font-size:12.0pt">Paragraf pertama dari Word<o:p></o:p></span>
</p>
<p class="MsoNormal" style="margin-bottom:0cm;line-height:normal">
    <span style="font-size:12.0pt">Paragraf kedua dari Word<o:p></o:p></span>
</p>
HTML;

    $sanitized = RichText::sanitize($html);

    expect($sanitized)->toContain('<p>');
    expect($sanitized)->toContain('Paragraf pertama dari Word');
    expect($sanitized)->toContain('Paragraf kedua dari Word');
    expect($sanitized)->not->toContain('class=');
    expect($sanitized)->not->toContain('style=');
    expect($sanitized)->not->toContain('<span');
});
