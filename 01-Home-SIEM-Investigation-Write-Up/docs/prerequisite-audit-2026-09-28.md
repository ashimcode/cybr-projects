# Project 1 prerequisite audit — 2026-09-28

## Result

The local defensive-services baseline is available, but Project 1 cannot move to Windows/Sysmon telemetry validation yet. The machine has Linux VM definitions and local SIEM/memory services; it does not currently have a verified dedicated Windows lab VM or an active VMware control path.

## Verified during this audit

| Component | Observation | Consequence |
|---|---|---|
| Splunk | Local container healthy; web interface responded on loopback | Available as a local SIEM candidate, not yet receiving Project 1 endpoint telemetry |
| Splunk data boundary | An internal search surfaced unrelated pre-existing host events in the local `main` index; they were not exported or used as evidence | A dedicated Project 1 index/source boundary is required before endpoint telemetry is enabled |
| Graphiti | Local health endpoint responded successfully | Available for sanitized project memory |
| OpenClaw autonomy | Local health endpoint reported autonomous mode and not stopped; source syntax check passed | Available for policy-checked local workflow automation |
| VMware VM definitions | Ubuntu 24.04.3 and a Kali/Debian lab VM definition are present; both are configured for NAT | Existing Linux assets can support tooling, but neither is the required Windows telemetry source |
| VMware runtime control | `vmrun` was not found and no VMware process was running during the audit | VM startup and snapshot verification remain unconfirmed |
| Windows/Sysmon | No dedicated Windows lab VM or end-to-end collector path was verified | Phase 2 must remain closed until the isolated endpoint exists |

## Security interpretation

The absence of a Windows telemetry source is a safety boundary, not a reason to simulate activity on the personal host. No attack simulation, scanning, or production-system testing was performed. The next safe action is to provision or identify a dedicated Windows lab VM, place it on an isolated or explicitly controlled VMware network, create a rollback point, and only then install Sysmon and the collector.

## Next gate

Phase 2 may begin after these items are verified:

1. A dedicated Windows lab VM is identified and can be started without the personal host becoming the test target.
2. The VM network mode and IP plan are recorded.
3. A snapshot or rollback point exists.
4. The selected collector and destination ports are documented.
5. The first simulation is limited to an owned lab endpoint and has a cleanup procedure.
