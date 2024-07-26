import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import { ComponentContainer, Container, InnerContainer, OuterContainer, SectionTitle, Title } from '@/components/Bootstrap/Common';
import ComponentSectionsSection1 from '@/components/StrapiComponents/ComponentSectionsSection1/pwa';
import Header from '@/components/StrapiComponents/PwaComponents/Header';

export const components = {
  ComponentSectionsSection1: dynamic(() => import('components/StrapiComponents/ComponentSectionsSection1/pwa')),
};

const PwaContentContainer = styled.div`
`

const Forum = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
  navigationData,
}: any) => {
  console.log(data)
  return (
    <>
      <PwaContentContainer>
      <Header title={'Forum'} headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        <OuterContainer>
          <Container>
            <InnerContainer>
              <ComponentContainer>
                <ComponentSectionsSection1 discussions={data.discussions} />
              </ComponentContainer>
            </InnerContainer>
          </Container>
        </OuterContainer>
      </PwaContentContainer>
    </>
  )
}

export default Forum