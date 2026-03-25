const textarea = document.getElementById("codeArea");
const highlighted = document.getElementById("highlighted");
const highlightLayer = document.querySelector(".highlight-layer");

function updateHighlight() {

  highlighted.innerHTML = highlighted.innerHTML.replace(/^\n+/, "")

  // escape html
  code = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  highlighted.innerHTML =
    hljs.highlight(code, {
      language: "mcfunction"
    }).value;
}

// sync scroll positions
textarea.addEventListener("scroll", () => {
  highlightLayer.scrollTop = textarea.scrollTop;
  highlightLayer.scrollLeft = textarea.scrollLeft;
});

// update highlighting
textarea.addEventListener("input", updateHighlight);

// run once on load
updateHighlight();
