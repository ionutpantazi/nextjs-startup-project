import React, { useState, useContext } from 'react'
import styled, { css } from 'styled-components'
import { ThemeContext } from 'components/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import {
  StrapiFile,
  FAIconProps,
} from 'interfaces'
import {
  OuterContainer,
  Container,
  InnerContainer,
  RadialContainer,
  SectionTitle,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import FAIcon from 'components/Bootstrap/FAIcon'
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import TextAndIcons, { TextAndIconsProps } from 'components/StrapiComponents/ComponentSectionsSection1/TextAndIcons'
import Discussion, { DiscussionProps } from 'components/StrapiComponents/ComponentSectionsSection1/Discussion'
import CardsCarousel, { CardsCarouselProps } from 'components/StrapiComponents/ComponentSectionsSection1/CardsCarousel'
import CardsCarousel4, { CardsCarousel4Props } from 'components/StrapiComponents/ComponentSectionsSection1/CardsCarousel4'
import CardsCarousel5, { CardsCarousel5Props } from 'components/StrapiComponents/ComponentSectionsSection1/CardsCarousel5'

export type Section1Props = {
  id: string,
  TextAndIcons: TextAndIconsProps
  CardsCarousel: CardsCarouselProps
  CardsCarousel4: CardsCarousel4Props
  CardsCarousel5: CardsCarousel5Props
  Discussion: DiscussionProps
}

export interface ComponentSectionsSection1Props {
  data: Section1Props
  senddatatolayout?: any
  isdefaulttheme?: any
}

const ComponentSectionsSection1 = ({
  data
}: ComponentSectionsSection1Props) => {

  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            {data.TextAndIcons &&
              <TextAndIcons data={data.TextAndIcons}/>
            }
            {data.CardsCarousel5 &&
              <CardsCarousel5 data={data.CardsCarousel5} />
            }
            {data.CardsCarousel4 &&
              <CardsCarousel4 data={data.CardsCarousel4} />
            }
            {data.CardsCarousel &&
              <CardsCarousel data={data.CardsCarousel}/>
            }
            {data.Discussion &&
              <Discussion data={data.Discussion} />
            }
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentSectionsSection1