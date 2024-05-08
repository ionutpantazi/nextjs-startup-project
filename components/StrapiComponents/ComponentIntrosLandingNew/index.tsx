import React, { useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import { RadialContainer } from '@/components/Bootstrap/Common'
import {
  StrapiFile,
  FAIconProps
} from 'interfaces'
import {
  OuterContainer,
  Container,
  InnerContainer,
  Title,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import ButtonNew, { ButtonNewProps } from 'components/StrapiComponents/ButtonNew'

export type Event_Details_Item = {
  __typename: string
  id: string
  Title: string
  Sub_Title: string
  Icon: StrapiFile,
  FAIcon: FAIconProps
  Button: ButtonNewProps,
}

export type I_Want_To_Item = {
  __typename: string
  id: string
  Title: string
  Icon: StrapiFile,
  FAIcon: FAIconProps
  Background_Image: StrapiFile,
}

export type Event_Details = {
  __typename: string
  Event_Details: [
    Event_Details_Item
  ]
  Button: ButtonNewProps
}

export type I_Want_To = {
  Title: string,
  Items: [

  ]
}

export type LandingNewProps = {
  id: string,
  __typename: string,
  Title: string,
  Introduction: string,
  Content: string,
  Background_Image: StrapiFile,
  Event_Details: Event_Details,
  I_Want_To: I_Want_To,
  Button: ButtonNewProps,
}

export interface IntrosLandingProps {
  data: LandingNewProps,
  senddatatolayout: any,
  isdefaulttheme: any,
  themedata: any,
}

const ImageContainer = styled.div`
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

const IntroLandingContainer = styled.div`
  border-radius: ${props => props.theme.components?.Common?.ComponentContainerBorder};
  padding: 40px 20px;
  background-color: ${props => props.theme.components?.Header?.IntroLandingContainerBackground};

  filter: -webkit-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.15);
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.15);

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    padding: 20px 10px;
  }
`

const EventTitle = styled.div`
  font-size: 57px;
  font-weight: 400;
  line-height: 64px;
  text-align: center;
  color: ${props => props.theme.components?.Header?.EventTitleColor};

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

const EventDetails = styled.div`
  background-color: ${props => props.theme.components?.Header?.EventDetailsBackground};
  filter: -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  padding: 24px 50px 24px 50px;
  border-radius: ${props => props.theme.borderRadius.large};

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding: 24px;
  }
`

const EventDetailsItemContainer = styled.div`
  width: 100%;
  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.darkestgrey};
  }
  &:not(:first-child) {
    margin-left: 10px;
  }

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding-bottom: 10px;
    padding-right: 0px;
    margin-bottom: 10px;
    margin-left: 0px;
    &:not(:last-child) {
      border-right: 0px;
      border-bottom: 2px solid ${props => props.theme.colors.darkestgrey};
    }
  }
`

const EventDetailsItem = styled.div`
  width: 90%;
  height: 100%;
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    width: 100%;
  }
`

const EventDetailsIcon = styled.div`
  svg {
    color: ${props => props.theme.colors.brand};
  }
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
  color: ${props => props.theme.components?.Header?.EventDetailsSubTitle};
`

const EventDetailsContainer = styled.div`
  max-width: 150px;
`

const EventDetailsLastContainer = styled.div`
  width: 40%;
  padding: 10px 0px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    width: 50%;
    margin: 0 auto;
  }
`

const EventDetailsButtonContainer = styled.div`
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.theme.colors.brand};

  &:hover {
    color: ${props => props.theme.colors.brandlight};
  }
`

const ReadMoreContainer = styled(EventDetailsButtonContainer)`

`

const EventButtonContainer = styled.div`
  padding: 10px 20px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.components.small};
  background-color: ${props => props.theme.colors.brand};

  &:hover {
    background-color: ${props => props.theme.colors.brandlight};
  }
`

const EventDetailsLastContainerText = styled.div`
  font-size: 8px;
  font-weight: 300;
  line-height: 11px;
  padding-top: 10px;
  color: ${props => props.theme.colors.grey1};
`

const EventSectionContainer = styled.div`
  padding: 60px 40px 0px 40px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding: 20px 20px 0px 20px;
  }
`

const IWantToContainer = styled.div`
  
`

const IWantToItem = styled.div`
  width: 184px;
  height: 184px;
  border-radius: 6px;
  
  svg {
    z-index: 3;
    color: ${props => props.theme.colors.brand};
  }

  &:hover {
    filter: brightness(200%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    margin: 0 auto;
  }
`

const IWantToItemIcon = styled.div`
  z-index: 2;
  width: 20px;
  height: 20px;
`

const StyledNextImage = styled(NextImage)`
  border-radius: 6px;
`

const IWantToItemTitle = styled.div`
  z-index: 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  color: ${props => props.theme.components?.Header?.IWantToItemTitleColor};
`

const EventContentContainer = styled.div`
`

const EventContent = styled.div`
`

const Toggle = styled.label`
  border-radius: 40px;
  background-color: ${props => props.theme.components?.Header?.ToggleOff};
  filter: -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
`

const CustomThemeToggle = styled.span <{ isdefaulttheme?: any }>`
  border-radius: 40px;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  ${({ isdefaulttheme }) => css`
    ${props => isdefaulttheme == 'false' ? 'background-color: ' + props.theme.colors.brand : 'background-color: ' + props.theme.components?.Header?.ToggleOff};
  `}
`

const DefaultThemeToggle = styled.span <{ isdefaulttheme?: any }>`
  border-radius: 40px;
  padding: 10px 20px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  width: 100%;
  ${({ isdefaulttheme }) => css`
    ${props => isdefaulttheme == 'true' ? 'background-color: ' + props.theme.colors.brand : 'background-color: ' + props.theme.components?.Header?.ToggleOff};
  `}
`

const ComponentIntrosLandingNew = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
}: IntrosLandingProps) => {

  const backgroundImage = data.Background_Image?.data?.attributes ? IMAGE_DOMAIN + data.Background_Image.data.attributes.url : null;

  const handleDefaultThemeChange = () => {
    if (senddatatolayout instanceof Function) {
      if (isdefaulttheme == 'false' || isdefaulttheme == false) {
        senddatatolayout({ useDefaultTheme: 'true' })
      } else {
        senddatatolayout({ useDefaultTheme: 'false' })
      }
    }
  }

  return (
    <OuterContainer className=''>
      {backgroundImage &&
        <ImageContainer className='relative'>
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
                <EventDetailsItemContainer>
                  <EventDetailsItem className='flex flex-col gap-4'>
                    <div className='flex flex-row gap-4'>
                      <EventDetailsIcon className='row-span-3'>
                        <NextImage
                          src={'/images/avatar.png'}
                          className=''
                          alt={""}
                          width={40}
                          height={40}
                        />
                      </EventDetailsIcon>
                      <EventDetailsContainer className='flex flex-col gap-2'>
                        <EventDetailsSubTitle className='row-span-2 col-span-2'>
                          Hi Ruth, welcome back to [your event name]
                        </EventDetailsSubTitle>
                      </EventDetailsContainer>
                    </div>
                    <Toggle className='flex justify-between cursor-pointer w-fit'>
                      <input
                        type='checkbox'
                        className='sr-only'
                        checked={isdefaulttheme == 'true' ? true : false}
                        onChange={handleDefaultThemeChange}
                      />
                      <CustomThemeToggle className='flex flex-row items-center gap-2' isdefaulttheme={isdefaulttheme?.toString()}>
                        <FAIcon
                          icon={themedata.FAIcon.Icon}
                          width={Number(themedata.FAIcon.Width)}
                          height={Number(themedata.FAIcon.Height)}
                        />
                        <span>
                          {themedata.Name}
                        </span>
                      </CustomThemeToggle>
                      <DefaultThemeToggle className='flex flex-row items-center gap-2' isdefaulttheme={isdefaulttheme?.toString()}>
                        <span>
                          Default View
                        </span>
                        <FAIcon
                          icon={'fa-solid fa-circle-xmark'}
                          width={20}
                          height={20}
                        />
                      </DefaultThemeToggle>
                    </Toggle>
                  </EventDetailsItem>

                </EventDetailsItemContainer>
                {data.Event_Details.Event_Details.map((evendDetail: Event_Details_Item) => (
                  <EventDetailsItemContainer key={evendDetail.id}>
                    <EventDetailsItem className='flex flex-row gap-4'>
                      <EventDetailsIcon className='row-span-3'>
                        <>
                          {evendDetail?.Icon?.data?.attributes?.url &&
                            <NextImage
                              src={IMAGE_DOMAIN + evendDetail.Icon.data.attributes.url}
                              className=''
                              alt={evendDetail.Icon.data.attributes.alternativeText ?? ""}
                              width={40}
                              height={40}
                            />
                          }
                          {evendDetail?.FAIcon &&
                            <FAIcon
                              icon={evendDetail.FAIcon.Icon}
                              width={Number(evendDetail.FAIcon.Width)}
                              height={Number(evendDetail.FAIcon.Height)}
                            />
                          }
                        </>
                      </EventDetailsIcon>
                      <EventDetailsContainer className='flex flex-col gap-2'>
                        <EventDetailsTitle className='col-span-2'>
                          {evendDetail.Title}
                        </EventDetailsTitle>
                        <EventDetailsSubTitle className='row-span-2 col-span-2'>
                          {evendDetail.Sub_Title}
                        </EventDetailsSubTitle>
                        {evendDetail.Button &&
                          <ButtonNew data={evendDetail.Button}>
                            <EventDetailsButtonContainer>
                              {evendDetail.Button.Text}
                            </EventDetailsButtonContainer>
                          </ButtonNew>
                        }
                      </EventDetailsContainer>
                    </EventDetailsItem>
                  </EventDetailsItemContainer>
                ))
                }
                {/* <EventDetailsLastContainer>
                  <ButtonNew data={data.Event_Details.Button}>
                    <EventButtonContainer className='flex items-center justify-center sm:row-span-1'>
                      {data.Event_Details.Button.Text}
                    </EventButtonContainer>
                  </ButtonNew>
                  <EventDetailsLastContainerText>
                    {data.Event_Details.Button.Sub_Title}
                  </EventDetailsLastContainerText>
                </EventDetailsLastContainer> */}
              </EventDetails>
            </EventContainer>
            <EventSectionContainer className='flex flex-col sm:flex-row gap-6'>
              <IWantToContainer className='flex justify-stretch flex-col sm:flex-row gap-4 sm:w-1/2 w-auto'>
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
                    {item.FAIcon &&
                      <FAIcon
                        icon={item.FAIcon.Icon}
                        width={Number(item.FAIcon.Width)}
                        height={Number(item.FAIcon.Height)}
                      />
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
              </IWantToContainer>
              <EventContentContainer className='flex flex-col gap-2 sm:w-1/2 w-auto'>
                <EventContent
                  className=''
                  dangerouslySetInnerHTML={{
                    __html: data.Content
                  }}
                >
                </EventContent>
                {data.Button &&
                  <ButtonNew data={data.Button}>
                    <ReadMoreContainer>
                      {data.Button.Text}
                    </ReadMoreContainer>
                  </ButtonNew>
                }
              </EventContentContainer>
            </EventSectionContainer>
          </IntroLandingContainer>
        </InnerContainer>
      </Container>


    </OuterContainer >
  )
}

export default ComponentIntrosLandingNew