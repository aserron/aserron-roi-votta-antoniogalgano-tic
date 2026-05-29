#!/usr/bin/env node

/**
 * Download IBM Plex Sans & Mono fonts from Google Fonts
 * Extracts WOFF2 (modern browsers) for optimal performance
 *
 * Usage: node scripts/setup-fonts.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const FONTS_DIR = path.join(__dirname, '../public_html/fonts');

// IBM Plex fonts from Google Fonts CDN
const FONTS = [
    // IBM Plex Sans - regular, 500, 600, 700
    {
        name: 'IBMPlexSans-Regular',
        url: 'https://fonts.gstatic.com/s/ibmplexsans/v20/-F6ofjtqLzI2JPCgiBKX5vAVVuIA.woff2',
        weight: '400',
    },
    {
        name: 'IBMPlexSans-Medium',
        url: 'https://fonts.gstatic.com/s/ibmplexsans/v20/-F6nfjtqLzI2JPCgiBKX27VFa-x79vQk.woff2',
        weight: '500',
    },
    {
        name: 'IBMPlexSans-SemiBold',
        url: 'https://fonts.gstatic.com/s/ibmplexsans/v20/-F6nfjtqLzI2JPCgiBKX2wBFa-x79vQk.woff2',
        weight: '600',
    },
    {
        name: 'IBMPlexSans-Bold',
        url: 'https://fonts.gstatic.com/s/ibmplexsans/v20/-F6nfjtqLzI2JPCgiBKX28BFa-x79vQk.woff2',
        weight: '700',
    },
    // IBM Plex Mono - regular, 500, 600, 700
    {
        name: 'IBMPlexMono-Regular',
        url: 'https://fonts.gstatic.com/s/ibmplexmono/v20/-F63fjptqLzI2JPCgiBKVvcTePw.woff2',
        weight: '400',
    },
    {
        name: 'IBMPlexMono-Medium',
        url: 'https://fonts.gstatic.com/s/ibmplexmono/v20/-F61fjptqLzI2JPCgiBKRvcsVOpBcg.woff2',
        weight: '500',
    },
    {
        name: 'IBMPlexMono-SemiBold',
        url: 'https://fonts.gstatic.com/s/ibmplexmono/v20/-F61fjptqLzI2JPCgiBKRrcsVOpBcg.woff2',
        weight: '600',
    },
    {
        name: 'IBMPlexMono-Bold',
        url: 'https://fonts.gstatic.com/s/ibmplexmono/v20/-F61fjptqLzI2JPCgiBKRs8sVOpBcg.woff2',
        weight: '700',
    },
];

async function downloadFont(font) {
    return new Promise((resolve, reject) => {
        const filename = path.join(FONTS_DIR, `${font.name}.woff2`);
        const file = fs.createWriteStream(filename);

        https.get(font.url, (res) => {
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`✓ Downloaded ${font.name}.woff2`);
                resolve();
            });
        }).on('error', reject);
    });
}

async function main() {
    // Create fonts directory if it doesn't exist
    if (!fs.existsSync(FONTS_DIR)) {
        fs.mkdirSync(FONTS_DIR, {recursive: true});
        console.log(`Created ${FONTS_DIR}`);
    }

    console.log(`Downloading IBM Plex fonts to ${FONTS_DIR}...\n`);

    try {
        for (const font of FONTS) {
            await downloadFont(font);
        }
        console.log(`\n✓ All fonts downloaded successfully!`);
        console.log(`\nYour CSS can now reference these fonts with @font-face rules.`);
    } catch (err) {
        console.error('Error downloading fonts:', err.message);
        process.exit(1);
    }
}

main();
