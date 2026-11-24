import { mkdirSync, writeFileSync } from "node:fs";

// One line of out-of-office auto-reply, 140 characters or fewer.
// The twist: the out-of-office reply is a lie — the sender is right
// there, reading your email in peace. The kicker lands it: the reader
// now knows they are being watched, and the sender knows they know.
const ENTRY =
  "I'm not actually out of office. I set this up so I can read your email in peace. Carry on as if I'm not watching.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
