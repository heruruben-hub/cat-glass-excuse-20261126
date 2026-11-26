import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "That glass had been reporting my naps to the dog for weeks, so I silenced it.";

// The gate accepts exactly one sentence of 1-200 characters: check before writing.
if (sentence.length < 1 || sentence.length > 200 || sentence.split(".").length !== 2) {
  throw new Error("entry sentence must be one sentence of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence + "\n", "utf8");
