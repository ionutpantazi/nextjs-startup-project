
import React, { ReactNode } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import {
  StrapiFile
} from 'interfaces'
import { NavigationData } from 'lib/queries/nav-data'
import { IMAGE_DOMAIN } from 'lib/constants'
import Flex from 'components/Bootstrap/Flex'
import styled from 'styled-components'

const Navbar = dynamic(() => import('components/Navbar'))

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

const Layout = ({
  title,
  children,
  seoMeta,
  navigationData,
}: LayoutProps) => {
  return (
    <Flex flexDirection='column' height='auto'>
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
      <Flex flexDirection='column' flex='1'>
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout