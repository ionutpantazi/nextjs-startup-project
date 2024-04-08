// Extend the styled-component DefaultTheme with our extended SDS theme
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme { }
}

export interface Theme {
  colors: {
    white: string
  }
}

export const theme: Theme = {
  colors: {
    white: '#fff',
  }
}
