import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import {
  StrapiFile
} from 'interfaces'


export type SectionsSectionTitleProps = {
  id: string,
  Title: string;
  Icon: StrapiFile
}

export interface ComponentSectionsSectionTitleProps {
  data: SectionsSectionTitleProps
}

const SectionTitleContainer = styled.div`
  padding: ${theme.margins.homepage_large};
  color: ${theme.colors.white};
  overflow: hidden;
  margin-bottom: 40px;

  @media screen and (max-width: ${theme.screens.sm}) {
    padding: ${theme.margins.homepage_small};
    margin-bottom: 20px;
  }
`

const SectionTitleInnerContainer = styled.div`
  margin: 0 auto;
  max-width: ${theme.pageWidth};
`

const Icon = styled.div`
`

const SectionTitle = styled.div`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
`

const ComponentSectionsSectionTitle = ({
  data
}: ComponentSectionsSectionTitleProps) => {

  return (
    <SectionTitleContainer className=''>
      <SectionTitleInnerContainer className='flex flex-row items-center gap-4'>
        <Icon className='flex items-center'>
          {data.Icon.data?.attributes?.url &&
            <NextImage
              src={IMAGE_DOMAIN + data.Icon.data?.attributes?.url}
              className=''
              alt={data.Icon.data?.attributes?.alternativeText ?? ""}
              width={28}
              height={28}
            />
          }
        </Icon>
        <SectionTitle>
          {data.Title}
        </SectionTitle>
      </SectionTitleInnerContainer>
    </SectionTitleContainer>
  )
}

export default ComponentSectionsSectionTitle