import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import { RadialContainer } from '@/components/Bootstrap/Common'
import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  StrapiFile
} from 'interfaces'

import 'swiper/css';
import { useWindowSize } from '@/lib/hooks/useWindowSize';

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
      data: [
        Workshop
      ]
    }
    Companies?: {
      data: [
        Company
      ]
    }
  }
}

export type Company = {
  id: string,
  attributes: {
    Name: string
    Slug: string
  }
}

export type Workshop = {
  id: string,
  attributes: {
    Title: string
    Intro: string
    Image: StrapiFile,
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
  height: 308px;
`

const FiltersContainer = styled.div`
`

const SpeakerIcon = styled.div`
  z-index: 2;
  padding: 10px 10px 20px 10px;
  border-radius: 6px;

  // width: 250px;
  // height: 320px;
`

const SpeakerType = styled.div <{ active?: any }>`
  ${({ active }) => css`
    ${active == 'true' ? 'background-color: ' + theme.colors.brand : 'background-color: ' + theme.colors.grey};
  `}

  z-index: 2;
  border-radius: 12px;
  padding: 4px 10px;
  width: fit-content;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;

  &:hover {
    cursor: pointer;
  }
`

const StyledNextImage = styled(NextImage)`
  border-radius: 6px;
`

const SpeakerDetails = styled.div`
  z-index: 2;
`

const SpeakerName = styled.div`
  z-index: 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

const SpeakerPosition = styled.div`
  z-index: 2;
  font-size: 14px;
  font-weight: 300;
  line-height: 29px;
`

const IconContainer = styled.div`
  z-index: 2;
  width: 40px;
  height: 40px;
`

const Workshop = styled.div`
  border-radius: 6px;
  background-color: ${theme.colors.grey};
  padding: 12px;
`

const WorkshopTitle = styled.div`
  margin-top: 6px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const WorkshopIntro = styled.div`
  margin-top: 6px;
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const SpeakersType = (props: any) => {
  let types: any = ['All'];
  props.Speakers.data.map((s: any) => {
    let type = s.attributes.Type;
    if (!types.includes(type)) {
      types.push(type);
    }
  })
  return types
}

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

const ComponentSectionsSpeakersCarousel = ({
  data
}: ComponentSectionsSpeakersCarouselProps) => {

  const { width } = useWindowSize();

  const [speakers, setSpeakers] = useState<any>(data.Speakers.data);
  const [activeFilter, setActiveFilter] = useState("All");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    setTypes(SpeakersType(data));
  }, []);

  const applySpeakerIconStyle = (width: number | undefined, speaker: Speaker) => {
    let hasLength = speaker.attributes.Workshops.data.length;
    if (width && width < Number(theme.screens['md'].replace('px', ''))) {
      return {
        width: '100%',
        height: '300px'
      }
    } else return {
      width: hasLength ? '400px' : '280px',
      height: '300px'
    }
  }

  const generateGridLayout = (speaker: Speaker) => {
    if (speaker.attributes.Workshops.data.length) {
      return 'grid-cols-3';
    } else return 'grid-cols-2';
  }

  function setSpeakerType(e: any) {
    let value = e.target.getAttribute('data-value');
    setActiveFilter(value);
    let initialSpeakers = data.Speakers.data;
    if (value == 'All') {
      setSpeakers(initialSpeakers);
    } else {
      let filteredSpeakers = initialSpeakers.filter((s) => s.attributes.Type == value);
      setSpeakers(filteredSpeakers);
    }
  }

  return (
    <Container className=''>
      <InnerContainer className='flex flex-col gap-4'>
        <Title>
          {data.Title}
        </Title>
        <FiltersContainer className='flex flex-row gap-2'>
          {types.map((type, index) => (
            <SpeakerType className='' data-value={type} onClick={e => setSpeakerType(e)} active={activeFilter == type ? 'true' : 'false'} key={index}>
              {type}
            </SpeakerType>
          ))}
        </FiltersContainer>
        <SpeakersContainer className='w-full'>
          <Swiper
            spaceBetween={50}
            slidesPerView={'auto'}
          >
            {speakers.map((speaker: Speaker) => (
              <SwiperSlide key={speaker.id} style={{ 'width': `${applySpeakerIconStyle(width, speaker)?.width}` }}>
                <SpeakerCard className={`grid grid-rows-4 ${generateGridLayout(speaker)} grid-flow-col gap-2`}>
                  <SpeakerIcon className='row-span-4 col-span-2 grid content-between relative'>
                    {speaker?.attributes?.Image?.data?.attributes?.url &&
                      <>
                        <RadialContainer />
                        <StyledNextImage
                          src={IMAGE_DOMAIN + speaker.attributes.Image.data.attributes.url}
                          className=''
                          alt={speaker.attributes.Image.data.attributes.alternativeText ?? ""}
                          fill
                          style={{objectFit:'cover'}}
                        />
                      </>
                    }
                    <SpeakerType className='' active={'true'}>
                      {speaker.attributes.Type}
                    </SpeakerType>
                    <SpeakerDetails>
                      {speaker.attributes.Linkedin &&
                        <div className='flex flex-row'>
                          <Badge href='#' src='/images/leaf.png' alt='' />
                          <Badge href={speaker.attributes.Linkedin} src='/images/linkedin.png' alt='' />
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
                  {speaker.attributes.Workshops.data.map((workshop: Workshop, index: number) => (
                    <div className='row-span-2 col-span-1 flex flex-col gap-2' key={workshop.id}>
                      {index < 2 &&
                        <Workshop>
                          <SpeakerType className='' active={'true'}>
                            Workshop
                          </SpeakerType>
                          <WorkshopTitle>
                            {workshop.attributes.Title}
                          </WorkshopTitle>
                          <WorkshopIntro>
                            {workshop.attributes.Intro}
                          </WorkshopIntro>
                        </Workshop>
                      }
                    </div>
                  ))
                  }
                </SpeakerCard>
              </SwiperSlide>
            ))
            }
          </Swiper>

        </SpeakersContainer>
      </InnerContainer>
    </Container >
  )
}

export default ComponentSectionsSpeakersCarousel