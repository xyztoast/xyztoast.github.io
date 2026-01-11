import { ArgTypes } from "../commandSchema.js"

export default {
  name: "setblock",
  description: "Sets a block at a specified position",
  syntax: "setblock <x> <y> <z> <block>",
  args: [
    { name: "x", type: "coordinate" },
    { name: "y", type: "coordinate" },
    { name: "z", type: "coordinate" },
    { name: "block", type: "block" }
  ]
}
