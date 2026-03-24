const editor = document.getElementById("codeArea");
const highlighted = document.getElementById("highlighted");

editor.addEventListener("input", () => {
  highlighted.textContent = editor.value;
  hljs.highlightElement(highlighted);
});



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

const editor = document.getElementById("editor");
const highlighted = document.getElementById("highlighted");

editor.addEventListener("input", () => {
  highlighted.textContent = editor.value;
  hljs.highlightElement(highlighted);
});
