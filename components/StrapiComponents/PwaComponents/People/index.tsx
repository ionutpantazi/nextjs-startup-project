import React, { useState, useEffect, useContext } from 'react'
import SortAndSearch from '../Common/SortAndSearch'
import dnmc from 'next/dynamic'
import {
  OuterContainer,
  Container,
  InnerContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ThemeContext } from 'components/Layout';
import {
  Title,
  SubTitle,
  CardsGrid,
  GridItem,
} from '../People/styles'
import Ruler from '@/components/StrapiComponents/PwaComponents/Common/Ruler'
import {
  LeftEventTitle,
} from '@/components/StrapiComponents/PwaComponents/Header/styles'
import { reorderPersonFlex } from './utils';
import PeopleCard from '../Cards/People';

const ContentTabPeople = ({
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
    Array(data.categories.length).fill(false)
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
    reorderPersonFlex && reorderPersonFlex(isExpanded, index)
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
            {data.categories && data.categories.map((category: any, i: number) => (
              <>
                <SubTitle>
                  {category.title}
                </SubTitle>
                
                <CardsGrid id='card_grid_container'>
                  {category.downloads.map((speaker: any, index: number) => (
                    <GridItem key={`${i}${index}`} id={`card_grid_${i}${index}`} style={divStyle(expandedIndices[Number(i.toString() + index.toString())], index, isMobile, cardMobileWidth)} onClick={(e) => toggleExpand(expandedIndices[Number(i.toString() + index.toString())], Number(i.toString() + index.toString()), e)}>
                      <PeopleCard data={speaker} isExpanded={expandedIndices[Number(i.toString() + index.toString())]} />
                    </GridItem>
                  ))
                  }
                </CardsGrid>
              </>
            ))}
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ContentTabPeople