import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import {
  StrapiFile
} from 'interfaces'
import Flex from 'components/Bootstrap/Flex'

export interface ButtonProps {
  __typename: string,
  Text: string,
  Link: string,
  ClassName: string,
  Image: StrapiFile,
  BackgroundColor: string,
  BackgroundHoverColor: string,
  TextColor: string,
  TextHoverColor: string,
}

export interface ComponentButtonProps {
  data: ButtonProps
}

const ButtonContainer = styled.div <{ backgroundcolor?: string | null, backgroundhovercolor?: string | null, textcolor?: string | null, texthovercolor?: string | null }>`
  ${({ textcolor }) => css`
    ${textcolor ? 'color: ' + textcolor + '' : ''};
  `}
  ${({ texthovercolor }) => css`
    ${texthovercolor ? '&:hover { color: ' + texthovercolor + '};' : ''};
  `}
`

const Button = ({
  data
}: ComponentButtonProps) => {
  console.log(data)
  return (
    <ButtonContainer as='a' className={data.ClassName} href={data.Link} textcolor={data.TextColor} texthovercolor={data.TextHoverColor}>
      {data.Text}
    </ButtonContainer>
  )
}

export default Button