import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import ComponentSectionsFaQs from 'components/StrapiComponents/ComponentSectionsFaQs/pwa'
import Speakers from '@/components/StrapiComponents/PwaComponents/Speakers'

const PwaContentContainer = styled.div`
`

const Faqs = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  navigationData,
}: any) => {

  return (
    <>
      <PwaContentContainer>
        <ComponentIntrosLandingNew data={data['event']} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} />
        {data.speakers?.data?.length &&
          <Speakers data={data} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Faqs