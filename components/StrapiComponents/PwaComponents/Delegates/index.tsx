import React, { useState } from 'react'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import Dropdown from '../Common/Dropdown'
import { RadialContainer } from '@/components/Bootstrap/Common'
import { generateSpeakerCardGridLayout } from './utils'
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
  SpeakerCard,
  SpeakerIcon,
  StyledNextImage,
  SpeakerType,
  SpeakerDetails,
  IconContainer,
  SpeakerName,
  SpeakerPosition,
  Workshop,
  WorkshopTitle,
  WorkshopIntro,
  DropdownAndSearch,
} from './styles'

const Badge = (props: any) => {
  return (
    <IconContainer as='a' href={props.href}>
      <img
        src={props.src}
        alt={props.alt}
        loading="lazy"
      />
    </IconContainer>
  )
}

const Delegates = ({
  data,
  title,
  subtitle,
  type,
}: any) => {

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
            {/* <Title>
              {title}
            </Title> */}
            <SubTitle>
              {subtitle}
            </SubTitle>
            <SortCategories>
              <SortCategoriesTitle>
                Choose a category:
              </SortCategoriesTitle>
              <DropdownAndSearch>
                <Dropdown values={dropdownValues} />
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
              </DropdownAndSearch>
            </SortCategories>
            {data.data.length &&
              <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 gap-x-10'>
                {data.data.map((speaker: any, index: number) => (
                  <div key={index} className={`${type == 'speaker' ? 'flex flex-row gap-6 items-center' : ''}`}>
                    <SpeakerCard className={`grid grid-rows-4 ${generateSpeakerCardGridLayout(type, speaker)} grid-flow-col gap-2`}>
                      <SpeakerIcon className='row-span-4 col-span-4 grid content-between relative'>
                        {speaker.profilePic
                          ?
                          <>
                            <RadialContainer />
                            <StyledNextImage
                              src={speaker.profilePic}
                              className=''
                              alt={""}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          </>
                          :
                          <>
                            <RadialContainer />
                            <StyledNextImage
                              src={'/images/default-avatar.jpg'}
                              className=''
                              alt={""}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          </>
                        }
                        {type &&
                          <SpeakerType className='' active={'true'}>
                            {type}
                          </SpeakerType>
                        }
                        <SpeakerDetails>
                          {speaker.linkedin &&
                            <div className='flex flex-row'>
                              <Badge href='#' src='/images/leaf.png' alt='' />
                              <Badge href={speaker.attributes.Linkedin} src='/images/linkedin.png' alt='' />
                            </div>
                          }
                          <SpeakerName>
                            {`${speaker.title ? speaker.title + ' ' : ''}${speaker.firstName}${speaker.surname || speaker.lastName}`}
                          </SpeakerName>
                          <SpeakerPosition>
                            {speaker.position}
                          </SpeakerPosition>
                        </SpeakerDetails>
                      </SpeakerIcon>
                      {speaker.workshops?.map((workshop: any, index: number) => (
                        <div className='row-span-2 col-span-2 flex flex-col gap-2' key={workshop.id}>
                          {index < 2 &&
                            <Workshop>
                              <SpeakerType className='' active={'true'}>
                                Workshop
                              </SpeakerType>
                              <WorkshopTitle>
                                {workshop.title}
                              </WorkshopTitle>
                              <WorkshopIntro>
                                {workshop.description}
                              </WorkshopIntro>
                            </Workshop>
                          }
                        </div>
                      ))
                      }
                    </SpeakerCard>
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

export default Delegates