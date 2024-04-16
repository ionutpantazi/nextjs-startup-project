import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import ComponentIntrosLanding, { IntrosLandingProps } from 'components/StrapiComponents/ComponentIntrosLanding'
import ComponentSectionsSectionTitle, { SectionsSectionTitleProps } from 'components/StrapiComponents/ComponentSectionsSectionTitle'
import ComponentSectionsSpeakersCarousel, { SectionsSectionSpeakersCarousel } from 'components/StrapiComponents/ComponentSectionsSpeakersCarousel'
import ComponentSectionsCardsCarousel, { SectionCardsCarousel } from 'components/StrapiComponents/ComponentSectionsCardsCarousel'
import ComponentSectionsFaQs, { SectionsFaQs } from 'components/StrapiComponents/ComponentSectionsFaQs'


export const components = {
  ComponentIntrosLanding: dynamic(() => import('components/StrapiComponents/ComponentIntrosLanding')),
  ComponentSectionsSectionTitle: dynamic(() => import('components/StrapiComponents/ComponentSectionsSectionTitle')),
  ComponentSectionsSpeakersCarousel: dynamic(() => import('components/StrapiComponents/ComponentSectionsSpeakersCarousel')),
  ComponentSectionsCardsCarousel: dynamic(() => import('components/StrapiComponents/ComponentSectionsCardsCarousel')),
  ComponentSectionsFaQs: dynamic(() => import('components/StrapiComponents/ComponentSectionsFaQs')),
};

export type PageContentComponent = IntrosLandingProps
  & SectionsSectionTitleProps
  & SectionsSectionSpeakersCarousel
  & SectionCardsCarousel
  & SectionsFaQs

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
              {component.__typename == 'ComponentSectionsCardsCarousel' &&
                <ComponentSectionsCardsCarousel data={component} />
              }
              {component.__typename == 'ComponentSectionsFaQs' &&
                <ComponentSectionsFaQs data={component} />
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