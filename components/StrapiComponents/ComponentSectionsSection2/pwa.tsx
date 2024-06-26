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
import CardsCarousel from '../ComponentSectionsSection1/pwaCardsCarousel'

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
  agenda: any
  delegates: any,
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
  agenda,
  delegates,
}: ComponentSectionsSection2Props) => {

  const [selectedAgendaData, setSelectedAgendaDate] = useState<string | undefined>();
  var [agendaData, setAgendaData] = useState<any>(sortAgendaItemsByStartDate(agenda.data));

  useEffect(() => {
    if (agenda.data) {
      handleAgendaDateChange(removeTime(agenda.data[0].start))
    }
  }, []);

  const handleAgendaDateChange = (date: string) => {
    setSelectedAgendaDate(date);
    let filteredAgenda = agenda.data.filter((agenda: any) => {
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
            <TextAndIcons agendaItems={sortAgendaItemsByStartDate(agenda.data)} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} />
            {delegates.data &&
              <CardsCarousel data={delegates} />
            }
            {agenda.data &&
              <Agenda data={agendaData} agendaItems={generateAgendaDatesArray(agenda.data)} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} />
            }
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentSectionsSection2