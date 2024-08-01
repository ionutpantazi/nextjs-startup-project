import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import ComponentSectionsSection2 from 'components/StrapiComponents/ComponentSectionsSection2/pwa'
import ComponentSectionsFaQs from 'components/StrapiComponents/ComponentSectionsFaQs/pwa'
import ComponentSectionsSection1 from 'components/StrapiComponents/ComponentSectionsSection1/pwa'
import PwaSection from 'components/StrapiComponents/PwaSection'
import ComponentSectionsSection5 from 'components/StrapiComponents/ComponentSectionsSection5/pwa'

export const components = {
  ComponentIntrosLandingNew: dynamic(() => import('components/StrapiComponents/ComponentIntrosLandingNew/pwa')),
  ComponentSectionsSection2: dynamic(() => import('components/StrapiComponents/ComponentSectionsSection2/pwa')),
  ComponentSectionsFaQs: dynamic(() => import('components/StrapiComponents/ComponentSectionsFaQs/pwa')),
  ComponentSectionsSection1: dynamic(() => import('components/StrapiComponents/ComponentSectionsSection1/pwa')),
  PwaSection: dynamic(() => import('components/StrapiComponents/PwaSection')),
  ComponentSectionsSection5: dynamic(() => import('components/StrapiComponents/ComponentSectionsSection5/pwa')),
};

export interface PwaContentProps {
  data?: any,
  senddatatolayout?: any,
  isdefaulttheme?: any,
  themedata?: any,
  navigationData?: any,
}

const PwaContentContainer = styled.div`
`

const PwaContent = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  navigationData,
}: PwaContentProps) => {
  console.log(data)
  if (!data) return <></>
  return (
    <>
      {data?.resource?.pageData?.pageStructure?.length
        ?
        <PwaContentContainer>
          {data?.resource?.pageData?.pageStructure.map((api: any, index: number) => (
            <div key={index}>
              {api.heading
                ?
                <ComponentIntrosLandingNew data={data['event']} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} />
                :
                <>
                {api.section.type == 'section' &&
                  <PwaSection data={api.section} agenda={data['agenda']} delegates={data['delegates']} discussions={data['discussions']} speakers={data['speakers']} />
                }
                {api.section.type == 'faqs' && data.faqs?.faQs?.length &&
                  <ComponentSectionsFaQs faqs={data['faqs']['faQs']} title={api.section.title} />
                }
                {api.section.type == 'contact' && data.resource.contact &&
                  <ComponentSectionsSection5 data={api.section} contactData={data.resource.contact} />
                }
                </>
              }
            </div>
          ))}
        </PwaContentContainer>
        :
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
              {api == 'faqs' && data.faqs?.faQs?.length &&
                <ComponentSectionsFaQs faqs={data['faqs']['faQs']} />
              }
            </div>
          ))}
        </PwaContentContainer>
      }
    </>
  )
}

export default PwaContent