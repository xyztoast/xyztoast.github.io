const textarea = document.getElementById("codeArea");
const highlighted = document.getElementById("highlighted");
const highlightLayer = document.querySelector(".highlight-layer");

function updateHighlight() {

  let code = textarea.value;

  code = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  highlighted.innerHTML = hljs.highlight(
    code,
    { language: "mcfunction" }
  ).value;
}

textarea.addEventListener("input", updateHighlight);

// sync scrolling
textarea.addEventListener("scroll", () => {
  highlightLayer.scrollTop = textarea.scrollTop;
  highlightLayer.scrollLeft = textarea.scrollLeft;
});

// first run
updateHighlight();
