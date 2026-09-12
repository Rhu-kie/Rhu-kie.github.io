---
order: 2
date: "September 2026"
category: "Digital forensics"
minutes: 7
title: "The best finding in my investigation was the one that turned out to be nothing"
deck: "Investigating a staged insider data theft, I built a table rating every finding as conclusive or merely indicative, based on how many independent evidence sources actually backed it up. The single most useful row in that table is the one that says a suspicious lead was actually benign."
changes:
  - n: "01"
    title: "Rate confidence before you write the story"
    body: "Building the matrix first meant the narrative had to follow the evidence, not the other way around."
  - n: "02"
    title: "Single-source findings still go in the report"
    body: "Three findings in this investigation never got a second corroborating source. They're in the writeup, labeled indicative, instead of quietly dropped or silently upgraded."
  - n: "03"
    title: "A closed lead is worth documenting, not discarding"
    body: "The benign finding earned its own row instead of being deleted from the draft once it stopped looking interesting."
stats:
  - v: "18"
    k: "Findings put through the matrix"
  - v: "3"
    k: "Rated indicative rather than conclusive"
  - v: "1"
    k: "That flipped from suspicious to cleared"
---

The case itself was a straightforward story once you had all the pieces: someone with admin access created a second account, researched steganography, hid a file of stolen bank details inside a JPEG, and then spent several minutes covering their tracks, clearing logs, disabling Defender, wiping free space. None of that was hard to find. Windows Event Logs, a memory dump, a disk image, and a network capture all pointed the same direction.

The harder problem wasn't finding evidence. It was deciding how much to trust each piece of it before writing the conclusion.

So before I wrote a single sentence of narrative, I built a table: every attribution-critical finding, cross-referenced against which of five evidence sources actually supported it (disk, memory, network, registry, event log). A finding only gets rated **conclusive** if two or more independent sources agree. Everything else gets rated **indicative**, and the report says so plainly rather than quietly upgrading its own confidence.

## The row that mattered most

```
#10  cleanup.bat metadata touched during the anti-forensics window
     Source 1: $MFT entry, $SI.Modified inside the window
     Source 2: MD5 matches a known benign reference template
     Rating: Conclusive (benign), rebuts the malicious-tool hypothesis
```

That row is the one I'd point to first. A batch script's metadata had been touched during the exact window the attacker was covering their tracks, which is precisely the kind of detail that looks damning in isolation. It would have been easy to fold it into the narrative as one more piece of intent. Instead, hashing it against a known-clean template showed it was a standard Windows maintenance script, untouched in content, coincidentally timestamped. Ruling it out took the same rigor as confirming anything else did.

> If every lead in an investigation turns out to be guilty, you weren't investigating. You were confirming what you already believed.

That's the part I think matters most for how I'd work in a SOC seat. An analyst who only ever escalates is not obviously more useful than one who correctly closes things out, and a report that states its own limitations (in this case: TLS traffic that couldn't be decrypted, and memory pages that were already swapped out before acquisition) is more credible than one that claims total certainty it hasn't earned.

## What changed how I read the rest of the evidence
