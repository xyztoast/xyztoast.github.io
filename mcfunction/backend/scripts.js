hljs.registerLanguage('mcfunction', function(hljs) {
  return {
    name: 'MCFunction',
    case_insensitive: true,

    keywords: {
      keyword:
        'execute summon say tp teleport function kill give clear tag scoreboard schedule tellraw'
    },

    contains: [
      {
        className: 'selector',
        begin: /@[pares]/
      },
      {
        className: 'number',
        begin: /\b\d+\b/
      },
      {
        className: 'string',
        begin: /"/,
        end: /"/
      }
    ]
  };
});

window.addEventListener("DOMContentLoaded", () => {

  const editor = document.getElementById("codeArea");
  const highlighted = document.getElementById("highlighted");

  if (!editor || !highlighted) {
    console.error("missing codeArea or highlighted element");
    return;
  }

  editor.addEventListener("input", () => {
    highlighted.textContent = editor.value;
    hljs.highlightElement(highlighted);
  });

});
