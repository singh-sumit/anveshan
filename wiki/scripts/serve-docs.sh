#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd -- "${SCRIPT_DIR}/../.." && pwd)"
DOCS_VENV="${REPO_ROOT}/wiki/.venv"
PYTHON_BIN="${DOCS_VENV}/bin/python"
MKDOCS_BIN="${DOCS_VENV}/bin/mkdocs"

if [[ ! -x "${MKDOCS_BIN}" ]]; then
  PYTHON_BIN="${REPO_ROOT}/.venv/bin/python"
  MKDOCS_BIN="${REPO_ROOT}/.venv/bin/mkdocs"
fi

"${PYTHON_BIN}" -m mkdocs serve -f "${REPO_ROOT}/wiki/mkdocs.yml"
