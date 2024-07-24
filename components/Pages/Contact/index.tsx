import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import ComponentSectionsContact from 'components/StrapiComponents/ComponentSectionsSection5/pwa'

export const components = {
  ComponentIntrosLandingNew: dynamic(() => import('components/StrapiComponents/ComponentIntrosLandingNew/pwa')),
  ComponentSectionsContact: dynamic(() => import('components/StrapiComponents/ComponentSectionsSection5/pwa')),
};

const PwaContentContainer = styled.div`
`

const Contact = ({
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
        {data &&
          <ComponentSectionsContact data={data.event} contactData={data.resource.contact} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Contact