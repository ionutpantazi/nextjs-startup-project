import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import {
  StrapiFile
} from 'interfaces'
import Button, { ButtonProps } from 'components/StrapiComponents/Button'

export type Event_Details_Item = {
  __typename: string
  id: string
  Title: string
  Sub_Title: string
  Icon: any
}

export type Event_Details = {
  __typename: string
  Event_Details: [
    Event_Details_Item
  ]
  Button: ButtonProps
}

export type I_Want_To = {
  Title: string,
  Items: [

  ]
}

export type IntrosLandingProps = {
  id: string,
  __typename: string,
  Title: string,
  Introduction: string,
  Content: string,
  Background_Image: StrapiFile,
  Event_Details: Event_Details,
  I_Want_To: I_Want_To,
}

export interface ComponentIntrosLandingProps {
  data: IntrosLandingProps
}

const IntroLandingContainer = styled.div <{ backgroundimage?: string | null }>`
  ${({ backgroundimage }) => css`
    ${backgroundimage ? 'background:linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,1)), url("' + backgroundimage + '"); background-size: 100% 400px; background-repeat: no-repeat;' : ''}
  `}
  padding: ${theme.margins.homepage_large};
  color: ${theme.colors.white};

  @media screen and (max-width: ${theme.screens.sm}) {
    ${({ backgroundimage }) => css`
      ${backgroundimage ? 'background:linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,1)), url("' + backgroundimage + '"); background-size: 100% 200px; background-repeat: no-repeat;' : ''}
    `}
    padding: ${theme.margins.homepage_small};
  }
`

const TopColumn = styled.div`
  height: 350px;

  @media screen and (max-width: ${theme.screens.sm}) {
    height: 150px;
  }
`

const BottomColumn = styled.div`
  margin: 0 auto;
  max-width: ${theme.pageWidth};
`

const UserContainer = styled.div`
`

const EventContainer = styled.div`
`

const EventDetails = styled.div`
  background-color: ${theme.colors.grey};
  border-radius: 6px;
  padding: 10px
`

const EventDetailsItem = styled.div`
  border-bottom: solid #242424;
`

const EventDetailsIcon = styled.div`
  width: 40px;
  height: 40px;
`

const EventDetailsTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

const EventDetailsSubTitle = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
`

const EventDetailsContainer = styled.div`
`

const EventTitle = styled.div`
  font-size: 57px;
  font-weight: 400;
  line-height: 64px;

  @media screen and (max-width: ${theme.screens.sm}) {
    font-size: 36px;
    line-height: 44px;
  }
`

const EventIntroduction = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  color: ${theme.colors.white};

  @media screen and (max-width: ${theme.screens.sm}) {
    font-size: 14px;
    line-height: 20px;
  }
`

const ButtonContainer = styled.div`
  padding: 10px 20px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
`


const ComponentIntrosLanding = ({
  data
}: ComponentIntrosLandingProps) => {
  // console.log(data.Event_Details)

  const backgroundImage = data.Background_Image?.data?.attributes ? IMAGE_DOMAIN + data.Background_Image.data.attributes.url : null;

  const numberOfItems = ((data.Event_Details.Event_Details.length + 1) * 2) - 1;

  return (
    <IntroLandingContainer className='flex flex-col' backgroundimage={backgroundImage}>
      <TopColumn className=''>

      </TopColumn>
      <BottomColumn className='grid sm:grid-cols-10 grid-flow-row gap-x-20 gap-y-4'>
        <UserContainer className='row-span-1 sm:col-span-2'>

        </UserContainer>
        <EventTitle as='h1' className='row-span-1 sm:col-span-8'>
          {data.Title}
        </EventTitle>
        <EventContainer className='row-span-2 sm:col-span-2'>
          <EventDetails className={`grid sm:grid-rows-7 grid-rows-2 sm:grid-cols-1 grid-cols-2 grid-flow-col gap-2`}>
            {data.Event_Details.Event_Details.map((evendDetail: Event_Details_Item) => (
              <EventDetailsItem className='grid sm:row-span-2 grid-rows-3 grid-cols-3' key={evendDetail.id}>
                <EventDetailsIcon className='row-span-3'>
                  <img
                    src={IMAGE_DOMAIN + evendDetail.Icon.data.attributes.url}
                    alt={evendDetail.Icon.data.attributes.alternativeText ?? ""}
                    loading="lazy"
                  />
                </EventDetailsIcon>
                <EventDetailsTitle className='col-span-2'>
                  {evendDetail.Title}
                </EventDetailsTitle>
                <EventDetailsSubTitle className='row-span-2 col-span-2'>
                  {evendDetail.Sub_Title}
                </EventDetailsSubTitle>
              </EventDetailsItem>
            ))
            }
            <ButtonContainer className='sm:row-span-1'>
              <Button data={data.Event_Details.Button} />
            </ButtonContainer>
          </EventDetails>
        </EventContainer>
        <EventDetailsContainer className='row-span-2 sm:col-span-7'>
          <EventIntroduction as='p' className=''>
            {data.Introduction}
          </EventIntroduction>
        </EventDetailsContainer>


      </BottomColumn>
    </IntroLandingContainer>
  )
}

export default ComponentIntrosLanding