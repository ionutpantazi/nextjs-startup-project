import React, { useEffect, useState } from 'react'

import { ComponentContainer, Container, InnerContainer, OuterContainer, RadialContainer } from '@/components/Bootstrap/Common'
import {  DownloadPageType, DownloadType } from '@/components/Pages/ContentPages'
import Ruler from '../Common/Ruler'
import { LeftEventTitle } from '../Header/styles'

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
        <OuterContainer className=''>
          <Container className=''>
            <InnerContainer className=''>
              <ComponentContainer className='flex flex-col'>
                <br/>
                <LeftEventTitle>
                  {data.title}
                </LeftEventTitle>
                <Ruler />
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