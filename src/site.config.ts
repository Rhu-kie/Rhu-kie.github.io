export const site = {
  name: "Kessiena Okugbere",
  roleLabel: "Cybersecurity Analyst · Offense, Defense & Forensics",
  footerLine: "Cybersecurity · Manchester, UK",
  email: "okugbereoghenerukevwe@gmail.com",
  github: "https://github.com/Rhu-kie",
  linkedin: "https://www.linkedin.com/in/oghenerukevwe/",
};

export const heroFacts: string[] = [
  "CompTIA Security+ and CEH Master (practical and written)",
  "MSc in Cybersecurity, in progress",
  "Offense, network defense, and digital forensics",
  "Looking for SOC Analyst roles",
];

export const heroHeadline = "I don't call something fixed until I've tried to break it again.";

export const heroBody =
  "Four hands-on security engagements, each taken from initial compromise through to a verified fix or a defensible conclusion. I work the way an investigation actually goes: confirm the finding, prove impact, then write it up so someone else could reproduce every step.";

export const aboutParagraphs = [
  "I came into cybersecurity through hands-on lab work rather than a single incident that convinced me: penetration testing, building and hardening a network from scratch, and reconstructing what happened after something already went wrong. Each of those is a different discipline, and I wanted to be genuinely competent at more than one before deciding which to specialise in.",
  "What carried across all three: the finding only matters if you can prove it. In the forensics work that meant rating evidence as conclusive only when two independent sources agreed, and saying so plainly when something looked suspicious but turned out to be benign. In the pentest it meant not just exploiting a vulnerability but writing the fix and confirming it couldn't be bypassed. That habit is what I want to bring into a SOC seat.",
];

export const aboutQuote = "Ruling something out is still a finding. I write those down too.";

export const contactStatement = "Currently completing an MSc in Cybersecurity and looking for a SOC Analyst role.";

export type Cert = { year: string; name: string; body: string };

export const certifications: Cert[] = [
  { year: "In progress", name: "MSc Cybersecurity", body: "Postgraduate degree" },
  { year: "2026", name: "CEH Master", body: "EC-Council, practical and written" },
  { year: "2025", name: "CompTIA Security+", body: "CompTIA" },
];
