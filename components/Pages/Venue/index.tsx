import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import { ComponentContainer, Container, InnerContainer, OuterContainer, SectionTitle, Title } from '@/components/Bootstrap/Common';
import { SectionSubTitle } from '@/components/StrapiComponents/ComponentSectionsSection5';
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

const Venue = ({
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
                  Venue
                </LeftEventTitle>
                <Ruler />
                <SectionSubTitle>
                  Live Group Office
                </SectionSubTitle>
                <Title>
                  Address
                </Title>
                <p>Unit 9, Princess Mews, Horace Rd, Kingston upon Thames KT1 2SZ</p>
                <br />

                <Title>
                  Telephone
                </Title>
                <p><b>+44 (0)20 8481 2000</b></p>
                <br />

                <Title>
                  Agenda
                </Title>
                <p>View this event&apos;s agenda here</p>
                <br />

                <Title>
                  Location
                </Title>
                <p>Use the Google map below to view the location of this venue.</p>
                <br></br>
                <iframe allowFullScreen height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4977.81979439299!2d-0.29688820234139657!3d51.404710249290304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760b953839b6b1%3A0xac7be27f8bfc4de4!2sLive%20Group%20-%20Global%20Event%20Management%20Company!5e0!3m2!1sen!2suk!4v1677060897599!5m2!1sen!2suk" width="1150"></iframe>
                <br />

                <Title>
                  Travel Recommendations
                </Title>
                <p>As advocates for low carbon travel we have ensured the venue is easy to access by public transport,
                  so we would highly reccomend you travel by green travel methods such as public transport if possible.</p>
                <br />

                <Title>
                  Public Transport
                </Title>
                <p>The closest station to the venue is Surbiton. With an approximate 15 minute walk from the station or hop on the K3 bus which arrives just outside the station.
                  Alternatively take the train to Kingston Station, a 20 minute walk from the venue.</p>
                <br />

                <Title>
                  Driving
                </Title>
                <p>There will be parking spaces provided on site for a charge of £2/hour with 10 electric charging ports.
                  On-street parking is also available at a variable cost.</p>
              </ComponentContainer>
            </InnerContainer>
          </Container>
        </OuterContainer>
      </PwaContentContainer>
    </>
  )
}

export default Venue