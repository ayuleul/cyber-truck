/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'dark-cyan': '#0F2326',
      'dark-blue': '#0A142A',
      'dark-purple': '#302437',
      'light-purple': '#714599',
      'light-cyan': '#25E1FF',
      black: '#000000',
      'light-gray': 'rgba(255, 255, 255, 0.44)',
    },
  },
  plugins: [],
};
