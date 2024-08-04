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
import LoginPrompt from '@/components/StrapiComponents/PwaComponents/LoginPrompt'

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
}: any) => {
  
  const [loginRequired, setLoginRequired] = useState(false);
  
  useEffect(() => {
    if (data.breakouts.breakoutCategories.length > 0) {
      for (let category of data.breakouts.breakoutCategories) {
        if (category.breakouts.length > 0) {
          return;
        }
      }
      // all categories are empty which means a login is required
      setLoginRequired(true);
    }
  }, [data.breakouts.breakoutCategories])

  return (
    <>
      <PwaContentContainer>
        <Header headerImage={data.breakouts ? data.breakouts.pageBanner : data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        <OuterContainer className=''>
          <Container className=''>
            <InnerContainer className=''>
              <ComponentContainer className='flex flex-col'>
                <LeftEventTitle>
                  {data.breakouts.title}
                </LeftEventTitle>
                {!loginRequired && 
                <>
                  <Ruler />
                  <Breakouts data={data.breakouts} subtitle={data.breakouts.header} />
                  </>
                }
              </ComponentContainer>
            </InnerContainer>
          </Container>
        </OuterContainer>
        {loginRequired &&
          <LoginPrompt title={data.breakouts.header} message={'To view the breakouts'} />
        }
      </PwaContentContainer>
    </>
  )
}

export default BreakoutsPage