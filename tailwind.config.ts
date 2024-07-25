import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')
// Remove renamed colours to avoid warnings
delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray

const customColors = {
  "white": "#fff",
  "grey": "#1e1e1e",
  "lightgrey": "#a7a7a7",
  "darkgrey": "#242424",
  "darkestgrey": "#121212",
  "black": "#000",
  "defaultbrand": "#b97ecf",
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
      keyframes: {
        blur: {
          '1%': { filter: "blur(1px)" },
          '50%': { filter: "blur(2px)" },
          '0%': { filter: "blur(1px)" },
        }
      },
      animation: {
        blur: 'blur 0.4s linear',
      }
    },
    colors: {
      ...colors,
      ...customColors,
      // Should these use the customColors values?
      brandColor: '#b97ecf',
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

export default config
