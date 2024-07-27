import React, { useState, useEffect, Children } from 'react'
import dnmc from 'next/dynamic'
import styled, { css } from 'styled-components'
import { removeTime, generateAgendaDatesArray, sortAgendaItemsByStartDate } from '../../StrapiComponents/ComponentSectionsSection2/pwa';
import {
  OuterContainer,
  Container,
  InnerContainer,
  RadialContainer,
  SectionTitle,
  ComponentContainer,
} from 'components/Bootstrap/Common'

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
}: any) => {

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
    <>
      <PwaContentContainer>
        <Header title={'Agenda'} headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        <OuterContainer className=''>
          <Container className=''>
            <InnerContainer className=''>
              <ComponentContainer className='flex flex-col'>
                <TextAndIcons icon={'fa-people-group'} title={'Agenda'} intro={data.introduction} type={'agenda'} agendaItems={sortAgendaItemsByStartDate(agenda.data)} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} />
                <Agenda data={agendaData} isHomepage={false} agendaItems={generateAgendaDatesArray(agenda.data)} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} title={'Your curated agenda'} />
              </ComponentContainer>
            </InnerContainer>
          </Container>
        </OuterContainer>
      </PwaContentContainer>
    </>
  )
}

export default AgendaPage