import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import { ComponentContainer, Container, InnerContainer, OuterContainer, SectionTitle, Title } from '@/components/Bootstrap/Common';
import { SectionSubTitle } from '@/components/StrapiComponents/ComponentSectionsSection5';
import ComponentSectionsSection1 from '@/components/StrapiComponents/ComponentSectionsSection1/pwa';

export const components = {
  ComponentIntrosLandingNew: dynamic(() => import('components/StrapiComponents/ComponentIntrosLandingNew/pwa')),
  ComponentSectionsSection1: dynamic(() => import('components/StrapiComponents/ComponentSectionsSection1/pwa')),
};

const PwaContentContainer = styled.div`
`

const Forum = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  navigationData,
}: any) => {
  console.log(data)
  return (
    <>
      <PwaContentContainer>
        <ComponentIntrosLandingNew data={data['event']} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} hideContentContainer={true} />
        <OuterContainer>
          <Container>
            <InnerContainer>
              <SectionTitle>
                Forum
              </SectionTitle>
              <br/>
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