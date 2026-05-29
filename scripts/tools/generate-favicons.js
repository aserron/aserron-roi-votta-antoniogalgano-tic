#!/usr/bin/env node

/**
 * Generate favicon PNG files from SVG source using Sharp.
 * Usage: node scripts/tools/generate-favicons.js
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SVG_SRC = 'public_html/images/favico/avg-logo.svg';
const OUTPUT_DIR = 'public_html/images/favico/favicon_io';

// Favicon sizes: [filename, width, height]
const SIZES = [
    ['favicon-16x16.png', 16, 16],
    ['favicon-32x32.png', 32, 32],
    ['apple-touch-icon.png', 180, 180],
    ['android-chrome-192x192.png', 192, 192],
    ['android-chrome-512x512.png', 512, 512],
];

async function generateFavicons() {
    try {
        // Check if SVG source exists
        if (!fs.existsSync(SVG_SRC)) {
            console.error(`✗ SVG source not found: ${SVG_SRC}`);
            process.exit(1);
        }

        // Ensure output directory exists
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR, {recursive: true});
        }

        console.log('📦 Generating favicon variants from SVG...\n');

        // Generate each PNG variant
        for (const [filename, width, height] of SIZES) {
            const output = path.join(OUTPUT_DIR, filename);

            try {
                await sharp(SVG_SRC, {density: 300})
                    .resize(width, height, {
                        fit: 'contain',
                        background: {r: 255, g: 255, b: 255, alpha: 0},
                    })
                    .png()
                    .toFile(output);

                console.log(`✓ Generated ${filename} (${width}×${height})`);
            } catch (error) {
                console.error(`✗ Failed to generate ${filename}: ${error.message}`);
                process.exit(1);
            }
        }

        // Generate favicon.ico from the 32x32 PNG
        try {
            const faviconSrc = path.join(OUTPUT_DIR, 'favicon-32x32.png');
            const faviconIco = path.join(OUTPUT_DIR, 'favicon.ico');

            // For .ico files, we'll create a simple one-size version
            // In production, you might want to use a library like 'ico' or 'jimp'
            await sharp(faviconSrc)
                .resize(32, 32)
                .toFile(faviconIco);

            console.log(`✓ Generated favicon.ico (32×32)`);
        } catch (error) {
            console.error(`✗ Failed to generate favicon.ico: ${error.message}`);
            process.exit(1);
        }

        console.log('\n✨ All favicons generated successfully!');
        console.log(`📂 Output: ${OUTPUT_DIR}/`);

    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

generateFavicons();
