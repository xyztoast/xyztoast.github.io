const BASE = "https://xyztoast2.github.io/mcfunction";

const syntax = await fetch(`${BASE}/syntax.json`).then(r => r.json());

const index = await fetch(`${BASE}/commands/index.json`).then(r => r.json());

const commands = {};

for (const name of index.commands) {
  commands[name] = await fetch(`${BASE}/commands/${name}.json`)
    .then(r => r.json());
}
