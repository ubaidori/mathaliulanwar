<?php

namespace App\Support;

use DOMDocument;
use DOMElement;
use DOMNode;
use DOMXPath;

class RichText
{
    /**
     * @var array<int, string>
     */
    private const ALLOWED_TAGS = [
        'p',
        'br',
        'strong',
        'b',
        'em',
        'i',
        'u',
        's',
        'ul',
        'ol',
        'li',
        'blockquote',
        'h2',
        'h3',
        'h4',
        'h5',
        'a',
    ];

    public static function sanitize(?string $html): string
    {
        $html = trim((string) $html);
        $html = str_replace(["\u{00A0}", "\u{200B}", '&nbsp;'], [' ', '', ' '], $html);

        if ($html === '') {
            return '';
        }

        $previous = libxml_use_internal_errors(true);

        $document = new DOMDocument('1.0', 'UTF-8');
        $document->loadHTML(
            '<?xml encoding="utf-8" ?><!DOCTYPE html><html><body>'.$html.'</body></html>',
            LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD,
        );

        $body = $document->getElementsByTagName('body')->item(0);

        if (! $body instanceof DOMElement) {
            libxml_clear_errors();
            libxml_use_internal_errors($previous);

            return '';
        }

        self::sanitizeNode($body);

        $sanitized = '';

        foreach ($body->childNodes as $childNode) {
            $sanitized .= $document->saveHTML($childNode);
        }

        libxml_clear_errors();
        libxml_use_internal_errors($previous);

        return trim($sanitized);
    }

    public static function render(?string $content): string
    {
        $content = trim((string) $content);

        if ($content === '') {
            return '';
        }

        if ($content === strip_tags($content)) {
            return self::renderPlainText($content);
        }

        return self::sanitize($content);
    }

    public static function renderWithAnchors(?string $content): string
    {
        $html = self::render($content);

        if ($html === '') {
            return '';
        }

        $previous = libxml_use_internal_errors(true);

        $document = new DOMDocument('1.0', 'UTF-8');
        $document->loadHTML(
            '<?xml encoding="utf-8" ?><!DOCTYPE html><html><body>'.$html.'</body></html>',
            LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD,
        );

        $body = $document->getElementsByTagName('body')->item(0);

        if ($body instanceof DOMElement) {
            $existingIds = [];
            $xpath = new DOMXPath($document);
            $headings = $xpath->query('//h2 | //h3');

            foreach ($headings as $heading) {
                if (! $heading instanceof DOMElement) {
                    continue;
                }

                $headingText = trim((string) $heading->textContent);

                if ($headingText === '') {
                    continue;
                }

                $id = self::generateHeadingId($headingText, $existingIds);
                $heading->setAttribute('id', $id);
                $heading->setAttribute('style', 'scroll-margin-top: 5rem;');
            }
        }

        $rendered = '';

        if ($body instanceof DOMElement) {
            foreach ($body->childNodes as $childNode) {
                $rendered .= $document->saveHTML($childNode);
            }
        }

        libxml_clear_errors();
        libxml_use_internal_errors($previous);

        return trim($rendered);
    }

    public static function extractSections(?string $content): array
    {
        $html = self::render($content);

        if ($html === '') {
            return [];
        }

        $previous = libxml_use_internal_errors(true);

        $document = new DOMDocument('1.0', 'UTF-8');
        $document->loadHTML(
            '<?xml encoding="utf-8" ?><!DOCTYPE html><html><body>'.$html.'</body></html>',
            LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD,
        );

        $body = $document->getElementsByTagName('body')->item(0);
        $sections = [];

        if ($body instanceof DOMElement) {
            $existingIds = [];
            $xpath = new DOMXPath($document);
            $headings = $xpath->query('//h2 | //h3');

            foreach ($headings as $heading) {
                if (! $heading instanceof DOMElement) {
                    continue;
                }

                $headingText = trim((string) $heading->textContent);

                if ($headingText === '') {
                    continue;
                }

                $sections[] = [
                    'id' => self::generateHeadingId($headingText, $existingIds),
                    'text' => $headingText,
                    'tag' => strtolower($heading->tagName),
                ];
            }
        }

        libxml_clear_errors();
        libxml_use_internal_errors($previous);

        return $sections;
    }

    private static function generateHeadingId(string $value, array &$existingIds): string
    {
        $id = trim(mb_strtolower($value));
        $id = preg_replace('/[^\p{L}\p{N}]+/u', '-', $id) ?? '';
        $id = trim($id, '-');

        if ($id === '') {
            $id = 'section';
        }

        $base = $id;
        $counter = 1;

        while (isset($existingIds[$id])) {
            $id = $base.'-'.$counter;
            $counter++;
        }

        $existingIds[$id] = true;

        return $id;
    }

    private static function renderPlainText(string $content): string
    {
        $paragraphs = preg_split('/\R{2,}/', trim($content)) ?: [];

        return collect($paragraphs)
            ->map(fn (string $paragraph): string => '<p>'.nl2br(e(trim($paragraph)), false).'</p>')
            ->implode("\n");
    }

    private static function sanitizeNode(DOMNode $node): void
    {
        $children = [];

        foreach ($node->childNodes as $childNode) {
            $children[] = $childNode;
        }

        foreach ($children as $childNode) {
            if ($childNode instanceof DOMElement) {
                self::sanitizeElement($childNode);
            }

            if ($childNode->parentNode === $node) {
                self::sanitizeNode($childNode);
            }
        }
    }

    private static function sanitizeElement(DOMElement $element): void
    {
        $tagName = strtolower($element->tagName);

        if ($tagName === 'div') {
            self::convertDivToParagraph($element);

            return;
        }

        if (! in_array($tagName, self::ALLOWED_TAGS, true)) {
            self::unwrapElement($element);

            return;
        }

        $href = $tagName === 'a'
            ? trim((string) $element->getAttribute('href'))
            : '';

        $attributesToRemove = [];

        foreach ($element->attributes as $attribute) {
            $attributesToRemove[] = $attribute->name;
        }

        foreach ($attributesToRemove as $attributeName) {
            $element->removeAttribute($attributeName);
        }

        if ($tagName !== 'a') {
            return;
        }

        if ($href === '' || ! preg_match('/^(https?:\/\/|mailto:|tel:|\/|#)/i', $href)) {
            $element->removeAttribute('href');

            return;
        }

        $element->setAttribute('href', $href);
        $element->setAttribute('rel', 'noopener noreferrer');
        $element->setAttribute('target', '_blank');
    }

    private static function unwrapElement(DOMElement $element): void
    {
        $parentNode = $element->parentNode;

        if (! $parentNode instanceof DOMNode) {
            return;
        }

        while ($element->firstChild) {
            $parentNode->insertBefore($element->firstChild, $element);
        }

        $parentNode->removeChild($element);
    }

    private static function convertDivToParagraph(DOMElement $element): void
    {
        $document = $element->ownerDocument;

        if (! $document instanceof DOMDocument) {
            self::unwrapElement($element);

            return;
        }

        $paragraph = $document->createElement('p');

        while ($element->firstChild) {
            $paragraph->appendChild($element->firstChild);
        }

        $element->parentNode?->replaceChild($paragraph, $element);
    }
}
