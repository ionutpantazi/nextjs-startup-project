import React, { useContext } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import {
  OuterContainer,
  Container,
  InnerContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import { ThemeContext } from 'components/Layout';
import FAIcon from 'components/Bootstrap/FAIcon'
import {
  FirstColumn,
  SecondColumn,
  SectionTitle,
  SectionSubTitle,
  StyledSocial,
  DetailsBox,
  Detail,
  InterestsTitle,
  InterestsList,
  Interest,
  Form,
  StyledInput,
  SendBtn,
} from './styles'





const Contact = ({
  data,
  contactData,
}: any) => {

  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const isMobile = width && width < Number(theme.screens['md'].replace('px', '')) ? true : false;

  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex lg:flex-row flex-col'>
            <FirstColumn className='flex flex-col lg:w-1/2 w-auto'>
              <div>
                {data.title &&
                  <SectionTitle>
                    {data.title}
                  </SectionTitle>
                }
                {data.subTitle &&
                  <SectionSubTitle>
                    {data.subTitle}
                  </SectionSubTitle>
                }
              </div>
              <DetailsBox className='flex flex-col lg:gap-2 gap-1 pb-4'>
                {contactData.email &&
                  <Detail as='a' href='#' className='flex flex-row items-center gap-4'>
                    <FAIcon
                      icon={'fa-envelope'}
                      width={28}
                      height={28}
                    />
                    <span>
                      {contactData.email}
                    </span>
                  </Detail>
                }
                {contactData.phone &&
                  <Detail as='a' href='#' className='flex flex-row items-center gap-4'>
                    <FAIcon
                      icon={'fa-phone'}
                      width={28}
                      height={28}
                    />
                    <span>
                      {contactData.phone}
                    </span>
                  </Detail>
                }
                {contactData.address &&
                  <Detail as='a' href='#' className='flex flex-row items-center gap-4'>
                    <FAIcon
                      icon={'fa-map-pin'}
                      width={28}
                      height={28}
                    />
                    <span>
                      {contactData.address}
                    </span>
                  </Detail>
                }
              </DetailsBox>
            </FirstColumn>
            <SecondColumn className='flex flex-col lg:w-1/2 w-auto'>
              <InterestsTitle>
                I’m interested in...
              </InterestsTitle>
              {isMobile
                ?
                <InterestsList>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    className='w-full'
                  >
                    {contactData.interests.map((interest: any, index: number) => (
                      <SwiperSlide key={index} style={{ 'width': 'fit-content' }}>
                        <Interest as='a' href='#' className='flex flex-row items-center gap-4 w-fit' active={index == 0 ? 'true' : 'false'}>
                          <span>
                            {interest}
                          </span>
                        </Interest>
                      </SwiperSlide>
                    ))
                    }
                  </Swiper>
                </InterestsList>
                :
                <InterestsList className='flex flex-wrap gap-4'>
                  {contactData.interests.map((interest: any, index: number) => (
                    <Interest as='a' href='#' key={index} className='flex flex-row items-center gap-4' active={index == 0 ? 'true' : 'false'}>
                      <span>
                        {interest}
                      </span>
                    </Interest>
                  ))
                  }
                </InterestsList>
              }
              <Form className='flex flex-col gap-10'>
                <StyledInput placeholder='Your name' />
                <StyledInput placeholder='Your email' />
                <StyledInput placeholder='Your message' />
              </Form>
              <SendBtn as='a' href='#' className='flex items-center gap-x-4 w-fit'>
                <FAIcon
                  icon={'fa-paper-plane'}
                  width={20}
                  height={20}
                />
                <span>
                  Send Message
                </span>
              </SendBtn>
            </SecondColumn>
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default Contact