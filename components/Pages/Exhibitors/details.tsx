import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import ComponentSectionsExhibitorCarousel from '@/components/StrapiComponents/ComponentExhibitorsCarousel'

export const components = {
  ComponentIntrosLandingNew: dynamic(() => import('components/StrapiComponents/ComponentIntrosLandingNew/pwa')),
  ComponentExhibitorsCarousel: dynamic(() => import('components/StrapiComponents/ComponentExhibitorsCarousel/index')),
};

const PwaContentContainer = styled.div`
`

const Exhibitor = ({
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
          <ComponentSectionsExhibitorCarousel data={data.exhibitors} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Exhibitor