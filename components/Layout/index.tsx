
import React, { ReactNode } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import {
  StrapiFile
} from 'interfaces'
import { NavigationData } from 'lib/queries/nav-data'
import { IMAGE_DOMAIN } from 'lib/constants'
import Box from 'components/Bootstrap/Box'
import styled from 'styled-components'

const Navbar = dynamic(() => import('components/Navbar'))
const Footer = dynamic(() => import('components/Footer'))

type LayoutProps = {
  title: string
  children?: ReactNode
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
`

const Layout = ({
  title,
  children,
  seoMeta,
  navigationData,
}: LayoutProps) => {
  return (
    <div className='flex flex-col h-screen'>
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
        {navigationData && <Navbar navigationData={navigationData} />}
      </HeaderWrap>
      <Box className='mb-auto'>
        {children}
      </Box>
      {navigationData && <Footer navigationData={navigationData} />}
    </div>
  )
}

export default Layout