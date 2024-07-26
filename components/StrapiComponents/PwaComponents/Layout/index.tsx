
import React, { useState, useEffect, ReactNode } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import {
  StrapiFile
} from 'interfaces'
import { NavigationData } from 'lib/queries/nav-data'
import { IMAGE_DOMAIN } from 'lib/constants'
import Box from 'components/Bootstrap/Box'
import styled from 'styled-components'
import { theme } from 'lib/theme'
import { ThemeProvider } from "styled-components";
import { SettingsProps } from 'lib/queries/settings'

const Navbar = dynamic(() => import('components/Navbar/pwa'))
const Footer = dynamic(() => import('components/Footer/pwa'))
import { getFECookie } from 'utils/helpers'
export const ThemeContext = React.createContext(theme);

const HeaderWrap = styled.header`
  background:transparent;
`

const LayoutContainer = styled.div`
  background-color: ${theme.colors.black};
  font-family: ReadexProRegular;
`



const Layout = ({
  title,
  customTheme,
  children,
  seoMeta,
  navigationData,
  themedata,
  themeMeta,
  settings,
  logo,
}: any) => {

  const defaultThemeData = {
    Name: 'Default',
    Data: theme
  }
  const [isDefaultTheme, setIsDefaultTheme] = useState<string>(customTheme ? 'false' : 'true')
  const [themeData, setThemeData] = useState(customTheme ? customTheme : theme);
  // const [themeDataProp, setThemeDataProp] = useState(customTheme ? themedata : defaultThemeData);
  const [themeDataProp, setThemeDataProp] = useState(customTheme ? themedata : defaultThemeData);

  const handleChildData = (data: any) => {
    if (data?.useDefaultTheme == 'true') {
      setIsDefaultTheme('true')
      setThemeData(theme);
      // setThemeDataProp(defaultThemeData)
    } else {
      setIsDefaultTheme('false')
      setThemeData(customTheme ? customTheme : theme);
      // setThemeDataProp(customTheme ? themedata : theme);
    }
  };

  useEffect(() => {
    let themeSlug = getFECookie('lg-theme');
    if (themeSlug == 'default') {
      setIsDefaultTheme('true')
      setThemeData(theme);
    }
  }, []);

  const PageContentComponents = styled.div`
    background-color: ${themeData.components?.Layout?.PageContentComponentsBackground};
  `

  const FooterWrap = styled.div`
    background-color:  ${themeData.components?.Layout?.FooterWrapBackground};
  `

  return (
    <ThemeProvider theme={themeData}>
      <LayoutContainer className='flex flex-col h-screen'>
        <Head>
          <title>{title}</title>
        </Head>
        <HeaderWrap>
          {navigationData?.header && <Navbar navigationData={navigationData.header} logo={logo} />}
        </HeaderWrap>
        <PageContentComponents className='mb-auto'>
          {React.Children.map(children, child =>
            React.cloneElement(child as React.ReactElement<any>, { senddatatolayout: handleChildData, isdefaulttheme: isDefaultTheme, themedata: themeDataProp, themeMeta: themeMeta })
          )}
        </PageContentComponents>
        <FooterWrap>
          {navigationData?.footer && <Footer navigationData={navigationData.footer} logo={logo} />}
        </FooterWrap>
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default Layout