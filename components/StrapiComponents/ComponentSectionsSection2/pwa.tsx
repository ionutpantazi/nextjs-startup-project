import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import {
  StrapiFile
} from 'interfaces'
import {
  OuterContainer,
  Container,
  InnerContainer,
  Title,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import TextAndIcons, { TextAndIconsProps } from '../ComponentSectionsSection1/pwaTextAndIcons'
import Agenda from './pwaAgenda'
import CardsCarousel, { CardsCarouselProps } from '../ComponentSectionsSection1/CardsCarousel'
import Lists, { ListsProps } from './Lists'
import ComponentSectionsVideo, { VideoProps } from 'components/StrapiComponents/ComponentSectionsVideo'

export type AgendaItem = {
  agendaItemId: number;
  title: string;
  start: string;
  end: string;
  isAttending: boolean | null;
  eventId: number;
  shortDesc: string;
  longDesc: string | null;
  room: string | null;
  badge: string | null;
  bookable: boolean;
  speakers: string | null;
};

export interface ComponentSectionsSection2Props {
  data: any
  senddatatolayout?: any,
  isdefaulttheme?: any,
}

export function removeTime(momentTime: string) {
  var index = momentTime.lastIndexOf('T')
  return momentTime.substring(0, index);
}

export const generateAgendaDatesArray = (agendaItems: any) => {
  const uniqueDatesArray: string | any[] = [];
  if (!agendaItems) return []
  agendaItems.forEach((item: any) => {
    let date = removeTime(item.start)
    if (!uniqueDatesArray.includes(date)) {
      uniqueDatesArray.push(date)
    }
  })
  return uniqueDatesArray
}

export function sortAgendaItemsByStartDate(agendaItems: AgendaItem[]): AgendaItem[] {
  return agendaItems.sort((a, b) => {
    const dateA = new Date(a.start).getTime();
    const dateB = new Date(b.start).getTime();
    return dateA - dateB;
  });
}

const ComponentSectionsSection2 = ({
  data
}: ComponentSectionsSection2Props) => {

  const [selectedAgendaData, setSelectedAgendaDate] = useState<string | undefined>();
  var [agendaData, setAgendaData] = useState<any>(sortAgendaItemsByStartDate(data.data));

  useEffect(() => {
    if (data.data) {
      handleAgendaDateChange(removeTime(data.data[0].start))
    }
  }, []);

  const handleAgendaDateChange = (date: string) => {
    setSelectedAgendaDate(date);
    let filteredAgenda = data.data.filter((agenda: any) => {
      let agendaDate = removeTime(agenda.start)
      if (agendaDate == date) return agenda;
    });
    setAgendaData(filteredAgenda)
  };

  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            <TextAndIcons agendaItems={sortAgendaItemsByStartDate(data.data)} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} />
            {data.data &&
              <Agenda data={agendaData} agendaItems={generateAgendaDatesArray(data.data)} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} />
            }
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentSectionsSection2