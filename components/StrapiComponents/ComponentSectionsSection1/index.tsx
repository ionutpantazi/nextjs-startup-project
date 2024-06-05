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
import Lists, { ListsProps } from 'components/StrapiComponents/ComponentSectionsSection2/Lists'
import Section4, { Section4Props } from 'components/StrapiComponents/ComponentSectionsSection1/Section4'
import Spacer, { SpacerProps } from 'components/StrapiComponents/ComponentSectionsSection1/Spacer'

export type Section1Props = {
  id: string,
  TextAndIcons: TextAndIconsProps
  CardsCarousel: CardsCarouselProps
  CardsCarousel4: CardsCarousel4Props
  CardsCarousel5: CardsCarousel5Props
  Discussion: DiscussionProps
  Lists?: ListsProps
  Section4?: Section4Props
  Spacer?: {
    data: [SpacerProps]
  }
}

export interface ComponentSectionsSection1Props {
  data: Section1Props
  senddatatolayout?: any
  isdefaulttheme?: any
}

const RenderSpacer = (props: any) => {
  const hasSpacing = props.data.find((spacer: SpacerProps) => spacer.Position == props.index);
  if (hasSpacing) return <Spacer data={hasSpacing} />
}

const ComponentSectionsSection1 = ({
  data
}: ComponentSectionsSection1Props) => {

  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            <RenderSpacer index={0} data={data?.Spacer} />
            {data.TextAndIcons &&
              <TextAndIcons data={data.TextAndIcons} />
            }
            <RenderSpacer index={1} data={data?.Spacer} />
            {data.CardsCarousel5 &&
              <CardsCarousel5 data={data.CardsCarousel5} />
            }
            <RenderSpacer index={2} data={data?.Spacer} />
            {data.CardsCarousel4 &&
              <CardsCarousel4 data={data.CardsCarousel4} />
            }
            <RenderSpacer index={3} data={data?.Spacer} />
            {data.CardsCarousel &&
              <CardsCarousel data={data.CardsCarousel} />
            }
            <RenderSpacer index={4} data={data?.Spacer} />
            {data.Discussion &&
              <Discussion data={data.Discussion} />
            }
            <RenderSpacer index={5} data={data?.Spacer} />
            {data.Lists &&
              <Lists data={data.Lists} />
            }
            <RenderSpacer index={6} data={data?.Spacer} />
            {data.Section4 &&
              <Section4 data={data.Section4} />
            }
            <RenderSpacer index={0} data={data?.Spacer} />
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentSectionsSection1