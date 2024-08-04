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
    // navbg?: string
    // font: string
    // font1: string
    // font2: string
    // font3: string
    // font4: string
    // font5: string
    // font6: string
    // font7: string
    // font8: string
    // font9: string
    // backgrounds?: {
    //   layout: string
    //   radial_header_image: string
    //   section_bg: string
    //   header_bg: string
    //   event_details: string
    //   theme_toggle_off: string
    //   carousel1: string
    // }
    // headings: {
    //   h1: string
    // }
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
    xlarge: string
    components: {
      xsmall: string
      small: string
      medium: string
      large: string
    }
  },
  components: any
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
    // brand: '#B97ECF',
    brand: '#d7414f',
    // brandlight: '#ddb7eb',
    brandlight: '#d95b67',
    // navbg: 'white',
    // "font": "white",
    // "font1": "#D9D9D9",
    // "font2": "white",
    // "font3": "#B97ECF",
    // "font4": "#ddb7eb",
    // "font5": "#242424",
    // "font6": "#white",
    // "font7": "#B97ECF",
    // "font8": "#D9D9D9",
    // "font9": "#D9D9D9",
    // "backgrounds": {
    //   "layout": "black",
    //   "radial_header_image": "unset",
    //   "section_bg": "#1E1E1E",
    //   "header_bg": "#1E1E1E",
    //   "event_details": "#121212",
    //   "theme_toggle_off": "#242424",
    //   "carousel1": "#121212"
    // },
    // "headings": {
    //   "h1": "white"
    // }
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
    "xlarge": "34px",
    "components": {
      "xsmall": "2px",
      "medium": "12px",
      "small": "8px",
      "large": "24px"
    }
  },
  "components": {
    "Navbar": {
      "NavigationContainerBackground": "white",
      "BtnRadius": "24px",
    },
    "Layout": {
      "PageContentComponentsBackground": "black",
      "FooterWrapBackground": "black"
    },
    "Common": {
      "OuterContainerColor": "white",
      "ContainerColor": "white",
      "ContainerPadding": "0px 20px",
      "InnerContainerMaxWidth": "1440px",
      "ComponentContainerBorder": "24px",
      "ComponentContainerBackground": "#1E1E1E",
      "ComponentContainerCorner": "hide",
      "ComponentTitle": "white",
      "ComponentIntro": "white",
      "HorizontalRuler": "white"
    },
    "Header": {
      "StyledRadialContainer": "false",
      "IntroLandingContainerBackground": "#1E1E1E",
      "EventTitleColor": "#B97ECF", //brand
      "EventDetailsBackground": "#242424",
      "EventDetailsSubTitle": "#D9D9D9",
      "IWantToItemTitleColor": "white",
      "ToggleOff": "#242424",
      // "ImageContainerHeight": "500px",
      // "ImageContainerMobileHeight": "200px",
      "ImageContainerHeight": "24vw",
      "ImageContainerMobileHeight": "24vw",
      "HeaderImageHeight": "500px",
      "HeaderImageMobileHeight": "200px",
      "ImageContainerMarginTop": "0px",
      "ImageContainerMarginTopMobile": "56px"
    },
    "TextAndIcons": {
      "DescriptionContainerColor": "#D9D9D9",
    },
    "CardsCarousel": {
      "CardContainerBacground": "#121212",
      "CarouselShowAllColor": "#D9D9D9",
      "CarouselShowAllHoverColor": "#D9D9D9",
      "ShowAllColor": "#D9D9D9",
      "ShowAllHoverColor": "#242424",
      "CardSubTitleColor": "#A7A7A7",
      "ButtonsContainerColor": "#A7A7A7"
    },
    "Lists": {
      "ReadMoreColor": "#B97ECF",
      "ImageIconSvgColor": "#white",
      "ImageIconSvgHoverColor": "#white",
      "StyledImageIconBackground": "#242424",
      "StyledTextImageIconBackground": "#242424",
      "StyledTextImageIconHoverColor": "#white",
      "ShowAllColor": "#B3B3B3",
      "ShowAllHoverColor": "#A7A7A7"
    },
    "Video": {
      "VideoContainerBackground": "#1E1E1E",
      "CategoryBackground": "black",
      "ListItemBackground": "#242424",
      "ListItemHoverColor": "#242424",
      "ShowAllColor": "#B3B3B3",
      "ShowAllHoverColor": "#A7A7A7"
    },
    "CardsCarousel4": {
      "CardContainerBackground": "#121212",
      "AgendaTagBackground": "#1E1E1E"
    },
    "Section1": {
      "StyledFirstColumnBackgroundColor": "#242424",
      "StyledSecondColumnBackgroundColor": "#242424",
      "Section4ShowAllColor": "#D9D9D9",
      "Section4ShowAllHoverColor": "#A7A7A7"
    },
    "Section4": {
      "FirstColumnBackgroundColor": "#1E1E1E",
      "SecondColumnBackgroundColor": "#1E1E1E"
    },
    "CardsCarousel6": {
      "CarouselShowAllColor": "#D9D9D9",
      "CarouselShowAllHoverColor": "#A7A7A7",
      "CardContainerBackground": "#121212"
    },
    "Discussion": {
      "Divider": "black",
      "CommentTextColor": "#D9D9D9"
    },
    "FAQs": {
      "CategoryActiveBackground": "#B97ECF", //brand
      "CategoryBackground": "#1E1E1E",
      "FaqItemBackground": "#1E1E1E"
    },
    "Footer": {
      "FooterContainerBackground": "#1E1E1E"
    },
    "Agenda": {
      "AgendaItemBackground": "#242424",
      "AgendaItemDateBackground": "#1E1E1E"
    }
  }
}
