import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import ComponentSectionsSection2 from 'components/StrapiComponents/ComponentSectionsSection2/pwa'
import ComponentSectionsFaQs from 'components/StrapiComponents/ComponentSectionsFaQs/pwa'
import ComponentSectionsSection1 from 'components/StrapiComponents/ComponentSectionsSection1/pwa'

export const components = {
  ComponentIntrosLandingNew: dynamic(() => import('components/StrapiComponents/ComponentIntrosLandingNew/pwa')),
  ComponentSectionsSection2: dynamic(() => import('components/StrapiComponents/ComponentSectionsSection2/pwa')),
  ComponentSectionsFaQs: dynamic(() => import('components/StrapiComponents/ComponentSectionsFaQs/pwa')),
  ComponentSectionsSection1: dynamic(() => import('components/StrapiComponents/ComponentSectionsSection1/pwa')),
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
console.log(data)
  return (
    <>
      {data &&
        <PwaContentContainer>
          {Object.keys(data).map((api, apiData) => (
            <div key={api}>
              {api == 'event' &&
                <ComponentIntrosLandingNew data={data['event']} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} />
              }
              {api == 'discussions' &&
                <ComponentSectionsSection1 discussions={data['discussions']} />
              }
              {api == 'agenda' &&
                <ComponentSectionsSection2 agenda={data['agenda']} delegates={data['delegates']} speakers={data['speakers']} />
              }
              {api == 'event' && data.event?.faqs?.length &&
                <ComponentSectionsFaQs faqs={data['event']['faqs']} />
              }
            </div>
          ))}
        </PwaContentContainer>
      }
    </>
  )
}

export default PwaContent