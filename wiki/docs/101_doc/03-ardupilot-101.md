# ArduPilot 101

ArduPilot is an open-source autopilot software platform. It can run different vehicle firmwares, including Copter, Plane, Rover, and Sub.

For this forensics project, start with ArduCopter because the first target is a simple drone flight path and no-fly-zone check.

## What ArduPilot Does

ArduPilot:

- Reads sensors.
- Estimates attitude and position.
- Runs flight modes.
- Controls motors and servos.
- Communicates with a ground station over MAVLink.
- Logs flight data onboard.
- Supports missions, geofences, failsafes, and return-to-launch behavior.

## ArduPilot Ecosystem

```mermaid
flowchart LR
    Firmware[ArduPilot Firmware<br/>Copter / Plane / Rover / Sub]
    FC[Flight Controller Board]
    MAVLink[MAVLink Messages]
    GCS[Ground Station<br/>Mission Planner / QGC / MAVProxy]
    Logs[Logs<br/>.bin and .tlog]
    Tools[Analysis Tools<br/>pymavlink / MAVExplorer / WebTools]

    Firmware --> FC
    Firmware <--> MAVLink
    MAVLink <--> GCS
    Firmware --> Logs
    Logs --> Tools
    GCS --> Logs
```

## ArduPilot vs MAVLink

ArduPilot is the autopilot software.

MAVLink is a message protocol used by ArduPilot, PX4, ground stations, companion computers, and other drone systems.

Think of it like this:

```text
ArduPilot = the vehicle brain
MAVLink   = the language used to talk to/from the vehicle
```

## Ground Stations

### Mission Planner

Mission Planner is a Windows-focused ArduPilot ground station. It can configure the vehicle, plan missions, view live telemetry, download logs, replay telemetry logs, extract parameters and waypoints, and graph log data.

### QGroundControl

QGroundControl is a cross-platform ground station for MAVLink vehicles. It supports ArduPilot and PX4 workflows and can load `.tlog` telemetry logs.

### MAVProxy

MAVProxy is a command-line MAVLink ground station and router. It is useful for scripting, companion-computer setups, and log tools.

## Flight Modes

Flight mode matters in forensics because it gives context for pilot intent and autopilot behavior.

Common Copter modes:

| Mode | Plain Meaning | What To Look For In Logs |
| --- | --- | --- |
| `STABILIZE` | Pilot controls attitude; no GPS position hold | RC input and pilot-control context |
| `ALT_HOLD` | Autopilot holds altitude; pilot controls horizontal movement | Altitude, throttle, climb/descent behavior |
| `LOITER` | GPS position hold | GPS quality and hold position |
| `RTL` | Return To Launch | Home position, RTL altitude, reason for entering RTL |
| `AUTO` | Follows the uploaded mission | Mission item messages such as `WP`, `RTL`, `Land`, `Takeoff` |
| `GUIDED` | Follows commands from a GCS or companion computer | MAVLink command messages and GCS source IDs |
| `LAND` | Automated landing behavior | Landing position, `LAND_COMPLETE`, disarm event |
| `BRAKE` | Stop/hold quickly | Avoidance, failsafe, or pilot-command context |

In logs, mode changes are important event markers. A no-fly-zone report should show where the drone was during each mode.

Do not overread a mode by itself. For example, `RTL` only means return-to-launch behavior
was active. The reason could be a mission item, pilot switch, failsafe, command from a
ground station, or some other condition. The surrounding events and parameters matter.

## Missions And Waypoints

An ArduPilot mission is an ordered list of commands. In logs, common mission text includes:

| Term | Meaning |
| --- | --- |
| `WP` | Waypoint, a GPS target in the mission |
| `Takeoff` | Automatic takeoff command |
| `Land` | Automatic landing command |
| `RTL` | Return-to-launch mission command |
| `SplineWP` | Curved waypoint path |
| `LoitTurns` | Loiter/circle for a configured number of turns |
| `Reached command #N` | Autopilot considered mission command `N` complete |

For forensics, mission terms help explain whether movement was autonomous, manually guided,
or part of a planned route. They do not prove who uploaded the mission unless separate
ground-station evidence supports that.

## Parameters

Parameters are persistent configuration values. They control vehicle setup, flight modes, failsafes, geofence settings, battery settings, logging settings, and many other behaviors.

For forensics, parameters can answer:

- Was geofence enabled?
- What failsafe behavior was configured?
- Which flight modes were assigned?
- Was logging enabled?
- What altitude or RTL settings were configured?

Important parameter families to inspect later:

```text
LOG_*
FENCE_*
FS_*
BATT_*
RTL_*
FLTMODE*
SERIAL*
GPS*
COMPASS*
ARMING_*
BRD_*
INS_*
SYSID_*
```

Parameter examples:

| Parameter Family | What It Can Help Explain |
| --- | --- |
| `FLTMODE*` | Which flight modes were assigned to a mode switch |
| `FENCE_*` | Geofence enabled state, fence type, radius, altitude limits, action |
| `FS_*` | Failsafe thresholds and actions |
| `RTL_*` | Return-to-launch altitude and behavior |
| `LOG_*` | Logging behavior |
| `BRD_*` | Board-level settings, sometimes board serial parameter |
| `INS_*` / `COMPASS*` | IMU and compass configuration/device identifiers |
| `SYSID_*` | MAVLink vehicle and ground-station system IDs |

## Why ArduPilot Is Good for a First Forensic MVP

ArduPilot is a good first scope because:

- The project and docs are open.
- MAVLink is documented.
- `.tlog` telemetry logs are parseable.
- DataFlash `.bin` logs are parseable.
- `pymavlink` gives Python access to both formats.
- Public sample logs are available from ArduPilot autotest.

The first app can avoid proprietary DJI extraction and still prove the forensic workflow.
