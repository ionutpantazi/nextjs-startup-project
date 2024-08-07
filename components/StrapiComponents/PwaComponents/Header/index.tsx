import React, { useContext, useEffect, useState } from 'react'
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
import { setFECookie, generateMenuHref, extractDate, extractTime, getEventSlug, } from 'utils/helpers'
import { Swiper, SwiperSlide } from 'swiper/react';
import { parseContent, mobileCheck } from 'utils/helpers'
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ThemeContext } from 'components/Layout';
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
  venueData,
  startDate,
  tilesData,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
  hideContentContainer,
  hideBody,
  userLoggedInFromApi,
}: any) => {

  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const { session, isLoading } = useSession();
  const backgroundImage = headerImage?.path ? headerImage.path : null;
  const [venue] = useState(venueData);
  const [date] = useState(startDate);

  useEffect(() => {
    // update header image marging top
    const isMobile = width && width < Number(theme.screens['md'].replace('px', '')) ? true : false;
    let imageContainer = document.getElementById('imageContainer') as any;
    let header = document.querySelector('nav')
    if (imageContainer && header && !mobileCheck()) {
      if (!isMobile) {
        let imageContainerStyle = imageContainer.currentStyle || window.getComputedStyle(imageContainer);
        let marginTop = parseInt(imageContainerStyle.marginTop.replace('px', ''))
        if (marginTop < 0 || (marginTop == 56)) {
          let headerHeight = header?.offsetHeight
          imageContainer.style.marginTop = `-${headerHeight}px`;
        }
      } else {
        imageContainer.style.marginTop = `56px`;
      }
    }

  }, [width]);

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

  function openLoginModal(e: any) {
    e.preventDefault()
    document.getElementById('login_button')?.click()
  }

  const formatAddress = () => {
    console.log("Venue", venue)
    const formattedTitle: string = venue.title ? venue.title : '';
    const formattedAddress: string = venue.address ? venue.address.replace(/,+$/, '') : '';
    const formattedPostCode: string = venue.postcode ? venue.postcode : '';

    const formattedTitlePart = formattedTitle.length > 0 && (formattedAddress.length > 0 || formattedPostCode.length > 0) ? `${formattedTitle}, ` : formattedTitle;
    const formattedAddressPart = formattedAddress.length > 0 && formattedPostCode.length > 0 ? `${formattedAddress}, ` : formattedAddress;

    return `${formattedTitlePart}${formattedAddressPart}${formattedPostCode}`
  }

  const EventDetailsComponent = () => {
    return (
      <>
        <EventDetailsItemContainer>
          <EventDetailsItem className='flex flex-row gap-4'>
            <EventDetailsIcon className='row-span-3'>
              <FAIcon
                className='h-[20px] md:h-[40px] w-[20px] md:w-[40px]'
                icon={'fa-house'}
              />
            </EventDetailsIcon>
            <EventDetailsContainer className='flex flex-col gap-2'>
              <EventDetailsTitle className='col-span-2'>
                Venue
              </EventDetailsTitle>
              <EventDetailsSubTitle className='row-span-2 col-span-2'>
                {formatAddress()}
              </EventDetailsSubTitle>
            </EventDetailsContainer>
          </EventDetailsItem>
        </EventDetailsItemContainer>
        <EventDetailsItemContainer>
          <EventDetailsItem className='flex flex-row gap-4'>
            <EventDetailsIcon className='row-span-3'>
              <FAIcon
                className='h-[20px] md:h-[40px] w-[20px] md:w-[40px]'
                icon={'fa-calendar-days'}
              />
            </EventDetailsIcon>
            <EventDetailsContainer className='flex flex-col gap-2'>
              <EventDetailsTitle className='col-span-2'>
                {'Date'}
              </EventDetailsTitle>
              <EventDetailsSubTitle className='row-span-2 col-span-2'>
                {extractDate(date)}
              </EventDetailsSubTitle>
            </EventDetailsContainer>
          </EventDetailsItem>
        </EventDetailsItemContainer>
        <EventDetailsItemContainer>
          <EventDetailsItem className='flex flex-row gap-4'>
            <EventDetailsIcon className='row-span-3'>
              <FAIcon
                className='h-[20px] md:h-[40px] w-[20px] md:w-[40px]'
                icon={'fa-clock'}
              />
            </EventDetailsIcon>
            <EventDetailsContainer className='flex flex-col gap-2'>
              <EventDetailsTitle className='col-span-2'>
                {'Time'}
              </EventDetailsTitle>
              <EventDetailsSubTitle className='row-span-2 col-span-2'>
                {extractTime(date)}
              </EventDetailsSubTitle>
            </EventDetailsContainer>
          </EventDetailsItem>
        </EventDetailsItemContainer>
      </>)
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
        <ImageContainer id="imageContainer" className='relative' hidebody={hideBody ? 'true' : 'false'} iscustomtheme={getEventSlug() == 'gffconference2022' ? 'true' : 'false'}>
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
          <Container className='md:hidden'>
            <InnerContainer className=''>
              {hideBody && title &&
                <LeftHeading>
                  <LeftEventTitle as='h1' className='' dangerouslySetInnerHTML={{
                    __html: parseContent(title),
                  }}
                  />
                </LeftHeading>
              }
              {!hideBody &&
                <>
                  {title &&
                    <EventTitle as='h1' className=''
                      dangerouslySetInnerHTML={{
                        __html: parseContent(title),
                      }}
                    />
                  }
                  {subtitle &&
                    <EventIntroduction as='p' className='' dangerouslySetInnerHTML={{
                      __html: parseContent(subtitle),
                    }}
                    />
                  }

                  <IntroLandingContainer className='mt-6' hidebody={hideBody ? 'true' : 'false'}>
                    <div className='grid grid-cols-2 gap-2'>
                      <EventDetailsComponent />
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
                      <EventDetails className={`flex sm:flex-row flex-col justify-between gap-2 max-md:hidden`}>
                        <EventDetailsItemContainer>
                          <EventDetailsItem className='flex flex-col gap-4'>
                            <div className='flex flex-row gap-4'>
                              {userLoggedInFromApi
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
                                      Hi {userLoggedInFromApi.firstName} {userLoggedInFromApi.lastName}, welcome back to {eventTitle}
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
                            {userLoggedInFromApi &&
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

          <Container className='max-md:hidden'>
            <InnerContainer className=''>
              {title &&
                <IntroLandingContainer>
                  {hideBody &&
                    <LeftHeading>
                      {title &&
                        <LeftEventTitle as='h1' className=''
                          dangerouslySetInnerHTML={{
                            __html: parseContent(title),
                          }}
                        />
                      }
                      {subtitle &&
                        <LeftEventIntroduction as='p' className=''
                          dangerouslySetInnerHTML={{
                            __html: parseContent(subtitle),
                          }}
                        />
                      }
                    </LeftHeading>
                  }
                  {!hideBody &&
                    <>
                      {title &&
                        <EventTitle as='h1' className=''
                          dangerouslySetInnerHTML={{
                            __html: parseContent(title),
                          }}
                        />
                      }
                      {subtitle &&
                        <EventIntroduction as='p' className=''
                          dangerouslySetInnerHTML={{
                            __html: parseContent(subtitle),
                          }}
                        />
                      }
                      <EventContainer className='row-span-2 sm:col-span-4 lg:col-span-2'>
                        <EventDetails className={`flex sm:flex-row flex-col justify-between gap-2`}>
                          <EventDetailsItemContainer>
                            <EventDetailsItem className='flex flex-col gap-4'>
                              <div className='flex flex-row gap-4'>
                                {userLoggedInFromApi
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
                                        Hi {userLoggedInFromApi.firstName} {userLoggedInFromApi.lastName}, welcome back to {eventTitle}
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
                                          onClick={(e: any) => openLoginModal(e)}
                                        >Log in
                                        </button> to view your personalised content
                                      </EventDetailsSubTitle>
                                    </EventDetailsContainer>
                                  </>
                                }

                              </div>
                              {userLoggedInFromApi &&
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
                          <EventDetailsComponent />
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
              }
            </InnerContainer>

          </Container>
        </>
      }
    </OuterContainer >
  )
}

export default Header