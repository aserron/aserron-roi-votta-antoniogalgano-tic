/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public_html/**/*.{html,js}',
        './src/**/*.{njk,md,js}',
    ],
    theme: {
        extend: {
            colors: {
                bg: '#07080f',
                'bg-raised': '#0c0e1c',
                'bg-card': '#0f1120',
                cyan: '#00d8ff',
                amber: '#ffd166',
                emerald: '#34d399',
                text: '#8ea3be',
                'text-mid': '#c1cfe0',
                'text-bright': '#e8f0fe',
                accent: '#ff6b35',
            },
            fontFamily: {
                sans: ['IBM Plex Sans', 'sans-serif'],
                mono: ['IBM Plex Mono', 'monospace'],
            },
            animation: {
                float: 'float 20s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
