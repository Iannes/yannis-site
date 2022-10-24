module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#212121',
          secondary: '#707070',
          accent: '#0074d9',
          accentDark: '#001F3F',
        },
      },
      fontFamily: {
        display: ['Roboto'],
        body: ['Roboto"'],
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '2rem',
          xl: '4rem',
          '2xl': '2rem',
        },
        center: true,
      },
      translate: {
        'minus-2': '-0.5rem',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
