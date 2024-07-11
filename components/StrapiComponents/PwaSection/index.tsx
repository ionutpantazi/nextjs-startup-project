import React, { useState, useEffect } from 'react'
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
import Discussion, { DiscussionProps } from 'components/StrapiComponents/ComponentSectionsSection1/pwaDiscussion'
import TextAndIcons, { TextAndIconsProps } from '../ComponentSectionsSection1/pwaTextAndIcons'
import { removeTime, generateAgendaDatesArray, sortAgendaItemsByStartDate } from '../ComponentSectionsSection2/pwa';
import CardsCarousel from '../ComponentSectionsSection1/pwaCardsCarousel'
import Agenda from '../ComponentSectionsSection2/pwaAgenda';

export interface ComponentSectionsSection1Props {
  discussions: DiscussionProps;
  data: any;
  agenda: any;
  delegates: any;
  speakers: any;
}

const ComponentSectionsSection1 = ({
  data,
  agenda,
  delegates,
  speakers,
  discussions,
}: ComponentSectionsSection1Props) => {
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

  const extractType = (data: any) => {
    if (data?.components?.some((e: any) => e.type === 'agenda')) {
      return 'agenda';
    }
  }

  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            <TextAndIcons icon={data.icon} title={data.title} intro={data.introduction} type={extractType(data)} agendaItems={sortAgendaItemsByStartDate(agenda.data)} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} />
            {data?.components?.map((component: any, index: number) => (
              <div key={index}>
                {component.type == 'delegates' && delegates?.data?.length > 0 &&
                  <CardsCarousel data={delegates} title={component.title} />
                }
                {component.type == 'discussions' && discussions.data.length &&
                  <Discussion data={discussions} title={component.title} />
                }
                {component.type == 'agenda' && agenda?.data?.length > 0 &&
                  <Agenda data={agendaData} agendaItems={generateAgendaDatesArray(agenda.data)} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} title={component.title} />
                }
              </div>
            ))
            }
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentSectionsSection1