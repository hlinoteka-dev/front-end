/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
			fontFamily: {
				sans: ['var(--font-pano)', 'sans-serif'],
			},
			colors: {
				'hlinoteka-dark': '#1F1F1F',
				'hlinoteka-light': '#F0F0F0',
				'hlinoteka-gray': '#333333',
				'hlinoteka-active': '#32FF00',
				'hlinoteka-inactive': '#727272',
				'hlinoteka-special': '#6400FF',
			},
			maxWidth: {
				'8xl': '1440px',
			},
			screens: {
				'8xl': '1440px'
			}
    },
  },
  plugins: [],
}
