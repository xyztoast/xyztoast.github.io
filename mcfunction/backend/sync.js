const codeArea = document.getElementById('codeArea');
const highlighted = document.getElementById('highlighted');
const highlightLayer = document.getElementById('highlight-layer');
const lineNumbers = document.getElementById('lineNumbers');

function updateEditor() {
    const text = codeArea.value;

    // 1. Update Highlighted Text (escaping manually for safety)
    highlighted.textContent = text;
    hljs.highlightElement(highlighted);

    // 2. Update Line Numbers
    const lines = text.split('\n').length;
    lineNumbers.innerHTML = Array.from({length: lines}, (_, i) => i + 1).join('<br>');
}

// Sync scrolling so the highlight layer moves with the textarea
codeArea.addEventListener('scroll', () => {
    highlightLayer.scrollTop = codeArea.scrollTop;
    highlightLayer.scrollLeft = codeArea.scrollLeft;
    lineNumbers.scrollTop = codeArea.scrollTop;
});

codeArea.addEventListener('input', updateEditor);

// Initial run
updateEditor();
