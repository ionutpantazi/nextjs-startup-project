import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import ComponentIntrosLanding, { IntrosLandingProps } from 'components/StrapiComponents/ComponentIntrosLanding'
import ComponentSectionsSectionTitle, { SectionsSectionTitleProps } from 'components/StrapiComponents/ComponentSectionsSectionTitle'
import ComponentSectionsSpeakersCarousel, { SectionsSectionSpeakersCarousel } from 'components/StrapiComponents/ComponentSectionsSpeakersCarousel'


export const components = {
  ComponentIntrosLanding: dynamic(() => import('components/StrapiComponents/ComponentIntrosLanding')),
  ComponentSectionsSectionTitle: dynamic(() => import('components/StrapiComponents/ComponentSectionsSectionTitle')),
  ComponentSectionsSpeakersCarousel: dynamic(() => import('components/StrapiComponents/ComponentSectionsSpeakersCarousel')),
};

export type PageContentComponent = IntrosLandingProps
  & SectionsSectionTitleProps
  & SectionsSectionSpeakersCarousel

export interface PageContentProps {
  data?: [
    PageContentComponent
  ]
}

const PageContentContainer = styled.div`
`

const PageContent = ({
  data
}: PageContentProps) => {
  // console.log(data)
  return (
    <>
      {data?.length &&
        <PageContentContainer>
          {data.map((component: PageContentComponent, index) => (
            <div key={index}>
              {component.__typename == 'ComponentIntrosLanding' &&
                <ComponentIntrosLanding data={component} />
              }
              {component.__typename == 'ComponentSectionsSectionTitle' &&
                <ComponentSectionsSectionTitle data={component} />
              }
              {component.__typename == 'ComponentSectionsSpeakersCarousel' &&
                <ComponentSectionsSpeakersCarousel data={component} />
              }
            </div>
          ))
          }
        </PageContentContainer>
      }
    </>
  )
}

export default PageContent