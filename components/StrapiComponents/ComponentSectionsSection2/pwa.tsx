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
import TextAndIcons, { TextAndIconsProps } from '../ComponentSectionsSection1/TextAndIcons'
import Agenda from './pwaAgenda'
import CardsCarousel, { CardsCarouselProps } from '../ComponentSectionsSection1/CardsCarousel'
import Lists, { ListsProps } from './Lists'
import ComponentSectionsVideo, { VideoProps } from 'components/StrapiComponents/ComponentSectionsVideo'

export interface ComponentSectionsSection2Props {
  data: any
  senddatatolayout?: any,
  isdefaulttheme?: any,
}


const ComponentSectionsSection2 = ({
  data
}: ComponentSectionsSection2Props) => {

  const [selectedAgendaData, setSelectedAgendaDate] = useState<string | undefined>(data.data[0].start);
  var [agendaData, setAgendaData] = useState<any>(data.data);

  useEffect(() => {
    if (data.data) {
      handleAgendaDateChange(data.data.start)
    }
  }, []);

  const handleAgendaDateChange = (date: string) => {
    setSelectedAgendaDate(date);

    let filteredAgenda = data.data.filter((agenda: any) => {
      return agenda;
    });
    var propData = {
      id: agendaData.id,
      Title: agendaData.Title,
      Items: {
        data: [...filteredAgenda]
      }
    }
    setAgendaData(propData)
  };

  const generateAgendaDatesArray = (agendaItems: any) => {
    const uniqueDatesSet = new Set();
    if (!agendaItems) return []
    agendaItems.forEach((item: any) => {
      uniqueDatesSet.add(item.start);
    })
    return Array.from(uniqueDatesSet)
  }
// console.log(data,selectedAgendaData)
// console.log(agendaData)
// console.log(data)
  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            {data.data &&
              <Agenda data={data.data} agendaItems={generateAgendaDatesArray(data.data)} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} />
            }
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentSectionsSection2