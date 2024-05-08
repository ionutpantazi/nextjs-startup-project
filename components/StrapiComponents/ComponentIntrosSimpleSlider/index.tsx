import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  StrapiMultiFile,
  StrapiMultiFileFields,
} from 'interfaces'

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';


export type SimpleSlider = {
  id: string,
  Title: string;
  Slides: StrapiMultiFile
}

export interface ComponentIntrosSimpleSliderProps {
  data: SimpleSlider
}

const OuterContainer = styled.div`
  color: ${theme.colors.white};
  margin-bottom: 40px;
`

const Container = styled.div`
  padding: ${theme.margins.homepage_large};
  overflow: hidden;

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
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  margin-bottom: 10px;
  text-align: center;
`

const SwiperContainer = styled.div`
`

const ImageContainer = styled.div`
  height: 600px;

  @media screen and (max-width: ${theme.screens.sm}) {
    height: 300px;
  }
`

const CustomPagination = styled.div`
  .swiper-pagination-bullet {
    background: white;
  }
  .swiper-pagination-bullet-active {
    background: ${theme.colors.brand};
  }

  margin-bottom: 40px;

  @media screen and (max-width: ${theme.screens.sm}) {
    margin-bottom: 20px;
  }
`


const ComponentIntrosSimpleSlider = ({
  data
}: ComponentIntrosSimpleSliderProps) => {
  return (
    <OuterContainer>
      <Container className=''>
        <InnerContainer className='flex flex-col gap-4'>
          <Title>
            {data.Title}
          </Title>
          <CustomPagination className=''>
            <div className="flex justify-center gap-2 swiper-custom-pagination" />
          </CustomPagination>
        </InnerContainer>
      </Container>
      <SwiperContainer className='w-screen'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            el: '.swiper-custom-pagination',
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {data.Slides?.data?.map((image: StrapiMultiFileFields) => (
            <SwiperSlide key={image.id}>
              <ImageContainer>
                <NextImage
                  src={IMAGE_DOMAIN + image.attributes?.url}
                  alt=''
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ImageContainer>
            </SwiperSlide>
          ))
          }
        </Swiper>
      </SwiperContainer>
    </OuterContainer>
  )
}

export default ComponentIntrosSimpleSlider