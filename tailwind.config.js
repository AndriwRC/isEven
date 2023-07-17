/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/*.{html,js}', './index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            dropShadow: {
                'title-1': [
                    '-4px -4px 12px rgba(59, 130, 246, 0.3)',
                    '4px 4px 12px rgba(250, 250, 250, 0.3)',
                ],
                'success-1': '0px 0px 24px rgba(74, 222, 128, 0.4)',
                'error-1': '0px 0px 24px rgba(185, 28, 28, 0.4)',
            },
            minWidth: {
                320: '320px',
            },
            minHeight: {
                256: '256px',
            },
            screens: {
                xs: '360px',
                sm: '544px',
            },
        },
    },
    plugins: [],
};
