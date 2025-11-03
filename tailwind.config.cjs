module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F4C81',
        accent: '#F59E0B',
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          700: '#374151',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
