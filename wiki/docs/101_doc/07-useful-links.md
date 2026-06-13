# Useful Links

Keep this page as the beginner reference shelf.

## ArduPilot Basics

- [ArduPilot Copter introduction](https://ardupilot.org/copter/docs/introduction.html)
- [ArduPilot Copter flight modes](https://ardupilot.org/copter/docs/flight-modes.html)
- [ArduPilot Copter parameters](https://ardupilot.org/copter/docs/parameters.html)
- [ArduPilot Copter logs overview](https://ardupilot.org/copter/docs/common-logs.html)
- [ArduPilot onboard log message reference](https://ardupilot.org/copter/docs/logmessages.html)

## Ground Stations

- [Mission Planner documentation](https://ardupilot.org/planner/)
- [Mission Planner telemetry logs](https://ardupilot.org/planner/docs/mission-planner-telemetry-logs.html)
- [Mission Planner data log analysis](https://ardupilot.org/planner/docs/common-downloading-and-analyzing-data-logs-in-mission-planner.html)
- [QGroundControl user guide](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/)
- [QGroundControl log viewer](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/analyze_view/log_viewer.html)
- [MAVProxy documentation](https://ardupilot.org/mavproxy/index.html)

## MAVLink and Python Tools

- [MAVLink guide](https://mavlink.io/en/)
- [MAVLink common message set](https://mavlink.io/en/messages/common.html)
- [MAVLink heartbeat service](https://mavlink.io/en/services/heartbeat.html)
- [pymavlink repository](https://github.com/ArduPilot/pymavlink)

Useful local commands in this repo:

```bash
.venv/bin/mavlogdump.py --show-types logs/ArduCopter-test.tlog
.venv/bin/mavlogdump.py --types GLOBAL_POSITION_INT,GPS_RAW_INT,VFR_HUD logs/ArduCopter-test.tlog
.venv/bin/python scripts/read_log.py logs/ArduCopter-test.tlog --limit 30 -o logs/ArduCopter-test-preview.txt
```

## Airspace and Compliance

- [FAA UAS Facility Maps](https://www.faa.gov/uas/commercial_operators/uas_facility_maps)
- [FAA LAANC](https://www.faa.gov/uas/getting_started/laanc)
- [FAA Temporary Flight Restrictions](https://www.faa.gov/uas/getting_started/temporary_flight_restrictions)
- [FAA B4UFLY](https://www.faa.gov/uas/recreational_fliers/where_can_i_fly/b4ufly/)
- [FAA Remote ID](https://www.faa.gov/uas/getting_started/remote_id/)

## Project Docs

- [Drone Ecosystem 101](01-drone-ecosystem-101.md)
- [Visual Glossary](02-visual-glossary.md)
- [ArduPilot 101](03-ardupilot-101.md)
- [Logs 101: `.tlog` and `.bin`](04-logs-101.md)
- [Forensics 101](06-forensics-101.md)
- [UAV Forensics App Plan](../plans/uav-forensics-app-plan.md)
