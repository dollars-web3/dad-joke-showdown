// u-mfnakmal-dad-joke-showdown-1d2ce3e5 entry program: writes the one-line entry, exactly as judged, to the output directory.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const line = 'I asked my broom why it was late for dinner. It said it over-swept.';
writeFileSync(join(outDir, 'entry.txt'), line, 'utf8');
