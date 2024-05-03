import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { ThemeContext } from 'components/Layout';
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  StrapiFile
} from 'interfaces'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import {
  RadialContainer,
} from 'components/Bootstrap/Common'
import FAIcon from 'components/Bootstrap/FAIcon'

export type Tagsprops = {
  id: string
  attributes: {
    Name: string
    Slug: string
  }
}

export type CardProps = {
  id: string,
  Title?: string
  Sub_Title?: string
  Impressions?: string
  Link?: string
  Tags?: {
    data: [Tagsprops]
  }
}

export type CardsCarousel4Props = {
  id: string
  Title: string
  Cards: [CardProps]
}

export interface CardsCarousel4DataProps {
  data: CardsCarousel4Props
}

const CardsCarouselContainer = styled.div`
  padding-top: 40px;
`

const CarouselTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`

const CardsContainer = styled.div`
`

const CardContainer = styled.div`
  border-radius: 6px;
  padding: 10px;
  background-color: ${props => props.theme.components?.CardsCarousel4?.CardContainerBackground};
`

const ImageIcon = styled.div`
  background: ${props => props.theme.colors.brand};
  border-radius: 50%;
  height: 22px;
  width: 22px;
  svg {
    color: ${props => props.theme.colors.white};
  }
`

const CardTitle = styled.div`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const CardSubTitle = styled.div`
  color: ${props => props.theme.colors.lightgrey};
  margin-top: 6px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const AgendaTag = styled.div`
  border-radius: ${props => props.theme.borderRadius.components.xsmall};
  background-color: ${props => props.theme.components?.CardsCarousel4?.AgendaTagBackground};
  padding: 4px;
  font-size: 8px;
  font-weight: 500;
  line-height: 11px;
`

const ButtonsContainer = styled.div`
  margin-top: 6px;
  span {
    padding-left: 4px;
    color: ${props => props.theme.colors.lightgrey};
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
  }
  svg {
    color: ${props => props.theme.colors.brand};
  }
`

const EmptyComponent = styled.div`
  height: 180px;
`

const CardsCarousel4 = ({
  data
}: CardsCarousel4DataProps) => {

  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const isMobile = width && width < Number(theme.screens['md'].replace('px', '')) ? true : false;

  const applyCardStyle = (width: number | undefined, card: CardProps) => {
    let isLarge = false;
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
    <>
      <CardsCarouselContainer className=''>
        <div className='flex flex-row justify-between mb-4 items-center'>
          <CarouselTitle>
            {data.Title}
          </CarouselTitle>
        </div>
        <CardsContainer className=''>
          <Swiper
            spaceBetween={isMobile ? '10%' : 40}
            slidesPerView={'auto'}
          >
            {data.Cards.map((card: CardProps) => (
              <SwiperSlide key={card.id} style={{ 'width': `${applyCardStyle(width, card)?.width}` }}>
                <CardContainer>
                  <div className='flex flex-row gap-1'>
                    <ImageIcon className=''>
                      <FAIcon
                        icon={'fa-leaf'}
                        width={18}
                        height={18}
                      />
                    </ImageIcon>
                    <ImageIcon className=''>
                      <FAIcon
                        icon={'fa-leaf'}
                        width={18}
                        height={18}
                      />
                    </ImageIcon>
                  </div>
                  <CardTitle>
                    {card.Title}
                  </CardTitle>
                  <CardSubTitle>
                    {card.Sub_Title}
                  </CardSubTitle>
                  <div className='flex flex-row gap-1 pt-1'>
                    {card.Tags?.data.map((tag: Tagsprops, index: number) => (
                      <AgendaTag key={index} className=''>
                        {tag.attributes.Name}
                      </AgendaTag>
                    ))
                    }
                  </div>
                  {card.Impressions &&
                    <ButtonsContainer className='flex flex-row gap-4 justify-start items-center'>
                      <div className='flex flex-row items-center'>
                        <FAIcon
                          icon={'fa-heart'}
                          width={16}
                          height={16}
                        />
                        <span>
                          {card.Impressions}
                        </span>
                      </div>
                      <FAIcon
                        icon={'fa-comment-dots'}
                        width={16}
                        height={16}
                      />
                      <FAIcon
                        icon={'fa-share'}
                        width={16}
                        height={16}
                      />
                      <FAIcon
                        icon={'fa-file-pdf'}
                        width={16}
                        height={16}
                      />
                    </ButtonsContainer>
                  }
                </CardContainer>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </CardsContainer>
      </CardsCarouselContainer>
    </>
  )
}

export default CardsCarousel4