import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import { RadialContainer } from '@/components/Bootstrap/Common'
import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  StrapiFile
} from 'interfaces'

import 'swiper/css';
import { useWindowSize } from '@/lib/hooks/useWindowSize';


export type Exhibitor = {
  id: string,
  attributes: {
    Title: string,
    Subtitle: string
    Image: StrapiFile
  }
}

export type SectionsSectionExhibitorsCarousel = {
  id: string,
  Title: string;
  Exhibitors: {
    data: Exhibitor[]
  }
}

export interface ComponentSectionsExhibitorsCarouselProps {
  data: SectionsSectionExhibitorsCarousel
}

const Container = styled.div`
  padding: ${theme.margins.homepage_large};
  color: ${theme.colors.white};
  overflow: hidden;
  margin-bottom: 40px;

  @media screen and (max-width: ${theme.screens.sm}) {
    padding: ${theme.margins.homepage_small};
    margin-bottom: 20px;
  }
`

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: ${theme.pageWidth};
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 10px;
`

const ExhibitorContainer = styled.div`
`

const ExhibitorCard = styled.div`
  height: 308px;
`

const ExhibitorDetails = styled.div`
  z-index: 2;
`

const StyledNextImage = styled(NextImage)`
  border-radius: 6px;
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
  border-radius: 6px;

  // width: 250px;
  // height: 320px;
`

const ComponentSectionsExhibitorCarousel = ({
  data
}: ComponentSectionsExhibitorsCarouselProps) => {

  const { width } = useWindowSize();

  const [exhibitors, setExhibitors] = useState<any>(data.Exhibitors.data);
  
  const applySpeakerIconStyle = (width: number | undefined, exhibitor: Exhibitor) => {
    if (width && width < Number(theme.screens['md'].replace('px', ''))) {
      return {
        width: '100%',
        height: '300px'
      }
    } else return {
      width: '400px',
      height: '300px'
    }
  }

  return (
    <Container className=''>
      <InnerContainer className='flex flex-col gap-4'>
        <Title>
          {data.Title}
        </Title>
        <ExhibitorContainer className='w-full'>
          <Swiper
            spaceBetween={50}
            slidesPerView={'auto'}
          >
            {exhibitors.map((exhibitor: Exhibitor) => (
              <SwiperSlide key={exhibitor.id} style={{ 'width': `${applySpeakerIconStyle(width, exhibitor)?.width}` }}>
                <ExhibitorCard className={`grid grid-rows-4 grid-cols-2 grid-flow-col gap-2`}>
                  <ExhibitorIcon className='row-span-4 col-span-2 grid content-end relative'>
                    {exhibitor?.attributes?.Image?.data?.attributes?.url &&
                      <>
                        <RadialContainer />
                        <StyledNextImage
                          src={IMAGE_DOMAIN + exhibitor.attributes.Image.data.attributes.url}
                          className=''
                          alt={exhibitor.attributes.Image.data.attributes.alternativeText ?? ""}
                          fill
                          style={{objectFit:'cover'}}
                        />
                      </>
                    }
                    <ExhibitorDetails>
                      <ExhibitorTitle>
                        {exhibitor.attributes.Title}
                      </ExhibitorTitle>
                      <ExhibitorSubtitle>
                        {exhibitor.attributes.Subtitle}
                      </ExhibitorSubtitle>
                    </ExhibitorDetails>
                  </ExhibitorIcon>
                </ExhibitorCard>
              </SwiperSlide>
            ))
            }
          </Swiper>

        </ExhibitorContainer>
      </InnerContainer>
    </Container >
  )
}

export default ComponentSectionsExhibitorCarousel