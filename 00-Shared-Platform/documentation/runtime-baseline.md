# Local runtime baseline

**Verification date:** 2026-09-28

This note records what is actually available on the local development host. It is intentionally separate from the Project 1 completion claim: a running service is not the same as a verified Windows/Sysmon telemetry pipeline.

## Verified services

| Service | Local endpoint | Observed state | Portfolio implication |
|---|---|---|---|
| OpenClaw autonomy runtime | `http://127.0.0.1:8787/health` | Healthy at the 2026-09-28 audit; autonomous mode; not stopped | Can run policy-checked local workflows and write sanitized audit events |
| Graphiti memory | `http://127.0.0.1:8090/health` | Healthy; Ollama provider; FalkorDB graph backend | Available for durable, non-secret project context |
| Splunk | local container; web `8000`, HEC `8088` | Container healthy; Splunk 10.4.3 image | Existing local SIEM candidate; not yet connected to the Project 1 Windows endpoint |
| Neo4j / FalkorDB | local container services | Running as Graphiti dependencies | Supporting memory infrastructure, not security telemetry evidence |

Docker Engine 29.7.2 is available. The local compose port bindings were tightened on 2026-09-28 and now resolve to `127.0.0.1` for Splunk, Graphiti, Neo4j, and FalkorDB. Before any Windows telemetry is connected, still verify the host firewall and VMware network mode.

## Missing completion prerequisites

- `vmrun` and a running VMware Workstation process were not present during this check.
- A dedicated Windows lab VM with Sysmon was not verified.
- No collector-to-SIEM event path has been verified end to end.
- No attack simulation or production-system testing was performed.

## Decision

Keep Elastic Stack as the documented Project 1 recommendation until the collector and service boundary are deliberately selected. The existing Splunk container may be evaluated as a local alternative, but its presence alone does not close Phase 1 or justify a public “SIEM completed” claim.

## Memory safety

OpenClaw/Graphiti memory may store project decisions, evidence references, and lessons learned. It must not store credentials, tokens, private keys, raw private telemetry, or unnecessary personal data. The autonomy runtime redacts sensitive-looking keys before sending audit events to Graphiti.
