import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import {
  StrapiFile
} from 'interfaces'
import {
  OuterContainer,
  Container,
  InnerContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'

export type ContactProps = {
  Title: string,
  Sub_Title: string
}

export type Section5Props = {
  id: string,
  Contact: ContactProps
}

export interface ComponentSectionsSection5Props {
  data: Section5Props
  senddatatolayout?: any,
  isdefaulttheme?: any,
}

export const FirstColumn = styled.div`
`

export const SecondColumn = styled.div`
  border-radius: ${props => props.theme.borderRadius.components.large};
  background-color: ${props => props.theme.components?.Section4?.SecondColumnBackgroundColor};
`

export const SectionTitle = styled.div`
  font-size: 45px;
  font-weight: 400;
  line-height: 52px;
  color: ${props => props.theme.colors.brand};
`

export const SectionSubTitle = styled(SectionTitle)`
  color: ${props => props.theme.colors.white};
`

const ComponentSectionsSection5 = ({
  data
}: ComponentSectionsSection5Props) => {
console.log(data)
  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-row'>
            <FirstColumn className='flex flex-col md:w-1/2 w-auto'>
              <>
                {data.Contact.Title &&
                  <SectionTitle>
                    {data.Contact.Title}
                  </SectionTitle>
                }
                {data.Contact.Sub_Title &&
                  <SectionSubTitle>
                    {data.Contact.Sub_Title}
                  </SectionSubTitle>
                }
              </>
            </FirstColumn>
            <SecondColumn className='flex flex-col md:w-1/2 w-auto'>
            </SecondColumn>
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ComponentSectionsSection5