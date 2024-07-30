import React, { useState } from 'react'
import { RadialContainer } from '@/components/Bootstrap/Common'
import { generateSpeakerCardGridLayout } from './utils'
import SortAndSearch from '../Common/SortAndSearch'
import useSession from "lib/use-session";
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
  NotLoggedInMessage,
} from './styles'
import Ruler from '@/components/StrapiComponents/PwaComponents/Common/Ruler'
import {
  LeftEventTitle,
} from '@/components/StrapiComponents/PwaComponents/Header/styles'

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

  const { session, isLoading } = useSession();

  const dropdownValues = [
    { label: 'Select Category', slug: '' },
    { label: 'Business', slug: 'business' },
    { label: 'Marketing', slug: 'marketing' },
    { label: 'Sales', slug: 'sales' },
    { label: 'Wellbeing', slug: 'wellbeing' },
  ]

  const login = () => {
    document.getElementById('login_button')?.click()
  }

  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          {!session.isLoggedIn
            ?
            <ComponentContainer className='flex flex-col'>
              <LeftEventTitle>
                Delegates
              </LeftEventTitle>
              <Ruler />
              <NotLoggedInMessage>
                <p>
                  To view the delegates list please <span className='link' onClick={login}>log in.</span>
                </p>
                <p>
                  If you are a new user and haven&apos;t yet registered with us, you can start the registration process now by clicking the registration tab above and completing the form.
                </p>
                <p className='link' onClick={login}>
                  Please log in to access the delegate list.
                </p>
              </NotLoggedInMessage>
            </ComponentContainer>
            :
            <ComponentContainer className='flex flex-col'>
              <LeftEventTitle>
                Delegates
              </LeftEventTitle>
              <Ruler />
              <SubTitle>
                {subtitle}
              </SubTitle>
              <SortAndSearch title='Choose a category:' dropdownValues={dropdownValues} />
              {data.data.length &&
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-10 gap-x-10'>
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
                                src={'/images/default-avatar.png'}
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
                                <Badge href={speaker.linkedin} src='/images/linkedin.png' alt='' />
                              </div>
                            }
                            <SpeakerName>
                              {`${speaker.title ? speaker.title + ' ' : ''}${speaker.firstName} ${speaker.surname || speaker.lastName}`}
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
          }
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default Delegates