import React, { useState, useEffect, useContext } from 'react'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import {
  OuterContainer,
  Container,
  InnerContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import useSession from "lib/use-session";
import ReadMore from '@/components/Bootstrap/ReadMore'
import { RadialContainer } from '@/components/Bootstrap/Common'
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ThemeContext } from 'components/Layout';
import { setFECookie, generateMenuHref } from 'utils/helpers'
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  ImageContainer,
  StyledRadialContainer,
  HeaderImage,
  IntroLandingContainer,
  EventTitle,
  EventIntroduction,
  EventContainer,
  EventDetails,
  EventDetailsItemContainer,
  EventDetailsItem,
  EventDetailsIcon,
  EventDetailsTitle,
  EventDetailsSubTitle,
  EventDetailsContainer,
  EventDetailsLastContainer,
  EventDetailsButtonContainer,
  ReadMoreContainer,
  EventButtonContainer,
  EventSectionContainer,
  IWantToItem,
  StyledNextImage,
  EventContentContainer,
  EventContent,
  Toggle,
  CustomThemeToggle,
  DefaultThemeToggle,
  EmptyAvatar,
  LeftHeading,
  LeftEventTitle,
  LeftEventIntroduction,
  IWantToItemIcon,
  IWantToItemTitle,
  IWantToContainer,
} from './styles'


const Header = ({
  title,
  eventTitle,
  subtitle,
  description,
  headerImage,
  eventDetails,
  tilesData,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
  hideContentContainer,
  hideBody,
}: any) => {

  const { session, isLoading } = useSession();
  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  const backgroundImage = headerImage?.path ? headerImage.path : null;

  useEffect(() => {
    if (width && width < Number(theme.screens['md'].replace('px', ''))) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  function handleDefaultThemeChange() {
    if (senddatatolayout instanceof Function) {
      if (isdefaulttheme == 'false' || isdefaulttheme == false) {
        senddatatolayout({ useDefaultTheme: 'true' })
        setFECookie('lg-theme', 'default', 60)
      } else {
        senddatatolayout({ useDefaultTheme: 'false' })
        if (themeMeta?.slug) {
          setFECookie('lg-theme', themeMeta.slug, 60)
        }
      }
    }
  }

  const EventDetailsComponent = ({ eventDetails }: any) => {
    return <>
      {eventDetails?.map((evendDetail: any, index: any) => (
        <EventDetailsItemContainer key={index}>
          <EventDetailsItem className='flex flex-row gap-4'>
            <EventDetailsIcon className='row-span-3'>
              <>
                {evendDetail?.icon &&
                  <FAIcon
                    icon={evendDetail.icon}
                    width={isMobile ? 20 : 40}
                    height={isMobile ? 20 : 40}
                  />
                }
              </>
            </EventDetailsIcon>
            <EventDetailsContainer className='flex flex-col gap-2'>
              <EventDetailsTitle className='col-span-2'>
                {evendDetail.title}
              </EventDetailsTitle>
              <EventDetailsSubTitle className='row-span-2 col-span-2'>
                {evendDetail.subtitle}
              </EventDetailsSubTitle>
            </EventDetailsContainer>
          </EventDetailsItem>
        </EventDetailsItemContainer>
      ))
      }
    </>
  }

  const IWantToItemComponent = ({ item }: any) => {
    return <IWantToItem as='a' href={generateMenuHref(item.slug)} className='flex flex-col justify-center items-center relative' key={item.id}>
      {item.image &&
        <>
          <RadialContainer />
          <StyledNextImage
            src={item.image}
            className=''
            alt={""}
            fill
            style={{ objectFit: 'cover' }}
          />
        </>
      }
      <FAIcon
        icon={item.icon}
        width={20}
        height={20}
      />
      <IWantToItemTitle className='text-center'>
        {item.title}
      </IWantToItemTitle>
    </IWantToItem>
  }

  return (
    <OuterContainer className=''>
      {backgroundImage &&
        <ImageContainer className='relative' hidebody={hideBody ? 'true' : 'false'}>
          {backgroundImage &&
            <>
              <StyledRadialContainer />
              <HeaderImage
                src={backgroundImage}
                className=''
                alt=''
                fill={true}
              />
            </>
          }
        </ImageContainer>
      }
      {!hideContentContainer &&
        <>
          {isMobile
            ?
            <Container className=''>
              <InnerContainer className=''>
                {hideBody && title &&
                  <LeftHeading>
                    <LeftEventTitle as='h1' className=''>
                      {title}
                    </LeftEventTitle>
                  </LeftHeading>
                }
                {!hideBody &&
                  <>
                    {title &&
                      <EventTitle as='h1' className=''>
                        {title}
                      </EventTitle>
                    }
                    {subtitle &&
                      <EventIntroduction as='p' className=''>
                        {subtitle}
                      </EventIntroduction>
                    }

                    <IntroLandingContainer className='mt-6' hidebody={hideBody ? 'true' : 'false'}>
                      <div className='grid grid-cols-2 gap-2'>
                        <EventDetailsComponent eventDetails={eventDetails} />
                      </div>
                      <Swiper
                        spaceBetween={10}
                        slidesPerView={'auto'}
                        className='w-full mt-4'
                      >
                        {tilesData.map((item: any, index: number) => (
                          <SwiperSlide key={index} style={{ 'width': 'fit-content' }}>
                            <IWantToItemComponent item={item} key={index} />
                          </SwiperSlide>
                        ))
                        }
                      </Swiper>
                      <EventContentContainer className='flex flex-col gap-2 w-auto mt-4'>
                        <EventDetails className={`flex sm:flex-row flex-col justify-between gap-2`}>
                          <EventDetailsItemContainer>
                            <EventDetailsItem className='flex flex-col gap-4'>
                              <div className='flex flex-row gap-4'>
                                {session.isLoggedIn
                                  ?
                                  <>
                                    <EventDetailsIcon className='row-span-3'>
                                      <NextImage
                                        src={'/images/default-avatar.png'}
                                        className=''
                                        alt={""}
                                        width={40}
                                        height={40}
                                      />
                                    </EventDetailsIcon>
                                    <EventDetailsContainer className='flex flex-col gap-2'>
                                      <EventDetailsSubTitle className='row-span-2 col-span-2'>
                                        Hi {session.username}, welcome back to {eventTitle}
                                      </EventDetailsSubTitle>
                                    </EventDetailsContainer>
                                  </>
                                  :
                                  <>
                                    <EventDetailsIcon className='row-span-3'>
                                      <EmptyAvatar />
                                    </EventDetailsIcon>
                                    <EventDetailsContainer className='flex flex-col gap-2'>
                                      <EventDetailsSubTitle className='row-span-2 col-span-2'>
                                        <button className="login underline"
                                          data-twe-toggle="modal"
                                          data-twe-target="#loginModal"
                                        >Log in
                                        </button> to view your personalised content
                                      </EventDetailsSubTitle>
                                    </EventDetailsContainer>
                                  </>
                                }

                              </div>
                              {session.isLoggedIn &&
                                <Toggle className='flex justify-between cursor-pointer w-fit'>
                                  <input
                                    type='checkbox'
                                    className='sr-only'
                                    checked={isdefaulttheme == 'true' ? true : false}
                                    onChange={handleDefaultThemeChange}
                                  />
                                  {themeMeta &&
                                    <CustomThemeToggle className='flex flex-row items-center gap-2' isdefaulttheme={isdefaulttheme?.toString()}>
                                      <FAIcon
                                        icon={themeMeta.faIcon}
                                        width={20}
                                        height={20}
                                      />
                                      <span>
                                        {themeMeta.title}
                                      </span>
                                    </CustomThemeToggle>
                                  }
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
                              }
                            </EventDetailsItem>
                          </EventDetailsItemContainer>
                        </EventDetails>
                        <EventContent className=''>
                          <ReadMore content={description} chars={200} />
                        </EventContent>
                      </EventContentContainer>
                    </IntroLandingContainer>
                  </>
                }
              </InnerContainer>
            </Container>
            :
            <Container className=''>
              <InnerContainer className=''>
                <IntroLandingContainer>
                  {hideBody &&
                    <LeftHeading>
                      {title &&
                        <LeftEventTitle as='h1' className=''>
                          {title}
                        </LeftEventTitle>
                      }
                      {subtitle &&
                        <LeftEventIntroduction as='p' className=''>
                          {subtitle}
                        </LeftEventIntroduction>
                      }
                    </LeftHeading>
                  }
                  {!hideBody &&
                    <>
                      {title &&
                        <EventTitle as='h1' className=''>
                          {title}
                        </EventTitle>
                      }
                      {subtitle &&
                        <EventIntroduction as='p' className=''>
                          {subtitle}
                        </EventIntroduction>
                      }
                      <EventContainer className='row-span-2 sm:col-span-4 lg:col-span-2'>
                        <EventDetails className={`flex sm:flex-row flex-col justify-between gap-2`}>
                          <EventDetailsItemContainer>
                            <EventDetailsItem className='flex flex-col gap-4'>
                              <div className='flex flex-row gap-4'>
                                {session.isLoggedIn
                                  ?
                                  <>
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
                                        Hi {session.username}, welcome back to {eventTitle}
                                      </EventDetailsSubTitle>
                                    </EventDetailsContainer>
                                  </>
                                  :
                                  <>
                                    <EventDetailsIcon className='row-span-3'>
                                      <EmptyAvatar />
                                    </EventDetailsIcon>
                                    <EventDetailsContainer className='flex flex-col gap-2'>
                                      <EventDetailsSubTitle className='row-span-2 col-span-2'>
                                        <button className="login underline"
                                          data-twe-toggle="modal"
                                          data-twe-target="#loginModal"
                                        >Log in
                                        </button> to view your personalised content
                                      </EventDetailsSubTitle>
                                    </EventDetailsContainer>
                                  </>
                                }

                              </div>
                              {session.isLoggedIn &&
                                <Toggle className='flex justify-between cursor-pointer w-fit'>
                                  <input
                                    type='checkbox'
                                    className='sr-only'
                                    checked={isdefaulttheme == 'true' ? true : false}
                                    onChange={handleDefaultThemeChange}
                                  />
                                  {themeMeta &&
                                    <CustomThemeToggle className='flex flex-row items-center gap-2' isdefaulttheme={isdefaulttheme?.toString()}>
                                      <FAIcon
                                        icon={themeMeta.faIcon}
                                        width={20}
                                        height={20}
                                      />
                                      <span>
                                        {themeMeta.title}
                                      </span>
                                    </CustomThemeToggle>
                                  }
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
                              }
                            </EventDetailsItem>
                          </EventDetailsItemContainer>
                          <EventDetailsComponent eventDetails={eventDetails} />
                        </EventDetails>
                      </EventContainer>
                    </>
                  }
                  {description &&
                    <EventSectionContainer className='flex flex-col sm:flex-row gap-6'>
                      {tilesData &&
                        <IWantToContainer className='flex justify-stretch flex-col sm:flex-row gap-4 sm:w-1/2 w-auto'>
                          {tilesData.map((item: any, index: number) => (
                            <IWantToItemComponent item={item} key={index} />
                          ))
                          }
                        </IWantToContainer>
                      }
                      <EventContentContainer className='flex flex-col gap-2 sm:w-1/2 w-auto'>
                        <EventContent className=''>
                          <ReadMore content={description} chars={200} />
                        </EventContent>
                      </EventContentContainer>
                    </EventSectionContainer>
                  }
                </IntroLandingContainer>
              </InnerContainer>

            </Container>
          }
        </>
      }
    </OuterContainer >
  )
}

export default Header