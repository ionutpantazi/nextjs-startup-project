import React, { useState, useContext } from 'react'
import styled, { css } from 'styled-components'
import { ThemeContext } from 'components/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import {
  StrapiFile,
  FAIconProps,
} from 'interfaces'
import {
  OuterContainer,
  Container,
  InnerContainer,
  RadialContainer,
  SectionTitle,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import FAIcon from 'components/Bootstrap/FAIcon'
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useWindowSize } from '@/lib/hooks/useWindowSize';

export type IconsProps = {
  id: string
  Title: string
  Icon: StrapiFile
  FAIcon: FAIconProps
}

export type TextAndIconsProps = {
  id: string
  Title: string
  Introduction: string
  FAIcon: FAIconProps
  Icon: StrapiFile
  Icons: {
    id: string
    Title: string
    Type: string
    Icons: [IconsProps]
  }
}

export type CardProps = {
  id: string,
  Title: string
  Sub_Title: string
  Type: string
  Impressions: string
  Link: string
  Image: StrapiFile
}

export type CardsCarousel = {
  id: string
  Title: string
  Cards: [CardProps]
}

export type Section1Props = {
  id: string,
  TextAndIcons: TextAndIconsProps;
  CardsCarousel: CardsCarousel;
}

export interface ComponentSectionsSection1Props {
  data: Section1Props
  senddatatolayout?: any
  isdefaulttheme?: any
}

const TextAndIcons = styled.div`
`

const TitleContainer = styled.div`
`

const Icon = styled.div`
  color: ${props => props.theme.colors.brand};
`

const FirstColumn = styled.div`
`

const SeconColumn = styled.div`
`

const DescriptionContainer = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  padding-top: 20px;
  color: ${props => props.theme.colors.grey1};
`

const ReadMore = styled.div`
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  padding-top: 10px;
  color: ${props => props.theme.colors.brand};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.brandlight};
  }
`

const IconsTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`

const IconsContainer = styled.div`
  padding-top: 10px;
`

const IconButton = styled.div <{ active?: any }>`
  padding: 18px 26px;

  ${({ active }) => css`
    ${props => active == 'true' ? 'border-color: ' + props.theme.colors.brand + ';border-radius: ' + props.theme.borderRadius.components.small + ';border-style: solid; border-width: 2px;' : 'border:2px solid rgba(0,0,0,0);'};
  `}
  
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  svg {
    color: ${props => props.theme.colors.brand};
  }

  &:hover {
    border-radius: ${props => props.theme.borderRadius.components.small};
    border-style: solid;
    border-width: 2px;
    border-color: ${props => props.theme.colors.brandlight};
    svg {
      color: ${props => props.theme.colors.brandlight};
    }
  }
`

const CardsCarousel = styled.div`
  padding-top: 40px;
`

const CarouselTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`

const CarouselShowAll = styled.div`
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  color: ${props => props.theme.colors.grey1};

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.lightgrey};
  }
`

const CardsContainer = styled.div`
  width: 100vw;
  position: absolute;
  left: 0;
  height: 200px;
`

const CardContainer = styled.div`
  border-radius: 6px;
  padding: 10px;
  background-color: ${props => props.theme.colors.darkestgrey};
`

const ImageContainer = styled.div <{ hidebackground?: any }>`
  ${({ hidebackground }) => css`
    ${props => hidebackground == 'true' ? '' : 'background: ' + props.theme.colors.brand + ';'};
  `}
  border-radius: ${props => props.theme.borderRadius.components.small};
  height: 150px;
  overflow: hidden;
`

const ImageIcon = styled.div`
  background: ${props => props.theme.colors.brand};
  border-radius: 50%;
  height: 22px;
  width: 22px;
  position: relative;
  z-index: 2;
  margin-left: 10px;
  margin-top: -10px;
  svg {
    color: ${props => props.theme.colors.white};
  }
`

const CardTitle = styled.div`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const CardSubTitle = styled.div`
  color: ${props => props.theme.colors.lightgrey};
  margin-top: 6px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const ButtonsContainer = styled.div`
  margin-top: 6px;
  span {
    padding-left: 4px;
    color: ${props => props.theme.colors.lightgrey};
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
  }
  svg {
    color: ${props => props.theme.colors.brand};
  }
`

const DiscussionContainer = styled.div`
  margin-top: 350px;
`

const CustomPagination = styled.div`
  .swiper-pagination-bullet {
    background: white;
  }
  .swiper-pagination-bullet-active {
    background: ${props => props.theme.colors.brand};
  }

  padding-top: 30px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding-top: 20px;
  }
`

const ComponentSectionsSection1 = ({
  data
}: ComponentSectionsSection1Props) => {

  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const isMobile = width && width < Number(theme.screens['md'].replace('px', '')) ? true : false;
  console.log(data)
  const applyCardStyle = (width: number | undefined, card: CardProps) => {
    let isLarge = card.Type == 'large';
    if (isMobile) {
      return {
        width: isLarge ? '100%' : '45%',
        height: '300px'
      }
    } else return {
      width: isLarge ? '320px' : '160px',
      height: '300px'
    }
  }

  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            <TextAndIcons className='flex sm:flex-row flex-col gap-4'>
              <FirstColumn className='flex flex-col sm:w-1/2 w-auto'>
                <TitleContainer className='flex flex-row items-center gap-4'>
                  {
                    <Icon className='flex items-center'>
                      {data.TextAndIcons?.Icon?.data?.attributes?.url &&
                        <NextImage
                          src={IMAGE_DOMAIN + data.TextAndIcons?.Icon?.data?.attributes?.url}
                          className=''
                          alt={data.TextAndIcons?.Icon?.data?.attributes?.alternativeText ?? ""}
                          width={28}
                          height={28}
                        />
                      }
                      {data.TextAndIcons?.FAIcon?.Icon &&
                        <FAIcon
                          icon={data.TextAndIcons?.FAIcon?.Icon}
                          width={Number(data.TextAndIcons.FAIcon.Width)}
                          height={Number(data.TextAndIcons.FAIcon?.Width)}
                        />
                      }
                    </Icon>
                  }
                  <SectionTitle>
                    {data.TextAndIcons.Title}
                  </SectionTitle>
                </TitleContainer>
                <DescriptionContainer
                  className=''
                  dangerouslySetInnerHTML={{
                    __html: data.TextAndIcons.Introduction
                  }}
                />
                <ReadMore className='w-1/2'>
                  Read more
                </ReadMore>
              </FirstColumn>
              <SeconColumn className='sm:w-1/2 w-auto'>
                {data.TextAndIcons.Icons.Title &&
                  <>
                    <IconsTitle>
                      {data.TextAndIcons.Icons.Title}
                    </IconsTitle>
                    <IconsContainer className='flex flex-row flex-wrap gap-4'>
                      {data.TextAndIcons.Icons.Icons.map((icon: IconsProps) => (
                        <IconButton as='a' href='#' key={icon.id} className='flex flex-row items-center gap-4' active={icon.id == '1' ? 'true' : 'false'}>
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
                    </IconsContainer>
                  </>
                }
              </SeconColumn>
            </TextAndIcons>
            <CardsCarousel className=''>
              <div className='flex flex-row justify-between mb-4 items-center'>
                <CarouselTitle>
                  {data.CardsCarousel.Title}
                </CarouselTitle>
                <CarouselShowAll>
                  Show all
                </CarouselShowAll>
              </div>
              <CardsContainer className=''>
                <Swiper
                  spaceBetween={isMobile ? '10%' : 40}
                  slidesPerView={'auto'}
                  pagination={{
                    el: '.swiper-custom-pagination',
                    clickable: true,
                  }}
                  modules={[Pagination]}
                >
                  {data.CardsCarousel.Cards.map((card: CardProps) => (
                    <SwiperSlide key={card.id} style={{ 'width': `${applyCardStyle(width, card)?.width}` }}>
                      <CardContainer>
                        <ImageContainer className='relative' hidebackground={card.Image.data?.attributes?.url ? 'true' : 'false'}>
                          {card.Image.data?.attributes?.url &&
                            <>
                              <RadialContainer />
                              <NextImage
                                src={IMAGE_DOMAIN + card.Image.data?.attributes?.url}
                                className=''
                                alt={card.Image.data?.attributes?.alternativeText}
                                layout='fill'
                                objectFit='cover'
                              />
                            </>
                          }
                        </ImageContainer>
                        <ImageIcon className=''>
                          <FAIcon
                            icon={'fa-leaf'}
                            width={18}
                            height={18}
                          />
                        </ImageIcon>
                        <CardTitle>
                          {card.Title}
                        </CardTitle>
                        <CardSubTitle>
                          {card.Sub_Title}
                        </CardSubTitle>
                        <ButtonsContainer className='flex flex-row gap-4 justify-start items-center'>
                          <div className='flex flex-row items-center'>
                            <FAIcon
                              icon={'fa-heart'}
                              width={16}
                              height={16}
                            />
                            <span>
                              {card.Impressions}
                            </span>
                          </div>
                          <FAIcon
                            icon={'fa-comment-dots'}
                            width={16}
                            height={16}
                          />
                          <FAIcon
                            icon={'fa-share'}
                            width={16}
                            height={16}
                          />
                        </ButtonsContainer>
                      </CardContainer>
                    </SwiperSlide>
                  ))
                  }
                </Swiper>
                <CustomPagination className=''>
                  <div className="flex justify-center gap-2 swiper-custom-pagination" />
                </CustomPagination>
              </CardsContainer>
            </CardsCarousel>
            <DiscussionContainer className=''>

            </DiscussionContainer>
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentSectionsSection1