[CmdletBinding()]
param(
    [string]$HecUrl = $env:SPLUNK_HEC_URL,
    [string]$HecToken = $env:SPLUNK_HEC_TOKEN
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

if ([string]::IsNullOrWhiteSpace($HecUrl)) {
    throw 'Set SPLUNK_HEC_URL to the loopback HEC event endpoint before running this test.'
}

if ([string]::IsNullOrWhiteSpace($HecToken)) {
    throw 'Set SPLUNK_HEC_TOKEN in the process environment. Never place the token in source control.'
}

$event = @{
    time = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
    host = 'cybr-project1-loopback'
    source = 'cybr-projects'
    sourcetype = 'cybr:validation'
    event = @{
        test = 'hec-loopback-validation'
        status = 'passed'
        scope = 'synthetic-only'
        note = 'This event validates the local ingestion boundary; it is not Windows or Sysmon telemetry.'
    }
} | ConvertTo-Json -Depth 8

$headers = @{ Authorization = "Splunk $HecToken" }
$response = Invoke-RestMethod -Method Post -Uri $HecUrl -Headers $headers -ContentType 'application/json' -Body $event

if ($response.code -ne 0 -or $response.text -ne 'Success') {
    throw "HEC rejected the synthetic validation event: $($response | ConvertTo-Json -Compress)"
}

[pscustomobject]@{
    status = 'passed'
    endpoint = $HecUrl
    event_scope = 'synthetic-only'
    response_code = $response.code
}
