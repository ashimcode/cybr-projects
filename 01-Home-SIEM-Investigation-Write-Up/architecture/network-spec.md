# Project 1 Network Specification

**Status:** Phase 1 planning; not yet validated in the lab

## Scope

Project 1 will build a local home SOC lab that collects Windows and Sysmon telemetry, sends the events to a local SIEM, investigates controlled activity, and records the result in an evidence-backed incident report.

The initial design is local-only. Cloud services are not required for the first project and will not be introduced unless a later project has a specific identity, logging, or cloud-security objective.

## Proposed architecture

```text
Windows lab VM
  ├─ Windows Event Logs
  └─ Sysmon telemetry
          │
          ▼
Collector and parsing layer
          │
          ▼
Elastic Stack / Kibana SIEM
          ├─ dashboards and searches
          ├─ detection validation
          └─ investigation evidence

Supporting services on the isolated lab host:
  Docker → Elastic services, OpenClaw workflows, and Graphiti memory
  Ubuntu VM → supporting Linux tools
```

The exact collector, ports, container image, dependency versions, and network adapters must be recorded after the environment is provisioned. This document describes the intended data flow, not a completed deployment.

## Trust boundaries

| Boundary | Purpose | Required control |
|---|---|---|
| Personal Windows host to lab environment | Prevent the simulation from changing the daily-use host | Use an isolated Windows lab VM and documented VMware networking |
| Windows lab VM to SIEM services | Move telemetry without exposing the lab unnecessarily | Restrict connectivity to documented lab destinations and required ports |
| SIEM services to OpenClaw and Graphiti | Separate analysis automation from telemetry storage and memory | Use least privilege, explicit mounts, documented permissions, and non-root execution where supported |
| Raw evidence to public repository | Prevent private telemetry or identifiers from being published | Sanitize screenshots, logs, hostnames, IP addresses, usernames, and tenant details before commit |

## Planned telemetry path

1. A controlled action occurs on the Windows lab VM.
2. Windows Event Logs and Sysmon record the relevant activity.
3. A documented collector forwards the events to the local SIEM.
4. Kibana searches or dashboards expose the events for investigation.
5. The analyst records the timeline, relevant fields, detection logic, and hardening recommendation.
6. Only sanitized evidence is copied into the project repository.

The path is considered verified only after an event is observed at the source, received by the collector, searchable in the SIEM, and connected to an investigation record.

## Phase 1 prerequisites

- VMware Workstation with an isolated lab network.
- A dedicated Windows lab VM for endpoint telemetry.
- Existing Ubuntu VM available for supporting Linux tooling.
- Docker installed and available for reproducible services.
- Elastic Stack or the selected local SIEM version recorded before setup.
- A snapshot or rollback point before installing telemetry components.
- A sanitized evidence directory and a verification checklist.
- A documented cleanup procedure for services, logs, and VM snapshots.

## Validation gates

Phase 1 is ready to close when:

- the topology and data flow are reviewed;
- the lab operating system, virtualization boundary, and service plan are recorded;
- required ports and trust boundaries are documented;
- the rollback and cleanup procedures are written;
- the first setup commands have not been run against the personal host;
- the user can explain the planned telemetry path and its security assumptions.

Later phases must provide real telemetry, controlled test activity, investigation evidence, and hardening results. This planning file does not claim those results yet.
