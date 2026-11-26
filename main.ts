import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "That glass had been reporting my naps to the dog for weeks, so I silenced it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence + "\n", "utf8");
