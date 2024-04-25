import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const customColors = {
  "white": "#fff",
  "grey": "#1E1E1E",
  "lightgrey": "#A7A7A7",
  "darkgrey": "#242424",
  "darkestgrey": "#121212",
  "black": "#000000",
  "defaultbrand": "#B97ECF",
  "defaultbrandlight": "#ddb7eb"
}

const customColorsNames = Object.keys(customColors).map((c) => { return `text-${c}` });

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
      ...customColors,
      brandColor: '#B97ECF',
      brandColorLight: '#ddb7eb',
    }
  },
  plugins: [require('tw-elements/plugin.cjs')],
  safelist: [
    // ...customColorsNames,
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
console.log(config)
export default config
