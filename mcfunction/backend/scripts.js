hljs.registerLanguage('mcfunction', function(hljs) {
  return {
    name: 'MCFunction',
    case_insensitive: true,
    keywords: {
      keyword:
        'execute summon say tp teleport function kill give clear tag scoreboard schedule tellraw'
    },
    contains: [
      { className: 'selector', begin: /@[pares]/ },
      { className: 'number', begin: /\b\d+\b/ },
      { className: 'string', begin: /"/, end: /"/ }
    ]
  };
});

window.addEventListener("DOMContentLoaded", () => {
  // grab the textarea by id
  const editor = document.getElementById("codeArea"); 
  const highlighted = document.getElementById("highlighted");

  if (!editor || !highlighted) {
    console.error("editor or highlighted element missing");
    return;
  }

  editor.addEventListener("input", () => {
    highlighted.textContent = editor.value;
    hljs.highlightElement(highlighted);
  });
});
