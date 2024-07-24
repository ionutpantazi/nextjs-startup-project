import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import ComponentSectionsFaQs from 'components/StrapiComponents/ComponentSectionsFaQs/pwa'

export const components = {
  ComponentIntrosLandingNew: dynamic(() => import('components/StrapiComponents/ComponentIntrosLandingNew/pwa')),
  ComponentSectionsFaQs: dynamic(() => import('components/StrapiComponents/ComponentSectionsFaQs/pwa')),
};

const PwaContentContainer = styled.div`
`

const Faqs = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  navigationData,
}: any) => {
  console.log(data)
  return (
    <>
      <PwaContentContainer>
        <ComponentIntrosLandingNew data={data['event']} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} />
        {data.event?.faqs?.length &&
          <ComponentSectionsFaQs faqs={data['event']['faqs']} title={'FAQs'} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Faqs