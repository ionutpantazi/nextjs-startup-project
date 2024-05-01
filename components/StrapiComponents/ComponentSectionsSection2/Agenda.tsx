import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import {
  StrapiFile
} from 'interfaces'
import {
  OuterContainer,
  Container,
  InnerContainer,
  Title,
} from 'components/Bootstrap/Common'
var moment = require('moment');
import { Speaker } from '../ComponentSectionsSpeakersCarousel'

export type Tagsprops = {
  id: string
  attributes: {
    Name: string
    Slug: string
  }
}

export type AgendaItems = {
  id: string
  attributes: {
    Title: string
    Sub_Title: string
    Date: string
    Start_Time: string
    End_Time: string
    Room: string
    Participants: {
      data: [Speaker]
    }
    Tags: {
      data: [Tagsprops]
    }
  }
}

export type AgendaProps = {
  id: string,
  Title: string,
  Items: {
    data: [AgendaItems]
  }
}

export interface AgendaDataProps {
  data: AgendaProps
}

const AgendaContainer = styled.div`
`

const AgendaTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`

const AgendaInnerContainer = styled.div`
`

const AgendaItem = styled.div`
  padding: 16px;
  background: ${props => props.theme.colors.darkgrey};
  border-radius: ${props => props.theme.borderRadius.components.small};
`

const DateBox = styled.div`
  border-radius: ${props => props.theme.borderRadius.components.small};
  background-color: ${props => props.theme.colors.grey};
  padding: 10px;
  text-align: center;
  width: 140px;
  height: 140px;
`

const AgendaDateFrom = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  color: ${props => props.theme.colors.brand};
`

const AgendaDateTo = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  color: ${props => props.theme.colors.lightgrey};
`

const DateAndRoomBox = styled.div`
`

const AgendaDateRoom = styled.div`
  span {
    padding-left: 8px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }
`

const DetailsBox = styled.div`
`

const AgendaItemTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`

const AgendaItemSubTitle = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: ${props => props.theme.colors.lightgrey};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const AgendaTag = styled.div`
  border-radius: ${props => props.theme.borderRadius.components.xsmall};
  background-color: ${props => props.theme.colors.grey};
  padding: 4px;
  font-size: 8px;
  font-weight: 500;
  line-height: 11px;
`

const ParticipantsBox = styled.div`
`

const Participants = styled.div`
`

const ParticipantsText = styled.div`
  font-size: 10px;
  font-weight: 300;
  line-height: 13px;
  color: ${props => props.theme.colors.lightgrey};
`

const ImageIcon = styled.div`
  width: 30px;
  height: 30px;
  background: ${props => props.theme.colors.brand};
  border-radius: 50%;
  position: relative;
  z-index: 1;
  svg {
    color: ${props => props.theme.colors.white};
  }
`

const StyledNextImage = styled(NextImage)`
  margin-left: -10px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  z-index: 2;
`

const ButtonsBox = styled.div`
`

const Button1 = styled.div`
  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }
  svg {
    color: ${props => props.theme.colors.brand};
  }

  &:hover {
    span {
      color: ${props => props.theme.colors.lightgrey};
    }
  }
`

const Button2 = styled.div`
  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }
  border-radius: ${props => props.theme.borderRadius.components.small};
  background-color: ${props => props.theme.colors.brand};
  padding: 10px;

  &:hover {
    background-color: ${props => props.theme.colors.brandlight};
  }
`

export function removeMinutes(momentTime: string) {
  return momentTime.replace(/(:00)/g, '');
}

const Agenda = ({
  data
}: AgendaDataProps) => {

  return (
    <AgendaContainer className=''>
      <AgendaTitle className='mb-4'>
        {data.Title}
      </AgendaTitle>
      <AgendaInnerContainer className='flex flex-col gap-4'>
        {data.Items.data.map((agenda: AgendaItems, index:number) => (
          <AgendaItem className='flex flex-row flex-wrap justify-around gap-4 test' key={index}>
            <DateBox className='flex flex-col gap-2 justify-center'>
              <AgendaDateFrom className=''>
                {removeMinutes(moment(agenda.attributes.Start_Time, moment.HTML5_FMT.TIME_MS).format('h:mma'))}
              </AgendaDateFrom>
              <AgendaDateTo className=''>
                {`till ${removeMinutes(moment(agenda.attributes.End_Time, moment.HTML5_FMT.TIME_MS).format('h:mma'))}`}
              </AgendaDateTo>
            </DateBox>
            <DateAndRoomBox className='flex flex-col gap-2 justify-center md:w-2/12 w-full'>
              <AgendaDateRoom className='flex flex-row items-center'>
                <FAIcon
                  icon={'fa-calendar-days'}
                  width={16}
                  height={16}
                />
                <span>
                  {`${moment(agenda.attributes.Date).format('ddd')}, ${moment(agenda.attributes.Date).format('Do')} ${moment(agenda.attributes.Date).format('MMMM')}`}
                </span>
              </AgendaDateRoom>
              <AgendaDateRoom className='flex flex-row items-center'>
                <FAIcon
                  icon={'fa-house'}
                  width={16}
                  height={16}
                />
                <span>
                  {agenda.attributes.Room}
                </span>
              </AgendaDateRoom>
            </DateAndRoomBox>
            <DetailsBox className='flex flex-col gap-2 justify-center md:w-4/12 w-full'>
              <AgendaItemTitle className=''>
                {agenda.attributes.Title}
              </AgendaItemTitle>
              <AgendaItemSubTitle className=''>
                {agenda.attributes.Sub_Title}
              </AgendaItemSubTitle>
              <div className='flex flex-row gap-1'>
                {agenda.attributes.Tags.data.map((tag: Tagsprops, index:number) => (
                  <AgendaTag key={index} className=''>
                    {tag.attributes.Name}
                  </AgendaTag>
                ))
                }
              </div>
            </DetailsBox>
            <ParticipantsBox className='flex flex-col gap-3 justify-center md:w-fit w-full'>
              <Participants className='flex flex-row'>
                <ImageIcon className='flex justify-center items-center'>
                  <FAIcon
                    icon={'fa-leaf'}
                    width={20}
                    height={20}
                  />
                </ImageIcon>
                {agenda.attributes.Participants.data.map((participant: Speaker, index:number) => (
                  <StyledNextImage
                    key={index}
                    src={IMAGE_DOMAIN + participant.attributes?.Image?.data?.attributes?.url}
                    className=''
                    alt={participant.attributes?.Image?.data?.attributes?.alternativeText ?? ""}
                    width={30}
                    height={30}
                  />
                ))
                }
              </Participants>
              <ParticipantsText className=''>
                {`Join ${agenda.attributes.Participants.data[0].attributes.Name} + others`}
              </ParticipantsText>
            </ParticipantsBox>
            <ButtonsBox className='flex flex-col gap-4 justify-center md:w-fit w-full'>
              <Button1 as='a' href='#' className='flex flex-row gap-4 items-center w-fit'>
                <FAIcon
                  icon={'fa-heart'}
                  width={20}
                  height={20}
                />
                <span>
                  Add to agenda
                </span>
              </Button1>
              <Button2 as='a' href='#' className='w-fit'>
                <span>
                  View more details
                </span>
              </Button2>
            </ButtonsBox>
          </AgendaItem>
        ))
        }
      </AgendaInnerContainer>
    </AgendaContainer>
  )
}

export default Agenda