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
import {
  FirstColumn,
  SecondColumn,
} from 'components/StrapiComponents/ComponentSectionsSection4'
import CardsCarousel6, { CardsCarousel6Props } from 'components/StrapiComponents/ComponentSectionsSection4/CardsCarousel6'
import DiscussionTopics, { DiscussionTopicsProps } from 'components/StrapiComponents/ComponentSectionsSection4/DiscussionTopics'


export type Section4Props = {
  id: string,
  CardsCarousel: CardsCarousel6Props
  DiscussionBox: DiscussionTopicsProps
}

export interface Section4DataProps {
  data: Section4Props
}

const InnerComponentContainer = styled.div`
  padding-top: 60px;
`

const StyledFirstColumn = styled(FirstColumn)`
  background-color: ${props => props.theme.colors.darkgrey};
  filter: -webkit-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
`

const StyledSecondColumn = styled(SecondColumn)`
  background-color: ${props => props.theme.colors.darkgrey};
  filter: -webkit-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);  
`

const ShowAll = styled.div`
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: ${props => props.theme.colors.grey1};

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.lightgrey};
  }
`

const Section4 = ({
  data
}: Section4DataProps) => {

  return (
    <InnerComponentContainer className=''>
      <div className='flex md:flex-row flex-col gap-10'>
        <StyledFirstColumn className='flex flex-col md:w-3/5 w-auto'>
          {data.CardsCarousel &&
            <CardsCarousel6 data={data.CardsCarousel} />
          }
        </StyledFirstColumn>
        <StyledSecondColumn className='flex flex-col md:w-2/5 w-auto'>
          <DiscussionTopics data={data.DiscussionBox} />
        </StyledSecondColumn>
      </div>
      <ShowAll className='flex justify-center pt-10'>
        <span className='w-fit'>
          Show all
        </span>
      </ShowAll>
    </InnerComponentContainer>
  )
}

export default Section4