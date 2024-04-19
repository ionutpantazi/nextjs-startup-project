import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import { RadialContainer } from 'components/Bootstrap/RadialContainer'
import {
  StrapiFile
} from 'interfaces'
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

export interface ComponentIntrosLandingProps {
  data: IntrosLandingProps
}

const IntroLandingContainer = styled.div <{ backgroundimage?: string | null }>`
  ${({ backgroundimage }) => css`
    ${backgroundimage ? 'background:linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,1)), url("' + backgroundimage + '"); background-size: 100% 400px; background-repeat: no-repeat;' : ''}
  `}
  padding: ${theme.margins.homepage_large};
  color: ${theme.colors.white};
  overflow: hidden;
  margin-bottom: 40px;

  @media screen and (max-width: ${theme.screens.sm}) {
    ${({ backgroundimage }) => css`
      ${backgroundimage ? 'background:linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,1)), url("' + backgroundimage + '"); background-size: 100% 200px; background-repeat: no-repeat;' : ''}
    `}
    padding: ${theme.margins.homepage_small};
    margin-bottom: 20px;
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
  @media screen and (max-width: ${theme.screens.sm}) {
    display: none;
  }
`

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
`

const UserText = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
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

const IWantToContainer = styled.div`
  margin-top: 60px;

  @media screen and (max-width: ${theme.screens.sm}) {
    margin-top: 20px;
  }
`

const IWantToTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 10px;

  @media screen and (max-width: ${theme.screens.sm}) {
    text-align: center;
    font-size: 20px;
    line-height: 21px;
  }
`

const IWantToItemTitle = styled.div`
  z-index: 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
`

const StyledNextImage = styled(NextImage)`
  border-radius: 6px;
`

const IWantToItem = styled.div`
  width: 184px;
  height: 184px;
  border-radius: 6px;
  

  &:hover {
    filter: brightness(200%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }

  @media screen and (max-width: ${theme.screens.sm}) {
    margin: 0 auto;
  }
`

const IWantToItemIcon = styled.div`
  z-index: 2;
  width: 20px;
  height: 20px;
`

const EventContent = styled.div`
  margin-top: 60px;

  @media screen and (max-width: ${theme.screens.sm}) {
    margin-top: 20px;
  }
`

const ComponentIntrosLanding = ({
  data
}: ComponentIntrosLandingProps) => {

  const backgroundImage = data.Background_Image?.data?.attributes ? IMAGE_DOMAIN + data.Background_Image.data.attributes.url : null;

  const length = data.Event_Details.Event_Details.length;
  const gridRowsS = ((length + 1) * 2) - 1;
  const r = (length + 1) % 2;
  const gridColsL = Math.ceil(length / 2) + r;

  return (
    <IntroLandingContainer className='flex flex-col' backgroundimage={backgroundImage}>
      <TopColumn className=''>

      </TopColumn>
      <BottomColumn className='grid sm:grid-cols-10 grid-flow-row gap-x-20 gap-y-4'>
        <UserContainer className='row-span-1 sm:col-span-4 lg:col-span-2 flex flex-row gap-2 items-end'>
          <UserAvatar className='basis-1/4 flex-none'>
            <img
              src={'/images/elipse.png'}
              alt={""}
              loading="lazy"
            />
          </UserAvatar>
          <UserText className='basis-2/4 shrink'>
            Log in to view your personalised content
          </UserText>
        </UserContainer>
        <EventTitle as='h1' className='row-span-1 sm:col-span-6 lg:col-span-8'>
          {data.Title}
        </EventTitle>
        <EventContainer className='row-span-2 sm:col-span-4 lg:col-span-2'>
          <EventDetails className={`grid sm:grid-rows-${gridRowsS} grid-rows-${gridColsL} sm:grid-cols-1 grid-cols-2 grid-flow-col gap-2`}>
            {data.Event_Details.Event_Details.map((evendDetail: Event_Details_Item) => (
              <EventDetailsItem className='grid sm:row-span-2 grid-rows-3 grid-cols-3' key={evendDetail.id}>
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
                <EventDetailsTitle className='col-span-2'>
                  {evendDetail.Title}
                </EventDetailsTitle>
                <EventDetailsSubTitle className='row-span-2 col-span-2'>
                  {evendDetail.Sub_Title}
                </EventDetailsSubTitle>
              </EventDetailsItem>
            ))
            }
            <ButtonContainer className='flex items-center sm:row-span-1'>
              <Button data={data.Event_Details.Button} />
            </ButtonContainer>
          </EventDetails>
        </EventContainer>
        <EventDetailsContainer className='row-span-2 sm:col-span-4 lg:col-span-5'>
          <EventIntroduction as='p' className=''>
            {data.Introduction}
          </EventIntroduction>
          <IWantToContainer>
            <IWantToTitle>
              {data.I_Want_To.Title}
            </IWantToTitle>
            <div className='flex flex-col sm:flex-row gap-4'>
              {data.I_Want_To.Items.map((item: I_Want_To_Item) => (
                <IWantToItem as='a' href='#' className='flex flex-col justify-center items-center relative' key={item.id}>
                  {item?.Background_Image?.data?.attributes?.url &&
                    <>
                      <RadialContainer />
                      <StyledNextImage
                        src={IMAGE_DOMAIN + item?.Background_Image?.data?.attributes?.url}
                        className=''
                        alt={item?.Background_Image?.data?.attributes?.alternativeText ?? ""}
                        layout='fill'
                        objectFit='cover'
                      />
                    </>
                  }

                  <IWantToItemIcon>
                    {item.Icon.data?.attributes?.url &&
                      <NextImage
                        src={IMAGE_DOMAIN + item.Icon.data?.attributes?.url}
                        className=''
                        alt={item.Icon.data?.attributes?.alternativeText ?? ""}
                        width={26}
                        height={26}
                      />
                    }
                  </IWantToItemIcon>
                  <IWantToItemTitle className='text-center'>
                    {item.Title}
                  </IWantToItemTitle>
                </IWantToItem>
              ))
              }
            </div>
          </IWantToContainer>
          <EventContent
            className=''
            dangerouslySetInnerHTML={{
              __html: data.Content
            }}
          >
          </EventContent>
        </EventDetailsContainer>
      </BottomColumn>
    </IntroLandingContainer>
  )
}

export default ComponentIntrosLanding