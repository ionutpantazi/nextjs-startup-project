import React, { useState, useEffect } from 'react'
import dnmc from 'next/dynamic'
import {
  OuterContainer,
  Container,
  InnerContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'

import {
  removeTime,
  removeMinutes,
  sortAgendaItemsByStartDate,
  generateAgendaDatesArray,
  setAgendaPage,
} from 'components/StrapiComponents/PwaComponents/Agenda/utils'

const TextAndIcons = dnmc(() => import('components/StrapiComponents/PwaComponents/TextAndIcons'));
const Agenda = dnmc(() => import('components/StrapiComponents/PwaComponents/Agenda'));
const Discussions = dnmc(() => import('components/StrapiComponents/PwaComponents/Discussions'));
const CardsCarousel = dnmc(() => import('components/StrapiComponents/PwaComponents/CardsCarousel'));

const ComponentSectionsSection1 = ({
  data,
  agenda,
  delegates,
  speakers,
  discussions,
}: any) => {

  const [selectedAgendaData, setSelectedAgendaDate] = useState<string | undefined>();
  var [agendaData, setAgendaData] = useState<any>(sortAgendaItemsByStartDate(agenda.data));

  useEffect(() => {
    setAgendaPage(agenda, handleAgendaDateChange)
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
                  <Discussions data={discussions} title={component.title} />
                }
                {component.type == 'agenda' && agenda?.data?.length > 0 &&
                  <Agenda data={agendaData} isHomepage={true} agendaItems={generateAgendaDatesArray(agenda.data)} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} title={component.title} />
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