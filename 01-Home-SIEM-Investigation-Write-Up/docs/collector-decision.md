# Collector decision record

**Status:** decision pending the dedicated Windows endpoint and receiver boundary

## What has been verified

The local Splunk HEC receiver accepts a labeled synthetic event. That validates an ingestion boundary only; it does not validate a Windows collector, Sysmon event normalization, or a source-to-SIEM path.

## Candidate paths

| Candidate | Strength | Additional dependency | Current status |
|---|---|---|---|
| Elastic Agent → Elasticsearch | Native Windows integration and ECS-aligned fields | Elasticsearch/Kibana deployment and an enrolled agent | Candidate if the Elastic service layer is selected |
| Winlogbeat → Logstash/Elasticsearch | Focused Windows event shipping with explicit configuration | Logstash or another compatible receiver | Candidate; not installed or tested |
| Splunk Universal Forwarder → Splunk indexer | Native fit for a Splunk-centered investigation | Splunk receiving port and a dedicated project index | Candidate; HEC acceptance does not prove this path |

## Selection rule

Select the path only after the Windows VM, rollback point, network boundary, and destination are recorded. The first implementation must use one collector, one dedicated Project 1 source/index, and one benign event that can be verified at the Windows source, collector, and SIEM layers.

No collector is currently described as installed, live, or production-ready. Credentials, enrollment tokens, private endpoints, and machine-specific paths must remain outside the repository.
