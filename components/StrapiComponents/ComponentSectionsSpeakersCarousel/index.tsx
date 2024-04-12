import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  StrapiFile
} from 'interfaces'

import 'swiper/css';

export type Speaker = {
  id: string,
  attributes: {
    Name: string
    Position: string
    Intro: string
    Linkedin: string
    Type: string
    Image: StrapiFile,
    Workshops: {
      data: Workshop
    }
  }
}

export type Workshop = {
  id: string,
  attributes: {
    Title: string
    intro: string
  }
}

export type SectionsSectionSpeakersCarousel = {
  id: string,
  Title: string;
  Speakers: {
    data: [
      Speaker
    ]
  }
}

export interface ComponentSectionsSpeakersCarouselProps {
  data: SectionsSectionSpeakersCarousel
}

const Container = styled.div`
  padding: ${theme.margins.homepage_large};
  color: ${theme.colors.white};
  overflow: hidden;
  margin-bottom: 40px;

  @media screen and (max-width: ${theme.screens.sm}) {
    padding: ${theme.margins.homepage_small};
    margin-bottom: 20px;
  }
`

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: ${theme.pageWidth};
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 10px;
`

const SpeakersContainer = styled.div`

`

const SpeakerCard = styled.div`
  
`

const FiltersContainer = styled.div`
`

const SpeakerIcon = styled.div <{ backgroundimage?: string | null }>`
  ${({ backgroundimage }) => css`
    ${backgroundimage ? 'background: url("' + backgroundimage + '"); background-repeat: no-repeat; background-size: cover;' : ''}
  `}
  padding: 10px 10px 20px 10px;
  border-radius: 6px;

  width: 250px;
  height: 320px;
`

const SpeakerType = styled.div`
  border-radius: 12px;
  padding: 2px 8px;
  background-color: ${theme.colors.brand};
  width: fit-content;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
`

const SpeakerDetails = styled.div`
`

const SpeakerName = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

const SpeakerPosition = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 29px;
`

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
`

const FirstWorkshop = styled.div`
`

const SecondWorkshop = styled.div`
`



const ComponentSectionsSpeakersCarousel = ({
  data
}: ComponentSectionsSpeakersCarouselProps) => {

  return (
    <Container className=''>
      <InnerContainer className='flex flex-col gap-4'>
        <Title>
          {data.Title}
        </Title>
        <FiltersContainer>
          filters
        </FiltersContainer>
        <SpeakersContainer className=''>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
          >
            {data.Speakers.data.map((speaker: Speaker) => (
              <SwiperSlide key={speaker.id}>
                <SpeakerCard className='grid grid-rows-4 grid-flow-col gap-2'>
                  <SpeakerIcon className='row-span-4 grid content-between' backgroundimage={IMAGE_DOMAIN + speaker.attributes.Image.data?.attributes?.url}>
                    <SpeakerType className=''>
                      {speaker.attributes.Type}
                    </SpeakerType>
                    <SpeakerDetails>
                      {speaker.attributes.Linkedin &&
                        <div className='flex flex-row'>
                          <IconContainer as='a' href='#'>
                            <img
                              src={'/images/leaf.png'}
                              alt={""}
                              loading="lazy"
                            />
                          </IconContainer>
                          <IconContainer as='a' href={speaker.attributes.Linkedin}>
                            <img
                              src={'/images/linkedin.png'}
                              alt={""}
                              loading="lazy"
                            />
                          </IconContainer>
                        </div>
                      }
                      <SpeakerName>
                        {speaker.attributes.Name}
                      </SpeakerName>
                      <SpeakerPosition>
                        {speaker.attributes.Position}
                      </SpeakerPosition>
                    </SpeakerDetails>
                  </SpeakerIcon>
                  <FirstWorkshop className='row-span-2'>
                    1
                  </FirstWorkshop>
                  <SecondWorkshop className='row-span-2'>
                    2
                  </SecondWorkshop>
                </SpeakerCard>
              </SwiperSlide>
            ))
            }
          </Swiper>

        </SpeakersContainer>
      </InnerContainer>
    </Container>
  )
}

export default ComponentSectionsSpeakersCarousel