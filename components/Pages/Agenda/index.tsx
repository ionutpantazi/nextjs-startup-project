import React, { useState, useEffect, Children } from 'react'
import dnmc from 'next/dynamic'
import styled, { css } from 'styled-components'
import {
  removeTime,
  removeMinutes,
  sortAgendaItemsByStartDate,
  generateAgendaDatesArray,
  setAgendaPage,
} from 'components/StrapiComponents/PwaComponents/Agenda/utils'
import {
  OuterContainer,
  Container,
  InnerContainer,
  RadialContainer,
  SectionTitle,
  ComponentContainer,
} from 'components/Bootstrap/Common'

import Ruler from '@/components/StrapiComponents/PwaComponents/Common/Ruler'
import {
  LeftEventTitle,
} from '@/components/StrapiComponents/PwaComponents/Header/styles'

const Header = dnmc(() => import('@/components/StrapiComponents/PwaComponents/Header'));
const TextAndIcons = dnmc(() => import('components/StrapiComponents/PwaComponents/TextAndIcons'));
const Agenda = dnmc(() => import('components/StrapiComponents/PwaComponents/Agenda'));

const PwaContentContainer = styled.div`
`

const AgendaPage = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
  navigationData,
  agenda,
  userLoggedInFromApi,
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

  return (
    <>
      <PwaContentContainer>
        <Header headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        <OuterContainer className=''>
          <Container className=''>
            <InnerContainer className=''>
              <ComponentContainer className='flex flex-col'>
                <LeftEventTitle>
                  Agenda
                </LeftEventTitle>
                <Ruler />
                <TextAndIcons icon={'fa-calendar-days'} title={'Activities'} intro={data.introduction} type={'agenda'} agendaItems={sortAgendaItemsByStartDate(agenda.data)} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} />
                <Agenda data={agendaData} isHomepage={false} agendaItems={generateAgendaDatesArray(agenda.data)} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} title={'Your curated agenda'} userLoggedInFromApi={userLoggedInFromApi}/>
              </ComponentContainer>
            </InnerContainer>
          </Container>
        </OuterContainer>
      </PwaContentContainer>
    </>
  )
}

export default AgendaPage