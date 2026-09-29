# Phase 2 setup plan — controlled endpoint telemetry

## Entry condition

Phase 2 is not open yet. The receiving boundary is available, but the isolated endpoint and rollback boundary are not verified. The only event accepted so far was a sanitized synthetic HEC test.

## Required setup sequence

1. **Endpoint boundary** — identify or create a dedicated Windows lab VM; confirm it is not the daily-use host.
2. **Rollback** — create a clean VM snapshot before installing telemetry components.
3. **Network** — record the VM adapter mode, subnet, address, DNS behavior, and only the required SIEM destination port.
4. **Data boundary** — create or select a dedicated Project 1 index/source boundary; confirm that unrelated personal-host records are excluded from searches and exports.
5. **Windows logging** — confirm the relevant Windows audit policies and event channels are enabled.
6. **Sysmon** — install Sysmon in the lab VM with a reviewed, minimal configuration and record the version and configuration hash.
7. **Collector decision** — select Elastic Agent or Winlogbeat for the first implementation; document why and record the version.
8. **Receiver** — use the local SIEM receiver already validated by the HEC boundary test, or document a deliberate Elastic deployment before sending endpoint data.
9. **Source-to-SIEM test** — generate one non-destructive event, confirm it at the Windows source, collector, and SIEM search layers, and save sanitized output.
10. **Cleanup** — stop the collector, preserve the evidence index, and record rollback steps before any controlled simulation.

## First safe validation event

The first event should be a benign administrative action performed inside the lab VM, such as starting and stopping a documented test service or creating a clearly labeled temporary file. The event must be selected so its source, timestamp, user context, process, and destination fields can be explained without using offensive tooling.

## Exit evidence

Phase 2 can close only when the repository contains:

- a sanitized VM and network configuration record;
- the Sysmon version and configuration reference;
- the collector configuration template with credentials omitted;
- source, collector, and SIEM evidence for the same event;
- a verification checklist and cleanup procedure;
- a clear statement of what remains unverified.

Until those artifacts exist, the project must not claim Windows/Sysmon ingestion or a completed SIEM investigation.
