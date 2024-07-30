import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import { ComponentContainer, Container, InnerContainer, OuterContainer, SectionTitle, Title } from '@/components/Bootstrap/Common';
import Header from '@/components/StrapiComponents/PwaComponents/Header';
import Ruler from '@/components/StrapiComponents/PwaComponents/Common/Ruler'
import {
  LeftEventTitle,
} from '@/components/StrapiComponents/PwaComponents/Header/styles'

export const components = {
  ComponentIntrosLandingNew: dynamic(() => import('components/StrapiComponents/ComponentIntrosLandingNew/pwa')),
};

const PwaContentContainer = styled.div`
`

const Sustainability = ({
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
        <Header headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        <OuterContainer>
          <Container>
            <InnerContainer>
              <br />
              <ComponentContainer>
                <LeftEventTitle>
                  Sustainability
                </LeftEventTitle>
                <Ruler />
                <p>We love what we do, and we&apos;re passionate about driving positive change within our industry.</p>
                <br />

                <p><b>We know the events space needs to be more sustainable in the way it thinks and delivers. That&apos;s why we&apos;re committed to investing in our planet.</b></p>
                <br />

                <p>We&apos;re experts in creating events and environments that bring people together in ways which have a planet-friendly outcome.
                  In partnership with our clients, we use a carbon measurement platform to review in-person audience sizes, we scope options for virtual,
                  assess locations to minimise travel requirements, reduce venue sizes, decrease event durations and we recommend carbon offsetting projects.</p>
                <br />

                <p>If you want to strive for a smaller carbon footprint than ever before, why not talk to use about how we could help with your next event.</p>
                <br />

                <p>Click here to find out more!</p>
              </ComponentContainer>
            </InnerContainer>
          </Container>
        </OuterContainer>
      </PwaContentContainer>
    </>
  )
}

export default Sustainability