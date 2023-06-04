/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dodger-blue': {
          DEFAULT: '#3E91F9',
          50: '#F0F6FF',
          100: '#DCEBFE',
          200: '#B5D5FD',
          300: '#8DBEFB',
          400: '#66A8FA',
          500: '#3E91F9',
          600: '#0872F7',
          700: '#0659C1',
          800: '#04408A',
          900: '#032754',
          950: '#021A39'
        },
        'shuttle-gray': {
          DEFAULT: '#595E6E',
          50: '#B9BCC6',
          100: '#ADB1BD',
          200: '#979BAB',
          300: '#808698',
          400: '#6B7185',
          500: '#595E6E',
          600: '#40444F',
          700: '#272930',
          800: '#0E0F11',
          900: '#000000',
          950: '#000000'
        },        
        'zircon': {
          DEFAULT: '#F6F8FF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F6F8FF',
          600: '#BECCFF',
          700: '#86A1FF',
          800: '#4E75FF',
          900: '#1649FF',
          950: '#0037F9'
        },
      },
      fontFamily: {
        "kanit": "'Kanit', sans-serif",
        "oswald": "'Oswald', sans-serif"
      }
    },
  },
  plugins: [],
}

