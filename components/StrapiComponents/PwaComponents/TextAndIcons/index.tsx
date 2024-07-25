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
import ReadMore from '@/components/Bootstrap/ReadMore'
import { Swiper, SwiperSlide } from 'swiper/react';
import { generateAgendaDatesArray } from '../Agenda/utils'
import {
  TextAndIconsContainer,
  FirstColumn,
  SecondColumn,
  TitleContainer,
  Icon,
  DescriptionContainer,
  IconsContainer,
  IconButton,
  DatesContainer,
  DateContainer,
  AgendaDay,
  AgendaDayNumber,
  SocialsContainer,
  Social,
} from './styles'

const TextAndIcons = ({
  agendaItems,
  handleAgendaDateChange,
  selectedAgendaData,
  icon,
  title,
  intro,
  type,
}: any) => {

  return (
    <TextAndIconsContainer className='flex sm:flex-row flex-col gap-4'>
      <FirstColumn className='flex flex-col sm:w-1/2 w-auto'>
        <TitleContainer className='flex flex-row items-center gap-4'>
          {icon &&
            <Icon className='flex items-center'>
              <FAIcon
                icon={icon}
                width={36}
                height={36}
              />
            </Icon>
          }
          <SectionTitle>
            {title}
          </SectionTitle>
        </TitleContainer>
        {intro &&
          <DescriptionContainer className=''>
            <ReadMore content={intro} chars={100} />
          </DescriptionContainer>
        }
      </FirstColumn>
      <SecondColumn className='sm:w-1/2 w-auto'>
        {type == 'agenda' &&
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
      </SecondColumn>
    </TextAndIconsContainer>
  )
}

export default TextAndIcons