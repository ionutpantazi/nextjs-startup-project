import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  StrapiFile
} from 'interfaces'

import 'swiper/css';
import { useWindowSize } from '@/lib/hooks/useWindowSize';

export type Card = {
  id: string,
  Title: string
  Sub_Title: string
  Type: string
  Image: StrapiFile
}

export type SectionCardsCarousel = {
  id: string,
  Title: string;
  Cards: [
    Card
  ]
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

const CardsContainer = styled.div`
`

const CardContainer = styled.div`
  border-radius: 6px;
  padding: 10px;
  background-color: ${theme.colors.grey};
`

const ImageContainer = styled.div`
  background: ${theme.colors.brand};
  border-radius: 6px;
  height: 150px;
  // width: 250px;
`

const CardTitle = styled.div`
  
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const CardSubTitle = styled.div`
  color: ${theme.colors.lightgrey};
  margin-top: 6px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const RadialContainer = styled.div`
  z-index: 1;
  position: absolute;
  height: 100%;
  width:100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,1));
`

export interface ComponentSectionsCardsCarouselProps {
  data: SectionCardsCarousel
}

const ComponentSectionsCardsCarousel = ({
  data
}: ComponentSectionsCardsCarouselProps) => {

  const { width } = useWindowSize();
  const isMobile = width && width < Number(theme.screens['md'].replace('px', '')) ? true : false;

  const applyCardStyle = (width: number | undefined, card: Card) => {
    let isLarge = card.Type == 'large';
    if (isMobile) {
      return {
        width: isLarge ? '100%' : '45%',
        height: '300px'
      }
    } else return {
      width: isLarge ? '320px' : '160px',
      height: '300px'
    }
  }

  return (
    <Container className=''>
      <InnerContainer className='flex flex-col gap-4'>
        <Title>
          {data.Title}
        </Title>
        <CardsContainer className='w-full'>
          <Swiper
            spaceBetween={isMobile ? '10%' : 40}
            slidesPerView={'auto'}
          >
            {data.Cards.map((card: Card) => (
              <SwiperSlide key={card.id} style={{ 'width': `${applyCardStyle(width, card)?.width}` }}>
                <CardContainer>
                  <ImageContainer className='relative'>
                    {card.Image.data?.attributes?.url &&
                      <>
                        <RadialContainer />
                        <NextImage
                          src={IMAGE_DOMAIN + card.Image.data?.attributes?.url}
                          className=''
                          alt=''
                          fill
                          style={{objectFit:'cover'}}
                        />
                      </>
                    }
                  </ImageContainer>
                  <CardTitle>
                    {card.Title}
                  </CardTitle>
                  <CardSubTitle>
                    {card.Sub_Title}
                  </CardSubTitle>
                </CardContainer>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </CardsContainer>
      </InnerContainer>
    </Container>
  )
}

export default ComponentSectionsCardsCarousel