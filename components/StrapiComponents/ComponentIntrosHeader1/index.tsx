import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import FAIcon from 'components/Bootstrap/FAIcon'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import {
  FAIconProps
} from 'interfaces'
import {
  OuterContainer,
  Container,
  InnerContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import { IconsContainer, IconButton, IconsProps, } from 'components/StrapiComponents/ComponentSectionsSection1/TextAndIcons'
import { EventTitle, EventIntroduction } from 'components/StrapiComponents/ComponentIntrosLandingNew'

export type Header1Props = {
  id: string,
  Title: string,
  Sub_Title: string,
  Icons: [IconsProps]
  FAIcon: FAIconProps
}

export interface ComponentIntrosHeader1Props {
  data: Header1Props
  senddatatolayout?: any,
  isdefaulttheme?: any,
}

const HeaderIcon = styled.div`
  border-radius: 30px;
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.brandlight};
  margin: 0 auto;
  margin-top: -70px;
  margin-bottom: 20px;

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    margin-top: -50px;
  }
`

const StyledEventIntroduction = styled(EventIntroduction)`
  max-width: 600px;
  margin: 0 auto;
`

const StyledIconsContainer = styled(IconsContainer)`
  padding-top: 30px;
  margin: 0 auto;
`

const SearchBarContainer = styled.div`
  margin-top: 30px;
`

const SearchBar = styled.input`
  border-radius: ${props => props.theme.borderRadius.xlarge};
  background: ${props => props.theme.colors.darkgrey};
  width: 100%;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  padding: 20px 30px;
  color: ${props => props.theme.colors.lightgrey};
  outline: 0;
  filter: -webkit-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);

  &::placeholder {
    color: ${props => props.theme.colors.lightgrey};
  }

  &:focus{
    color: ${props => props.theme.colors.white};
    outline: none;
    border-color: ${props => props.theme.colors.brand};
    &::placeholder {
      color: ${props => props.theme.colors.white};
    }
  }
`

const SearchBtn = styled.div`
  border-radius: 30px;
  width: 60px;
  height: 60px;
  min-width: 60px;
  background: ${props => props.theme.colors.brand};
  filter: -webkit-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.colors.brandlight};
  } 
`

const ComponentIntrosHeader1 = ({
  data
}: ComponentIntrosHeader1Props) => {

  return (
    <OuterContainer className=''>
      <Container className='' style={{overflow: 'visible'}}>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col' style={{overflow: 'visible'}}>
            <HeaderIcon className='flex items-center justify-center'>
              <FAIcon
                icon={data?.FAIcon?.Icon}
                width={Number(data.FAIcon.Width)}
                height={Number(data.FAIcon?.Width)}
              />
            </HeaderIcon>
            <EventTitle as='h1' className=''>
              {data.Title}
            </EventTitle>
            <StyledEventIntroduction as='p' className=''>
              {data.Sub_Title}
            </StyledEventIntroduction>
            <StyledIconsContainer className='flex flex-row flex-wrap gap-4'>
              {data.Icons.map((icon: IconsProps, index: number) => (
                <IconButton as='a' href='#' key={index} className='flex flex-row items-center gap-4' active={index == 0 ? 'true' : 'false'}>
                  {icon?.FAIcon?.Icon &&
                    <FAIcon
                      icon={icon?.FAIcon?.Icon}
                      width={Number(icon.FAIcon.Width)}
                      height={Number(icon.FAIcon?.Width)}
                    />
                  }
                  <span>
                    {icon.Title}
                  </span>
                </IconButton>
              ))
              }
            </StyledIconsContainer>
            <SearchBarContainer className='flex flex-row gap-6'>
              <SearchBar placeholder='Search...' />
              <SearchBtn className='flex items-center justify-center'>
                <FAIcon
                  icon={'fa-magnifying-glass'}
                  width={24}
                  height={24}
                />
              </SearchBtn>
            </SearchBarContainer>
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentIntrosHeader1