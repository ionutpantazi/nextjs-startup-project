import React, { useState, useContext } from 'react'
import styled, { css } from 'styled-components'
import { ThemeContext } from 'components/Layout';
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  StrapiFile,
  FAIconProps
} from 'interfaces'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {
  RadialContainer,
} from 'components/Bootstrap/Common'
import { useWindowSize } from '@/lib/hooks/useWindowSize';

export type CardProps = {
  id: string,
  Type: string
  Image: StrapiFile
}

export type CardsCarousel3Props = {
  id: string,
  Cards: [CardProps]
}

export interface CardsCarousel3DataProps {
  data: CardsCarousel3Props
}

const CardsCarousel3Container = styled.div`
  padding-top: 40px;
`

const CardsContainer = styled.div`
`

const CardContainer = styled.div`
  border-radius: ${props => props.theme.borderRadius.components.small};
  background-color: ${props => props.theme.colors.darkestgrey};
`

const ImageContainer = styled.div <{ hidebackground?: any }>`
  ${({ hidebackground }) => css`
    ${props => hidebackground == 'true' ? '' : 'background: ' + props.theme.colors.brand + ';'};
  `}
  border-radius: ${props => props.theme.borderRadius.components.small};
  height: 340px;
  overflow: hidden;
`

const CustomPagination = styled.div`
  .swiper-pagination-bullet {
    background: white;
  }
  .swiper-pagination-bullet-active {
    background: ${props => props.theme.colors.brand};
  }

  padding-top: 30px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding-top: 20px;
    padding-bottom: 40px;
  }
`

const EmptyComponent = styled.div`
  height: 380px;
`

const CardsCarousel3 = ({
  data
}: CardsCarousel3DataProps) => {

  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const isMobile = width && width < Number(theme.screens['md'].replace('px', '')) ? true : false;

  const applyCardStyle = (width: number | undefined, card: CardProps) => {
    let isLarge = card.Type == 'large';
    let isMedium = card.Type == 'medium';
    if (isMobile) {
      return {
        width: isLarge ? '100%' : isMedium ? '70%' : '45%',
        height: '340px'
      }
    } else return {
      width: isLarge ? '500px' : isMedium ? '340px' : '240px',
      height: '340px'
    }
  }

  return (
    <>
      <CardsCarousel3Container className=''>
        <CardsContainer className=''>
          <Swiper
            spaceBetween={isMobile ? '10%' : 40}
            slidesPerView={isMobile ? 1 : 'auto'}
            pagination={{
              el: `.swiper-cardscarousel3-${data.id}`,
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {data.Cards.map((card: CardProps, index: number) => (
              <SwiperSlide key={index} style={{ 'width': `${applyCardStyle(width, card)?.width}` }}>
                <CardContainer className=''>
                  <ImageContainer className='relative' hidebackground={card.Image.data?.attributes?.url ? 'true' : 'false'}>
                    {card.Image.data?.attributes?.url &&
                      <>
                        <RadialContainer />
                        <NextImage
                          src={IMAGE_DOMAIN + card.Image.data?.attributes?.url}
                          className=''
                          alt={card.Image.data?.attributes?.alternativeText ?? ''}
                          fill
                          style={{objectFit:'cover'}}
                        />
                      </>
                    }
                  </ImageContainer>
                </CardContainer>
              </SwiperSlide>
            ))
            }
          </Swiper>
          <CustomPagination className=''>
            <div className={`flex justify-center gap-2 swiper-cardscarousel3-${data.id}`} />
          </CustomPagination>
        </CardsContainer>
      </CardsCarousel3Container>
    </>
  )
}

export default CardsCarousel3