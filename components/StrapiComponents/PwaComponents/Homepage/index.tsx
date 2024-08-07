import React, { useState, useEffect, useMemo } from 'react'
import dnmc from 'next/dynamic'
import ComponentSectionsSection2 from 'components/StrapiComponents/ComponentSectionsSection2/pwa'
import ComponentSectionsSection1 from 'components/StrapiComponents/ComponentSectionsSection1/pwa'

const Header = dnmc(() => import('@/components/StrapiComponents/PwaComponents/Header'));
const TextAndIcons = dnmc(() => import('components/StrapiComponents/PwaComponents/TextAndIcons'));
const Agenda = dnmc(() => import('components/StrapiComponents/PwaComponents/Agenda'));
const PwaSection = dnmc(() => import('components/StrapiComponents/PwaSection'));
const FAQs = dnmc(() => import('components/StrapiComponents/PwaComponents/FAQs'));
const Contact = dnmc(() => import('components/StrapiComponents/PwaComponents/Contact'), { ssr: false }); // ssr issue -> needs fixing

const DynamicContent = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
  navigationData,
  userLoggedInFromApi,
}: any) => {
  console.log(themeMeta)


  var apiADNAPageStructure = data?.resource?.pageData?.pageStructure;
  var apiDefaultPageStructure = data?.resource?.defaultPageData?.pageStructure;
  const [pageStructure, setPageStructure] = useState(apiADNAPageStructure)

  useEffect(() => {
    if (isdefaulttheme == 'true') {
      setPageStructure(apiDefaultPageStructure)
    } else {
      setPageStructure(apiADNAPageStructure)
    }
  }, [isdefaulttheme]);

  if (!data) return <></>

  return (
    <>
      {data?.resource?.pageData?.pageStructure?.length
        ?
        <>
          {/* {data?.resource?.pageData?.pageStructure.map((api: any, index: number) => ( */}
          {pageStructure.map((api: any, index: number) => (
            <div key={index}>
              {api.heading
                ?
                <Header title={data.event.title} subtitle={data.event.subtitle} headerImage={data.event.homeBanner} startDate={data.event.startDate} venueData={data.event.venue} description={data.event.longDesc} tilesData={data.event.tilesData} hideBody={false} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} userLoggedInFromApi={userLoggedInFromApi} />
                :
                <>
                  {api.section.type == 'section' &&
                    <PwaSection data={api.section} agenda={data['agenda']} delegates={data['delegates']} discussions={data['discussions']} speakers={data['speakers']} />
                  }
                  {api.section.type == 'faqs' && data.faqs?.faQs?.length &&
                    <FAQs faqs={data['faqs']['faQs']} title={api.section.title} isHomepage={true} />
                  }
                  {api.section.type == 'contact' && data.resource.contact &&
                    <Contact data={api.section} contactData={data.resource.contact} />
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
                <Header title={data.event.title} subtitle={data.event.subtitle} headerImage={data.event.homeBanner} venueData={data.event.venue} date={data.event.startDate} description={data.event.longDesc} tilesData={data.event.tilesData} hideBody={false} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
              }
              {api == 'discussions' &&
                <ComponentSectionsSection1 discussions={data['discussions']} />
              }
              {api == 'agenda' &&
                <ComponentSectionsSection2 agenda={data['agenda']} delegates={data['delegates']} speakers={data['speakers']} />
              }
              {api == 'faqs' && data.faqs?.faQs?.length &&
                <FAQs faqs={data['faqs']['faQs']} isHomepage={true} />
              }
            </div>
          ))}
        </>
      }
    </>
  )
}

export default DynamicContent