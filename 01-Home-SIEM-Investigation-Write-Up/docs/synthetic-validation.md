# Synthetic validation record

**Status:** Verified synthetic milestone; not Windows/Sysmon completion  
**Scope:** detection logic and local Splunk HEC receiver boundary

## Detection fixture

The checked-in fixture at [`tests/fixtures/suspicious-powershell-events.json`](../tests/fixtures/suspicious-powershell-events.json) contains two labeled cases:

1. an encoded PowerShell command that should match;
2. a documented inventory script that should not match.

Run it from the repository root:

```powershell
node 01-Home-SIEM-Investigation-Write-Up/tests/test_synthetic_detection.mjs
```

Expected output:

```text
synthetic detection fixture: passed (2 cases)
```

## Receiver boundary

The local Splunk HEC accepted a clearly labeled synthetic validation event with `Success` / code `0` on 2026-10-02; the original acceptance was recorded on 2026-09-28. The reusable sender is [`scripts/send-synthetic-hec-event.ps1`](../scripts/send-synthetic-hec-event.ps1); it reads the HEC URL and token only from process environment variables.

## Boundary statement

This record does not claim a Windows endpoint, Sysmon installation, collector preservation, live SIEM alert, attack simulation, or incident investigation. Those gates require a dedicated Windows VM, a rollback point, a dedicated project data boundary, and source-to-SIEM evidence.
