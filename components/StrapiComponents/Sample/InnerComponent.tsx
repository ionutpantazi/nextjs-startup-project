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


export type InnerComponentProps = {
  id: string,
}

export interface InnerComponentDataProps {
  data: InnerComponentProps
}

const InnerComponentContainer = styled.div`
`

const InnerComponent = ({
  data
}: InnerComponentDataProps) => {

  return (
    <InnerComponentContainer className=''>
    </InnerComponentContainer>
  )
}

export default InnerComponent