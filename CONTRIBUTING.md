# Contribution and Publishing Workflow

This repository is a public cybersecurity engineering portfolio. `main` must remain readable, reproducible, and safe to publish.

## Change workflow

Use the following sequence for project work:

```text
Build → Verify → Capture evidence → Sanitize → Review → Commit → Push → Portfolio update
```

Do not describe a project as complete until its verification evidence, limitations, and completion gate are recorded.

## Branches

- Use `main` for reviewed, publishable work.
- Use a focused branch for substantial changes, such as `project-1/phase-1-architecture` or `ethernet/validation-evidence`.
- Keep one logical change per pull request and avoid force-pushing shared history.

## Commit messages

Use an imperative, outcome-focused Conventional Commit style:

```text
type(scope): clear engineering outcome
```

Examples:

- `docs(project-1): define SIEM telemetry architecture`
- `docs(ethernet): add VLAN validation evidence`
- `security(repo): tighten public publishing boundary`
- `test(project-1): verify telemetry prerequisites`
- `chore(repo): update sanitization rules`

Recommended types are `feat`, `fix`, `docs`, `test`, `security`, `refactor`, and `chore`.

## Pre-push review

Before pushing, verify:

1. `git status --short` contains only intended files.
2. `git diff --check` reports no whitespace errors.
3. Relevant tests, validation commands, or lab checks have run.
4. Evidence is sanitized and clearly captioned.
5. No credentials, tokens, private keys, personal data, proprietary data, raw logs, or unapproved offensive artifacts are included.
6. Private career materials remain outside the public repository.
7. The README, project status, limitations, and résumé bullets match the evidence actually produced.

## Safety boundary

All simulations, scanning, malware analysis, and testing remain limited to owned, isolated, or explicitly authorized environments. If a result is planned but not verified, label it as planned or pending rather than presenting it as completed.
