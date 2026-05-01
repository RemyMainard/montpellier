/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A5F7F',
        secondary: '#D4A574',
        background: '#0F1419',
        surface: '#1A1F2E',
        accent: '#C9A961',
        'text-primary': '#F5F3F0',
        'text-secondary': '#B8B5B0',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      lineHeight: {
        heading: '1.2',
        body: '1.6',
      },
      borderRadius: {
        DEFAULT: '0',
      },
      transitionTimingFunction: {
        'out-smooth': 'ease-out',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}
