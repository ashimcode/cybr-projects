# Phase 2 ingestion-boundary check

**Validation date:** 2026-10-02 recheck (original acceptance recorded on 2026-09-28)
**Scope:** local Splunk HTTP Event Collector (HEC) acceptance only

## Verified

The local Splunk HEC endpoint responded healthy on the loopback interface, and a sanitized synthetic validation event was accepted with `Success` / code `0`.

| Check | Result | What it proves |
|---|---|---|
| `http://127.0.0.1:8088/services/collector/health` | HTTP 200; `HEC is healthy` | The local HEC listener is reachable |
| Synthetic event POST to `/services/collector/event` | `Success`; code `0` | Splunk accepted a test event using the configured local HEC credential |
| Windows/Sysmon event observed | **Not performed** | The dedicated Windows endpoint and collector path are still missing |

## Synthetic event scope

The accepted event was intentionally labeled `cybr:validation` and stated that it was synthetic-only. It contained no personal data, production indicators, credentials, or raw endpoint telemetry. The test validates the receiving boundary; it is not evidence that Windows Event Logs or Sysmon are flowing.

## Local data boundary

An internal search also surfaced older, unrelated Windows-shaped events already present in the local Splunk `main` index. Those records are not Project 1 evidence, were not exported, and must not be used to imply that the isolated endpoint pipeline is complete. Project 1 evidence is limited to explicitly labeled synthetic events until a dedicated endpoint and collector path exists.

Before Phase 2 opens, use a dedicated project index or an equivalently strict source boundary, document its retention and access scope, and verify that searches are limited to the project labels. Do not mix personal-host records with lab evidence.

## Reproducible check

The repository includes [`scripts/send-synthetic-hec-event.ps1`](../scripts/send-synthetic-hec-event.ps1). Set `SPLUNK_HEC_URL` and `SPLUNK_HEC_TOKEN` only in the current process environment, then run the script from the project folder. The token is never written to the repository or printed by the script.

## Next implementation step

After a dedicated Windows lab VM is available:

1. Install and configure Sysmon inside the isolated VM.
2. Select and document Elastic Agent or Winlogbeat as the collector.
3. Send one controlled, non-destructive Windows event through the documented path.
4. Confirm the event at the source, collector, and Splunk/selected SIEM search layer.
5. Capture sanitized evidence and record the event fields before beginning any simulation.
