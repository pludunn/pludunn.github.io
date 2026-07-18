#!/usr/bin/env bash
set -euo pipefail

CLASSLESSCSS_REPO="https://github.com/emareg/classlesscss.git"
JS_COOKIE_URL="https://unpkg.com/js-cookie/dist/js.cookie.min.js"
HIGHLIGHTJS_URL="https://unpkg.com/@highlightjs/cdn-assets/highlight.min.js"

tmpdir="$(mktemp -d)"
trap 'rm -rfv "$tmpdir"' EXIT

repo_dir="$tmpdir/classlesscss"

git clone --depth 1 "$CLASSLESSCSS_REPO" "$repo_dir"
cp -v "$repo_dir/docs/classless.css" .
rm -rfv addons
cp -v -R "$repo_dir/docs/addons" .

curl --fail --location --remote-name "$JS_COOKIE_URL"
curl --fail --location --remote-name "$HIGHLIGHTJS_URL"

