# CYBR Projects — Cybersecurity Engineering Roadmap

This repository documents a sequential portfolio of hands-on cybersecurity engineering projects. All project work remains inside this workspace:

`C:\Users\admin\Desktop\CYBR Projects`

The repository will eventually be published as a detailed GitHub monorepo. Project folders are created in numerical order and are not skipped or combined.

## Operating principles

- Complete projects in order from 1 through 20.
- Start each project by confirming the lab operating system, cloud provider, CPU/RAM, virtualization platform, and available lab machines.
- Use five phases for every project: architecture and prerequisites; setup and scripting; attack, simulation, or execution; investigation, hardening, and documentation; resume and portfolio polish.
- Pause at the end of every phase for verification.
- Do not begin the next project until the current project is explicitly declared complete.
- Use only owned, isolated, or explicitly authorized systems for testing.
- Never commit credentials, tokens, private keys, personal data, or unredacted sensitive logs.
- Explain what was built, why it was selected, and how each component connects to the others.
- Analyze relevant systems and traffic using the OSI model, documenting the applicable layer, protocols, assets, controls, and observed evidence.
- Apply cybersecurity practices throughout development: least privilege, defense in depth, secure defaults, threat modeling, input validation, dependency hygiene, logging, monitoring, backup and recovery, change control, and responsible disclosure.
- Build every project as a portfolio artifact that can be reviewed by a hiring manager, demonstrated during an interview, and shared publicly when the evidence is safe to publish.
- Write commits, READMEs, reports, and decision records in a professional cybersecurity analyst or engineer voice while explaining specialized terms in plain language for a student, hiring manager, or interviewer.
- Make documentation evidence-based: state what was built, why it was selected, how it connects, what was observed, and what remains unverified.

## Hands-on learning and mentorship model

The goal is not only to produce working projects. Each project is also a guided learning lab. The work will follow a repeatable learning loop:

```text
Learn the concept → Predict the result → Perform the task → Observe the evidence →
Explain the result → Troubleshoot a controlled failure → Document the lesson → Repeat
```

For every major task, the guidance will include:

- **Why it matters:** the security problem and real-world SOC or engineering context.
- **What connects to what:** a plain-language explanation of the architecture, data flow, protocols, and dependencies.
- **Before-you-run explanation:** what each command, configuration field, or script is expected to do.
- **Hands-on execution:** the user runs the commands and captures the output rather than receiving an opaque finished result.
- **Evidence interpretation:** how to read the logs, alerts, dashboards, errors, and test results.
- **Checkpoint questions:** short prediction, troubleshooting, or teach-back questions.
- **Controlled break/fix exercises:** safe, reversible failures such as a stopped service, invalid configuration, blocked port, or missing permission.
- **Documentation practice:** the user records the decision, result, evidence, and lesson learned in the project repository.
- **Professional translation:** how the work maps to OSI layers, security controls, MITRE ATT&CK where relevant, incident response, and an interview explanation.

Project records will distinguish between planned actions, executed commands, generated files, expected output, and evidence that still requires verification.

### Learning checkpoints per phase

Each project phase will end with a short checkpoint:

1. **Recall:** define the key concepts in the user's own words.
2. **Prediction:** state what should happen before running the next test.
3. **Verification:** paste or inspect the relevant output.
4. **Troubleshooting:** diagnose one controlled issue when appropriate.
5. **Teach-back:** explain the component and data flow as if presenting it to an interviewer.

Progress is measured by both technical completion and demonstrated understanding. If a result works but the reason is unclear, we pause and investigate before moving forward.

### Project 1 learning outcomes

By the end of the Home SIEM project, the user should be able to:

- explain the difference between logs, events, alerts, detections, and incidents;
- describe the telemetry path from Windows and Sysmon into the SIEM;
- identify the relevant OSI layers and protocols in the lab;
- search and filter SIEM data using a documented investigation question;
- distinguish a normal baseline from simulated malicious behavior;
- explain how a detection rule produced an alert;
- preserve and sanitize investigation evidence;
- write and present an incident timeline and recommended hardening actions;
- rebuild or demonstrate the lab without relying on undocumented steps.

## Repository layout

```text
CYBR Projects/
├── ROADMAP.md
├── README.md
├── SECURITY.md
├── .gitignore
├── 00-Shared-Platform/
│   ├── openclaw/
│   ├── graphiti/
│   ├── schemas/
│   ├── documentation/
│   └── decision-log/
├── 01-Home-SIEM-Investigation-Write-Up/
├── 02-Portfolio-Site-Lab-Hub/
├── 03-Phishing-Email-Header-Analysis/
├── ...
└── 20-Responsible-Disclosure-CVE-Discovery/
```

Each project folder will contain, as applicable:

```text
README.md
docs/
architecture/
scripts/
configs/
detections/
automation/
memory/
reports/
evidence/
tests/
```

The `evidence/` directory will contain sanitized screenshots, command output, and verification artifacts only. Raw sensitive data stays local.

## OSI model and cybersecurity practice standard

Each project README and investigation report will include an OSI and security-practice section where applicable. The documentation will identify:

| OSI layer | Documentation focus | Example evidence |
|---|---|---|
| 7 — Application | Applications, APIs, authentication, user actions, and application logs | HTTP/API events, phishing content, OAuth grants |
| 6 — Presentation | Encoding, serialization, encryption, and format handling | TLS details, JSON, certificates, encoded payloads |
| 5 — Session | Session creation, persistence, tokens, and timeouts | Session logs, authentication sequences |
| 4 — Transport | TCP/UDP, ports, connections, and flow behavior | Connection logs, beacon timing, firewall events |
| 3 — Network | IP addressing, routing, DNS, and segmentation | PCAPs, DNS queries, IP indicators, routing evidence |
| 2 — Data Link | Ethernet, ARP, VLANs, and local network behavior | ARP activity, VLAN boundaries, packet captures |
| 1 — Physical | Hosts, virtual machines, hardware, and physical access assumptions | Lab topology, VM inventory, hardware constraints |

Not every project will require evidence at every layer. The report will explicitly state which layers are in scope and why.

Security practices will be demonstrated in the implementation, not merely listed. Examples include isolated lab boundaries, non-production credentials, secret scanning, dependency pinning, access control, auditable changes, rollback plans, data minimization, safe failure behavior, and validation before deployment.

## Portfolio evidence and publishing workflow

Every project will produce a publishable evidence package after verification:

```text
project-folder/
├── docs/
│   ├── architecture.md
│   ├── osi-model-analysis.md
│   ├── security-practices.md
│   └── build-notes.md
├── evidence/
│   ├── screenshots/
│   ├── video/
│   ├── sanitized-logs/
│   └── verification-checklist.md
├── reports/
│   ├── investigation-report.md
│   └── executive-summary.md
└── README.md
```

Evidence standards:

- Screenshots must show meaningful proof of operation, such as dashboards, alerts, test results, or deployed components.
- Video demonstrations should show the workflow from setup or trigger through observed result and investigation outcome.
- Logs, screenshots, recordings, hostnames, IP addresses, email addresses, tenant identifiers, and cloud resources must be sanitized before publication.
- Secrets, tokens, private keys, personal data, proprietary data, and unapproved offensive payloads must never be committed or published.
- Each evidence item will include a short caption describing what it proves, the date captured, the environment, and the related project phase.
- GitHub will be the source of truth for documentation, code, diagrams, reports, and sanitized evidence.
- Each completed project will include an interviewer-friendly executive summary and a LinkedIn-ready summary based only on verified results.
- Public sharing will occur only after a publication review confirms that the project is safe to disclose.

The publishing workflow is:

```text
Build → Verify → Capture evidence → Sanitize → Review → Commit to GitHub →
Create portfolio summary → Prepare interview walkthrough → Optional LinkedIn post
```

## Shared platform foundation

The shared platform is infrastructure for the projects, not a replacement for any numbered project.

## Confirmed Project 1 environment

- Physical host: Windows 11 Pro, build 26200, device name `kash`.
- CPU: Intel Core i7-14700K.
- Memory: 32 GB RAM.
- GPU: NVIDIA GeForce RTX 5070 Ti with 16 GB VRAM.
- Storage: approximately 175 GB free on the system volume at the start of Project 1.
- Existing virtualization: Ubuntu VM in VMware Workstation.
- Docker, Git, and GitHub CLI are installed; Docker is running.
- GitHub account: `ashimcode`.
- Repository: [ashimcode/cybr-projects](https://github.com/ashimcode/cybr-projects), public, default branch `main`.
- Initial deployment preference: local-only.

The recommended Project 1 design is hybrid: VMware provides isolated full lab machines, while Docker provides reproducible Elastic, OpenClaw, and Graphiti services. A dedicated Windows lab VM is preferred before simulation begins.

### Co-located OpenClaw execution model

OpenClaw will be built, tested, and operated inside the shared project container so that automation definitions, scripts, test output, and documentation can be versioned together under the workspace.

The initial execution boundary is:

```text
Engineering workflow
   │ builds, tests, and documents
   ▼
OpenClaw runtime
   │ runs approved workflows
   ├── project scripts and verification checks
   ├── sanitized evidence collection
   └── Graphiti memory integration
           │
           ▼
CYBR Projects workspace and Git history
```

Container controls will include:

- Mount only the required `CYBR Projects` workspace.
- Keep credentials outside source control and inject them through approved environment or secret mechanisms.
- Use non-root execution where supported.
- Restrict network access to documented destinations and lab systems.
- Require explicit approval for destructive actions, external publishing, or actions outside the authorized lab.
- Record automation inputs, outputs, timestamps, tool versions, and failures.
- Keep generated evidence and logs separated from source code until they pass sanitization review.
- Pin or record dependency versions and rebuild the container reproducibly.
- Add health checks and a cleanup procedure for every long-running service.

The exact container image, runtime, exposed ports, mounts, and Graphiti deployment mode will be recorded in the shared platform documentation before implementation begins.

### Documentation voice standard

Every public-facing commit and document should be technically credible without being unnecessarily difficult to understand. The required pattern is:

1. State the outcome or decision.
2. Explain the technical reason.
3. Define unfamiliar terms when first used.
4. Identify evidence or verification.
5. Record limitations, assumptions, and next steps.

Commit messages should describe the engineering change clearly, such as `docs: define Project 1 telemetry architecture`, rather than using vague messages such as `update files`.

### OpenClaw automation

OpenClaw will be used for repeatable workflow automation such as:

- environment and dependency checks;
- lab startup and shutdown procedures;
- log collection and evidence packaging;
- test execution and verification checks;
- report and README generation helpers;
- Git quality checks and project completion checklists.

Every automation will document its inputs, outputs, permissions, safety checks, and rollback or cleanup behavior.

### Graphiti memory

Graphiti will store durable project knowledge, including:

- project components and relationships;
- architecture decisions and their rationale;
- commands, configurations, and version assumptions;
- investigation findings and verified indicators;
- lessons learned and reusable detections;
- dependencies between projects.

Secrets and unnecessary personal data will not be stored in memory. Each project will have a documented memory namespace or equivalent logical boundary.

## Initial execution plan

### Stage 0 — Shared repository and lab foundation

**Deliverables**

- Git repository initialized in the workspace root.
- Root README, security policy, contribution guidance, and secret-handling rules.
- Project naming and folder conventions.
- OpenClaw automation registry and safe execution conventions.
- Graphiti memory schema and project relationship model.
- Baseline `.gitignore` and sanitized evidence policy.

**Exit gate**

The repository structure, automation boundary, memory model, and lab safety rules are reviewed and verified before Project 1 begins.

### Project 1 — Home SIEM & Investigation Write-Up

**Folder:** `01-Home-SIEM-Investigation-Write-Up`

**Outcome:** Build a small SOC lab that collects Sysmon and Windows event telemetry, ingests it into Elastic Stack or Microsoft Sentinel, performs controlled attack simulations, and produces an evidence-backed investigation report.

**Primary deliverables**

- Architecture diagram and prerequisites.
- Sysmon and event collection configuration.
- SIEM ingestion and dashboard configuration.
- Safe simulation plan and test evidence.
- Detection and investigation notes.
- Incident report, hardening recommendations, and README.
- Three quantified resume bullets.

**OpenClaw role**

- Validate prerequisites.
- Start and stop lab services.
- Run controlled test cases.
- Collect sanitized evidence.
- Generate a verification checklist.

**Graphiti role**

- Record the lab topology, data flows, detection relationships, investigation timeline, and lessons learned.

**Exit gate**

Telemetry is visible in the SIEM, at least one controlled test is investigated end to end, the report is complete, and the user explicitly declares Project 1 complete.

### Project 2 — Portfolio Site & Lab Hub

**Folder:** `02-Portfolio-Site-Lab-Hub`

**Outcome:** Build a professional site that presents the projects, architecture diagrams, sanitized evidence, reports, skills, and project progression.

**Primary deliverables**

- Responsive HTML/CSS site.
- Project index and individual project pages.
- Secure handling of screenshots and evidence.
- Build and link validation.
- Deployment plan for GitHub Pages or Vercel.

**OpenClaw role**

- Run local build and link checks.
- Validate that no secrets or private evidence are included.
- Prepare deployment verification steps.

**Graphiti role**

- Relate portfolio pages to project deliverables, tools, techniques, and verified outcomes.

**Exit gate**

The site builds successfully, all published evidence is sanitized, project links work, and the user explicitly declares Project 2 complete.

### Project 3 — Phishing Email Header Analysis

**Folder:** `03-Phishing-Email-Header-Analysis`

Build a Python header parser, validate SPF/DKIM/DMARC results, extract indicators, and produce a repeatable triage report.

### Project 4 — Honeypot & Live Attacker Geo-Dashboard

**Folder:** `04-Honeypot-Live-Attacker-Geo-Dashboard`

Deploy Cowrie in an isolated VPS or lab environment, capture SSH activity, enrich authorized telemetry with geolocation, and present a dashboard.

### Project 5 — Cloud Misconfiguration Hunt & Remediation

**Folder:** `05-Cloud-Misconfiguration-Hunt-Remediation`

Audit intentionally scoped cloud resources with Prowler, document findings, and create Terraform-based remediation with validation.

### Project 6 — Least-Privileged Cloud IAM Design

**Folder:** `06-Least-Privileged-Cloud-IAM-Design`

Design and test least-privilege AWS IAM or Azure Entra ID roles, policies, and authorization rationale.

### Project 7 — GRC Audit, Gap Assessment & Risk Register

**Folder:** `07-GRC-Audit-Gap-Assessment-Risk-Register`

Map a defined environment to NIST CSF 2.0 or ISO 27001, create a risk register, and produce a prioritized remediation roadmap.

### Project 8 — Network Traffic Analysis & PCAP Hunting

**Folder:** `08-Network-Traffic-Analysis-PCAP-Hunting`

Use Wireshark and Zeek to identify beaconing, DNS tunneling indicators, and actionable IOCs in authorized packet captures.

### Project 9 — Incident Response Playbook & Tabletop Exercise

**Folder:** `09-Incident-Response-Playbook-Tabletop`

Create a NIST-aligned incident response playbook and run a documented tabletop exercise covering containment, eradication, and recovery.

### Project 10 — Active Directory Attack & Defend Lab

**Folder:** `10-Active-Directory-Attack-Defend-Lab`

Build an isolated AD lab, generate authorized attack telemetry, and implement Sysmon, PowerShell logging, and GPO hardening.

### Project 11 — OAuth Consent Phishing & Entra ID Hardening

**Folder:** `11-OAuth-Consent-Phishing-Entra-Hardening`

Model a consent-phishing scenario in a controlled tenant, detect suspicious grants, and implement administrative consent controls.

### Project 12 — Detection-as-Code CI/CD Pipeline

**Folder:** `12-Detection-as-Code-CICD`

Create a GitHub-based pipeline that validates Sigma rules, runs tests, and packages approved detections for deployment.

### Project 13 — STIX/TAXII Threat Intelligence Automation

**Folder:** `13-STIX-TAXII-Threat-Intel-Automation`

Ingest authorized feeds, normalize intelligence, connect related entities in Graphiti, and generate local intelligence summaries.

### Project 14 — SOAR Incident Response Automation

**Folder:** `14-SOAR-Incident-Response-Automation`

Build a controlled workflow for enrichment, ticket creation, and simulated host isolation with explicit approval and rollback safeguards.

### Project 15 — Custom Vulnerability Scanner

**Folder:** `15-Custom-Vulnerability-Scanner`

Build a scoped Python scanner, map findings to CVE data, and generate an HTML report for authorized targets.

### Project 16 — Production Detection Rule Contribution

**Folder:** `16-Sigma-Production-Detection-Contribution`

Create and validate a Sigma rule for a documented detection gap and prepare an upstream contribution.

### Project 17 — Malware Analysis & Detection Rule Creation

**Folder:** `17-Malware-Analysis-Detection-Rules`

Use an isolated REMnux or equivalent lab for static and dynamic analysis, then create YARA and endpoint detections from observed behavior.

### Project 18 — LLM Prompt Injection Red-Team Assessment

**Folder:** `18-LLM-Prompt-Injection-Assessment`

Assess an authorized LLM application with injection probes, map findings to OWASP guidance, and implement guardrail improvements.

### Project 19 — Open-Source Security Utility

**Folder:** `19-Open-Source-Security-Utility`

Build, test, document, and publish a security-focused Python or Go CLI utility with a reproducible release process.

### Project 20 — Responsible Disclosure & CVE Discovery Workflow

**Folder:** `20-Responsible-Disclosure-CVE-Discovery`

Create a responsible vulnerability research workflow using an authorized target, produce a professional advisory draft, and document disclosure handling.

## Project completion record

For every project, the final README will include:

- objective and scope;
- architecture and data-flow diagram;
- applicable OSI layers and protocol/data-flow mapping;
- environment and version matrix;
- implementation and configuration details;
- verification evidence;
- security and safety boundaries;
- investigation or test results;
- hardening or remediation decisions;
- OpenClaw automation map;
- Graphiti memory map;
- lessons learned;
- resume bullets;
- future improvements;
- photos and/or video evidence with captions and sanitization notes;
- interviewer walkthrough and LinkedIn-ready summary;
- explicit completion status.

## Immediate next step

Review and approve the Project 1 Phase 1 architecture and prerequisites. After approval, we will decide how to provision the dedicated Windows lab VM, confirm the VMware network boundary, and then move to Phase 2 setup commands.
