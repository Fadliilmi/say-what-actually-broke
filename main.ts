// Say What Actually Broke — make.fun entry.
// Writes one single-line software error message (at most 200 characters)
// to /output/entry.txt: the brutal truth about what went wrong, funny on
// a single read, with a clear next step. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Our database died mid-save. Your work is still breathing on this screen \u2014 hit retry before a closed tab turns it into a ghost.";

// The gate only accepts 1-200 characters on one line, and not only white
// space. Refuse to write anything that would fail it, so a bad edit fails
// loudly here instead of silently shipping an invalid entry.
const length = [...ENTRY].length;
if (length < 1 || length > 200 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${length} characters; must be 1-200 on one line.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${length} characters to /output/entry.txt`);
