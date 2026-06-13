# Anveshan Wiki

This wiki is organized for two jobs:

- Learn the drone and ArduPilot ecosystem from first principles.
- Turn that learning into a practical UAV forensics app.

This folder also contains the MkDocs configuration. `docs/index.md` is the generated site
homepage; this `README.md` exists for repository browsing.

## Docs Tooling

MkDocs-related config and scripts live inside this folder:

```text
wiki/
  docs/
  mkdocs.yml
  requirements.txt
  scripts/
    build-docs.sh
    serve-docs.sh
    check-links.py
```

Local static output is written to `wiki/out/`, which is ignored by git.

Create the docs virtualenv and install dependencies:

```bash
python3 -m venv wiki/.venv
wiki/.venv/bin/python -m pip install -r wiki/requirements.txt
```

Serve the site locally:

```bash
wiki/scripts/serve-docs.sh
```

Build and validate the static site:

```bash
wiki/scripts/build-docs.sh
```

Check local Markdown links:

```bash
wiki/.venv/bin/python wiki/scripts/check-links.py
```

## Start Here

If you are new to drones, read the 101 docs in order:

1. [Drone Ecosystem 101](docs/101_doc/01-drone-ecosystem-101.md)
2. [Visual Glossary](docs/101_doc/02-visual-glossary.md)
3. [ArduPilot 101](docs/101_doc/03-ardupilot-101.md)
4. [Logs 101: `.tlog` and `.bin`](docs/101_doc/04-logs-101.md)
5. [ArduPilot Log Field Guide](docs/101_doc/05-ardupilot-log-field-guide.md)
6. [Forensics 101](docs/101_doc/06-forensics-101.md)
7. [Useful Links](docs/101_doc/07-useful-links.md)

## App Planning

- [UAV Forensics App Plan](docs/plans/uav-forensics-app-plan.md)

## Analyst User Flow

- [User Flow Overview](docs/user_flow/index.md)
- [Standard Forensic Analysis Flow](docs/user_flow/01-standard-forensic-analysis-flow.md)
- [Rule Authoring and Case Selection](docs/user_flow/02-rule-authoring-and-case-selection.md)

## Architecture

- [Architecture Notes](docs/architecture/index.md)
- [Initial FastAPI / MongoDB / React Architecture](docs/architecture/01-fastapi-mongodb-react-architecture.md)

## Agent Context

- [Agent Context Overview](../agents/README.md)
- [Project Context](../agents/project-context.md)
- [Coding Conventions](../agents/coding-conventions.md)
- [Domain Glossary](../agents/domain-glossary.md)
- [Architecture Context](../agents/architecture-context.md)
- [Testing and Quality](../agents/testing-and-quality.md)
- [Command Reference](../agents/command-reference.md)
- [Security and Forensics Rules](../agents/security-and-forensics-rules.md)

## Current Sample Evidence

The repo currently has these sample logs:

```text
logs/ArduCopter-test.tlog
logs/ArduCopter-test-preview.txt
logs/sample-arducopter.bin
logs/sample-arducopter-failsafe.bin
```

Use `scripts/read_log.py` to inspect a log:

```bash
.venv/bin/python scripts/read_log.py logs/ArduCopter-test.tlog --limit 30 -o logs/ArduCopter-test-preview.txt
```
