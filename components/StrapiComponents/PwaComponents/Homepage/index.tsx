import React from 'react'
import dnmc from 'next/dynamic'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import ComponentSectionsSection2 from 'components/StrapiComponents/ComponentSectionsSection2/pwa'
import ComponentSectionsFaQs from 'components/StrapiComponents/ComponentSectionsFaQs/pwa'
import ComponentSectionsSection1 from 'components/StrapiComponents/ComponentSectionsSection1/pwa'
import PwaSection from 'components/StrapiComponents/PwaSection'
import ComponentSectionsSection5 from 'components/StrapiComponents/ComponentSectionsSection5/pwa'

const Header = dnmc(() => import('@/components/StrapiComponents/PwaComponents/Header'));
const TextAndIcons = dnmc(() => import('components/StrapiComponents/PwaComponents/TextAndIcons'));
const Agenda = dnmc(() => import('components/StrapiComponents/PwaComponents/Agenda'));

const DynamicContent = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  navigationData,
}: any) => {

  if (!data) return <></>

  return (
    <>
      {data?.resource?.pageData?.pageStructure?.length
        ?
        <>
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
                  {api.section.type == 'faqs' && data.event?.faqs?.length &&
                    <ComponentSectionsFaQs faqs={data['event']['faqs']} title={api.section.title} />
                  }
                  {api.section.type == 'contact' && data.resource.contact &&
                    <ComponentSectionsSection5 data={api.section} contactData={data.resource.contact} />
                  }
                </>
              }
            </div>
          ))}
        </>
        :
        <>
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
        </>
      }
    </>
  )
}

export default DynamicContent