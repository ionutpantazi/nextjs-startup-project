import React, { useState, useEffect, Children } from 'react'
import styled, { css } from 'styled-components'
import Header from '@/components/StrapiComponents/PwaComponents/Header'
import ContentTabDownloads from '@/components/StrapiComponents/PwaComponents/Downloads'
import ContentTabContentOnly from '@/components/StrapiComponents/PwaComponents/ContentOnly'
import ContentTabStream from '@/components/StrapiComponents/PwaComponents/Stream'
import ContentTabPeople from '@/components/StrapiComponents/PwaComponents/People'

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
  title?: string,
  downloads?: Download[]
}

export type Download = {
  id?: string,
  title?: string,
  subtitle?: string,
  shortDesc?: string,
  type?: DownloadType,
  upload?: Upload,
}

export type Upload = {
  id?: string,
  filename?: string,
  path?: string,
  alt?: string,
  ordering?: number,
  link?: string
}

export enum DownloadType {
  Document = 1,
  Image = 2,
  Media = 3,
  Presentation = 4,
  EmailAttachment = 5,
  Link = 6
}

const ContentPages = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
}: any) => {
  console.log(data)

  const getComponent = (type: DownloadPageType) => {
    switch(type) {
      case DownloadPageType.ContentOnly:
        console.log("Loading content only page...");
        return <ContentTabContentOnly data={data.content[0]} />
      case DownloadPageType.Downloads:
        console.log("Loading downloads page...");
        return <ContentTabDownloads data={data.content[0]} />
      case DownloadPageType.People:
        console.log("Loading people page...");
        return <ContentTabPeople data={data.content[0]} subtitle={'Meet our thought leaders'} />
      case DownloadPageType.WallMontage:
        console.log("Loading wall montage page...");
        return <></>
      case DownloadPageType.Stream:
        console.log("Loading stream page...");
        return <ContentTabStream data={data.content} />
      default:
        return <ContentTabContentOnly data={data.content[0]} />
    }
  }

  return (
    <>
      <PwaContentContainer>
        {data && data.content.length > 0 &&
          <>
            <Header headerImage={data.content[0].pageBanner && data.content[0].pageBanner ? data.content[0].pageBanner : data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
            {/* 0 is not being passed through correctly which is why we do these checks */}
            {(data.content[0].type || data.content[0].type === 0) && 
              getComponent(data.content[0].type === 0 ? DownloadPageType.ContentOnly : data.content[0].type) 
            }
          </>
        }
      </PwaContentContainer>
    </>
  )
}

export default ContentPages