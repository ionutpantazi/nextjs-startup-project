import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import {
  StrapiFile,
  FAIconProps,
} from 'interfaces'
import {
  SectionTitle
} from 'components/Bootstrap/Common'
var moment = require('moment');
import FAIcon from 'components/Bootstrap/FAIcon'
import { AgendaItems } from '../ComponentSectionsSection2/Agenda'
import ReadMore from '@/components/Bootstrap/ReadMore'
import { Swiper, SwiperSlide } from 'swiper/react';

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

export interface TextAndIconsDataProps {
  data: TextAndIconsProps
  agendaItems?: any
  handleAgendaDateChange?: (data: string) => void;
  selectedAgendaData?: string;
}

const TextAndIconsContainer = styled.div`
`

const FirstColumn = styled.div`
`

const SecondColumn = styled.div`
`

const TitleContainer = styled.div`
`

const Icon = styled.div`
  color: ${props => props.theme.colors.brand};
`

export const DescriptionContainer = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  padding-top: 20px;
  color: ${props => props.theme.components?.TextAndIcons?.DescriptionContainerColor};
`

// const ReadMore = styled.div`
//   font-size: 11px;
//   font-weight: 500;
//   line-height: 16px;
//   padding-top: 10px;
//   color: ${props => props.theme.colors.brand};
//   &:hover {
//     cursor: pointer;
//     color: ${props => props.theme.colors.brandlight};
//   }
// `

const IconsTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`

export const IconsContainer = styled.div`
  padding-top: 10px;
`

export const IconButton = styled.div <{ active?: any }>`
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

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    padding: 10px 20px;
    span {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }
  }
`

export const DatesContainer = styled.div`
`

export const DateContainer = styled.div <{ active?: any }>`
  border-radius: ${props => props.theme.borderRadius.components.small};
  background-color: ${props => props.theme.colors.darkestgrey};
  padding: 20px;
  text-align: center;
  width: 160px;
  height: 160px;

  ${({ active }) => css`
    ${props => active == 'true' ? 'border-color: ' + props.theme.colors.brand + ';border-style: solid; border-width: 2px;' : 'border:2px solid rgba(0,0,0,0);'};
  `}

  .agendaDayNumber {
    color: ${props => props.theme.colors.brand};
  }

  &:hover {
    cursor: pointer;
    border-radius: ${props => props.theme.borderRadius.components.small};
    border-style: solid;
    border-width: 2px;
    border-color: ${props => props.theme.colors.brandlight};
    .agendaDayNumber {
      color: ${props => props.theme.colors.brandlight};
    }
  }
`

export const AgendaDay = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

export const AgendaDayNumber = styled.div`
  font-size: 36px;
  font-weight: 400;
  line-height: 44px;
`

export const SocialsContainer = styled.div`
  padding-top: 10px;
`

export const Social = styled.div`
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
  svg {
    color: ${props => props.theme.colors.brand};
  }

  &:hover {
    svg {
      color: ${props => props.theme.colors.brandlight};
    }
  }
`

const generateAgendaDatesArray = (agendaItems: [AgendaItems]) => {
  const uniqueDatesSet = new Set();
  if (!agendaItems) return []
  agendaItems.forEach((item: AgendaItems) => {
    uniqueDatesSet.add(item.attributes.Date);
  })
  return Array.from(uniqueDatesSet)
}

const TextAndIcons = ({
  data,
  agendaItems,
  handleAgendaDateChange,
  selectedAgendaData,
}: TextAndIconsDataProps) => {

  return (
    <TextAndIconsContainer className='flex sm:flex-row flex-col gap-4'>
      <FirstColumn className='flex flex-col sm:w-1/2 w-auto'>
        <TitleContainer className='flex flex-row items-center gap-4'>
          {data.Icon?.data &&
            <Icon className='flex items-center'>
              {data?.Icon?.data?.attributes?.url &&
                <NextImage
                  src={IMAGE_DOMAIN + data?.Icon?.data?.attributes?.url}
                  className=''
                  alt={data?.Icon?.data?.attributes?.alternativeText ?? ""}
                  width={28}
                  height={28}
                />
              }
              {data?.FAIcon?.Icon &&
                <FAIcon
                  icon={data?.FAIcon?.Icon}
                  width={Number(data.FAIcon.Width)}
                  height={Number(data.FAIcon?.Width)}
                />
              }
            </Icon>
          }
          <SectionTitle>
            {data.Title}
          </SectionTitle>
        </TitleContainer>
        <DescriptionContainer className=''>
          <ReadMore content={data.Introduction} chars={100} />
        </DescriptionContainer>
      </FirstColumn>
      {data.Icons &&
        <SecondColumn className='sm:w-1/2 w-auto'>
          {data.Icons.Type == 'Filters' &&
            <>
              <IconsTitle>
                {data.Icons.Title}
              </IconsTitle>
              <IconsContainer className='flex flex-row flex-wrap gap-4'>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={'auto'}
                  className='w-full mt-4'
                >
                  {data.Icons.Icons.map((icon: IconsProps, index: number) => (
                    <SwiperSlide key={index} style={{ 'width': 'fit-content' }}>
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
                    </SwiperSlide>
                  ))
                  }
                </Swiper>
              </IconsContainer>
            </>
          }
          {data.Icons.Type == 'Agenda' && generateAgendaDatesArray(agendaItems).length &&
            <DatesContainer className='md:flex hidden flex-row flex-wrap gap-2'>
              {generateAgendaDatesArray(agendaItems).map((agendaDate: any, index: number) => (
                <DateContainer key={index} className='flex flex-col gap-2 justify-center' active={selectedAgendaData == agendaDate ? 'true' : 'false'}
                  onClick={() => { if (handleAgendaDateChange) handleAgendaDateChange(agendaDate) }}
                >
                  <AgendaDay className=''>
                    {moment(agendaDate).format('ddd')}
                  </AgendaDay>
                  <AgendaDayNumber className='agendaDayNumber'>
                    {moment(agendaDate).format('Do')}
                  </AgendaDayNumber>
                  <AgendaDay className=''>
                    {moment(agendaDate).format('MMMM')}
                  </AgendaDay>
                </DateContainer>
              ))
              }
            </DatesContainer>
          }
          {data.Icons.Type == 'Social' &&
            <>
              <IconsTitle>
                {data.Icons.Title}
              </IconsTitle>
              <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
                className='w-full mt-4'
              >
                <SocialsContainer className='flex flex-wrap gap-4'>
                  {data.Icons.Icons.map((icon: IconsProps, index: number) => (
                    <SwiperSlide key={index} style={{ 'width': 'fit-content' }}>
                      <Social as='a' href='#' key={icon.id} className='flex flex-row items-center gap-4'>
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
                      </Social>
                    </SwiperSlide>
                  ))
                  }
                </SocialsContainer>
              </Swiper>
            </>
          }
        </SecondColumn>
      }
    </TextAndIconsContainer>
  )
}

export default TextAndIcons