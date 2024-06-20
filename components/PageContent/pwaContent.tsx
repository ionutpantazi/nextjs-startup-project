import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import ComponentSectionsSection2 from 'components/StrapiComponents/ComponentSectionsSection2/pwa'

export const components = {
  ComponentIntrosLandingNew: dynamic(() => import('components/StrapiComponents/ComponentIntrosLandingNew/pwa')),
  ComponentSectionsSection2: dynamic(() => import('components/StrapiComponents/ComponentSectionsSection2/pwa')),
};

export interface PwaContentProps {
  data?: any,
  senddatatolayout?: any,
  isdefaulttheme?: any,
  themedata?: any,
}

const PwaContentContainer = styled.div`
`

const PwaContent = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
}: PwaContentProps) => {

  return (
    <>
      {data &&
        <PwaContentContainer>
          {Object.keys(data).map((api, apiData) => (
            <div key={api}>
              {api == 'event' &&
                <ComponentIntrosLandingNew data={data['event']} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} />
              }
              {api == 'agenda' &&
                <ComponentSectionsSection2 data={data['agenda']} />
              }
            </div>
          ))}
        </PwaContentContainer>
      }
    </>
  )
}

export default PwaContent