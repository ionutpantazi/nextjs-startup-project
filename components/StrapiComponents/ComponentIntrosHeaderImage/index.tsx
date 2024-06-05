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
import { RadialContainer } from '@/components/Bootstrap/Common'


export type HeaderImageProps = {
  id: string,
  Background_Image: StrapiFile,
  Bottom_Margin?: number
}

export interface ComponentIntrosHeaderImageProps {
  data: HeaderImageProps
  senddatatolayout?: any,
  isdefaulttheme?: any,
}

const ImageContainer = styled.div <{ props?: any }>`
  ${({ props }) => css`
    margin-bottom: ${props.Bottom_Margin}px;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
      margin-bottom: ${props.Bottom_Margin+200}px;
    }
  `}

  height: ${props => props.theme.components?.Header?.ImageContainerHeight};

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    height: ${props => props.theme.components?.Header?.ImageContainerMobileHeight};
  }

  margin-top: 40px;
  @media screen and (min-width: ${props => props.theme.screens.md}) {
    margin-top: -80px;
  }
`

const StyledRadialContainer = styled(RadialContainer)`
  ${props => props.theme.components?.Header?.StyledRadialContainer == 'unset' ? 'background: unset' : ''};
`

const HeaderImage = styled(NextImage)`
  position: relative;
  width: 100vw;
  height: ${props => props.theme.components?.Header?.HeaderImageHeight};

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    height: ${props => props.theme.components?.Header?.HeaderImageMobileHeight};
  }
`

const ComponentIntrosHeaderImage = ({
  data
}: ComponentIntrosHeaderImageProps) => {

  const backgroundImage = data.Background_Image?.data?.attributes ? IMAGE_DOMAIN + data.Background_Image.data.attributes.url : null;

  return (
    <OuterContainer className=''>
      {backgroundImage &&
        <ImageContainer className='relative' props={{'Bottom_Margin':data.Bottom_Margin}}>
          {backgroundImage &&
            <>
              <StyledRadialContainer />
              <HeaderImage
                src={backgroundImage}
                className=''
                alt=''
                height={1200}
                width={800}
              />
            </>
          }
        </ImageContainer>
      }
    </OuterContainer>
  )
}

export default ComponentIntrosHeaderImage