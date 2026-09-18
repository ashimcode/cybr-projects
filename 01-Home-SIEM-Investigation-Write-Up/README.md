# Project 1 — Home SIEM & Investigation Write-Up

**Status:** Phase 1 — Architecture and prerequisites planning

**Documentation standard:** This project is written as professional SOC or security-engineering documentation, with plain-language explanations so that a student or interviewer can understand the purpose, data flow, evidence, and decisions.

## Objective

Build a controlled home SOC lab that collects Windows and Sysmon telemetry, ingests it into a local SIEM, performs safe attack simulations, investigates the resulting activity, and produces a professional incident report suitable for GitHub, interviews, and a future LinkedIn feature.

## Recommended architecture

The current recommendation is a hybrid design:

- VMware Workstation provides isolated full virtual machines.
- A dedicated Windows lab VM produces endpoint telemetry.
- An Ubuntu VM can host supporting Linux tooling.
- Docker runs reproducible services such as Elasticsearch, Kibana, OpenClaw, and Graphiti.
- The SIEM and automation services remain separated by service boundaries even when they share a host.

```text
┌─────────────────────────────────────────────────────────────────────┐
│ Windows 11 Pro physical host: kash                                  │
│                                                                     │
│  ┌──────────────────────────┐      ┌─────────────────────────────┐  │
│  │ VMware lab network       │      │ Docker service environment  │  │
│  │                          │      │                             │  │
│  │  Windows lab VM          │─────▶│  Elastic / Kibana           │  │
│  │  Sysmon + Event Logs     │      │  OpenClaw workflow           │  │
│  │                          │      │  Graphiti memory             │  │
│  │  Ubuntu lab VM           │      │                             │  │
│  │  supporting tools        │      └──────────────┬──────────────┘  │
│  └──────────────────────────┘                     │                 │
│                                                   ▼                 │
│                                  Analyst dashboards and reports      │
└─────────────────────────────────────────────────────────────────────┘
```

## Current environment baseline

- Physical host: Windows 11 Pro, build 26200
- CPU: Intel Core i7-14700K
- Memory: 32 GB RAM
- GPU: NVIDIA GeForce RTX 5070 Ti, 16 GB
- Storage: approximately 175 GB free on the system volume
- Existing virtualization: Ubuntu VM in VMware Workstation
- Docker: installed and available
- Cloud: local-only preferred for the initial project
- Repository: intended to become a public GitHub portfolio repository after review

## Why local-only first

Cloud is not required for Project 1. A local lab avoids cloud costs, keeps telemetry private, and makes the project reproducible for interviews. Cloud can be introduced later when a project specifically teaches cloud identity, logging, or misconfiguration management.

## Phase gates

- [ ] Phase 1 — Architecture and prerequisites approved
- [ ] Phase 2 — Environment setup and scripting verified
- [ ] Phase 3 — Safe simulation and telemetry verified
- [ ] Phase 4 — Investigation, hardening, and report completed
- [ ] Phase 5 — Portfolio, resume, and interview material completed
- [ ] User explicitly declares Project 1 complete

## Learning outcomes

By completion, the learner should be able to explain the telemetry path from Windows activity through Sysmon and the collector into the SIEM, search for evidence, distinguish baseline behavior from simulated malicious activity, explain a detection, document an incident timeline, and rebuild the lab from the repository.

## Folder guide

- `architecture/` — diagrams and data-flow models
- `configs/` — sanitized configuration templates
- `detections/` — detection rules and test cases
- `docs/` — phase notes, OSI analysis, and learning checkpoints
- `evidence/` — sanitized screenshots, videos, and logs
- `reports/` — investigation and executive reports
- `scripts/` — modular setup and verification scripts
- `automation/` — OpenClaw workflow documentation and definitions
- `memory/` — Graphiti entity and relationship documentation
- `tests/` — repeatable checks
