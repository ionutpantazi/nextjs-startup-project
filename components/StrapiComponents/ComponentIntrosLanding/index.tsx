import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { IMAGE_DOMAIN } from 'lib/constants'
import {
  StrapiFile
} from 'interfaces'
import Flex from 'components/Bootstrap/Flex'


export type Event_Details = {
  Event_Details: [

  ]
}

export type I_Want_To = {
  Title: string,
  Items: [

  ]
}

export type IntrosLandingProps = {
  id: string,
  __typename: string,
  Title: string,
  Introduction: string,
  Content: string,
  Background_Image: StrapiFile,
  Event_Details: Event_Details,
  I_Want_To: I_Want_To,
}

export interface ComponentIntrosLandingProps {
  data: IntrosLandingProps
}

const IntroLandingContainer = styled.div <{ imagex?: string | null }>`
  ${({ imagex }) => css`
    background-image: ${imagex ? 'url(' + imagex + ')' : 'unset'};
    height: 400px;
  `}
`

const ComponentIntrosLanding = ({
  data
}: ComponentIntrosLandingProps) => {
  // console.log(data.Background_Image.data.attributes)

  const backgroundImage = data.Background_Image?.data?.attributes ? IMAGE_DOMAIN + data.Background_Image.data.attributes.url : null;

  return (
    <IntroLandingContainer className='' imagex={backgroundImage}>
      <h1>{data.Title}</h1>
    </IntroLandingContainer>
  )
}

export default ComponentIntrosLanding