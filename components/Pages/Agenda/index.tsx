import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import PwaSection from 'components/StrapiComponents/PwaSection'
import { removeTime, generateAgendaDatesArray, sortAgendaItemsByStartDate } from '../../StrapiComponents/ComponentSectionsSection2/pwa';
import Agenda from '../../StrapiComponents/ComponentSectionsSection2/pwaAgenda';
import {
  OuterContainer,
  Container,
  InnerContainer,
  RadialContainer,
  SectionTitle,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import TextAndIcons, { TextAndIconsProps } from '../../StrapiComponents/ComponentSectionsSection1/pwaTextAndIcons'

const PwaContentContainer = styled.div`
`

const AgendaPage = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
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
        <ComponentIntrosLandingNew data={data['event']} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} />
        <OuterContainer className=''>
          <Container className=''>
            <InnerContainer className=''>
              <ComponentContainer className='flex flex-col'>
                <TextAndIcons icon={'fa-people-group'} title={'Agenda'} intro={data.introduction} type={'agenda'} agendaItems={sortAgendaItemsByStartDate(agenda.data)} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} />
                <Agenda data={agendaData} agendaItems={generateAgendaDatesArray(agenda.data)} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} title={'Your curated agenda'} />
              </ComponentContainer>
            </InnerContainer>
          </Container>
        </OuterContainer>
      </PwaContentContainer>
    </>
  )
}

export default AgendaPage