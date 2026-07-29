import { EditorView, basicSetup } from "codemirror";
import { html } from "@codemirror/lang-html";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { tags } from "@lezer/highlight";
import { Compartment } from "@codemirror/state";

class HTMLPlayground extends HTMLElement {
  private editorView: EditorView | null = null;
  private isFullscreen: boolean = false;

  connectedCallback() {
    if (this.editorView) return;

    const attrCode = this.getAttribute('data-code');
    const textarea = this.querySelector('textarea.editor-input') as HTMLTextAreaElement | null;
    let initialCode = attrCode || (textarea ? textarea.value : '') || `<h1>Hello World</h1>\n<p>Edit this HTML to see live preview!</p>`;
    
    // Decode HTML entities if needed
    const txt = document.createElement('textarea');
    txt.innerHTML = initialCode;
    initialCode = txt.value.trim();

    const filename = this.getAttribute('data-filename') || 'index.html';

    // Create inline placeholder card
    this.innerHTML = `
      <div class="playground-card border border-outline-variant bg-surface-container-lowest text-on-surface overflow-hidden font-mono text-sm my-8 shadow-xl rounded-sm transition-all duration-300">
        <div class="bg-surface-container-high px-4 py-2 border-b border-outline-variant flex items-center justify-between flex-wrap gap-2 text-on-surface shrink-0">
          <div class="flex items-center space-x-2">
            <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            <span class="text-xs text-on-surface-variant font-mono ml-2">${filename}</span>
          </div>
          <div class="flex items-center space-x-3">
            <button type="button" class="fullscreen-btn text-xs text-on-surface-variant hover:text-primary transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer" title="Expand to Full Screen Modal Window">
              <span class="material-symbols-outlined text-sm fullscreen-icon">open_in_full</span> <span class="fullscreen-label hidden sm:inline">Pop-up Editor</span>
            </button>
            <button type="button" class="reset-btn text-xs text-on-surface-variant hover:text-primary transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer">
              <span class="material-symbols-outlined text-sm">refresh</span> Reset
            </button>
            <span class="text-xs text-emerald-500 font-mono flex items-center gap-1 font-semibold">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Live
            </span>
          </div>
        </div>

        <div class="panels-container grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-outline-variant h-[600px] min-h-[600px] flex-1">
          <div class="relative bg-surface-container-lowest p-0 flex flex-col h-full overflow-hidden">
            <div class="bg-surface-container-high/80 px-3 py-1.5 text-[11px] text-on-surface-variant border-b border-outline-variant uppercase tracking-wider font-mono flex justify-between items-center shrink-0">
              <span>HTML Editor (DevTools Style)</span>
              <span class="text-[10px] opacity-70">Syntax Highlighted & Line Numbers</span>
            </div>
            <div class="editor-container w-full flex-1 text-on-surface font-mono text-xs md:text-sm h-full overflow-hidden flex flex-col"></div>
          </div>

          <div class="relative bg-white flex flex-col h-full overflow-hidden">
            <div class="bg-surface-container-high/80 px-3 py-1.5 text-[11px] text-on-surface-variant border-b border-outline-variant uppercase tracking-wider font-mono flex justify-between items-center shrink-0">
              <span>Browser Output</span>
              <span class="text-[10px] opacity-70">Real-time render</span>
            </div>
            <iframe class="preview-iframe w-full flex-1 border-0 bg-white h-full" title="HTML Live Preview"></iframe>
          </div>
        </div>
      </div>
    `;

    const card = this.querySelector('.playground-card') as HTMLDivElement;
    const editorContainer = this.querySelector('.editor-container') as HTMLDivElement;
    const iframe = this.querySelector('.preview-iframe') as HTMLIFrameElement;
    const resetBtn = this.querySelector('.reset-btn') as HTMLButtonElement;
    const fullscreenBtn = this.querySelector('.fullscreen-btn') as HTMLButtonElement;
    const fullscreenIcon = this.querySelector('.fullscreen-icon') as HTMLElement;
    const fullscreenLabel = this.querySelector('.fullscreen-label') as HTMLElement;
    const panelsContainer = this.querySelector('.panels-container') as HTMLDivElement;

    const updatePreview = (code: string) => {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc) return;
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { 
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
                padding: 1.25rem; 
                color: #1a1b1a; 
                background: #ffffff; 
                line-height: 1.6; 
                margin: 0; 
              }
              h1, h2, h3, h4 { color: #1a1b1a; margin-top: 0; margin-bottom: 0.75rem; }
              p { margin-top: 0; margin-bottom: 1rem; color: #333; }
              ul, ol { margin-top: 0; margin-bottom: 1rem; padding-left: 1.5rem; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>${code}</body>
        </html>
      `);
      doc.close();
    };

    const getThemeExtensions = () => {
      const isLight = document.documentElement.classList.contains('light');

      const devToolsStyle = isLight ? HighlightStyle.define([
        { tag: tags.tagName, color: "#001199", fontWeight: "600" },
        { tag: tags.angleBracket, color: "#666666" },
        { tag: tags.attributeName, color: "#990000" },
        { tag: tags.attributeValue, color: "#116600" },
        { tag: tags.string, color: "#116600" },
        { tag: tags.comment, color: "#556677", fontStyle: "italic" },
        { tag: tags.processingInstruction, color: "#001199" },
        { tag: tags.documentMeta, color: "#001199" }
      ]) : HighlightStyle.define([
        { tag: tags.tagName, color: "#5DB0D7", fontWeight: "600" },
        { tag: tags.angleBracket, color: "#808080" },
        { tag: tags.attributeName, color: "#9CDCFE" },
        { tag: tags.attributeValue, color: "#F29766" },
        { tag: tags.string, color: "#F29766" },
        { tag: tags.comment, color: "#6A9955", fontStyle: "italic" },
        { tag: tags.processingInstruction, color: "#569CD6" },
        { tag: tags.documentMeta, color: "#569CD6" }
      ]);

      const themeConfig = EditorView.theme({
        "&": {
          color: isLight ? "#1a1b1a" : "#e5e2e1",
          backgroundColor: isLight ? "#ffffff" : "#141313",
          fontFamily: '"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          fontSize: "13px",
          height: "100%"
        },
        ".cm-scroller": {
          height: "100%",
          overflow: "auto"
        },
        ".cm-content": {
          caretColor: isLight ? "#1a1b1a" : "#ffffff",
          padding: "12px 0",
          lineHeight: "1.6"
        },
        "&.cm-focused .cm-cursor": {
          borderLeftColor: isLight ? "#1a1b1a" : "#ffffff"
        },
        "&.cm-focused .cm-selectionBackground, ::selection": {
          backgroundColor: isLight ? "#e0e0e0 !important" : "#3A3939 !important"
        },
        ".cm-gutters": {
          backgroundColor: isLight ? "#f5f5f5" : "#141313",
          color: isLight ? "#666666" : "#666666",
          borderRight: isLight ? "1px solid #e0e0e0" : "1px solid #444748"
        },
        ".cm-activeLineGutter": {
          backgroundColor: isLight ? "#ededed" : "#201f1f",
          color: isLight ? "#1a1b1a" : "#ffffff"
        },
        ".cm-activeLine": {
          backgroundColor: isLight ? "#f0f0f0" : "#201f1f50"
        }
      }, { dark: !isLight });

      return [themeConfig, syntaxHighlighting(devToolsStyle)];
    };

    const themeCompartment = new Compartment();

    const listenToChanges = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        updatePreview(update.state.doc.toString());
      }
    });

    this.editorView = new EditorView({
      doc: initialCode,
      extensions: [
        basicSetup,
        html(),
        themeCompartment.of(getThemeExtensions()),
        EditorView.lineWrapping,
        keymap.of([indentWithTab]),
        listenToChanges
      ],
      parent: editorContainer
    });

    updatePreview(initialCode);

    // Watch for theme toggles dynamically
    const themeObserver = new MutationObserver(() => {
      if (this.editorView) {
        this.editorView.dispatch({
          effects: themeCompartment.reconfigure(getThemeExtensions())
        });
      }
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (this.editorView) {
          this.editorView.dispatch({
            changes: { from: 0, to: this.editorView.state.doc.length, insert: initialCode }
          });
          updatePreview(initialCode);
        }
      });
    }

    // Portal Modal Setup at document.body level
    let portal = document.getElementById('playground-modal-portal') as HTMLDivElement | null;
    if (!portal) {
      portal = document.createElement('div');
      portal.id = 'playground-modal-portal';
      portal.className = 'fixed inset-0 z-[999999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 hidden';
      document.body.appendChild(portal);
    }

    const toggleModal = () => {
      this.isFullscreen = !this.isFullscreen;
      const currentCode = this.editorView ? this.editorView.state.doc.toString() : initialCode;

      if (this.isFullscreen && portal && card) {
        // Move card to body portal
        portal.appendChild(card);
        portal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        card.className = "w-full max-w-6xl h-[88vh] max-h-[920px] bg-surface-container-lowest text-on-surface rounded-sm border border-outline-variant shadow-2xl flex flex-col overflow-hidden m-0 relative animate-in fade-in zoom-in-95 duration-200";
        panelsContainer.className = "panels-container grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-outline-variant flex-1 h-full min-h-0 overflow-hidden";

        if (fullscreenIcon) fullscreenIcon.textContent = 'close';
        if (fullscreenLabel) fullscreenLabel.textContent = 'Close Modal';
      } else if (portal && card) {
        // Move card back inline
        this.appendChild(card);
        portal.classList.add('hidden');
        document.body.style.overflow = '';

        card.className = "playground-card border border-outline-variant bg-surface-container-lowest text-on-surface overflow-hidden font-mono text-sm my-8 shadow-xl rounded-sm transition-all duration-300";
        panelsContainer.className = "panels-container grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-outline-variant h-[600px] min-h-[600px] flex-1";

        if (fullscreenIcon) fullscreenIcon.textContent = 'open_in_full';
        if (fullscreenLabel) fullscreenLabel.textContent = 'Pop-up Editor';
      }

      // Re-write iframe preview & measure editor after DOM node reparenting
      setTimeout(() => {
        updatePreview(currentCode);
        if (this.editorView) {
          this.editorView.requestMeasure();
        }
      }, 50);
    };

    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', toggleModal);
    }

    // Close on portal backdrop click
    if (portal) {
      portal.addEventListener('click', (e) => {
        if (e.target === portal && this.isFullscreen) {
          toggleModal();
        }
      });
    }

    // Close on Escape key press
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape' && this.isFullscreen) {
        toggleModal();
      }
    });
  }
}

if (!customElements.get('html-playground')) {
  customElements.define('html-playground', HTMLPlayground);
}
