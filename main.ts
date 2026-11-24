// Say What Actually Broke — make.fun entry
// Writes one single-line software error message (<=200 chars) to /output/entry.txt.
// Node 22, stdlib only, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a database died mid-save. Brutal truth, plain words, one image
// worth repeating out loud — and a clear next step (hit retry, don't close).
// v3: "alive, unsaved" repeated "survived" — cut it. "Still breathing" keeps
// the image and makes the trapped-work joke land in one breath.
const entry =
  "Our database died mid-save. Your work survived \u2014 it's trapped on this screen, still breathing, and one closed tab from oblivion. Hit retry to set it free.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
