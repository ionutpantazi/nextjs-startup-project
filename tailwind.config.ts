import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/js/**/*.js'
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
      ...colors,
      brandColor: '#B97ECF',
      brandColorLight: '#ddb7eb',
    }
  },
  plugins: [require('tw-elements/plugin.cjs')],
  safelist: [
    'sm:grid-rows-1',
    'sm:grid-rows-3',
    'sm:grid-rows-5',
    'sm:grid-rows-7',
    'sm:grid-rows-9',
    'sm:grid-rows-11',
    'grid-rows-1',
    'grid-rows-2',
    'grid-rows-3',
    'grid-rows-4',
    'grid-rows-5',
    'grid-rows-6',
  ]
}
export default config
