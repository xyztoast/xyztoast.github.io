const codeArea = document.getElementById('codeArea');
const highlighted = document.getElementById('highlighted');
const lineNumbers = document.getElementById('lineNumbers');

function syncEditor() {
    // 1. Sync Text
    highlighted.textContent = codeArea.value;
    
    // 2. Apply Syntax Highlighting
    hljs.highlightElement(highlighted);

    // 3. Sync Line Numbers
    const lines = codeArea.value.split('\n').length;
    lineNumbers.innerHTML = Array.from({length: lines}, (_, i) => i + 1).join('<br>');
}

// Listen for typing
codeArea.addEventListener('input', syncEditor);

// Sync scrolling so highlighting matches the textarea position
codeArea.addEventListener('scroll', () => {
    highlighted.scrollTop = codeArea.scrollTop;
    lineNumbers.scrollTop = codeArea.scrollTop;
});

// Initial run
syncEditor();
