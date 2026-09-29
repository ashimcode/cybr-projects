# Draft detection — suspicious PowerShell process creation

**Status:** Synthetic-fixture validation only  
**Telemetry assumption:** Sysmon process-creation event (Event ID 1) normalized into a searchable SIEM record  
**MITRE ATT&CK context:** T1059.001 — PowerShell

## Detection logic

Alert when all of the following are true:

1. The event represents a process-creation record.
2. The image or process name ends with `powershell.exe`.
3. The command line contains `-enc`, `-encodedcommand`, or an equivalent encoded-command flag.

This combination is intentionally narrow for the first test. Encoded PowerShell is not automatically malicious, so the alert must be enriched with the user, parent process, signer, host role, script context, and expected administrative change before an incident decision is made.

## Analyst questions

- Which user launched the process?
- What was the parent process and its command line?
- Is the host a managed administrative endpoint?
- Was the PowerShell binary signed and located in the expected system path?
- Did the process create follow-on files, network connections, or child processes?

## Validation boundary

The accompanying synthetic test verifies only the matching logic. It does not prove that Sysmon is installed, that the collector preserves the required fields, or that a live SIEM alert is generated.
