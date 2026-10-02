# Project 1 Baseline Decision

## Decisions

- The initial Project 1 deployment will be local-only.
- VMware Workstation will provide isolated lab machines.
- Docker will provide reproducible SIEM and automation services.
- Elastic Stack is the initial SIEM recommendation.
- A dedicated Windows lab VM is preferred over using the personal Windows host as the simulation target.
- The repository is intended to be public after evidence and secret review.

## Rationale

The lab should monitor disk usage and remove unnecessary VM snapshots or logs as part of routine maintenance.

## Revisit conditions

These decisions may change if the Windows VM cannot be provisioned safely, Docker resource limits are insufficient, or a later project requires a cloud-native service.
