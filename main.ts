// Dad Joke Showdown entry program: writes the one-line entry, exactly as judged, to the output directory.
// The joke: a broom that is late for dinner because it "over-swept" — the overslept pun,
// carried by the dinner-table scene so it lands on the first read, the way a dad would tell it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const line = 'I asked my broom why it was late for dinner. It said it over-swept.';
writeFileSync(join(outDir, 'entry.txt'), line, 'utf8');
// No trailing newline: the gate counts characters, and the line is the whole entry.
