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
import Agenda, { AgendaItems } from './Agenda'
import CardsCarousel, { CardsCarouselProps } from '../ComponentSectionsSection1/CardsCarousel'
import Lists, { ListsProps } from './Lists'
import ComponentSectionsVideo, { VideoProps } from 'components/StrapiComponents/ComponentSectionsVideo'

export type Section2Props = {
  id: string
  TextAndIcons: TextAndIconsProps
  Agenda: {
    id: string
    Title: string
    Items: {
      data: [AgendaItems]
    }
  }
  CardsCarousel: CardsCarouselProps
  Lists?: ListsProps
  Video?: VideoProps
}

export interface ComponentSectionsSection2Props {
  data: Section2Props
  senddatatolayout?: any,
  isdefaulttheme?: any,
}


const ComponentSectionsSection2 = ({
  data
}: ComponentSectionsSection2Props) => {

  const [selectedAgendaData, setSelectedAgendaDate] = useState<string | undefined>(data.Agenda?.Items.data[0].attributes.Date);
  var [agendaData, setAgendaData] = useState<any>(data.Agenda);

  useEffect(() => {
    if(data.Agenda){
      handleAgendaDateChange(data.Agenda.Items.data[0].attributes.Date)
    }
  }, []);

  const handleAgendaDateChange = (date: string) => {
    setSelectedAgendaDate(date);

    let filteredAgenda = data.Agenda.Items.data.filter((agenda: any) => {
      if (agenda.attributes.Date == date) return agenda;
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


  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            <TextAndIcons data={data.TextAndIcons} agendaItems={data.Agenda?.Items.data} selectedAgendaData={selectedAgendaData} handleAgendaDateChange={handleAgendaDateChange} />
            {data.CardsCarousel &&
              <CardsCarousel data={data.CardsCarousel} />
            }
            {data.Lists &&
              <Lists data={data.Lists} />
            }
            {data.Agenda &&
              <Agenda data={agendaData} />
            }
            {data.Video &&
              <ComponentSectionsVideo data={data.Video} />
            }
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentSectionsSection2