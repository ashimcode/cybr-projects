# Project 1 prerequisite audit — 2026-10-02

## Result

The local supporting runtime is available again, but Project 1 must remain outside Windows/Sysmon telemetry validation. A dedicated Windows lab VM, rollback point, and source-to-SIEM collector path are still not verified.

## Current verification

| Component | Observation | Consequence |
|---|---|---|
| Docker runtime | Docker Server `29.8.1` became available after the local desktop runtime was started | Local supporting containers can be checked without using the daily host as a telemetry endpoint |
| Splunk HEC | `127.0.0.1:8088/services/collector/health` returned `HEC is healthy` | The receiving boundary is available; endpoint telemetry is still unverified |
| Graphiti | Local health endpoint reported configured status with no service error | Sanitized project-memory mirroring is available when the runtime write succeeds |
| Hyper-V | Hyper-V management cmdlets are available | No dedicated Windows guest was present to use as the endpoint |
| VMware control path | No runnable `vmrun` or VMware Workstation executable was found | Existing VM definitions cannot be treated as a verified rollback-capable lab |
| Windows installation media | No Windows ISO or VHD was found in the checked lab locations | A dedicated Windows VM cannot be provisioned yet |

## Safety interpretation

No Windows Event Log or Sysmon data was collected from the personal host. The synthetic fixture and Splunk HEC acceptance record remain the only Project 1 telemetry evidence. Existing unrelated host-shaped records in local Splunk remain excluded from the project evidence boundary.

## Phase 2 entry gate

Phase 2 remains closed until a dedicated Windows VM is available, its network mode and rollback point are recorded, and the collector destination is documented. The first event must be benign, labeled, and verified at the source, collector, and SIEM layers before any simulation is attempted.
