# Phase 2 ingestion-boundary check

**Validation date:** 2026-09-28  
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

## Next implementation step

After a dedicated Windows lab VM is available:

1. Install and configure Sysmon inside the isolated VM.
2. Select and document Elastic Agent or Winlogbeat as the collector.
3. Send one controlled, non-destructive Windows event through the documented path.
4. Confirm the event at the source, collector, and Splunk/selected SIEM search layer.
5. Capture sanitized evidence and record the event fields before beginning any simulation.
