// Extend the styled-component DefaultTheme with our extended SDS theme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}

export interface Theme {
  colors: {
    white?: string
    grey?: string
    grey1?: string
    lightgrey?: string
    darkgrey?: string
    darkestgrey?: string
    black?: string
    brand?: string
    brandlight?: string
    branddark?: string
    navbg?: string
    font: string
    font1: string
    font2: string
    font3: string
    font4: string
    font5: string
    font6: string
    font7: string
    font8: string
    font9: string
    backgrounds?: {
      layout: string
      radial_header_image: string
      section_bg: string
      header_bg: string
      event_details: string
      theme_toggle_off: string
      carousel1: string
    }
    headings: {
      h1: string
    }
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
    xsmall: string
    small: string
    medium: string
    large: string
    components: {
      xsmall: string
      small: string
      medium: string
      large: string
    }
  }
}

export const theme: Theme = {
  colors: {
    white: '#fff',
    grey: '#1E1E1E',
    "grey1": "#D9D9D9",
    lightgrey: '#A7A7A7',
    darkgrey: '#242424',
    darkestgrey: '#121212',
    black: '#000000',
    brand: '#B97ECF',
    brandlight: '#ddb7eb',
    navbg: 'white',
    "font": "white",
    "font1": "#D9D9D9",
    "font2": "white", 
    "font3": "#B97ECF",
    "font4": "#ddb7eb",
    "font5": "#242424",
    "font6": "#white",
    "font7": "#B97ECF",
    "font8": "#D9D9D9",
    "font9": "#D9D9D9",
    "backgrounds": {
      "layout": "black",
      "radial_header_image": "unset",
      "section_bg": "#1E1E1E",
      "header_bg": "#1E1E1E",
      "event_details": "#121212",
      "theme_toggle_off": "#242424",
      "carousel1": "#121212"
    },
    "headings": {
      "h1": "white"
    }
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
    "xsmall": "2px",
    "medium": "12px",
    "small": "8px",
    "large": "24px",
    "components": {
      "xsmall": "2px",
      "medium": "12px",
      "small": "8px",
      "large": "24px"
    }
  }
}
