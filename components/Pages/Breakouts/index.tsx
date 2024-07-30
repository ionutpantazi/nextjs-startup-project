import React, { useState, useEffect, Children } from 'react'
import dnmc from 'next/dynamic'
import styled, { css } from 'styled-components'
import {
  OuterContainer,
  Container,
  InnerContainer,
  RadialContainer,
  SectionTitle,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import Ruler from '@/components/StrapiComponents/PwaComponents/Common/Ruler'
import {
  LeftEventTitle,
} from '@/components/StrapiComponents/PwaComponents/Header/styles'

const Header = dnmc(() => import('@/components/StrapiComponents/PwaComponents/Header'));
const Breakouts = dnmc(() => import('components/StrapiComponents/PwaComponents/Breakouts'));

const PwaContentContainer = styled.div`
`

const BreakoutsPage = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
  navigationData,
  agenda,
}: any) => {

  return (
    <>
      <PwaContentContainer>
        <Header headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        <OuterContainer className=''>
          <Container className=''>
            <InnerContainer className=''>
              <ComponentContainer className='flex flex-col'>
                <LeftEventTitle>
                  Breakouts
                </LeftEventTitle>
                <Ruler />
                <Breakouts data={data} subtitle={'Breakouts and campfires to facilitate networking'} />
              </ComponentContainer>
            </InnerContainer>
          </Container>
        </OuterContainer>
      </PwaContentContainer>
    </>
  )
}

export default BreakoutsPage