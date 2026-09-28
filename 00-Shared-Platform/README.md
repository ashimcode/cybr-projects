# Shared Platform

This folder contains the reusable platform that supports the numbered projects.

## Execution model

- OpenClaw is built and operated in the shared project container.
- Graphiti provides durable project memory and relationship tracking.
- The Git repository is the source of truth for code, configuration, decisions, and sanitized evidence.

## Planned responsibilities

| Component | Responsibility |
|---|---|
| Engineering workflow | Build, test, document, and review changes |
| OpenClaw | Run approved repeatable workflows and verification tasks |
| Graphiti | Store project entities, relationships, decisions, and lessons |
| Git/GitHub | Version history, collaboration, portfolio documentation, and public release |

The exact container image, mounts, ports, dependency versions, and Graphiti deployment mode are recorded in [`documentation/runtime-baseline.md`](documentation/runtime-baseline.md). The baseline is an infrastructure check, not a claim that Project 1 telemetry has been completed.
