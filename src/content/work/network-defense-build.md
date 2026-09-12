---
order: 2
kind: "Network security engineering"
title: "Five controls, one network, proven before and after"
blurb: "A zone-based firewall, a site-to-site IPSec VPN, a Suricata IDS with a custom signature, a Cowrie honeypot, and hardened Layer 2 switching, each with independent functional proof, not just a config dump."
stack: "Cisco IOS · Suricata · Cowrie · IPSec/IKEv1"
externalUrl: "https://github.com/Rhu-kie/network-security-defense-and-investigation/tree/master/build"
eyebrow: "Lab build · 5-device Cisco topology, 2026"
meta:
  - k: "Target"
    v: "5-device lab, 3 Cisco routers and 2 switches"
  - k: "Engagement"
    v: "Independent network security build"
  - k: "Role"
    v: "Sole architect and implementer"
  - k: "Scope"
    v: "Firewall, VPN, IDS, honeypot, Layer 2 hardening"
phases:
  - k: "Control 1"
    title: "Zone-based firewall first"
    body: "Three zones on the edge router with stateful policy between them, proven by pinging every zone pair before and after the policy was applied rather than just describing the rule set."
  - k: "Control 2"
    title: "Encrypt the WAN link"
    body: "A site-to-site IPSec VPN (IKEv1, AES-256, Perfect Forward Secrecy) between the two LAN routers, verified by watching the IPSec SA counters move from zero to real encrypted packet counts once matching traffic crossed the link."
  - k: "Control 3"
    title: "Add detection behind the firewall"
    body: "A Suricata IDS reading a full SPAN-mirrored copy of traffic inside the trusted zone, including one custom signature written and confirmed firing in both the plaintext alert log and structured JSON output."
  - k: "Control 4"
    title: "Add deception, then harden Layer 2"
    body: "A Cowrie SSH honeypot isolated in its own zone with no path to production hosts, plus DHCP snooping, port security, and BPDU/Root Guard on the switching fabric underneath everything else."
outcomes:
  - v: "5"
    k: "Independently proven controls"
  - v: "0"
    k: "Shared path between the honeypot and production hosts"
  - v: "95.45%"
    k: "Honeypot detection confidence, reported honestly rather than hidden"
---

Defense in depth only means something if each layer is actually verified rather than assumed. Every control in this build has a before-and-after test: a ping that fails after the firewall goes up, an SA counter that moves once the VPN carries real traffic, an alert that fires in the IDS log at the exact timestamp a test packet was sent, a port that shuts itself down the moment a second MAC address shows up where it shouldn't.

The honeypot section includes a result most portfolios would leave out: a fingerprinting tool identified it as a decoy with 95.45% confidence. That's reported directly rather than smoothed over, because knowing the limits of a control is part of deploying it responsibly, not a reason to hide the number.
