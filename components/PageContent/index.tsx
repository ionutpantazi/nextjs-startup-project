import React, { useState } from 'react'
import dynamic from 'next/dynamic'
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

const PageContent = ({
  data
}: PageContentProps) => {
  // console.log(data)
  return (
    <>
      {data?.length &&
        <>
          {data.map((component: PageContentComponent) => (
            <div key={component.id}>
              {component.__typename == 'ComponentIntrosLanding' &&
                <ComponentIntrosLanding data={component} />
              }
            </div>
          ))
          }
        </>
      }
    </>
  )
}

export default PageContent