import { mkdirSync, writeFileSync } from "node:fs";

// The word below must stay byte-for-byte: a single word, no newline, no extra text.
const WORD = "Moonwalk";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", WORD, { encoding: "utf8" });
}

writeEntry();
