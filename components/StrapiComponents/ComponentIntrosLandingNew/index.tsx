import React, { useState, useContext } from 'react'
import styled, { css } from 'styled-components'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import { ThemeContext } from 'components/Layout';
import { RadialContainer } from '@/components/Bootstrap/Common'
import {
  StrapiFile
} from 'interfaces'
import {
  OuterContainer,
  Container,
  InnerContainer,
  Title,
} from 'components/Bootstrap/Common'
import Button, { ButtonProps } from 'components/StrapiComponents/Button'

export type Event_Details_Item = {
  __typename: string
  id: string
  Title: string
  Sub_Title: string
  Icon: StrapiFile,
}

export type I_Want_To_Item = {
  __typename: string
  id: string
  Title: string
  Icon: StrapiFile,
  Background_Image: StrapiFile,
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

export interface LandingNewProps {
  data: IntrosLandingProps
}

const ImageContainer = styled.div`
  height: 400px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    height: 200px;
  }
`

const ComponentContainer = styled.div`
  border-radius: ${props => props.theme.borderRadius.components.large};
  background-color: ${props => props.theme.colors.grey};

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
  }
`

const IntroLandingContainer = styled(ComponentContainer)`
  padding: 40px 20px;

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    padding: 20px 10px;
  }
`

const EventTitle = styled.div`
  font-size: 57px;
  font-weight: 400;
  line-height: 64px;
  text-align: center;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: 36px;
    line-height: 44px;
  }
`

const EventIntroduction = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: center;
  padding-top: 20px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: 14px;
    line-height: 20px;
  }
`
const EventContainer = styled.div`
  padding-top: 20px;
`

const EventDetails = styled(ComponentContainer)`
  background-color: ${props => props.theme.colors.darkgrey};
  filter: -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  padding: 24px 50px 24px 100px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding: 24px;

  }
`

const EventDetailsItemContainer = styled.div`
  width: 100%;
`

const EventDetailsItem = styled.div`
  width: 90%;
  height: 100%;
  padding-right: 10px;
  border-right: 2px solid ${props => props.theme.colors.darkestgrey};
`

const EventDetailsIcon = styled.div`
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
  max-width: 150px;
`

const ButtonContainer = styled.div`
  width: 40%;
  padding: 10px 20px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
`

const ComponentIntrosLandingNew = ({
  data
}: LandingNewProps) => {
  const theme = useContext(ThemeContext);
  console.log(theme)

  const backgroundImage = data.Background_Image?.data?.attributes ? IMAGE_DOMAIN + data.Background_Image.data.attributes.url : null;
  const length = data.Event_Details.Event_Details.length;

  return (
    <OuterContainer className=''>
      {backgroundImage &&
        <ImageContainer className='relative w-screen'>
          {backgroundImage &&
            <>
              <RadialContainer />
              <NextImage
                src={backgroundImage}
                className=''
                alt=''
                layout='fill'
                objectFit='cover'
              />
            </>
          }
        </ImageContainer>
      }
      <Container className=''>
        <InnerContainer className=''>
          <IntroLandingContainer>
            <EventTitle as='h1' className=''>
              {data.Title}
            </EventTitle>
            <EventIntroduction as='p' className=''>
              {data.Introduction}
            </EventIntroduction>
            <EventContainer className='row-span-2 sm:col-span-4 lg:col-span-2'>
              <EventDetails className={`flex sm:flex-row flex-col justify-between gap-2`}>
                {data.Event_Details.Event_Details.map((evendDetail: Event_Details_Item) => (
                  <EventDetailsItemContainer key={evendDetail.id}>
                    <EventDetailsItem className='flex flex-row gap-4'>
                      {evendDetail?.Icon?.data?.attributes?.url &&
                        <EventDetailsIcon className='row-span-3'>
                          {evendDetail?.Icon?.data?.attributes?.url &&
                            <NextImage
                              src={IMAGE_DOMAIN + evendDetail.Icon.data.attributes.url}
                              className=''
                              alt={evendDetail.Icon.data.attributes.alternativeText ?? ""}
                              width={40}
                              height={40}
                            />
                          }
                        </EventDetailsIcon>
                      }
                      <EventDetailsContainer className='flex flex-col gap-2'>
                        <EventDetailsTitle className='col-span-2'>
                          {evendDetail.Title}
                        </EventDetailsTitle>
                        <EventDetailsSubTitle className='row-span-2 col-span-2'>
                          {evendDetail.Sub_Title}
                        </EventDetailsSubTitle>
                      </EventDetailsContainer>
                    </EventDetailsItem>
                  </EventDetailsItemContainer>
                ))
                }
                  <ButtonContainer className='flex items-center sm:row-span-1'>
                    <Button data={data.Event_Details.Button} />
                  </ButtonContainer>
              </EventDetails>
            </EventContainer>
          </IntroLandingContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentIntrosLandingNew