import React, { useState, useEffect, useContext } from 'react'
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
import {
  CardsCarouselContainer,
  CarouselTitle,
  CarouselShowAll,
  CarouselMoreDetails,
  CardsContainer,
  CardContainer,
  ImageContainer,
  ImageIcon,
  CardTitle,
  CardSubTitle,
  ButtonsContainer,
  CustomPagination,
  ShowAll,
  EmptyComponent,
} from './styles'


const CardsCarousel = ({
  data,
  title,
}: any) => {

  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width && width < Number(theme.screens['md'].replace('px', ''))) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  const applyCardStyle = (width: number | undefined, card: any) => {
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
            {title}
          </CarouselTitle>
          <CarouselShowAll>
            Show all
          </CarouselShowAll>
        </div>
        <CardsContainer className=''>
          <Swiper
            spaceBetween={isMobile ? '10px' : 40}
            slidesPerView={'auto'}
            pagination={{
              el: `.swiper-custom-pagination-pwa-carousel`,
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {data.data.map((card: any, index: number) => (
              <SwiperSlide key={index} style={{ 'width': `${applyCardStyle(width, card)?.width}` }}>
                <CardContainer>
                  <ImageContainer className='relative' hidebackground={'false'}>
                    {card.profilePic &&
                      <>
                        <RadialContainer />
                        <NextImage
                          src={card.profilePic}
                          className=''
                          alt={card.profilePic ?? ''}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </>
                    }
                  </ImageContainer>
                  <CardTitle>
                    {card.firstName} {card.lastName}
                  </CardTitle>
                  <CardSubTitle>
                    {card.company}
                  </CardSubTitle>
                  {card.discussionCount &&
                    <ButtonsContainer className='flex flex-row gap-4 justify-start items-center'>
                      <div className='flex flex-row items-center'>
                        <FAIcon
                          icon={'fa-heart'}
                          width={16}
                          height={16}
                        />
                        <span>
                          {card.discussionCount}
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
                    </ButtonsContainer>
                  }
                </CardContainer>
              </SwiperSlide>
            ))
            }
          </Swiper>
          <CustomPagination className=''>
            <div className={`flex justify-center gap-2 swiper-custom-pagination-pwa-carousel`} />
          </CustomPagination>
        </CardsContainer>
      </CardsCarouselContainer>
    </>
  )
}

export default CardsCarousel