/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6366f1',
                    dark: '#4f46e5',
                },
                secondary: '#8b5cf6',
                accent: '#f59e0b',
                background: '#0a0a0f',
                surface: {
                    DEFAULT: '#1a1a24',
                    light: '#252532',
                },
                text: {
                    primary: '#e4e4e7',
                    secondary: '#a1a1aa',
                },
            },
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'float': 'float 20s ease-in-out infinite',
                'gradient-shift': 'gradientShift 15s ease-in-out infinite',
                'slide-in': 'slideIn 0.4s ease',
                'slide-out': 'slideOut 0.3s ease forwards',
                'check-pulse': 'checkPulse 0.4s ease',
                'shake': 'shake 0.5s ease',
                'pulse-custom': 'pulse 0.3s ease',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
                    '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
                },
                gradientShift: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.1)' },
                },
                slideIn: {
                    from: { opacity: '0', transform: 'translateX(-30px) rotateY(-15deg)' },
                    to: { opacity: '1', transform: 'translateX(0) rotateY(0)' },
                },
                slideOut: {
                    to: { opacity: '0', transform: 'translateX(100px) rotateY(15deg)' },
                },
                checkPulse: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' },
                },
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '25%': { transform: 'translateX(-10px)' },
                    '75%': { transform: 'translateX(10px)' },
                },
                pulse: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                },
            },
            boxShadow: {
                'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
                'glow-strong': '0 0 40px rgba(99, 102, 241, 0.5)',
            },
        },
    },
    plugins: [],
}
