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

export type CardProps = {
  id: string,
  Title: string
  Sub_Title: string
  Type: string
  Impressions: string
  Link: string
  Image: StrapiFile
}

export type CardsCarouselProps = {
  id: string
  Title: string
  Cards: [CardProps]
}

export interface CardsCarouselDataProps {
  data: CardsCarouselProps
}

const CardsCarouselContainer = styled.div`
  padding-top: 40px;
`

const CarouselTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`

const CarouselShowAll = styled.div`
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  color: ${props => props.theme.colors.grey1};

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.lightgrey};
  }
`

const CarouselMoreDetails = styled(CarouselShowAll)`
  position: absolute;
  right: 16px;
`

const CardsContainer = styled.div`
  width: 100vw;
  position: absolute;
  left: 0;
  height: 200px;
`

const CardContainer = styled.div`
  border-radius: 6px;
  padding: 10px;
  background-color: ${props => props.theme.colors.darkestgrey};
`

const ImageContainer = styled.div <{ hidebackground?: any }>`
  ${({ hidebackground }) => css`
    ${props => hidebackground == 'true' ? '' : 'background: ' + props.theme.colors.brand + ';'};
  `}
  border-radius: ${props => props.theme.borderRadius.components.small};
  height: 150px;
  overflow: hidden;
`

const ImageIcon = styled.div`
  background: ${props => props.theme.colors.brand};
  border-radius: 50%;
  height: 22px;
  width: 22px;
  position: relative;
  z-index: 2;
  margin-left: 10px;
  margin-top: -10px;
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
  -webkit-line-clamp: 1;
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
  }
`

const EmptyComponent = styled.div`
  height: 350px;
`

const CardsCarousel = ({
  data
}: CardsCarouselDataProps) => {

  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const isMobile = width && width < Number(theme.screens['md'].replace('px', '')) ? true : false;

  const applyCardStyle = (width: number | undefined, card: CardProps) => {
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
    <>
      <CardsCarouselContainer className=''>
        <div className='flex flex-row justify-between mb-4 items-center'>
          <CarouselTitle>
            {data.Title}
          </CarouselTitle>
          <CarouselShowAll>
            Show all
          </CarouselShowAll>
        </div>
        <CardsContainer className=''>
          <Swiper
            spaceBetween={isMobile ? '10%' : 40}
            slidesPerView={'auto'}
            pagination={{
              el: `.swiper-custom-pagination-${data.id}`,
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {data.Cards.map((card: CardProps) => (
              <SwiperSlide key={card.id} style={{ 'width': `${applyCardStyle(width, card)?.width}` }}>
                <CardContainer>
                  <ImageContainer className='relative' hidebackground={card.Image.data?.attributes?.url ? 'true' : 'false'}>
                    {card.Image.data?.attributes?.url &&
                      <>
                        <RadialContainer />
                        <NextImage
                          src={IMAGE_DOMAIN + card.Image.data?.attributes?.url}
                          className=''
                          alt={card.Image.data?.attributes?.alternativeText ?? ''}
                          layout='fill'
                          objectFit='cover'
                        />
                      </>
                    }
                  </ImageContainer>
                  {!card.Link &&
                    <ImageIcon className=''>
                      <FAIcon
                        icon={'fa-leaf'}
                        width={18}
                        height={18}
                      />
                    </ImageIcon>
                  }
                  <CardTitle>
                    {card.Title}
                  </CardTitle>
                  <CardSubTitle>
                    {card.Sub_Title}
                  </CardSubTitle>
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
                    {card.Link &&
                      <CarouselMoreDetails>
                        More Details
                      </CarouselMoreDetails>
                    }
                  </ButtonsContainer>
                </CardContainer>
              </SwiperSlide>
            ))
            }
          </Swiper>
          <CustomPagination className=''>
            <div className={`flex justify-center gap-2 swiper-custom-pagination-${data.id}`} />
          </CustomPagination>
        </CardsContainer>
      </CardsCarouselContainer>
      <EmptyComponent />
    </>
  )
}

export default CardsCarousel