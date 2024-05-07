import React, { useState, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import {
  StrapiFile
} from 'interfaces'

export interface ButtonNewProps {
  __typename: string,
  Text: string,
  Link: string,
  ClassName: string,
  Image: StrapiFile,
  BackgroundColor: string,
  BackgroundHoverColor: string,
  TextColor: string,
  TextHoverColor: string,
  Sub_Title: string,
}

export interface ComponentButtonProps {
  data: ButtonNewProps,
  children?: ReactNode
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
  data,
  children,
}: ComponentButtonProps) => {
  if (!data) {
    return <></>
  }
  return (
    <ButtonContainer as='a' className={'w-fit ' + data.ClassName} href={data.Link} textcolor={data.TextColor} texthovercolor={data.TextHoverColor}>
      {children}
    </ButtonContainer>
  )
}

export default Button