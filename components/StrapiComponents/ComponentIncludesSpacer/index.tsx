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
}

export interface ComponentIncludesSpacerProps {
  data: SpacerProps
  senddatatolayout?: any,
  isdefaulttheme?: any,
}


const ComponentIncludesSpacer = ({
  data
}: ComponentIncludesSpacerProps) => {

  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentIncludesSpacer