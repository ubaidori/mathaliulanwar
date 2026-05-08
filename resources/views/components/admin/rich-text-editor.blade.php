@props([
    'label' => 'Konten',
    'model' => '',
    'value' => '',
    'required' => false,
    'minHeight' => 'min-h-[22rem]',
    'error' => null,
])

<div
    x-data="richTextEditor({
        value: @js($value),
    })"
    x-init="init()"
    x-on:submit.window="persist()"
    class="space-y-3"
>
    <div class="flex flex-wrap items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-3 dark:border-zinc-700 dark:bg-zinc-800/70">
        <button type="button" x-on:mousedown.prevent="format('bold')" class="inline-flex h-9 min-w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
            B
        </button>
        <button type="button" x-on:mousedown.prevent="format('italic')" class="inline-flex h-9 min-w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 text-sm italic text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
            I
        </button>
        <button type="button" x-on:mousedown.prevent="format('underline')" class="inline-flex h-9 min-w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 text-sm underline text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
            U
        </button>
        <button type="button" x-on:mousedown.prevent="heading('h2')" class="inline-flex h-9 items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
            H2
        </button>
        <button type="button" x-on:mousedown.prevent="heading('h3')" class="inline-flex h-9 items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
            H3
        </button>
        <button type="button" x-on:mousedown.prevent="heading('h4')" class="inline-flex h-9 items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
            H4
        </button>
        <button type="button" x-on:mousedown.prevent="heading('h5')" class="inline-flex h-9 items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
            H5
        </button>
        <button type="button" x-on:mousedown.prevent="paragraph()" class="inline-flex h-9 items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
            P
        </button>
        <button type="button" x-on:mousedown.prevent="format('insertUnorderedList')" class="inline-flex h-9 items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
            • List
        </button>
        <button type="button" x-on:mousedown.prevent="format('insertOrderedList')" class="inline-flex h-9 items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
            1. List
        </button>
        <button type="button" x-on:mousedown.prevent="format('formatBlock', 'blockquote')" class="inline-flex h-9 items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
            Quote
        </button>
        <button type="button" x-on:mousedown.prevent="createLink()" class="inline-flex h-9 items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
            Link
        </button>
        <button type="button" x-on:mousedown.prevent="clearFormatting()" class="inline-flex h-9 items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-800 transition hover:border-rose-300 hover:text-rose-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
            Reset
        </button>
    </div>

    <div>
        <label class="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-200">
            {{ $label }}
            @if ($required)
                <span class="text-rose-600">*</span>
            @endif
        </label>

        <div
            x-ref="editor"
            contenteditable="true"
            dir="ltr"
            spellcheck="true"
            wire:ignore
            x-on:focus="handleFocus()"
            x-on:mousedown="beginPointerFocus($event)"
            x-on:mouseup="endPointerFocus(); captureSelection()"
            x-on:keyup="captureSelection()"
            x-on:input="sync()"
            x-on:keydown.enter="handleEnter($event)"
            x-on:paste="handlePaste($event)"
            x-on:blur="persist()"
            class="rich-content {{ $minHeight }} rounded-[1.75rem] border bg-white px-5 py-4 text-left text-sm leading-7 text-zinc-800 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-emerald-500 dark:focus:ring-emerald-900/40 {{ $error ? 'border-rose-300 dark:border-rose-700' : 'border-zinc-200 dark:border-zinc-700' }}"
        ></div>

        <textarea wire:model.blur="{{ $model }}" x-ref="textarea" class="hidden"></textarea>

        <p class="mt-3 text-xs leading-6 text-zinc-500 dark:text-zinc-400">
            Tekan <strong>Enter</strong> untuk membuat paragraf baru. Gunakan toolbar untuk heading, list, kutipan, dan tautan.
        </p>
    </div>
</div>

@once
    <script>
        function richTextEditor(config) {
            return {
                html: config.value ?? '',
                lastSelection: null,
                pointerFocus: false,
                shouldResumeSelection: false,
                init() {
                    document.execCommand('defaultParagraphSeparator', false, 'p');
                    this.$refs.editor.innerHTML = this.html;
                    this.$refs.textarea.value = this.html;
                    this.cleanupEditorMarkup();
                    this.sync();
                    document.addEventListener('visibilitychange', () => {
                        if (document.visibilityState === 'hidden') {
                            this.prepareSelectionResume();
                        }

                        if (document.visibilityState === 'visible' && this.lastSelection) {
                            this.shouldResumeSelection = true;
                        }
                    });
                    window.addEventListener('blur', () => {
                        this.prepareSelectionResume();
                    });
                    window.addEventListener('focus', () => {
                        if (this.lastSelection) {
                            this.shouldResumeSelection = true;
                        }
                    });
                },
                sync() {
                    const currentHtml = this.normalize(this.$refs.editor.innerHTML);

                    this.html = currentHtml;
                    this.$refs.textarea.value = currentHtml;
                },
                persist() {
                    this.cleanupEditorMarkup();
                    this.sync();
                    this.$refs.textarea.dispatchEvent(new Event('input', { bubbles: true }));
                    this.$refs.textarea.dispatchEvent(new Event('change', { bubbles: true }));
                },
                format(command, value = null) {
                    this.restoreSelection();
                    document.execCommand(command, false, value);
                    this.captureSelection();
                    this.persist();
                },
                heading(tag) {
                    this.format('formatBlock', tag);
                },
                paragraph() {
                    this.format('formatBlock', 'p');
                },
                createLink() {
                    this.restoreSelection();

                    const url = window.prompt('Masukkan tautan lengkap', 'https://');

                    if (! url) {
                        return;
                    }

                    document.execCommand('createLink', false, url);
                    this.captureSelection();
                    this.persist();
                },
                clearFormatting() {
                    this.restoreSelection();
                    document.execCommand('removeFormat', false, null);
                    document.execCommand('formatBlock', false, 'p');
                    this.captureSelection();
                    this.persist();
                },
                focusEditor() {
                    this.$refs.editor.focus();
                },
                beginPointerFocus(event) {
                    const clickedEditorSurface = event.target === this.$refs.editor;

                    if (clickedEditorSurface && this.lastSelection) {
                        event.preventDefault();
                        this.pointerFocus = false;
                        this.restoreSelection();
                        this.shouldResumeSelection = false;

                        return;
                    }

                    this.pointerFocus = true;
                },
                endPointerFocus() {
                    queueMicrotask(() => {
                        this.pointerFocus = false;
                    });
                },
                captureSelection() {
                    const selection = window.getSelection();

                    if (! selection || selection.rangeCount === 0) {
                        return;
                    }

                    const range = selection.getRangeAt(0);

                    if (! this.nodeBelongsToEditor(range.startContainer) || ! this.nodeBelongsToEditor(range.endContainer)) {
                        return;
                    }

                    this.lastSelection = {
                        startPath: this.getNodePath(range.startContainer),
                        startOffset: range.startOffset,
                        endPath: this.getNodePath(range.endContainer),
                        endOffset: range.endOffset,
                        collapsed: range.collapsed,
                    };
                },
                handleFocus() {
                    this.ensureEditableRoot();

                    if ((! this.pointerFocus || this.shouldResumeSelection) && this.lastSelection) {
                        this.restoreSelection();
                        this.shouldResumeSelection = false;
                    }
                },
                prepareSelectionResume() {
                    this.captureSelection();
                    this.persist();

                    if (this.lastSelection) {
                        this.shouldResumeSelection = true;
                    }
                },
                restoreSelection() {
                    this.focusEditor();

                    if (! this.lastSelection) {
                        return;
                    }

                    const startNode = this.getNodeFromPath(this.lastSelection.startPath);
                    const endNode = this.getNodeFromPath(this.lastSelection.endPath);

                    if (! startNode || ! endNode) {
                        this.placeCaretAtEnd(this.$refs.editor.lastElementChild ?? this.$refs.editor);

                        return;
                    }

                    const selection = window.getSelection();
                    const range = document.createRange();

                    range.setStart(startNode, this.normalizeRangeOffset(startNode, this.lastSelection.startOffset));
                    range.setEnd(endNode, this.normalizeRangeOffset(endNode, this.lastSelection.endOffset));

                    selection.removeAllRanges();
                    selection.addRange(range);
                },
                ensureEditableRoot() {
                    if (this.$refs.editor.innerHTML.trim() !== '') {
                        return;
                    }

                    this.$refs.editor.innerHTML = '<p><br></p>';
                    this.placeCaretAtEnd(this.$refs.editor.querySelector('p'));
                    this.captureSelection();
                },
                handlePaste(event) {
                    event.preventDefault();
                    this.restoreSelection();

                    const clipboardText = event.clipboardData?.getData('text/plain') ?? '';
                    const cleanedText = clipboardText
                        .replace(/\r\n/g, '\n')
                        .replace(/\r/g, '\n')
                        .replace(/\u00a0/g, ' ')
                        .replace(/\u200b/g, '');
                    const html = this.convertPlainTextToHtml(cleanedText);

                    if (document.queryCommandSupported?.('insertHTML')) {
                        document.execCommand('insertHTML', false, html);
                    } else {
                        document.execCommand('insertText', false, cleanedText);
                    }

                    this.cleanupEditorMarkup();
                    this.sync();
                    this.captureSelection();
                },
                handleEnter(event) {
                    if (event.shiftKey) {
                        return;
                    }

                    event.preventDefault();
                    this.focusEditor();

                    if (document.queryCommandSupported?.('insertParagraph')) {
                        document.execCommand('insertParagraph', false);
                    } else {
                        document.execCommand('insertHTML', false, '<p><br></p>');
                    }

                    this.sync();
                    this.captureSelection();
                },
                cleanupEditorMarkup() {
                    for (const child of [...this.$refs.editor.childNodes]) {
                        if (child.nodeType === Node.TEXT_NODE) {
                            const cleanedText = child.textContent.replace(/\u00a0/g, ' ').replace(/\u200b/g, '');

                            if (cleanedText.trim() === '') {
                                child.remove();

                                continue;
                            }

                            const paragraph = document.createElement('p');
                            paragraph.textContent = cleanedText;
                            child.replaceWith(paragraph);

                            continue;
                        }

                        if (child.nodeType === Node.ELEMENT_NODE && child.tagName === 'DIV') {
                            const paragraph = document.createElement('p');
                            paragraph.innerHTML = child.innerHTML;
                            child.replaceWith(paragraph);
                        }
                    }

                    for (const element of this.$refs.editor.querySelectorAll('*')) {
                        if (['SCRIPT', 'STYLE'].includes(element.tagName)) {
                            element.remove();

                            continue;
                        }

                        if (element.childNodes.length === 1 && element.firstChild.nodeType === Node.TEXT_NODE) {
                            element.firstChild.textContent = element.firstChild.textContent
                                .replace(/\u00a0/g, ' ')
                                .replace(/\u200b/g, '');
                        }
                    }
                },
                convertPlainTextToHtml(text) {
                    const escapedParagraphs = text
                        .split(/\n{2,}/)
                        .map((paragraph) => paragraph
                            .split('\n')
                            .map((line) => this.escapeHtml(line.trimEnd()))
                            .join('<br>')
                            .trim())
                        .filter((paragraph) => paragraph !== '');

                    if (escapedParagraphs.length === 0) {
                        return '<p><br></p>';
                    }

                    return escapedParagraphs
                        .map((paragraph) => `<p>${paragraph || '<br>'}</p>`)
                        .join('');
                },
                normalize(html) {
                    if (html === '<br>' || html === '<div><br></div>') {
                        return '';
                    }

                    return html
                        .replace(/&nbsp;/g, ' ')
                        .replace(/\u00a0/g, ' ')
                        .replace(/\u200b/g, '')
                        .replace(/<div\b/gi, '<p')
                        .replace(/<\/div>/gi, '</p>')
                        .trim();
                },
                escapeHtml(text) {
                    const node = document.createElement('div');
                    node.textContent = text;

                    return node.innerHTML;
                },
                nodeBelongsToEditor(node) {
                    return node === this.$refs.editor || this.$refs.editor.contains(node);
                },
                getNodePath(node) {
                    const path = [];
                    let currentNode = node;

                    while (currentNode && currentNode !== this.$refs.editor) {
                        const parentNode = currentNode.parentNode;

                        if (! parentNode) {
                            break;
                        }

                        path.unshift(Array.prototype.indexOf.call(parentNode.childNodes, currentNode));
                        currentNode = parentNode;
                    }

                    return path;
                },
                getNodeFromPath(path) {
                    let currentNode = this.$refs.editor;

                    for (const index of path) {
                        currentNode = currentNode?.childNodes?.[index] ?? null;

                        if (! currentNode) {
                            return null;
                        }
                    }

                    return currentNode;
                },
                normalizeRangeOffset(node, offset) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        return Math.min(offset, node.textContent?.length ?? 0);
                    }

                    return Math.min(offset, node.childNodes?.length ?? 0);
                },
                placeCaretAtEnd(element) {
                    if (! element) {
                        return;
                    }

                    const selection = window.getSelection();
                    const range = document.createRange();

                    range.selectNodeContents(element);
                    range.collapse(false);

                    selection.removeAllRanges();
                    selection.addRange(range);
                    this.captureSelection();
                },
            };
        }
    </script>
@endonce
