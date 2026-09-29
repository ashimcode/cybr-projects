# Detection drafts

This directory contains detection logic prepared for the Home SIEM project. Draft rules are tested against synthetic fixtures first and remain unvalidated against live Windows/Sysmon telemetry until the isolated endpoint and collector path are available.

## Current draft

- [`suspicious-powershell-process.md`](suspicious-powershell-process.md) — identifies a Sysmon process-creation event where PowerShell uses an encoded-command flag.

The rule is an investigation starting point, not a production detection. A live validation must confirm field names, collector normalization, expected administrative activity, false positives, and the resulting analyst workflow.
