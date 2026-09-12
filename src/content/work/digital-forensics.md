---
order: 4
kind: "Digital forensics"
title: "Reconstructing an insider theft across disk, memory, and network"
blurb: "A premeditated data theft hidden inside a JPEG with end-of-file steganography, reconstructed by correlating Autopsy, Volatility 3, and Wireshark evidence, with a hash-verified chain of custody and a matrix that separates conclusive findings from single-source guesses."
stack: "Autopsy · Volatility 3 · Wireshark · MITRE ATT&CK"
externalUrl: "https://github.com/Rhu-kie/digital-forensics-insider-threat"
eyebrow: "Forensic investigation · disk, memory, network, 2026"
meta:
  - k: "Target"
    v: "Single workstation: disk image, memory dump, network capture"
  - k: "Engagement"
    v: "Independent forensics investigation exercise"
  - k: "Role"
    v: "Sole investigator"
  - k: "Scope"
    v: "Disk, memory, and network forensics, chain of custody"
phases:
  - k: "Phase 1"
    title: "Establish the timeline"
    body: "Windows Event Logs pinned the exact second a security log was cleared and a second account was created, both by the same admin session, minutes apart."
  - k: "Phase 2"
    title: "Correlate three independent sources"
    body: "Every attribution-critical claim was checked against disk, memory, and network evidence rather than accepted from a single source, including recovering the stolen data directly from plaintext memory."
  - k: "Phase 3"
    title: "Rate every finding honestly"
    body: "A corroboration matrix rated each finding conclusive only when two or more independent sources agreed, and marked the rest indicative rather than quietly upgrading their confidence."
  - k: "Phase 4"
    title: "Write the conclusion the evidence actually supports"
    body: "The final report states its own limitations directly: TLS traffic that couldn't be decrypted, and memory pages already paged out before acquisition, rather than claiming a completeness the evidence didn't have."
outcomes:
  - v: "18"
    k: "Findings put through the corroboration matrix"
  - v: "15"
    k: "Rated conclusive on two or more independent sources"
  - v: "1"
    k: "Finding that flipped from suspicious to cleared"
---

The case: an admin account creates a second user, researches steganography, hides a stolen file of bank details inside an ordinary JPEG, then spends several minutes covering their tracks before the machine is seized. None of the individual artefacts were hard to find. The harder problem was deciding how much to trust each one before writing a single sentence of conclusion.

The most useful row in the entire investigation is the one that says nothing happened: a batch script's metadata looked suspicious at first glance, touched during the exact anti-forensics window, but a hash check against a known-clean template showed it was benign. Ruling that out took the same rigor as confirming anything else did, and it's the difference between an investigation and a story that only ever confirms what it already suspected.
