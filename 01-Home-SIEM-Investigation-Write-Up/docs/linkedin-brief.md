# Home SIEM LinkedIn brief — draft only

This is a future project draft. Do not publish it as a completed SIEM project until Windows/Sysmon telemetry is observed end to end and the evidence is sanitized.

## Current progress note

I’m building a local-first Home SIEM lab around a simple question: can I collect endpoint activity, investigate it, and explain the evidence without mixing lab behavior into my daily-use computer?

The architecture separates the future Windows telemetry VM from the local defensive services. Docker hosts the repeatable service layer, Splunk is being evaluated as the local SIEM, and OpenClaw/Graphiti provide policy-checked workflow automation and sanitized project memory.

The first boundary check passed: Splunk HEC accepted a sanitized synthetic event on loopback. That result proves the receiver is available, not that Windows or Sysmon telemetry is complete. The next milestone is provisioning the isolated endpoint, installing Sysmon and a collector, and verifying one controlled event from source to SIEM.

Repository: https://github.com/ashimcode/cybr-projects

## Publishing checklist

- Confirm the dedicated Windows lab VM and rollback boundary.
- Verify a real Windows/Sysmon event at source, collector, and SIEM layers.
- Capture a sanitized dashboard or search result.
- Explain the investigation question, result, limitation, and hardening action.
- Link the repository only after the evidence is reproducible.
