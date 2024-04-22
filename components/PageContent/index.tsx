import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import ComponentIntrosLanding, { IntrosLandingProps } from 'components/StrapiComponents/ComponentIntrosLanding'
import ComponentSectionsSectionTitle, { SectionsSectionTitleProps } from 'components/StrapiComponents/ComponentSectionsSectionTitle'
import ComponentSectionsSpeakersCarousel, { SectionsSectionSpeakersCarousel } from 'components/StrapiComponents/ComponentSectionsSpeakersCarousel'
import ComponentSectionsCardsCarousel, { SectionCardsCarousel } from 'components/StrapiComponents/ComponentSectionsCardsCarousel'
import ComponentSectionsFaQs, { SectionsFaQs } from 'components/StrapiComponents/ComponentSectionsFaQs'
import ComponentIntrosSimpleSlider, { SimpleSlider } from 'components/StrapiComponents/ComponentIntrosSimpleSlider'
import ComponentSectionsVideo, { VideoProps } from 'components/StrapiComponents/ComponentSectionsVideo'

export const components = {
  ComponentIntrosLanding: dynamic(() => import('components/StrapiComponents/ComponentIntrosLanding')),
  ComponentSectionsSectionTitle: dynamic(() => import('components/StrapiComponents/ComponentSectionsSectionTitle')),
  ComponentSectionsSpeakersCarousel: dynamic(() => import('components/StrapiComponents/ComponentSectionsSpeakersCarousel')),
  ComponentSectionsCardsCarousel: dynamic(() => import('components/StrapiComponents/ComponentSectionsCardsCarousel')),
  ComponentSectionsFaQs: dynamic(() => import('components/StrapiComponents/ComponentSectionsFaQs')),
  ComponentIntrosSimpleSlider: dynamic(() => import('components/StrapiComponents/ComponentIntrosSimpleSlider')),
  ComponentSectionsVideo: dynamic(() => import('components/StrapiComponents/ComponentSectionsVideo')),
};

export type PageContentComponent = IntrosLandingProps
  & SectionsSectionTitleProps
  & SectionsSectionSpeakersCarousel
  & SectionCardsCarousel
  & SectionsFaQs
  & SimpleSlider
  & VideoProps

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
              {component.__typename == 'ComponentIntrosSimpleSlider' &&
                <ComponentIntrosSimpleSlider data={component} />
              }
              {component.__typename == 'ComponentSectionsVideo' &&
                <ComponentSectionsVideo data={component} />
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