import { mkdirSync, writeFileSync } from "node:fs";

// One word, exactly as the entry: no trailing newline, no extra text.
const WORD = "pitstop";

// The sealed gate only accepts UTF-8 text of 1 to 24 characters, not only whitespace.
if (WORD.length < 1 || WORD.length > 24 || !/\S/.test(WORD)) {
  throw new Error("entry fails the 1-24 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
