import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Pretendard', 'ui-sans-serif', 'system-ui'],
            },
            keyframes: {
                'show-blur': {
                    '0%': { filter:'blur(5px)', opacity:'0' },
                    '100%': { filter:'blur(0px)', opacity:'1' },
                },
                'button-ripple': {
                    '0%': { filter:'blur(0px)', width: '0px', opacity: '0.15' },
                    '100%': { filter:'blur(30px)', width: '300%', opacity: '0' },
                },
            },
            animation: {
                'show-blur': 'show-blur 0.7s linear forwards',
                'button-ripple': 'button-ripple 0.4s linear forwards',
            },
        },
    },
    plugins: [],
};
export default config;
