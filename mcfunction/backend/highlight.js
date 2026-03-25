contains: [

  // commands only at start of line
  {
    className: "keyword",
    begin: 'give tp say execute summon fill clone setblock function scoreboard title tellraw playsound particle'
  },

  // strings
  {
    className: "string",
    begin: /"/,
    end: /"/
  },

  // selectors
  {
    className: "selector",
    begin: /@[pare]\b/
  },

  // coordinates
  {
    className: "number",
    begin: /(~-?\d*\.?\d+|\^-?\d*\.?\d+)/
  }

]
