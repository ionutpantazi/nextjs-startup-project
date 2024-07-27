import React, { useState } from 'react'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import SortAndSearch from '../Common/SortAndSearch'
import { RadialContainer } from '@/components/Bootstrap/Common'
import { generateSpeakerCardGridLayout } from './utils'
import {
  OuterContainer,
  Container,
  InnerContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import Card1 from 'components/StrapiComponents/PwaComponents/Cards/Card1'
import {
  Title,
  SubTitle,
  CardsGrid,
  GridItem,
} from './styles'

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

  const toggleExpand = (index: any, e: any) => {
    e.preventDefault()
    const newExpandedIndices = [...expandedIndices];
    newExpandedIndices[index] = !newExpandedIndices[index];
    setExpandedIndices(newExpandedIndices);
    // let target = document.querySelector(`#card_grid_${index}`)
    // target?.classList.add('animate-blur')

    // setTimeout(function() {
    //   target?.classList.remove('animate-blur')
    // }, 500);
  };

  const divStyle = (isExpanded: any) => ({
    width: isExpanded ? '556px' : '264px',
    marginRight: isExpanded ? '-30px' : '0px',
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
              <CardsGrid>
                {data.data.map((speaker: any, index: number) => (
                  <GridItem key={index} id={`card_grid_${index}`} style={divStyle(expandedIndices[index])} onClick={(e) => toggleExpand(index, e)}>
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