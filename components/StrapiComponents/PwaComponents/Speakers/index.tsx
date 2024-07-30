import React, { useState, useEffect, useContext } from 'react'
import SortAndSearch from '../Common/SortAndSearch'
import dnmc from 'next/dynamic'
import {
  OuterContainer,
  Container,
  InnerContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'
const Card1 = dnmc(() => import('components/StrapiComponents/PwaComponents/Cards/Card1'), { ssr: false });
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ThemeContext } from 'components/Layout';
import {
  Title,
  SubTitle,
  CardsGrid,
  GridItem,
} from './styles'
import Ruler from '@/components/StrapiComponents/PwaComponents/Common/Ruler'
import {
  LeftEventTitle,
} from '@/components/StrapiComponents/PwaComponents/Header/styles'
import { reorderSpeakersFlex } from './utils'

const Speakers = ({
  data,
  title,
  subtitle,
  type,
}: any) => {

  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const isMobile = width && width < Number(theme.screens['sm'].replace('px', '')) ? true : false;

  const [cardMobileWidth, setCardMobileWidth] = useState(200);
  const [cardDesktopWidth, setCardDesktopWidth] = useState(200);
  const [expandedIndices, setExpandedIndices] = useState(
    Array(data.data.length).fill(false)
  );

  useEffect(() => {
    if (width) {
      setCardMobileWidth(width - 40)
      // let grid = document.querySelector("#card_grid_container") as HTMLBaseElement;
      // let gridWidth = grid?.offsetWidth
      // setCardDesktopWidth(width - 40)
    }
  }, [width]);

  const dropdownValues = [
    { label: 'Select Category', slug: '' },
    { label: 'Business', slug: 'business' },
    { label: 'Marketing', slug: 'marketing' },
    { label: 'Sales', slug: 'sales' },
    { label: 'Wellbeing', slug: 'wellbeing' },
  ]

  const toggleExpand = (isExpanded: any, index: any, e: any) => {
    e.preventDefault()
    const newExpandedIndices = [...expandedIndices];
    newExpandedIndices[index] = !newExpandedIndices[index];
    setExpandedIndices(newExpandedIndices);
    reorderSpeakersFlex(isExpanded, index)
  };

  const cardWidth = (isExpanded: any, isMobile: any, cardMobileWidth: any) => {
    if (isExpanded) {
      if (isMobile) {
        return `${cardMobileWidth}px`
      } else return '556px'
    } else {
      if (isMobile) {
        return `${cardMobileWidth}px`
      } else return '264px'
    }
  }

  const divStyle = (isExpanded: any, index: any, isMobile: any, cardMobileWidth: any) => ({
    width: cardWidth(isExpanded, isMobile, cardMobileWidth),
    marginRight: isExpanded ? '-30px' : '0px',
    order: index,
    // transition: 'width 0.4s ease',
  });


  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            <LeftEventTitle>
              Speakers
            </LeftEventTitle>
            <Ruler />
            <SubTitle>
              {subtitle}
            </SubTitle>
            <SortAndSearch title='Choose a category:' dropdownValues={dropdownValues} />
            {data.data.length &&
              <CardsGrid id='card_grid_container'>
                {data.data.map((speaker: any, index: number) => (
                  <GridItem key={index} id={`card_grid_${index}`} style={divStyle(expandedIndices[index], index, isMobile, cardMobileWidth)} onClick={(e) => toggleExpand(expandedIndices[index], index, e)}>
                    <Card1 data={speaker} isExpanded={expandedIndices[index]} />
                  </GridItem>
                ))
                }
              </CardsGrid>
            }
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default Speakers