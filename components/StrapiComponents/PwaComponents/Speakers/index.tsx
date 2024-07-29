import React, { useState } from 'react'
import SortAndSearch from '../Common/SortAndSearch'
import dnmc from 'next/dynamic'
import {
  OuterContainer,
  Container,
  InnerContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'
const Card1 = dnmc(() => import('components/StrapiComponents/PwaComponents/Cards/Card1'), { ssr: false });
import {
  Title,
  SubTitle,
  CardsGrid,
  GridItem,
} from './styles'
import { reorderSpeakersFlex } from './utils'

const Speakers = ({
  data,
  title,
  subtitle,
  type,
}: any) => {

  const [expandedIndices, setExpandedIndices] = useState(
    Array(data.data.length).fill(false)
  );

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

  const divStyle = (isExpanded: any, index: any) => ({
    width: isExpanded ? '556px' : '264px',
    marginRight: isExpanded ? '-30px' : '0px',
    order: index,
    // transition: 'width 0.4s ease',
  });


  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            {/* <Title>
              {title}
            </Title> */}
            <SubTitle>
              {subtitle}
            </SubTitle>
            <SortAndSearch title='Choose a category:' dropdownValues={dropdownValues} />
            {data.data.length &&
              <CardsGrid id='card_grid_container'>
                {data.data.map((speaker: any, index: number) => (
                  <GridItem key={index} id={`card_grid_${index}`} style={divStyle(expandedIndices[index], index)} onClick={(e) => toggleExpand(expandedIndices[index], index, e)}>
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