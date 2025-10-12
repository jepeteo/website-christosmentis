/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'cm-bg': '#0B0F14',
                'cm-surface': '#121822',
                'cm-primary': '#C0A36E',
                'cm-secondary': '#8FA3B8',
                'cm-headline': '#EAE7DF',
                'cm-body': '#D1D5DB',
                'cm-muted': '#9CA3AF',
                'cm-divider': '#1F2937',
                'cm-error': '#DC2626',
                'cm-success': '#16A34A',
            },
            fontFamily: {
                display: ['var(--font-cormorant)', 'Georgia', 'serif'],
                body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'h1': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em' }],
                'h2': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.01em' }],
                'h3': ['1.75rem', { lineHeight: '2.25rem' }],
                'body': ['1.125rem', { lineHeight: '1.75rem' }],
                'small': ['0.875rem', { lineHeight: '1.375rem' }],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
