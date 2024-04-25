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

export type IWantToItemProps = {
  id: string,
  Title: string,
  Icon: StrapiFile,
  Background_Image: StrapiFile,
}

export type IWantToProps = {
  id: string,
  Title: string,
  Items: [
    IWantToItemProps
  ]
}

export interface SectionsIWantToProps {
  data: IWantToProps
}

const ItemsContainer = styled.div`
`

const ItemContainer = styled.div`
  border-radius: ${props => props.theme.borderRadius.components.small};
  background-color: ${props => props.theme.colors.grey};
  padding: 20px 30px;

  &:hover {
    background-color: ${props => props.theme.colors.darkgrey};
  }

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding: 15px 20px;
  }
`

const ItemIcon = styled.div`
`

const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

const ComponentSectionsIWantTo = ({
  data
}: SectionsIWantToProps) => {
  console.log(data)
  return (
    <Container className=''>
      <InnerContainer className='flex flex-col gap-4'>
        <Title>
          {data.Title}
        </Title>
        <ItemsContainer className='flex flex-col sm:flex-row gap-4'>
          {data.Items.map((item: IWantToItemProps) => (
            <ItemContainer as='a' href='#' key={item.id} className='flex flex-row items-center gap-3'>
              <ItemIcon className=''>
                {item?.Icon?.data?.attributes?.url &&
                  <NextImage
                    src={IMAGE_DOMAIN + item.Icon.data.attributes.url}
                    className=''
                    alt={item.Icon.data.attributes.alternativeText ?? ""}
                    width={40}
                    height={40}
                  />
                }
              </ItemIcon>
              <ItemTitle className=''>
                {item.Title}
              </ItemTitle>
            </ItemContainer>
          ))
          }
        </ItemsContainer>
      </InnerContainer>
    </Container>
  )
}

export default ComponentSectionsIWantTo