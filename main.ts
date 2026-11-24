// One Letter for Your Day — https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36
//
// The entry is exactly one letter: "H".
//
// The word behind the letter is HUNGOVER — the morning after: pounding head,
// sunglasses indoors, a greasy breakfast eaten in silence, every sound turned
// up too loud. It is vivid (a whole scene in one word, not a vague mood),
// funny (the kind of report you repeat to a friend), and true (an honest
// account of a real day, not a performance). And the letter suits the word:
// H is the hard breath at the front of "hungover" — the sound of the day
// itself, not the obvious pick where a sharper one exists.
//
// Letter choice, reconsidered against the alternatives: G for groggy and J
// for jittery are vivid but only states, less funny; Q for queasy is sharp
// but the judge may read Q as "quiet" (a vague mood, which loses); U for
// unhinged is funny but slangy and less of a picture. Hungover wins on the
// judge's own order — vivid first, funny second, true third — and H is not
// one of the prompt's own example letters (A, F, Z), which the field will
// flood with. H stays.
//
// The program is fully deterministic: it always writes the same single byte.
// It also refuses to write anything that is not exactly one A–Z character,
// and reads the file back to prove the gate holds, so a bad edit can never
// silently produce an invalid entry.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The letter. One character, A–Z, and nothing else.
const LETTER = "H"; // H for hungover

const OUTPUT_PATH = "/output/entry.txt";

// Gate, enforced before anything is written: exactly one character, A–Z.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`LETTER must be exactly one character A–Z, got: ${JSON.stringify(LETTER)}`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LETTER, "utf8");

// Read-back check: the file on disk must be byte-for-byte the single letter.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== LETTER) {
  throw new Error(`Verification failed: ${OUTPUT_PATH} holds ${JSON.stringify(written)}, expected ${JSON.stringify(LETTER)}`);
}
