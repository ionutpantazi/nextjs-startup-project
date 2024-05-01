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
} from 'components/Bootstrap/Common'
import CardsCarousel6, { CardsCarousel6Props } from 'components/StrapiComponents/ComponentSectionsSection4/CardsCarousel6'
import DiscussionTopics , { DiscussionTopicsProps } from 'components/StrapiComponents/ComponentSectionsSection4/DiscussionTopics'


export type Section4Props = {
  id: string,
  CardsCarousel: CardsCarousel6Props
  DiscussionBox: DiscussionTopicsProps
}

export interface ComponentSectionsSection4Props {
  data: Section4Props
  senddatatolayout?: any,
  isdefaulttheme?: any,
}

export const Section4Container = styled.div`

`

const FirstColumn = styled.div`
  border-radius: ${props => props.theme.borderRadius.components.large};
  background-color: ${props => props.theme.colors.grey};
`

const SecondColumn = styled.div`
  border-radius: ${props => props.theme.borderRadius.components.large};
  background-color: ${props => props.theme.colors.grey};
`

const ComponentSectionsSection4 = ({
  data
}: ComponentSectionsSection4Props) => {

  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <Section4Container className='flex md:flex-row flex-col gap-10'>
            <FirstColumn className='flex flex-col md:w-3/5 w-auto'>
              {data.CardsCarousel &&
                <CardsCarousel6 data={data.CardsCarousel} />
              }
            </FirstColumn>
            <SecondColumn className='flex flex-col md:w-2/5 w-auto'>
              <DiscussionTopics data={data.DiscussionBox} />
            </SecondColumn>
          </Section4Container>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentSectionsSection4