import React, { useState, useContext } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import FAIcon from 'components/Bootstrap/FAIcon'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ThemeContext } from 'components/Layout';
import {
  OuterContainer,
  Container,
  InnerContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import {
  SectionTitle
} from 'components/Bootstrap/Common'
import { DescriptionContainer } from 'components/StrapiComponents/ComponentSectionsSection1/TextAndIcons'
import { SecondColumn, InterestsTitle, InterestsList, Interest, Form, StyledInput, SendBtn } from '../ComponentSectionsSection5'
import { IconsProps } from 'components/StrapiComponents/ComponentSectionsSection1/TextAndIcons'

export type RegistrationProps = {
  id: string,
  Title: string,
  Sub_Title: string,
  Interests: [IconsProps],
  Bio_Placeholder: string,
  Disclaimer: string
}

export interface ComponentIncludesRegistrationProps {
  data: any
  senddatatolayout?: any,
  isdefaulttheme?: any,
}

const BioPlaceholder = styled.div`
`

const Checkbox = styled.div`
  color: ${props => props.theme.colors.lightgrey};
  div {
    :hover {
      cursor: pointer;
    }
  }
  span {
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
  }
`
const StyledSendBtn = styled(SendBtn)`
  margin-top: 60px;
  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    margin: 40px 0px 0px;
  }
`

const ComponentIncludesRegistration = ({
  data
}: ComponentIncludesRegistrationProps) => {

  const [disclaimer, setDisclaimer] = useState<boolean>(false)
  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const isMobile = width && width < Number(theme.screens['md'].replace('px', '')) ? true : false;

  const handleDisclaimerClick = () => {
    setDisclaimer(!disclaimer)
  }

  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            <SectionTitle>
              {data.title}
            </SectionTitle>
            <DescriptionContainer className=''>
              {data.subTitle}
            </DescriptionContainer>
            <SecondColumn className='flex flex-col lg:w-2/3 w-auto mt-8'>
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
                    {data.interests.map((interest: any, index: number) => (
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
                  {data.interests.map((interest: any, index: number) => (
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
                <StyledInput placeholder='Input field one' />
                <StyledInput placeholder='Input field two' />
                <BioPlaceholder>
                  I'm interested in...
                </BioPlaceholder>
                <StyledInput placeholder='' />
                <Checkbox
                  className='flex flex-row gap-2 items-top justify-center '
                  onClick={handleDisclaimerClick}
                >
                  <div>
                    {disclaimer
                      ?
                      <FAIcon
                        icon={'fa-regular fa-square-check'}
                        width={24}
                        height={24}
                      />
                      :
                      <FAIcon
                        icon={'fa-regular fa-square'}
                        width={24}
                        height={24}
                      />
                    }
                  </div>
                  <span>
                    {data.Disclaimer}
                  </span>
                </Checkbox>
              </Form>
              <StyledSendBtn as='a' href='#' className='flex items-center gap-x-4 w-fit'>
                <FAIcon
                  icon={'fa-paper-plane'}
                  width={20}
                  height={20}
                />
                <span>
                  Save details
                </span>
              </StyledSendBtn>
            </SecondColumn>
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentIncludesRegistration