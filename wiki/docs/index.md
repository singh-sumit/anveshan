<section class="anveshan-hero" markdown>

# Anveshan Docs

Anveshan is a UAV forensics project for preserving drone evidence, parsing ArduPilot logs,
reconstructing flight tracks, and producing defensible reports with clear limitations.

<div class="anveshan-actions">
  <a class="anveshan-button primary" href="101_doc/">Start Beginner 101</a>
  <a class="anveshan-button secondary" href="101_doc/05-ardupilot-log-field-guide/">Read Log Field Guide</a>
</div>

</section>

## Start Here

If you are new to drones or ArduPilot logs, read the beginner docs in this order:

1. [Drone Ecosystem 101](101_doc/01-drone-ecosystem-101.md)
2. [Visual Glossary](101_doc/02-visual-glossary.md)
3. [ArduPilot 101](101_doc/03-ardupilot-101.md)
4. [Logs 101: `.tlog` and `.bin`](101_doc/04-logs-101.md)
5. [ArduPilot Log Field Guide](101_doc/05-ardupilot-log-field-guide.md)
6. [Forensics 101](101_doc/06-forensics-101.md)
7. [Useful Links](101_doc/07-useful-links.md)

## Main Sections

<div class="anveshan-card-grid">
  <a class="anveshan-card" href="101_doc/">
    <strong>Beginner 101</strong>
    <span>Drone basics, ArduPilot concepts, log formats, parser output, and forensic terms.</span>
  </a>
  <a class="anveshan-card" href="user_flow/">
    <strong>User Flows</strong>
    <span>Analyst workflows for evidence review, rule authoring, and case analysis.</span>
  </a>
  <a class="anveshan-card" href="architecture/">
    <strong>Architecture</strong>
    <span>Implementation-facing notes for the API, web app, parser engine, and storage model.</span>
  </a>
  <a class="anveshan-card" href="plans/uav-forensics-app-plan/">
    <strong>Plans</strong>
    <span>Product and implementation plan for the UAV forensics application.</span>
  </a>
</div>

<div class="anveshan-callout" markdown>
<strong>Evidence rule:</strong> preserve the original evidence, make every derived artifact
traceable, and only report what the evidence supports.
</div>

## Core Mental Model

```mermaid
flowchart LR
    Evidence[Evidence files<br/>.bin / .tlog / media] --> Preserve[Preserve originals<br/>hash + metadata]
    Preserve --> Parse[Parse messages<br/>versioned parser]
    Parse --> Track[Normalize track<br/>CSV + GeoJSON]
    Parse --> Events[Extract events<br/>modes + warnings]
    Track --> Analyze[Analyst review<br/>maps + rules]
    Events --> Analyze
    Analyze --> Report[Defensible report<br/>limitations included]
```
