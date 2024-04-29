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
  Title,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import TextAndIcons, { TextAndIconsProps } from '../ComponentSectionsSection1/TextAndIcons'
import { Speaker } from '../ComponentSectionsSpeakersCarousel'
import CardsCarousel from '../ComponentSectionsSection1/CardsCarousel'

export type Tagsprops = {
  id: string
  attributes: {
    Name: string
    Slug: string
  }
}

export type AgendaItems = {
  id: string
  attributes: {
    Title: string
    Sub_Title: string
    Date: string
    Start_Time: string
    End_Time: string
    Room: string
    Participants: {
      data: [Speaker]
    }
    Tags: {
      data: [Tagsprops]
    }
  }
}


export type Section2Props = {
  id: string
  TextAndIcons: TextAndIconsProps
  Agenda: {
    id: string
    Title: string
    Items: {
      data: [AgendaItems]
    }
  }
}

export interface ComponentSectionsSection2Props {
  data: Section2Props
  senddatatolayout?: any,
  isdefaulttheme?: any,
}


const ComponentSectionsSection2 = ({
  data
}: ComponentSectionsSection2Props) => {
  console.log(data)
  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            <TextAndIcons data={data.TextAndIcons} agendaItems={data.Agenda.Items.data} />
            {/* <CardsCarousel data={ } /> */}
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentSectionsSection2