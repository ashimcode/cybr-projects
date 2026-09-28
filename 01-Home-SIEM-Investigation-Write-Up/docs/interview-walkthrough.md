# Home SIEM interview walkthrough

## 60-second explanation

I am building a local-first home SOC lab that will collect Windows Event Logs and Sysmon telemetry, send them through a documented collector path, and investigate the resulting events in a local SIEM. I chose a hybrid design: an isolated Windows lab VM for endpoint telemetry, Docker for repeatable defensive services, and OpenClaw/Graphiti for policy-checked workflow automation and sanitized project memory. I verified that the local Splunk HEC boundary is healthy by sending a clearly labeled synthetic event. I have not labeled the project complete because the dedicated Windows VM, Sysmon, and end-to-end collector path still need to be provisioned and verified.

## Three-minute technical walkthrough

1. **Objective:** build a safe, reproducible environment for turning endpoint activity into searchable investigation evidence.
2. **Boundary:** the personal Windows host is not the simulation target. Endpoint activity belongs in a dedicated Windows lab VM with a rollback point and an isolated or explicitly controlled network.
3. **Data flow:** Windows Event Logs and Sysmon produce events; a selected collector forwards them to the local SIEM; the analyst searches the events, builds a timeline, and records hardening actions.
4. **Supporting services:** Docker provides the local SIEM and supporting services. OpenClaw can run approved checks and evidence workflows, while Graphiti stores sanitized project context rather than raw private telemetry.
5. **Current evidence:** Splunk HEC responded healthy on loopback and accepted a sanitized synthetic validation event. This proves the receiving boundary only; it does not prove Windows or Sysmon ingestion.
6. **Next gate:** provision the Windows VM, install Sysmon and the selected collector, generate one controlled non-destructive event, verify it at the source and SIEM layers, and capture sanitized evidence before any simulation.

## What is intentionally not claimed

- No Windows/Sysmon telemetry has been observed end to end yet.
- No attack simulation has been run.
- No production environment or public SIEM has been involved.
- The synthetic HEC event is a service-boundary test, not an incident or detection result.

## Production improvement

After the isolated telemetry path is working, I would add least-privilege collector credentials, explicit network allow-lists, time synchronization, retention limits, dashboard access controls, detection-as-code validation, and a documented cleanup and rollback procedure.
