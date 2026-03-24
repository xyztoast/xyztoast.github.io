hljs.registerLanguage("mcfunction", function(hljs) {
  return {
    name: "mcfunction",

    keywords: {
      keyword:
        "say tp give clear kill effect execute summon setblock fill clone teleport time weather scoreboard function tag gamemode difficulty gamerule title tellraw playsound particle"
    },

    contains: [

      {
        className: "comment",
        begin: /#/,
        end: /$/
      },

      {
        className: "string",
        begin: /"/,
        end: /"/
      },

      {
        className: "selector",
        begin: /@[pare]\b/
      },

      {
        className: "number",
        begin: /(~-?\\d*\\.?\\d+|\\^-?\\d*\\.?\\d+)/
      }

    ]
  };
});
