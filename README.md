# CYBR Projects

Hands-on cybersecurity engineering projects built sequentially as a learning portfolio.

## Current status

| Item | Status |
|---|---|
| Shared platform planning | Runtime baseline verified; memory boundary documented |
| Project 1 — Home SIEM & Investigation Write-Up | Phase 1 architecture and local-service audit complete; isolated Windows/Sysmon boundary still open |
| GitHub repository | [Public repository](https://github.com/ashimcode/cybr-projects) initialized on `main` |
| Public publishing | Repository shell is public; project evidence remains gated by verification and sanitization review |
| Career application materials | Kept locally and excluded from the public portfolio repository |

## How this repository is used

Each numbered project has its own folder, documentation, evidence, automation notes, memory model, and completion gate. The project is built interactively: concepts are explained before execution, the user runs and verifies the work, and each phase ends with a learning checkpoint.

The repository documents:

- architecture and data flows;
- OSI-layer and protocol mapping;
- secure development and lab-safety practices;
- reproducible setup and verification steps;
- OpenClaw automation and Graphiti memory connections;
- sanitized screenshots, videos, logs, and reports;
- interviewer and portfolio summaries.

## Project sequence

1. [Home SIEM & Investigation Write-Up](01-Home-SIEM-Investigation-Write-Up/README.md)
2. Portfolio Site & Lab Hub
3. Phishing Email Header Analysis
4. Honeypot & Live Attacker Geo-Dashboard
5. Cloud Misconfiguration Hunt & Remediation

The complete sequence is maintained in [ROADMAP.md](ROADMAP.md).

## Portfolio boundary

This repository is the public engineering portfolio. It contains project architecture, code, sanitized evidence, investigation reports, and verified learning outcomes. Role-specific résumés, cover letters, application essays, recruiter correspondence, and other job-search materials remain local and are excluded by `.gitignore`.

The standalone Ethernet switching and wireless bridging lab is maintained in its own repository: [ashimcode/ethernet-switching-wireless-bridging-lab](https://github.com/ashimcode/ethernet-switching-wireless-bridging-lab).

## Safety boundary

All attack simulations, scanning, malware analysis, and testing are limited to owned, isolated, or explicitly authorized environments. Secrets, private keys, personal data, proprietary information, and unredacted logs must never be committed.
