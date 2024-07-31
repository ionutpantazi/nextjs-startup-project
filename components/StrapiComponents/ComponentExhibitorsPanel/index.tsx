import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router'
import {
  OuterContainer,
  Container,
  InnerContainer,
  RadialContainer,
  SectionTitle,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import Ruler from '@/components/StrapiComponents/PwaComponents/Common/Ruler'
import {
  LeftEventTitle,
} from '@/components/StrapiComponents/PwaComponents/Header/styles'

import 'swiper/css';
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ExhibitorItem, CardWidth } from '../ComponentExhibitorPanel'

export type ComponentExhibitors = {
  id: string,
  title: string,
  header: string,
  items: {
    data: ExhibitorItem[]
  }
}

export interface ComponentExhibitorsPanelProps {
  data: ComponentExhibitors
}

// const Container = styled.div`
//   max-width: 1440px;
//   margin: 0 auto 40px auto;
//   padding: ${theme.margins.homepage_large};
//   color: ${theme.colors.white};
//   overflow: hidden;
//   background-color: #1E1E1E;
//   border-radius: 24px;

//   @media screen and (max-width: ${theme.screens.sm}) {
//     padding: ${theme.margins.homepage_small};
//     margin: 0 auto 20px auto;
//   }
// `

// const InnerContainer = styled.div`
//   margin: 0 auto;
//   padding: 20px 0;
//   max-width: ${theme.pageWidth};
// `

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

const ComponentExhibitorsPanel = ({
  data
}: ComponentExhibitorsPanelProps) => {

  const router = useRouter()

  const { width } = useWindowSize();

  const [exhibitors] = useState<any>(data.items);

  const navigateToItem = (url: string) => {
    const exhibitorUrlRegex = /exhibitor\.aspx\?eid=(\d+)/i;
    
    const isExhibitor = url.match(exhibitorUrlRegex);
    
    if (isExhibitor) {
      router.push(`${router.asPath}/${isExhibitor[1]}`);
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

  return (
    <OuterContainer className=''>
      <Container>
        <InnerContainer className='flex flex-col gap-4'>
          <ComponentContainer>
            <ExhibitorContainer className='w-full grid gap-4'>
              {exhibitors.map((exhibitor: ExhibitorItem) => (
                <ExhibitorCard key={exhibitor.id} style={applyExhibitorCardStyle(exhibitor.cardColumnSize)} onClick={() => navigateToItem(exhibitor.url)}>
                  <ExhibitorIcon className='row-span-1 grid content-end relative'>
                    {exhibitor?.upload &&
                      <>
                        <RadialContainer />
                        <StyledNextImage
                          src={exhibitor.upload.path ?? ""}
                          className=''
                          alt={exhibitor.upload.alt ?? ""}
                          fill
                          style={{objectFit:'cover'}}
                        />
                      </>
                    }
                    <ExhibitorDetails>
                      <ExhibitorTitle>
                        {exhibitor.title}
                      </ExhibitorTitle>
                      <ExhibitorSubtitle>
                        {exhibitor.subtitle}
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

export default ComponentExhibitorsPanel