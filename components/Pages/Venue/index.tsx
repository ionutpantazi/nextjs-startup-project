import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import { ComponentContainer, Container, InnerContainer, OuterContainer, SectionTitle, Title } from '@/components/Bootstrap/Common';
import { SectionSubTitle } from '@/components/StrapiComponents/ComponentSectionsSection5';

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
                Venue
              </SectionTitle>
              <br/>
              <ComponentContainer>
                <SectionSubTitle>
                  Live Group Office
                </SectionSubTitle>
                <Title>
                  Address
                </Title>
                <p>Unit 9, Princess Mews, Horace Rd, Kingston upon Thames KT1 2SZ</p>
                <br/>

                <Title>
                  Telephone
                </Title>
                <p><b>+44 (0)20 8481 2000</b></p>
                <br/>

                <Title>
                  Agenda
                </Title>
                <p>View this event&apos;s agenda here</p>
                <br/>

                <Title>
                  Location
                </Title>
                <p>Use the Google map below to view the location of this venue.</p>
                <br/>

                <Title>
                  Travel Recommendations
                </Title>
                <p>As advocates for low carbon travel we have ensured the venue is easy to access by public transport, 
                  so we would highly reccomend you travel by green travel methods such as public transport if possible.</p>
                <br/>

                <Title>
                  Public Transport
                </Title>
                <p>The closest station to the venue is Surbiton. With an approximate 15 minute walk from the station or hop on the K3 bus which arrives just outside the station. 
                  Alternatively take the train to Kingston Station, a 20 minute walk from the venue.</p>
                  <br/>

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