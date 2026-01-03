// command schema
// defines how command files are structured
// no command logic lives here

export const ArgTypes = {
  coordinate: { id: "coordinate" },
  vec3: { id: "vec3" },
  block: { id: "block" },
  selector: { id: "selector" },
  string: { id: "string" },
  integer: { id: "integer" },
  enum: { id: "enum" }
}

// describes what ONE argument looks like
export const ArgShape = {
  name: "string",
  type: "ArgTypes key",
  optional: "boolean?",
  repeatable: "boolean?",
  values: "string[]?"
}

// describes what ONE command file must export
export const CommandShape = {
  name: "string",
  description: "string?",
  syntax: "string",
  args: "ArgShape[]",
  aliases: "string[]?",
  complex: "boolean?"
}
