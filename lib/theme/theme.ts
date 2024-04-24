// Extend the styled-component DefaultTheme with our extended SDS theme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}

export interface Theme {
  colors: {
    white: string
    grey: string
    lightgrey: string
    darkgrey: string
    darkestgrey: string
    black: string
    brand: string
    brandlight: string
  },
  screens: {
    sm: string,
    md: string,
    lg: string,
    xl: string,
    '2xl': string,
  },
  margins: {
    homepage_small: string,
    homepage_medium: string,
    homepage_large: string,
    small: string,
    medium: string,
    large: string,
  },
  pageWidth: string,
  borderRadius: {
    components: {
      small: string
      large: string
    }
  }
}

export const theme: Theme = {
  colors: {
    white: '#fff',
    grey: '#1E1E1E',
    lightgrey: '#A7A7A7',
    darkgrey: '#242424',
    darkestgrey: '#121212',
    black: '#000000',
    brand: '#B97ECF',
    brandlight: '#ddb7eb',
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  margins: {
    homepage_small: '0px 20px',
    homepage_medium: '0px 60px',
    homepage_large: '0px 80px',
    small: '0px 20px',
    medium: '0px 60px',
    large: '0px 80px',
  },
  pageWidth: '1440px',
  "borderRadius": {
    "components": {
      "small": "8px",
      "large": "24px"
    }
  }
}
