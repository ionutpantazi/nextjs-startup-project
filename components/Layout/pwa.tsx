
import React, { useState, ReactNode } from 'react'
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
const Navbar2 = dynamic(() => import('components/Navbar'))
const Footer2 = dynamic(() => import('components/Footer'))
export const ThemeContext = React.createContext(theme);

type LayoutProps = {
  title: string
  children?: ReactNode
  customTheme?: any
  themedata?: any
  seoMeta?: {
    canonicalURL?: string
    keywords?: string
    metaDescription?: string
    metaImage?: StrapiFile
    metaRobots?: string
    metaTitle?: string
    metaViewport?: string
  }
  navigationData?: any
  settings?: SettingsProps
  logo?: any
}

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
  settings,
  logo,
}: LayoutProps) => {

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
          {navigationData?.data && <Navbar2 navigationData={navigationData.data.attributes.Header_Navigation} questions={settings?.Registration_Questions} />}
          {navigationData?.header && <Navbar navigationData={navigationData.header} logo={logo} />}
        </HeaderWrap>
        <PageContentComponents className='mb-auto'>
          {React.Children.map(children, child =>
            React.cloneElement(child as React.ReactElement<any>, { senddatatolayout: handleChildData, isdefaulttheme: isDefaultTheme, themedata: themeDataProp })
          )}
        </PageContentComponents>
        <FooterWrap>
          {navigationData?.data && <Footer2 navigationData={navigationData.data.attributes.Footer_Navigation} />}
          {navigationData?.footer && <Footer navigationData={navigationData.footer} logo={logo} />}
        </FooterWrap>
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default Layout