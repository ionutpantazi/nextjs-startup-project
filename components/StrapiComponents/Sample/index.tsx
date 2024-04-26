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
} from 'components/Bootstrap/Common'


export type SampleProps = {
  id: string,
}

export interface SectionsSampleProps {
  data: SampleProps
  senddatatolayout?: any,
  isdefaulttheme?: any,
}


const Sample = ({
  data
}: SectionsSampleProps) => {

  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default Sample