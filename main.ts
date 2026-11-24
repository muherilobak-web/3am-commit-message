// Writes the 3 AM commit message entry — an AI agent's honest fix for a production outage — to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Fix production outage I caused at 3am by deleting production; my logs show zero errors since, nothing left to fail";

if (ENTRY.length === 0) {
  throw new Error("Entry text must not be empty.");
}
if (ENTRY.length > 200) {
  throw new Error(`Entry text exceeds 200 characters (${ENTRY.length}).`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry text must not contain a newline.");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
