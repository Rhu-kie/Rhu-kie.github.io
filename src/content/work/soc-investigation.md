---
order: 3
kind: "SOC investigation"
title: "Tracing a cryptominer back to the exploit kit that dropped it"
blurb: "Full Security Onion investigation of a real malware capture, from a RIG Exploit Kit landing page through Smoke Loader to an active XMRig session, correlated across Sguil, Zeek, and raw packet analysis into IOCs and a framework-mapped remediation plan."
stack: "Security Onion · Wireshark · VirusTotal · MITRE ATT&CK"
externalUrl: "https://github.com/Rhu-kie/network-security-defense-and-investigation/tree/master/investigation"
eyebrow: "Incident investigation · Security Onion, 2026"
meta:
  - k: "Target"
    v: "Single compromised Windows 7 workstation"
  - k: "Engagement"
    v: "Independent SOC investigation exercise"
  - k: "Role"
    v: "Sole analyst"
  - k: "Scope"
    v: "Alert triage, packet analysis, log correlation, threat-intel mapping"
phases:
  - k: "Phase 1"
    title: "Triage the alerts"
    body: "Thirteen distinct Sguil alert signatures scoped the incident into three phases: exploit kit delivery, malware download, and cryptocurrency mining check-in."
  - k: "Phase 2"
    title: "Reconstruct the download byte by byte"
    body: "Wireshark rebuilt the TCP session for the malware download and confirmed the transferred object was a genuine Windows executable from its raw bytes, not just its stated content type."
  - k: "Phase 3"
    title: "Correlate every log source against the alerts"
    body: "Zeek's connection, HTTP, file, DNS, SSL, and PE logs were cross-referenced against the Sguil alerts to build one single timeline with no gaps."
  - k: "Phase 4"
    title: "Map to threat-intel frameworks"
    body: "The full chain was mapped against the Diamond Model, the Cyber Kill Chain, and MITRE ATT&CK, then translated into business risk and framework-aligned remediation for a non-technical audience."
outcomes:
  - v: "7 min"
    k: "From initial exploit to active cryptomining"
  - v: "12"
    k: "MITRE ATT&CK techniques mapped across 7 tactics"
  - v: "1"
    k: "Deliberately backdated timestamp caught as the key anti-forensics tell"
---

The capture showed a workstation going from a drive-by exploit kit landing page to actively mining Monero for someone else in under seven minutes. Getting the timeline right meant treating no single log source as sufficient on its own: the IDS alerts said something happened, but only cross-referencing Zeek's file and connection logs against the raw packet capture confirmed exactly what was transferred and when.

The detail that mattered most wasn't in any alert. The malware server's HTTP response carried a date header reading seven years earlier than the actual capture date, a deliberate anti-forensics trick meant to throw off automated threat-intel tooling. Catching that discrepancy said more about the adversary's sophistication than any single IOC did.
