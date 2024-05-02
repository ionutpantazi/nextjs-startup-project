
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

const Navbar = dynamic(() => import('components/Navbar'))
const Footer = dynamic(() => import('components/Footer'))
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
  navigationData?: NavigationData
}

const HeaderWrap = styled.header`
  background:transparent;
`

const FooterWrap = styled.div`
  background-color: ${theme.colors.black};
`

const LayoutContainer = styled.div`
  background-color: ${theme.colors.black};
`



const Layout = ({
  title,
  customTheme,
  children,
  seoMeta,
  navigationData,
  themedata,
}: LayoutProps) => {

  const defaultThemeData = {
    Name: 'Default',
    Data: theme
  }
  const [isDefaultTheme, setIsDefaultTheme] = useState<boolean>(customTheme ? false : true)
  const [themeData, setThemeData] = useState(customTheme ? customTheme : theme);
  // const [themeDataProp, setThemeDataProp] = useState(customTheme ? themedata : defaultThemeData);
  const [themeDataProp, setThemeDataProp] = useState(customTheme ? themedata : defaultThemeData);

  const handleChildData = (data: any) => {
    if (data?.useDefaultTheme == true) {
      setIsDefaultTheme(true)
      setThemeData(theme);
      // setThemeDataProp(defaultThemeData)
    } else {
      setIsDefaultTheme(false)
      setThemeData(customTheme ? customTheme : theme);
      // setThemeDataProp(customTheme ? themedata : theme);
    }
  };

  const PageContentComponents = styled.div`
    background-color: ${themeData.colors.backgrounds?.layout};
  `

  return (
    <ThemeProvider theme={themeData}>
      <LayoutContainer className='flex flex-col h-screen'>
        <Head>
          <title>{title}</title>
          {seoMeta?.metaViewport && <meta name='viewport' content={seoMeta?.metaViewport} />}
          {seoMeta?.metaRobots && <meta name='robots' content={seoMeta?.metaRobots} />}
          {seoMeta?.canonicalURL && <link rel='canonical' href={seoMeta?.canonicalURL} />}
          {seoMeta?.metaDescription && <meta name='description' content={seoMeta?.metaDescription} />}
          {seoMeta?.metaImage?.data &&
            <>
              <meta property='og:image' content={IMAGE_DOMAIN + seoMeta?.metaImage?.data?.attributes?.url} />
              <meta property='og:image:width' content={seoMeta?.metaImage?.data?.attributes?.width} />
              <meta property='og:height' content={seoMeta?.metaImage?.data?.attributes?.height} />
            </>
          }
        </Head>
        <HeaderWrap>
          {navigationData && <Navbar navigationData={navigationData.data.attributes.Header_Navigation} />}
        </HeaderWrap>
        <PageContentComponents className='mb-auto'>
          {React.Children.map(children, child =>
            React.cloneElement(child as React.ReactElement<any>, { senddatatolayout: handleChildData, isdefaulttheme: isDefaultTheme, themedata: themeDataProp })
          )}
        </PageContentComponents>
        <FooterWrap>
          {navigationData && <Footer navigationData={navigationData} />}
        </FooterWrap>
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default Layout