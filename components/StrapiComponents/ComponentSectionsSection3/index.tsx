import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import {
  StrapiFile
} from 'interfaces'
import {
  OuterContainer,
  Container,
  InnerContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import TextAndIcons, { TextAndIconsProps } from '../ComponentSectionsSection1/TextAndIcons'
import CardsCarousel2, { CardsCarousel2Props } from './CardsCarousel2'
import CardsCarousel3, { CardsCarousel3Props } from './CardsCarousel3'

export type Section3Props = {
  id: string,
  TextAndIcons: TextAndIconsProps
  CardsCarousel2: CardsCarousel2Props
  CardsCarousel3: CardsCarousel3Props
}

export interface ComponentSectionsSection3Props {
  data: Section3Props
  senddatatolayout?: any,
  isdefaulttheme?: any,
}


const ComponentSectionsSection3 = ({
  data
}: ComponentSectionsSection3Props) => {

  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            <TextAndIcons data={data.TextAndIcons} />
            <CardsCarousel2 data={data.CardsCarousel2} />
            <CardsCarousel3 data={data.CardsCarousel3} />
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentSectionsSection3