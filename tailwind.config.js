/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/*.{html,js}'],
    theme: {
        extend: {
            dropShadow: {
                'title-1': [
                    '-4px -4px 12px rgba(59, 130, 246, 0.3)',
                    '4px 4px 12px rgba(250, 250, 250, 0.3)',
                ],
                'success-1': '0px 0px 24px rgba(74, 222, 128, 0.4)',
            },
            minWidth: {
                328: '328px',
            },
            minHeight: {
                256: '256px',
            },
        },
    },
    plugins: [],
};
