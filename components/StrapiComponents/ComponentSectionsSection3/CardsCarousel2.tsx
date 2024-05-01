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
import FAIcon from 'components/Bootstrap/FAIcon'
import { useWindowSize } from '@/lib/hooks/useWindowSize';

export type CardProps = {
  id: string,
  Title: string
  FAIcon: FAIconProps
}

export type CardsCarousel2Props = {
  id: string,
  Cards: [CardProps]
}

export interface CardsCarousel2DataProps {
  data: CardsCarousel2Props
}

const CardsCarousel2Container = styled.div`
  padding-top: 40px;
`

const CardsContainer = styled.div`
`

const CardContainer = styled.div`
  border-radius: ${props => props.theme.borderRadius.components.small};
  padding: 10px;
  background-color: ${props => props.theme.colors.darkestgrey};
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
  svg {
    color: ${props => props.theme.colors.brand};
  }

  &:hover {
    svg {
      color: ${props => props.theme.colors.brandlight};
    }
  }
`

const EmptyComponent = styled.div`
  height: 30px;
`

const CardsCarousel2 = ({
  data
}: CardsCarousel2DataProps) => {

  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const isMobile = width && width < Number(theme.screens['md'].replace('px', '')) ? true : false;

  return (
    <>
      <CardsCarousel2Container className=''>
        <CardsContainer className=''>
          <Swiper
            spaceBetween={isMobile ? '10%' : 40}
            slidesPerView={isMobile ? 1 : 'auto'}
          >
            {data.Cards.map((card: CardProps) => (
              <SwiperSlide key={card.id} style={{ width: 'fit-content' }}>
                <CardContainer as='a' href='#' className='flex flex-row items-center gap-4'>
                  {card?.FAIcon?.Icon &&
                    <FAIcon
                      icon={card?.FAIcon?.Icon}
                      width={Number(card.FAIcon.Width)}
                      height={Number(card.FAIcon?.Width)}
                    />
                  }
                  <span>
                    {card.Title}
                  </span>
                </CardContainer>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </CardsContainer>
      </CardsCarousel2Container>
    </>
  )
}

export default CardsCarousel2