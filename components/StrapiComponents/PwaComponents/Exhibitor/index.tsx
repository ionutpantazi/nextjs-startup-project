import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import { ComponentContainer, Container, InnerContainer, OuterContainer, RadialContainer } from '@/components/Bootstrap/Common'
import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router'
import {
  StrapiFile
} from 'interfaces'

import 'swiper/css';
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { Upload } from '@/components/Pages/ContentPages'
import { LeftEventTitle } from '../Header/styles'
import Ruler from '../Common/Ruler'

export const enum CardWidth {
  full,
  half,
  quarter
}

export type ExhibitorItem = {
  id: string,
  title: string,
  subtitle: string,
  url: string,
  cardColumnSize: number,
  target: string,
  order: number,
  upload: Upload
}

export type ComponentExhibitor = {
  id: string,
  title: string;
  subtitle: string;
  header: string,
  description: string,
  contact: string,
  videoURL: string,
  items: {
    data: ExhibitorItem[]
  }
}

export interface ComponentExhibitorPanelProps {
  data: ComponentExhibitor
}

const ExhibitorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
`

const ExhibitorCard = styled.div`
  margin: 0 auto;
  height: 308px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`

const ExhibitorDetails = styled.div`
  z-index: 2;
`

const StyledNextImage = styled(NextImage)`
`

const ExhibitorTitle = styled.div`
  z-index: 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

const ExhibitorSubtitle = styled.div`
  z-index: 2;
  font-size: 14px;
  font-weight: 300;
  line-height: 29px;
`

const ExhibitorIcon = styled.div`
  z-index: 2;
  padding: 10px 10px 20px 10px;
  height: 100%;
`

const ExhibitorHeader = styled.div`
`

const ExhibitorVideo = styled.div`
`

const ExhibitorDescContactContainer = styled.div`
  display: flex;
  padding-bottom: 1rem;
  gap: 1rem;
`

const ExhibitorDescription = styled.div`
`

const ExhibitorContact = styled.div`
  flex: 0 0 25%;
  display: flex;
  justify-content: right;
  align-items: center;
`

const ExhibitorContactInner = styled.div`
  background-color: ${props => props.theme.colors.brandlight};
  text-align: right;
  padding: 1rem;
  border-radius: 6px;
`

export const SubTitle = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 300;
  line-height: 22px;
  color: ${props => props.theme.colors.white};
  padding-top: 20px;
`

const ComponentExhibitorPanel = ({
  data
}: ComponentExhibitorPanelProps) => {
  
  const router = useRouter()

  const { width } = useWindowSize();

  const [exhibitor, setExhibitor] = useState<any>(data);

  const navigateToItem = (url: string, target: string) => {
    console.log("Test", url, target);
    if (!url) return;

    const exhibitorUrlRegex = /exhibitor\.aspx\?eid=(\d+)/i;
    
    const isExhibitor = url.match(exhibitorUrlRegex);
    
    if (isExhibitor) {
      console.log("isExhibitor", isExhibitor);
      router.push(`${router.asPath}/${isExhibitor[1]}`);
    } else {
      console.log("isExhibitor", isExhibitor);
      window.open(url, target);
    }
  }
  
  const applyExhibitorCardStyle = (columnSize: number) => {
    switch (columnSize) {
      case 12:
        return {
          flex: '0 0 100%',
          height: '600px',
          'border-radius': '10px'
        };
      case 6:
        if(width && width < Number(theme.screens['lg'].replace('px', '')))
        {
          return {
            flex: '0 0 100%',
            height: '320px',
            'border-radius': '10px'
          };
        } else {
          return {
            flex: '0 0 calc(50% - 8px)',
            'min-width': '360px',
            height: '320px',
            'border-radius': '10px'
          };
        }
      case 3:
        if (width &&  width > Number(theme.screens['sm'].replace('px', '')) && width < Number(theme.screens['lg'].replace('px', '')))
        {
          return {
            flex: '0 0 calc(50% - 8px)',
            height: '320px',
            'border-radius': '10px'
          };
        } else if (width && width < Number(theme.screens['sm'].replace('px', ''))) {
          return {
            flex: '0 0 100%',
            height: '320px',
            'border-radius': '10px'
          };
        } else {
          return {
            flex: '0 0 calc(25% - 12px)',
            height: '320px',
            'border-radius': '10px'
          };
        }
    }
  }
  
  const applyDescContactContainerStyle = () => {
    
    if(width && width < Number(theme.screens['lg'].replace('px', ''))) {
      return {
        display: 'flex',
        'flex-direction': 'column',
      };
    } 
  }
  
  const applyContactInnerStyle = () => {
    
    if(width && width < Number(theme.screens['lg'].replace('px', ''))) {
      return {
        'width': '100%',
      };
    }
  }

  return (
    <OuterContainer className=''>
      <Container>
        <InnerContainer className='flex flex-col gap-4'>
          <ComponentContainer>
            <LeftEventTitle>
              {data.title}
            </LeftEventTitle>
            <Ruler />
            <ExhibitorContainer className='w-full grid gap-4'>
              <ExhibitorHeader>
                {data.header}
              </ExhibitorHeader>
              <ExhibitorVideo>
                {data.videoURL && <video src={data.videoURL} autoPlay loop muted playsInline controls />}
              </ExhibitorVideo>
              <SubTitle>
                {data.subtitle}
              </SubTitle>
              <ExhibitorDescContactContainer style={applyDescContactContainerStyle()}>
                <ExhibitorDescription dangerouslySetInnerHTML={{__html: data.description}}>
                </ExhibitorDescription>
                <ExhibitorContact>
                  <ExhibitorContactInner style={applyContactInnerStyle()} dangerouslySetInnerHTML={{__html: data.contact}} />
                </ExhibitorContact>
              </ExhibitorDescContactContainer>

              {exhibitor.items && exhibitor.items.map((item: ExhibitorItem) => (
                <ExhibitorCard key={item.id} style={applyExhibitorCardStyle(item.cardColumnSize)} onClick={() => navigateToItem(item.url, item.target)}>
                  <ExhibitorIcon className='row-span-1 grid content-end relative'>
                    {item?.upload &&
                      <>
                        <RadialContainer />
                        <StyledNextImage
                          src={item.upload.path ?? ""}
                          className=''
                          alt={item.upload.alt ?? ""}
                          fill
                          style={{objectFit:'cover'}}
                        />
                      </>
                    }
                    <ExhibitorDetails>
                      <ExhibitorTitle>
                        {item.title}
                      </ExhibitorTitle>
                      <ExhibitorSubtitle>
                        {item.subtitle}
                      </ExhibitorSubtitle>
                    </ExhibitorDetails>
                  </ExhibitorIcon>
                </ExhibitorCard>
              ))
              }
            </ExhibitorContainer>
          </ComponentContainer>
        </InnerContainer>
      </Container >
    </OuterContainer>
  )
}

export default ComponentExhibitorPanel