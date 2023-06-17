const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#0D3B66',
                'secondary': '#1B4D3E',
                'tertiary': '#72A2C0',
                'quaternary': '#EEE2DF',
                'quinary': '#FFFFFF',
            }
        },
    },
    plugins: [
        plugin(({ addBase, theme }) => {
            addBase({
                '.scrollbar': {
                    overflowY: 'auto',
                    scrollbarColor: `rgba(13, 59, 102, 0.5) rgba(255, 255, 255, 0.1)`,
                    scrollbarWidth: 'thin',
                },
                '.scrollbar::-webkit-scrollbar': {
                    width: '5px',
                },
                '.scrollbar::-webkit-scrollbar-track': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                },
                '.scrollbar::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(13, 59, 102, 0.5)',
                    borderRadius: '10px',
                },
                '.scrollbar::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: 'rgba(13, 59, 102, 0.8)',
                },
            });
        }),
    ],
}