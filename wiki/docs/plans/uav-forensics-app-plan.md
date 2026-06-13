# UAV Forensics App Plan

## Purpose

This app should help an investigator turn UAV logs into defensible evidence:

- Identify what aircraft or system produced the log.
- Reconstruct where and when it flew.
- Compare the reconstructed track against restricted airspace, no-fly zones, altitude ceilings, and time-limited restrictions.
- Produce a report that explains what was found, what data supports it, and how confident the app is.

The app should not claim intent or legal guilt by itself. It should produce an evidence package that a government, military, law-enforcement, safety, or hobbyist user can review.

## Primary Use Cases

### Airport or Controlled Airspace Violation

An investigator receives a drone telemetry log and needs to know whether the aircraft entered controlled airspace near an airport, exceeded an altitude ceiling, or flew during a temporary restriction.

The app should:

- Extract GPS path, altitude, speed, heading, and timestamps.
- Check the track against official airspace layers.
- Report each restricted-zone intersection with entry time, exit time, max altitude, distance traveled inside the zone, and supporting log messages.
- Record whether the analysis used official FAA UAS Facility Map data, TFR/NOTAM data, LAANC authorization data, or a custom zone layer.

### Military or Sensitive-Site Incident

An investigator receives a recovered aircraft, telemetry file, ground-control-station log, Remote ID capture, or media card after a suspected sensitive-area overflight.

The app should:

- Preserve original evidence and compute hashes.
- Extract flight path, home location, launch area, landing/crash area, and controller or GCS messages when available.
- Import private restricted-zone layers such as military base boundaries, perimeter buffers, or mission-specific exclusion zones.
- Correlate camera trigger, gimbal attitude, and media timestamps with the flight path.
- Flag possible tampering, clock issues, missing GPS periods, and impossible motion.

### Hobbyist or Safety Review

A pilot wants to understand whether a flight was safe and compliant.

The app should:

- Summarize the flight in plain language.
- Show map replay, altitude profile, battery state, mode changes, failsafe events, and GPS quality.
- Explain likely issues without requiring the user to know every MAVLink message type.

## Current Sample Logs

### Downloaded Copter Telemetry Log

File:

```text
logs/ArduCopter-test.tlog
```

Source:

```text
https://autotest.ardupilot.org/ArduCopter-test.tlog
```

SHA256:

```text
7a82900dc1d9ba9290d43ec87be8e7d05714337169ec4280fe824116375e05d3
```

Decoded preview:

```text
logs/ArduCopter-test-preview.txt
```

Observed summary:

```text
Messages: 8822
Message types: 38
BAD_DATA messages: 0
Vehicle: MAV_TYPE_QUADROTOR
Autopilot: MAV_AUTOPILOT_ARDUPILOTMEGA
Vehicle source: sys=1 comp=1
GCS source: sys=255 comp=230
```

Useful message types in this sample:

- `HEARTBEAT`: vehicle type, autopilot type, armed/state hints.
- `SYSTEM_TIME`: UTC and boot-relative time.
- `GLOBAL_POSITION_INT`: latitude, longitude, absolute altitude, relative altitude, velocity, heading.
- `GPS_RAW_INT`: GPS fix type, satellites, GPS altitude, accuracy hints.
- `VFR_HUD`: altitude, climb rate, ground speed, heading.
- `HOME_POSITION`: launch/home location.
- `LOCAL_POSITION_NED`: local position and velocity.
- `BATTERY_STATUS` and `SYS_STATUS`: battery and system state.
- `ATTITUDE`: roll, pitch, yaw, angular rates.
- `RC_CHANNELS` and `SERVO_OUTPUT_RAW`: command/control and output behavior.
- `EKF_STATUS_REPORT`: estimator confidence.
- `STATUSTEXT`: autopilot status messages.

### Existing Sub Telemetry Log

File:

```text
/tmp/testlogs/ArduSub-test.tlog
```

Observed summary:

```text
Vehicle: MAV_TYPE_SUBMARINE
Autopilot: MAV_AUTOPILOT_ARDUPILOTMEGA
Vehicle source: sys=1 comp=1
GCS source: sys=123 comp=230
```

This is useful for parser testing, but it is not the right primary sample for UAV airspace work because the vehicle type is submarine.

### Existing ArduPilot DataFlash Logs

Files:

```text
logs/sample-arducopter.bin
logs/sample-arducopter-failsafe.bin
```

These are ArduPilot DataFlash logs. They use ArduPilot record names such as:

- `GPS`
- `POS`
- `BARO`
- `ATT`
- `MODE`
- `EV`
- `ERR`
- `BAT`
- `IMU`
- `PARM`

The app should support both MAVLink telemetry logs (`.tlog`) and ArduPilot DataFlash logs (`.bin`).

## Simple ArduPilot-First Scope

ArduPilot is a practical first target because the autopilot is open source and its common logs are not vendor-locked in the same way as DJI logs. In normal ArduPilot workflows, `.tlog` and `.bin` files can be parsed with open tooling such as `pymavlink`.

That does not mean the logs prove everything by themselves. A forensic workflow should still hash the original files, record parser versions, check for gaps, and preserve the raw evidence. The useful point is that ArduPilot logs are accessible enough to build a first version of this app without reverse-engineering encrypted vendor formats.

### What Is a `.tlog`?

A `.tlog` is a MAVLink telemetry log. It is usually recorded by the ground-control station while the drone is connected over telemetry radio, USB, Wi-Fi, or another MAVLink link.

Examples:

- Mission Planner telemetry log.
- QGroundControl telemetry log.
- MAVProxy telemetry log.
- A custom MAVLink receiver recording packets.

It contains MAVLink messages that were seen on the communication link.

Useful `.tlog` messages:

- `HEARTBEAT`: vehicle type, autopilot type, system state.
- `SYSTEM_TIME`: UTC time and boot time.
- `GLOBAL_POSITION_INT`: latitude, longitude, altitude, velocity, heading.
- `GPS_RAW_INT`: GPS fix, satellites, GPS altitude, accuracy hints.
- `VFR_HUD`: altitude, climb rate, heading, speed.
- `HOME_POSITION`: home/launch position when available.
- `ATTITUDE`: roll, pitch, yaw.
- `BATTERY_STATUS` and `SYS_STATUS`: battery and system health.
- `RC_CHANNELS`: pilot control input values when streamed.
- `SERVO_OUTPUT_RAW`: actuator/motor output values when streamed.
- `STATUSTEXT`: autopilot messages and warnings.

For forensics, `.tlog` is useful because it can show what the ground station observed during flight. Its weakness is that it may miss messages if the telemetry link drops, logging starts late, or the GCS did not request a message stream.

### What Is a `.bin`?

A `.bin` file is an ArduPilot DataFlash log. It is usually recorded onboard by the flight controller to internal flash or an SD card.

It is not the same as a DJI DAT file. ArduPilot `.bin` files are DataFlash records with ArduPilot-specific message names.

Useful `.bin` record types:

- `GPS`: GPS fix, satellites, latitude, longitude, altitude, speed.
- `POS`: estimated position and relative altitude.
- `BARO`: barometer altitude, pressure, temperature, climb rate.
- `ATT`: attitude: roll, pitch, yaw.
- `MODE`: flight mode changes.
- `EV`: events such as arming, disarming, and failsafe-related events.
- `ERR`: subsystem errors.
- `BAT`: battery voltage, current, consumed energy.
- `IMU`: accelerometer and gyroscope.
- `MAG`: magnetometer.
- `RCIN`: pilot RC inputs.
- `RCOU`: motor/servo outputs.
- `PARM`: parameter values at log time.
- `MSG`: autopilot text messages.
- `VER`: firmware and board version information when available.

For forensics, `.bin` is usually stronger than `.tlog` because it is recorded onboard and can include more high-rate sensor data. Its weakness is that it requires physical or file-system access to the aircraft or flight-controller storage.

### `.tlog` vs `.bin`

```text
.tlog
  Source: ground station / telemetry receiver
  Format: MAVLink packet stream
  Best for: what the operator/GCS saw, commands, telemetry link view
  Risk: missing data if telemetry link drops

.bin
  Source: flight controller onboard storage
  Format: ArduPilot DataFlash records
  Best for: authoritative onboard flight reconstruction
  Risk: needs access to aircraft storage; can still have gaps if logging disabled
```

The app should ingest both when available. If both exist for the same flight, it should correlate them by time and compare the paths. If they disagree, the report should show the discrepancy instead of hiding it.

### Other Data to Gather From a Simple ArduPilot Drone

For a simple first version, collect these artifacts:

- Onboard DataFlash log: `.bin`.
- Ground-station telemetry log: `.tlog`.
- Parameter file: `.param` or `PARM` records from the log.
- Mission file: waypoints, survey grid, rally points, geofence plan.
- Fence configuration: `FENCE_*`, `AVOID_*`, and related parameters.
- Home position and origin messages.
- Ground-station metadata: operator laptop time, GCS software name/version, connection logs.
- Media files from payload camera, if present.
- Companion-computer logs, if the drone has Raspberry Pi, Jetson, or similar onboard computer.
- Remote ID capture, if available from an external receiver.
- Photographs of the aircraft, flight controller, GPS module, telemetry radio, battery, and payload.
- Chain-of-custody notes: who collected the files, when, from which device, and hash values.

### Minimal ArduPilot Forensic MVP

The first forensic version should stay ArduPilot-only:

1. Import `.tlog` and `.bin`.
2. Compute SHA256 and file size.
3. Identify log type and parser.
4. Extract device summary:
   - vehicle type
   - autopilot type
   - firmware/version if present
   - source system/component IDs
   - board/version messages if present
5. Extract flight timeline:
   - first/last timestamp
   - arming/disarming events
   - mode changes
   - failsafe/error messages
6. Extract flight path:
   - latitude
   - longitude
   - altitude MSL
   - altitude relative to home
   - speed
   - heading
   - GPS fix quality
7. Extract health summary:
   - battery voltage/current
   - GPS satellites and fix type
   - EKF status
   - vibration and IMU warnings where available
8. Export:
   - `track.csv`
   - `track.geojson`
   - `events.json`
   - `case-summary.json`
   - human-readable report

This is enough for a first airport/no-fly-zone check: reconstruct path, compare with zone polygons, and report whether the aircraft entered the zone during the relevant time.

## DJI Log Extraction Strategy

The investigation process is the same at the case level, but extraction is different from ArduPilot.

For ArduPilot and PX4-style systems, the app can often parse logs directly using open formats:

- MAVLink telemetry logs such as `.tlog`.
- ArduPilot DataFlash logs such as `.bin`.
- PX4 ULog files such as `.ulg`.

For DJI systems, the app should use separate extractors for each artifact family. DJI logs are proprietary, model-dependent, and sometimes encrypted. The app should never assume that `pymavlink` can parse DJI files.

### DJI Artifact Types

Common DJI evidence sources:

- DJI app flight records: files commonly named like `DJIFlightRecord_*.txt`.
- Mobile-device DAT records: often stored under app flight-record folders.
- Aircraft/internal DAT records: often named like `FLY###.DAT`.
- Controller logs and app databases.
- DJI Assistant 2 exports.
- Media files: photos, videos, thumbnails, SRT subtitle telemetry, EXIF/XMP metadata.
- Remote ID captures from external receivers.

These artifacts should be imported independently, hashed independently, and correlated later.

### DJI App Flight Records

DJI Mobile SDK documentation describes a flight-record module intended to help determine responsibility and locate problems when aircraft flight-control logs are unavailable. It exposes paths for app flight logs and compressed flight-controller logs:

```text
getFlightRecordPath()
getFlyCLogPath()
```

Reference:

```text
https://developer.dji.com/doc/mobile-sdk-tutorial/en/tutorials/flight-record.html
```

DJI also publishes `FlightRecordParsingLib`, which can parse version 13 DJI flight-log files into time-frame objects. It requires a DJI developer App Key and uses DJI's parsing/decryption flow.

Reference:

```text
https://github.com/dji-sdk/FlightRecordParsingLib
```

For forensic use, this app should treat DJI's library as the preferred legal/official extraction path when it supports the target log version.

### DJI DAT Records

DAT records are not equivalent to ArduPilot `.bin` logs. DJI DAT files are proprietary binary records. Public tooling support varies by model and by whether the DAT came from the aircraft or the mobile device.

Known public-tool behavior:

- CsvView can process DJI GO `.txt` logs and some DAT files from older DJI aircraft.
- DatCon can convert some older DJI DAT files to CSV.
- Some onboard DAT files for newer models are encrypted and cannot be processed by CsvView/DatCon.
- Mobile-device DAT files may be processable even when aircraft-side DAT files are not.

Reference:

```text
https://datfile.net/
```

The extraction layer should therefore classify DAT files before parsing:

```text
dji_dat_aircraft
dji_dat_mobile
dji_dat_unknown
```

If a DAT file is encrypted or unsupported, the app should report that clearly and preserve it as evidence rather than silently failing.

### DUML and Low-Level DJI Protocol Data

DUML is a DJI protocol/transport family, not a simple forensic log format like MAVLink `.tlog`. It may appear in device communication captures, controller logs, or extracted binary artifacts.

The MVP should not start by reverse-engineering DUML. Instead:

- Prefer DJI-supported extraction.
- Prefer known forensic exports from app flight records.
- Preserve unsupported DUML or encrypted blobs as evidence.
- Add DUML decoding only as a separate adapter with explicit version/model support.

### DJI Media and "What Was Captured"

DJI media should be treated as a separate evidence source, not as part of the flight log.

Useful media artifacts:

- EXIF/XMP GPS tags.
- Creation time and modification time.
- Camera model and serial metadata if present.
- Video SRT sidecar telemetry when available.
- Thumbnail/cache files from the mobile app.
- Gimbal/camera attitude from logs when available.

The app should correlate media to flight points by timestamp, then estimate capture location and camera direction.

### DJI Extraction MVP

The first DJI extractor should not try to support every DJI format. It should support a staged workflow:

1. Import DJI file or folder.
2. Identify artifact type by filename, header, path, and known signatures.
3. Hash and preserve the original artifact.
4. If the file is a supported DJI flight record, convert it to normalized JSON/CSV.
5. If an external tool is needed, record tool name, version, command, output file hash, and parser warnings.
6. If unsupported or encrypted, preserve the file and emit an `unsupported_encrypted_or_unknown` extraction result.
7. Normalize successful outputs into the same flight-track schema used by ArduPilot logs.

Recommended adapter names:

```text
extractors/ardupilot_mavlink.py
extractors/ardupilot_dataflash.py
extractors/dji_flightrecord.py
extractors/dji_dat.py
extractors/dji_media.py
extractors/remote_id.py
```

The normalized schema should include DJI-specific provenance fields:

```text
vendor
model
aircraft_serial
controller_serial
battery_serial
camera_serial
flight_record_version
extractor_name
extractor_version
extractor_confidence
encrypted_or_unsupported
```

### DJI Extraction Risk Register

- DJI formats change across aircraft, app, firmware, and log versions.
- Some logs require DJI keys or DJI service access.
- Some aircraft DAT files are encrypted.
- Third-party tools may be useful but must be version-pinned and documented.
- A parsed CSV from a third-party tool is a derived artifact, not the original evidence.
- Unsupported encrypted files still matter; preserve and report them.

## Official Data Sources

The first implementation should support official FAA data for US investigations and custom GeoJSON layers for non-US, military, or local cases.

### FAA UAS Facility Maps

FAA UAS Facility Maps show maximum altitudes around airports that may be approved without additional safety analysis. They are informational and do not themselves authorize a flight.

Use these for:

- Airport-adjacent grid lookup.
- Controlled-airspace altitude ceiling analysis.
- Report context around airport proximity.

Reference:

```text
https://www.faa.gov/uas/commercial_operators/uas_facility_maps
```

### LAANC and FAA DroneZone Authorization Context

LAANC checks requests against FAA data sources including UAS Facility Maps, airspace classes, Special Use Airspace, TFRs, and NOTAMs.

The app should allow an investigator to attach an authorization record. Without that record, the app can flag "possible violation" but should not assume there was no authorization.

Reference:

```text
https://www.faa.gov/uas/getting_started/laanc
```

### Temporary Flight Restrictions and NOTAMs

TFRs are time-bound restrictions published through NOTAMs. A forensic check must compare the flight time against the active TFR time window, not just geometry.

Reference:

```text
https://www.faa.gov/uas/getting_started/temporary_flight_restrictions
```

### B4UFLY / Airspace Awareness

B4UFLY-style data is useful for recreational awareness and user-facing explanations, but the forensic engine should keep the authoritative data source and version visible in reports.

Reference:

```text
https://www.faa.gov/uas/recreational_fliers/where_can_i_fly/b4ufly/
```

### Remote ID

Remote ID can provide aircraft identity, aircraft location, and control-station or takeoff location depending on the equipment type. A forensic case may combine Remote ID captures with onboard logs.

Reference:

```text
https://www.faa.gov/uas/getting_started/remote_id/
```

## Evidence Model

Each case should contain:

- Original evidence file path.
- Original file SHA256.
- File size.
- Ingest timestamp.
- Parser name and parser version.
- Source type: `mavlink_tlog`, `ardupilot_bin`, `dji_log`, `remote_id_capture`, `media`, or `custom`.
- Analysis data-source versions.
- Chain-of-custody notes.
- Any conversion outputs and their hashes.

The original file should be treated as read-only. All exports should be derived artifacts.

## Normalized Flight Track

The core parser should convert every supported log into a normalized track table:

```text
case_id
source_file
source_message_type
source_system
source_component
timestamp_utc
time_boot_ms
lat_deg
lon_deg
alt_msl_m
alt_relative_m
alt_agl_m
vx_m_s
vy_m_s
vz_m_s
groundspeed_m_s
heading_deg
gps_fix_type
satellites_visible
horizontal_accuracy_m
vertical_accuracy_m
mode
armed
battery_voltage_v
battery_remaining_pct
ekf_flags
raw_message_json
```

For MAVLink `.tlog`, the first extractor should use:

- `GLOBAL_POSITION_INT`
- `GPS_RAW_INT`
- `VFR_HUD`
- `SYSTEM_TIME`
- `HOME_POSITION`
- `HEARTBEAT`
- `BATTERY_STATUS`
- `SYS_STATUS`
- `EKF_STATUS_REPORT`

For ArduPilot `.bin`, the first extractor should use:

- `GPS`
- `POS`
- `BARO`
- `ATT`
- `MODE`
- `EV`
- `ERR`
- `BAT`
- `PARM`

## Violation Analysis

The violation engine should run deterministic geospatial checks:

1. Load normalized flight points.
2. Load airspace or restricted-zone polygons.
3. Convert altitude fields into comparable units.
4. Interpolate track segments between logged points.
5. Test point and segment intersections with polygons.
6. Filter zones by active time window.
7. Compare altitude against zone ceiling or floor.
8. Produce event records.

Violation event fields:

```text
case_id
zone_id
zone_name
zone_source
rule_type
entry_time_utc
exit_time_utc
duration_s
max_altitude_m
max_altitude_agl_m
max_speed_m_s
distance_inside_m
nearest_airport_or_site
evidence_message_refs
confidence
notes
```

Confidence should be reduced when:

- GPS fix is missing or weak.
- Only sparse telemetry exists.
- Clock source is unavailable.
- Altitude reference is ambiguous.
- Track has impossible jumps.
- Airspace layer version is unknown.

## Media Correlation

The app should not assume the flight log contains photos or videos. MAVLink and DataFlash logs usually contain position, state, camera trigger, and gimbal data, not the captured media itself.

For "what was captured" analysis, the app should ingest media separately:

- Images and videos from SD card or internal storage.
- EXIF creation time and GPS tags.
- File-system timestamps.
- Camera trigger events from logs.
- Gimbal attitude messages.

The app can then estimate what the camera may have seen by joining:

```text
media_timestamp + aircraft_position + aircraft_heading + gimbal_attitude + camera_fov
```

## Tamper and Quality Checks

Minimum checks:

- File hash recorded before parsing.
- `BAD_DATA` count for MAVLink logs.
- Missing or duplicated time ranges.
- Clock jumps.
- GPS coordinate jumps.
- Impossible speed between adjacent points.
- Altitude discontinuities.
- Weak GPS fix periods.
- EKF variance or estimator warnings.
- Mode and failsafe events.
- Parser warnings included in final report.

These checks do not prove tampering on their own. They identify evidence quality issues an investigator should review.

## User Workflow

Detailed analyst flows live in:

- [Standard Forensic Analysis Flow](../user_flow/01-standard-forensic-analysis-flow.md)
- [Rule Authoring and Case Selection](../user_flow/02-rule-authoring-and-case-selection.md)

1. Create case.
2. Import log files and optional media.
3. Compute hashes and preserve originals.
4. Parse logs into normalized records.
5. Show extraction summary and parser warnings.
6. Select a locked rule-set version:
   - FAA airport/controlled airspace.
   - FAA TFR/NOTAM.
   - Custom military or sensitive-site GeoJSON.
   - Hobbyist safety profile.
7. Run violation analysis.
8. Review map, timeline, altitude chart, and event table.
9. Export report and machine-readable JSON evidence bundle.

## MVP Plan

### Phase 1: Parser and Evidence Foundation

- Keep `scripts/read_log.py` as a low-level inspection tool.
- Add reusable parser services under `anveshan-api/src/anveshan_api/services/parsers/` for `.tlog` and `.bin`.
- Produce normalized CSV/JSON from a log.
- Record SHA256, file size, parser version, message counts, device sources, and first messages.
- Add tests using `logs/ArduCopter-test.tlog` and `logs/sample-arducopter.bin`.

Deliverable:

```text
anveshan parse logs/ArduCopter-test.tlog --out artifacts/cases/demo/track.csv
```

### Phase 2: Flight Reconstruction

- Convert MAVLink integer GPS units into decimal degrees and meters.
- Join `SYSTEM_TIME` with boot-relative messages.
- Extract home, launch, landing, and last-known locations.
- Produce track GeoJSON.
- Produce map-ready summary JSON.

Deliverable:

```text
track.geojson
flight-summary.json
```

### Phase 3: Rule and Zone Engine

- Support GeoJSON polygon zones.
- Support time windows and altitude ceilings.
- Implement point-in-polygon and segment-intersection checks.
- Emit violation events.

Deliverable:

```text
violations.json
```

### Phase 4: FAA Data Integration

- Import FAA UAS Facility Map data.
- Add airport/grid lookup.
- Add TFR/NOTAM ingestion path.
- Keep data-source version and effective date in every report.
- Support manual attachment of LAANC/FAA authorization evidence.

Deliverable:

```text
faa-analysis.json
```

### Phase 5: Report and Review UI

- Show case overview.
- Show map replay.
- Show timeline and altitude graph.
- Show evidence quality warnings.
- Export PDF and JSON evidence bundle.

Deliverable:

```text
case-report.pdf
case-evidence.json
```

### Phase 6: Media and Remote ID Correlation

- Import image/video metadata.
- Import Remote ID capture records.
- Correlate media timestamps with flight track.
- Show likely capture location and camera orientation where enough data exists.

Deliverable:

```text
media-correlation.json
remote-id-correlation.json
```

## Suggested Repository Structure

```text
agents/
  README.md
anveshan-api/
  src/anveshan_api/
    api/
    domain/
    services/
      parsers/
    workers/
  agents/
  tests/
anveshan-web/
  src/
    components/
    features/
    lib/
  agents/
wiki/
  README.md
  mkdocs.yml
  requirements.txt
  docs/
    index.md
    101_doc/
      index.md
      01-drone-ecosystem-101.md
      02-visual-glossary.md
      03-ardupilot-101.md
      04-logs-101.md
      05-ardupilot-log-field-guide.md
      06-forensics-101.md
      07-useful-links.md
    plans/
      uav-forensics-app-plan.md
    user_flow/
      index.md
    architecture/
      index.md
  scripts/
    build-docs.sh
    serve-docs.sh
    check-links.py
logs/
  ArduCopter-test.tlog
  ArduCopter-test-preview.txt
scripts/
  read_log.py
```

## Immediate Next Step

Implement Phase 1 with a normalized export from `logs/ArduCopter-test.tlog`. The first useful output should be a CSV with timestamp, source IDs, lat/lon, altitude, speed, heading, GPS quality, and raw message references.
