import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import {
  IntrosLandingProps
} from 'components/StrapiComponents/ComponentIntrosLanding'
import ComponentIntrosLanding from 'components/StrapiComponents/ComponentIntrosLanding';


export const components = {
  ComponentIntrosLanding: dynamic(() => import('components/StrapiComponents/ComponentIntrosLanding')),
};

export type PageContentComponent = IntrosLandingProps

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
          {data.map((component: PageContentComponent) => (
            <div key={component.id}>
              {component.__typename == 'ComponentIntrosLanding' &&
                <ComponentIntrosLanding data={component} />
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