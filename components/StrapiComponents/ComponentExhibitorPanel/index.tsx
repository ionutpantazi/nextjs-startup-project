import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import { RadialContainer } from '@/components/Bootstrap/Common'
import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router'
import {
  StrapiFile
} from 'interfaces'

import 'swiper/css';
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { SubTitle } from '../PwaComponents/Speakers/styles'
import { Upload } from '@/components/Pages/ContentPages'

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
  videoUrl: string,
  items: {
    data: ExhibitorItem[]
  }
}

export interface ComponentExhibitorPanelProps {
  data: ComponentExhibitor
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto 40px auto;
  padding: ${theme.margins.homepage_large};
  color: ${theme.colors.white};
  overflow: hidden;
  background-color: #1E1E1E;
  border-radius: 24px;

  @media screen and (max-width: ${theme.screens.sm}) {
    padding: ${theme.margins.homepage_small};
    margin: 0 auto 20px auto;
  }
`

const InnerContainer = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  max-width: ${theme.pageWidth};
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 10px;
`

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


const ComponentExhibitorPanel = ({
  data
}: ComponentExhibitorPanelProps) => {
  
  const router = useRouter()

  const { width } = useWindowSize();

  const [exhibitor, setExhibitor] = useState<any>(data);

  useEffect(() => {
    console.log("exhibitor", exhibitor)
  }, [exhibitor])
  
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
    <Container>
      <InnerContainer className='flex flex-col gap-4'>
        <ExhibitorContainer className='w-full grid gap-4'>
          <ExhibitorHeader>
            {data.header}
          </ExhibitorHeader>
          <ExhibitorVideo>
            {data.videoUrl && <video src={data.videoUrl} autoPlay loop muted playsInline controls />}
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
            <ExhibitorCard key={item.id} style={applyExhibitorCardStyle(item.cardColumnSize)}>
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
      </InnerContainer>
    </Container >
  )
}

export default ComponentExhibitorPanel