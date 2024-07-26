import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentSectionsContact from 'components/StrapiComponents/ComponentSectionsSection5/pwa'
import Header from '@/components/StrapiComponents/PwaComponents/Header'

export const components = {
  ComponentSectionsContact: dynamic(() => import('components/StrapiComponents/ComponentSectionsSection5/pwa')),
};

const PwaContentContainer = styled.div`
`

const Contact = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
  navigationData,
}: any) => {
  console.log(data)
  return (
    <>
      <PwaContentContainer>
      <Header title={'Contact'} headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        {data &&
          <ComponentSectionsContact data={data.event} contactData={data.resource.contact} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Contact