#!/bin/bash

# Download IBM Plex fonts from Bunny Fonts (privacy-focused Google Fonts mirror)

FONTS_DIR="./public_html/fonts"
mkdir -p "$FONTS_DIR"

echo "Downloading IBM Plex fonts from Bunny Fonts..."

# Bunny Fonts CDN (EU-hosted, privacy-friendly)
BASE="https://cdn.jsdelivr.net/npm/@ibm/plex@latest/IBM-Plex-Sans/fonts/complete/woff2"
BASE_MONO="https://cdn.jsdelivr.net/npm/@ibm/plex@latest/IBM-Plex-Mono/fonts/complete/woff2"

# IBM Plex Sans
curl -L -o "$FONTS_DIR/IBMPlexSans-Regular.woff2" "$BASE/IBMPlexSans-Regular.woff2" && echo "✓ IBMPlexSans-Regular"
curl -L -o "$FONTS_DIR/IBMPlexSans-Medium.woff2" "$BASE/IBMPlexSans-Medium.woff2" && echo "✓ IBMPlexSans-Medium"
curl -L -o "$FONTS_DIR/IBMPlexSans-SemiBold.woff2" "$BASE/IBMPlexSans-SemiBold.woff2" && echo "✓ IBMPlexSans-SemiBold"
curl -L -o "$FONTS_DIR/IBMPlexSans-Bold.woff2" "$BASE/IBMPlexSans-Bold.woff2" && echo "✓ IBMPlexSans-Bold"

# IBM Plex Mono
curl -L -o "$FONTS_DIR/IBMPlexMono-Regular.woff2" "$BASE_MONO/IBMPlexMono-Regular.woff2" && echo "✓ IBMPlexMono-Regular"
curl -L -o "$FONTS_DIR/IBMPlexMono-Medium.woff2" "$BASE_MONO/IBMPlexMono-Medium.woff2" && echo "✓ IBMPlexMono-Medium"
curl -L -o "$FONTS_DIR/IBMPlexMono-SemiBold.woff2" "$BASE_MONO/IBMPlexMono-SemiBold.woff2" && echo "✓ IBMPlexMono-SemiBold"
curl -L -o "$FONTS_DIR/IBMPlexMono-Bold.woff2" "$BASE_MONO/IBMPlexMono-Bold.woff2" && echo "✓ IBMPlexMono-Bold"

echo ""
echo "✓ All fonts downloaded successfully!"
