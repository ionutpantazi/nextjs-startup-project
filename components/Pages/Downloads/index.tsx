import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import ComponentStreamPanel from '@/components/StrapiComponents/ComponentStreamPanel'
import Header from '@/components/StrapiComponents/PwaComponents/Header'
import ComponentDownloadsPanel from '@/components/StrapiComponents/ComponentDownloadsPanel'

export const components = {
  ComponentDownloadsPanel: dynamic(() => import('@/components/StrapiComponents/ComponentStreamPanel/index')),
};

const PwaContentContainer = styled.div`
`

export enum DownloadPageType {
  ContentOnly,
  Downloads,
  People,
  WallMontage,
  Stream,
}

export type DownloadCategory = {
  id: string,
  title: string,
  downloads: Download[]
}

export type Download = {
  id: string,
  title: string,
  subtitle?: string,
  type: DownloadType,
  image: string,
  url?: string
}

export enum DownloadType {
  Document,
  Image,
  Media,
  Presentation,
  EmailAttachment,
  Link
}

const Downloads = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
  navigationData,
}: any) => {
  console.log(data)

  const getComponentPanel = (type: DownloadPageType) => {
    switch(type) {
      case DownloadPageType.ContentOnly:
        return <></>
      case DownloadPageType.Downloads:
        return <ComponentDownloadsPanel data={data.downloads} />
      case DownloadPageType.People:
        return <></>
      case DownloadPageType.WallMontage:
        return <></>
      case DownloadPageType.Stream:
        return <></>
    }
  }

  return (
    <>
      <PwaContentContainer>
        <Header title={data.downloads.title} headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        {data &&
          getComponentPanel(data.downloads.type)
        }
      </PwaContentContainer>
    </>
  )
}

export default Downloads