# Phase 1 — Architecture and Prerequisites

## Scope

This phase defines the lab boundary, data flow, technology choices, safety controls, and prerequisites. No attack simulation or production-system testing is in scope.

## Technology decision

**Initial SIEM recommendation:** Elastic Stack deployed locally with Docker.

**Reasoning:** It is reproducible, works with the existing Docker installation, avoids cloud cost, supports Windows/Sysmon telemetry, and produces a strong portfolio demonstration. Microsoft Sentinel remains a future alternative when the roadmap reaches cloud projects.

## Linux distribution decision

**Project 1 recommendation:** use Ubuntu for the Linux lab and service host, not Kali Linux.

Ubuntu is a general-purpose Linux distribution that is better suited for hosting Docker, Elastic services, OpenClaw, Graphiti, and supporting administration. It keeps the environment focused on defensive engineering and makes the service dependencies easier to understand.

Kali Linux is a security-testing distribution that bundles many offensive-security tools. It is useful for later, isolated exercises such as authorized penetration testing, but it is unnecessary for the first SIEM project and would add tools and complexity that the SIEM does not need.

The intended Project 1 layout is therefore:

- **Windows lab VM:** monitored endpoint running Windows event logging and Sysmon.
- **Ubuntu VM:** Linux administration, supporting tools, and potentially the Docker service host.
- **Kali VM:** not required for Project 1; consider it only for a later project with a clearly scoped offensive-testing need.

This is not an either/or decision between Windows and Ubuntu. Project 1 benefits from both: Windows generates the endpoint telemetry, while Ubuntu can host or support the defensive tooling.

## VMware and Docker roles

| Technology | Role | Why |
|---|---|---|
| VMware Workstation | Full lab machines | Separate operating systems, kernels, snapshots, and isolated networks |
| Docker | SIEM and automation services | Lightweight, reproducible service deployment and versioned configuration |
| Ubuntu VM | Linux tooling host | Existing lab asset for supporting tools and administration |
| Windows lab VM | Telemetry source | Dedicated Sysmon and Windows event source for safe testing |

The existing Ubuntu VM is useful, but a dedicated Windows lab VM is still recommended before attack simulation. Using the personal Windows host as the target would mix lab activity with personal computing and is not the preferred safety boundary.

## OSI model scope

| Layer | Project 1 focus |
|---|---|
| 1 — Physical | Host hardware and virtual machine resources |
| 3 — Network | Lab IP addressing, DNS, routing, and network isolation |
| 4 — Transport | Collector and SIEM service connections, ports, and flow behavior |
| 7 — Application | Windows events, Sysmon, PowerShell, authentication, Elastic, and Kibana |

Layers 2, 5, and 6 will be documented when the evidence or protocol behavior makes them relevant.

## Security controls

- Host-only or otherwise isolated VMware networking for the lab.
- No inbound exposure of SIEM dashboards to the public internet.
- Dedicated lab accounts and non-production credentials.
- VM snapshots before simulation exercises.
- Explicit target verification before each test.
- Secret-free configuration templates.
- Version-pinned or version-recorded services.
- Sanitized evidence before GitHub publication.
- Cleanup and rollback procedure for every test.

## Open decisions before Phase 2

- [ ] Confirm VMware network mode and lab IP plan.
- [ ] Obtain or create a dedicated Windows lab VM.
- [ ] Choose the telemetry collector: Elastic Agent or Winlogbeat.
- [ ] Select and document a Sysmon configuration source.
- [ ] Confirm the Docker service resource limits.
- [ ] Define the OpenClaw and Graphiti connection boundary.
- [ ] Define the first safe simulation test.

## Phase 1 learning checkpoint

Before Phase 2, explain in your own words:

1. Why VMware is being used for the lab endpoint.
2. Why Docker is being used for SIEM and automation services.
3. How a Sysmon event reaches Kibana.
4. Which OSI layers are involved.
5. Why local-only is safer and simpler for this project.
