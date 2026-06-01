# Anveshan Wiki

This wiki is organized for two jobs:

- Learn the drone and ArduPilot ecosystem from first principles.
- Turn that learning into a practical UAV forensics app.

## Start Here

If you are new to drones, read the 101 docs in order:

1. [Drone Ecosystem 101](101_doc/01-drone-ecosystem-101.md)
2. [Visual Glossary](101_doc/02-visual-glossary.md)
3. [ArduPilot 101](101_doc/03-ardupilot-101.md)
4. [Logs 101: `.tlog` and `.bin`](101_doc/04-logs-101.md)
5. [Forensics 101](101_doc/05-forensics-101.md)
6. [Useful Links](101_doc/06-useful-links.md)

## App Planning

- [UAV Forensics App Plan](plans/uav-forensics-app-plan.md)

## Analyst User Flow

- [User Flow Overview](user_flow/README.md)
- [Standard Forensic Analysis Flow](user_flow/01-standard-forensic-analysis-flow.md)
- [Rule Authoring and Case Selection](user_flow/02-rule-authoring-and-case-selection.md)

## Architecture

- [Architecture Notes](architecture/README.md)
- [Initial FastAPI / MongoDB / React Architecture](architecture/01-fastapi-mongodb-react-architecture.md)

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
