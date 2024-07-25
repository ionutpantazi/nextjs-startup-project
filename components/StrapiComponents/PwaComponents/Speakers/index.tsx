import React, { useState } from 'react'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import Dropdown from './dropdown'
import {
  OuterContainer,
  Container,
  InnerContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import {
  Title,
  SubTitle,
  SearchContainer,
  SearchInput,
  SearchButton,
  SortCategories,
  SortCategoriesTitle,
  SpeakersContainer,
  SpeakerImage,
  RoundedImage,
  ItemTitle,
  Itemposition,
} from './styles'

export interface SpeakersProps {
  data: any
  senddatatolayout?: any,
  isdefaulttheme?: any,
}

const Speakers = ({
  data
}: SpeakersProps) => {
console.log(data)
  const dropdownValues = [
    { label: 'Select Category', slug: '' },
    { label: 'Business', slug: 'business' },
    { label: 'Marketing', slug: 'marketing' },
    { label: 'Sales', slug: 'sales' },
    { label: 'Wellbeing', slug: 'wellbeing' },
  ]
  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            <Title>
              Speakers
            </Title>
            <SubTitle>
              Meet our thought leaders
            </SubTitle>
            <SearchContainer>
              <SearchInput as='input' />
              <SearchButton>
                <FAIcon
                  icon={'fa-magnifying-glass'}
                  width={16}
                  height={16}
                />
              </SearchButton>
            </SearchContainer>
            <SortCategories>
              <SortCategoriesTitle>
                Choose a category:
              </SortCategoriesTitle>
              <Dropdown values={dropdownValues} />
            </SortCategories>
            {data?.speakers?.data?.length &&
              <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 gap-x-10'>
                {data.speakers.data.map((speaker: any, index: number) => (
                  <div key={index} className='flex flex-row gap-6 items-center'>
                    <SpeakerImage>
                      <RoundedImage
                        src={speaker.profilePic}
                        className=''
                        alt={""}
                        width={100}
                        height={100}
                      />
                    </SpeakerImage>
                    <div className='flex flex-col gap-2 max-w-60'>
                      <ItemTitle className=''>
                        {speaker.firstName + ' ' + speaker.surname}
                      </ItemTitle>
                      <Itemposition className=''>
                        <p>
                          {speaker.position}
                        </p>
                        <p>
                          {speaker.company}
                        </p>
                      </Itemposition>
                    </div>
                  </div>
                ))}
              </div>
            }
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default Speakers