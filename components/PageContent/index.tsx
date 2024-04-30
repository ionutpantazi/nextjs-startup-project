import React, { useState, useEffect, Children } from 'react'
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
import ComponentIntrosLandingNew, { LandingNewProps } from 'components/StrapiComponents/ComponentIntrosLandingNew'
import ComponentSectionsIWantTo, { IWantToProps } from 'components/StrapiComponents/ComponentSectionsIWantTo'
import ComponentSectionsSection1, { Section1Props } from 'components/StrapiComponents/ComponentSectionsSection1'
import ComponentSectionsSection2, { Section2Props } from 'components/StrapiComponents/ComponentSectionsSection2'
import ComponentSectionsSection3, { Section3Props } from 'components/StrapiComponents/ComponentSectionsSection3'

export const components = {
  ComponentIntrosLanding: dynamic(() => import('components/StrapiComponents/ComponentIntrosLanding')),
  ComponentSectionsSectionTitle: dynamic(() => import('components/StrapiComponents/ComponentSectionsSectionTitle')),
  ComponentSectionsSpeakersCarousel: dynamic(() => import('components/StrapiComponents/ComponentSectionsSpeakersCarousel')),
  ComponentSectionsCardsCarousel: dynamic(() => import('components/StrapiComponents/ComponentSectionsCardsCarousel')),
  ComponentSectionsFaQs: dynamic(() => import('components/StrapiComponents/ComponentSectionsFaQs')),
  ComponentIntrosSimpleSlider: dynamic(() => import('components/StrapiComponents/ComponentIntrosSimpleSlider')),
  ComponentSectionsVideo: dynamic(() => import('components/StrapiComponents/ComponentSectionsVideo')),
  ComponentIntrosLandingNew: dynamic(() => import('components/StrapiComponents/ComponentIntrosLandingNew')),
  ComponentSectionsIWantTo: dynamic(() => import('components/StrapiComponents/ComponentSectionsIWantTo')),
  ComponentSectionsSection1: dynamic(() => import('components/StrapiComponents/ComponentSectionsSection1')),
  ComponentSectionsSection2: dynamic(() => import('components/StrapiComponents/ComponentSectionsSection2')),
  ComponentSectionsSection3: dynamic(() => import('components/StrapiComponents/ComponentSectionsSection3')),
};

export type PageContentComponent = IntrosLandingProps
  & SectionsSectionTitleProps
  & SectionsSectionSpeakersCarousel
  & SectionCardsCarousel
  & SectionsFaQs
  & SimpleSlider
  & VideoProps
  & LandingNewProps
  & IWantToProps
  & Section1Props
  & Section2Props
  & Section3Props

export interface PageContentProps {
  data?: [
    PageContentComponent
  ],
  senddatatolayout?: any,
  isdefaulttheme?: any,
  themedata?: any,
}

const PageContentContainer = styled.div`
`

const PageContent = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
}: PageContentProps) => {

  return (
    <>
      {data?.length &&
        <PageContentContainer>
          {data.map((component: PageContentComponent, index) => (
            <div key={index}>
              {component.__typename == 'ComponentIntrosLanding' &&
                <ComponentIntrosLanding data={component} />
              }
              {component.__typename == 'ComponentIntrosLandingNew' &&
                <ComponentIntrosLandingNew data={component} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme} themedata={themedata} />
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
              {component.__typename == 'ComponentSectionsIWantTo' &&
                <ComponentSectionsIWantTo data={component} />
              }
              {component.__typename == 'ComponentSectionsSection1' &&
                <ComponentSectionsSection1 data={component} />
              }
              {component.__typename == 'ComponentSectionsSection2' &&
                <ComponentSectionsSection2 data={component} />
              }
              {component.__typename == 'ComponentSectionsSection3' &&
                <ComponentSectionsSection3 data={component} />
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