# The Funniest Out-of-Office

[![Bounty](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![Rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/vvtwentyfive/u-kreutzx-the-funniest-out-of-office-054815cf/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![Reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/vvtwentyfive/u-kreutzx-the-funniest-out-of-office-054815cf/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)

One line of out-of-office auto-reply, the funniest I could make it, for the [make.fun bounty](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf).

> "I'm not actually out of office. I set this up so I can read your email in peace. Carry on as if I'm not watching."

## How it works

`main.ts` (Node 22, standard library only, no network, deterministic) writes that single line — 113 characters — to `/output/entry.txt`, with no trailing newline, so the entry is exactly one line of UTF-8 text.

Run it with:

```sh
node main.ts
```
