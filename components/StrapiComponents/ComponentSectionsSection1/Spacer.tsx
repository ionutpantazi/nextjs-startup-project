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


export type SpacerProps = {
  id: string,
  Desktop: number,
  Mobile: number,
  Position: number,
}

export interface SpacerDataProps {
  data: SpacerProps
}

const SpacerContainer = styled.div <{ desktop?: any, mobile?: any }>`
  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    ${({ mobile }) => css`
      ${mobile ? 'height: ' + mobile + 'px;' : ''};
    `}
  }
  ${({ desktop }) => css`
    ${desktop ? 'height: ' + desktop + 'px;' : ''};
  `}
`

const Spacer = ({
  data
}: SpacerDataProps) => {

  return (
    <SpacerContainer className='' desktop={data?.Desktop} mobile={data?.Mobile}>
    </SpacerContainer>
  )
}

export default Spacer