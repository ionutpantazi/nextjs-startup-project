import React, { useEffect, useState } from 'react'

import { ComponentContainer, Container, InnerContainer, OuterContainer, RadialContainer } from '@/components/Bootstrap/Common'
import { DownloadCategory, DownloadPageType, DownloadType } from '@/components/Pages/ContentPages'
import { Title } from '../Speakers/styles'

export interface ContentOnlyProps {
  data: ContentOnly
}

export type ContentOnly = {
  id: string,
  title?: string,
  header?: string,
  footer?: string,
  linkedAgendaItem?: string,
  type: DownloadPageType
}

const ContentTabContentOnly = ({
    data
  }: ContentOnlyProps) => {
    console.log(data)
    return (
      <>
        <OuterContainer>
          <Container>
            <InnerContainer>
              <br/>
              <ComponentContainer>
                {data.header &&
                  <div dangerouslySetInnerHTML={{__html: data.header}}/>
                }
              </ComponentContainer>
            </InnerContainer>
          </Container>
        </OuterContainer>
      </>
    )
  }
  
  export default ContentTabContentOnly