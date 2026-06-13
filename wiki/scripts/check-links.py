"""Validate local Markdown links in the wiki."""

from __future__ import annotations

import re
from pathlib import Path


WIKI_ROOT = Path(__file__).resolve().parents[1]
LINK_PATTERN = re.compile(r"\[[^\]]+\]\(([^)]+)\)")


def main() -> int:
    """Return non-zero when a local Markdown link target is missing."""

    missing_links: list[tuple[Path, str]] = []
    for path in sorted(WIKI_ROOT.rglob("*.md")):
        text = path.read_text(encoding="utf-8")
        for match in LINK_PATTERN.finditer(text):
            target = match.group(1).split("#", maxsplit=1)[0]
            if _is_external_or_anchor(target):
                continue
            target_path = (path.parent / target).resolve()
            if not target_path.exists():
                missing_links.append((path.relative_to(WIKI_ROOT), target))

    if not missing_links:
        print("All local wiki Markdown links resolve.")
        return 0

    for source, target in missing_links:
        print(f"{source}: missing {target}")
    return 1


def _is_external_or_anchor(target: str) -> bool:
    """Return whether a Markdown link target does not point to a local file."""

    return (
        not target
        or "://" in target
        or target.startswith("#")
        or target.startswith("mailto:")
    )


if __name__ == "__main__":
    raise SystemExit(main())
