import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentExhibitorsPanel from '@/components/StrapiComponents/ComponentExhibitorsPanel'
import Header from '@/components/StrapiComponents/PwaComponents/Header'
import useSession from "lib/use-session";
import LoginPrompt from '@/components/StrapiComponents/PwaComponents/LoginPrompt'

const PwaContentContainer = styled.div`
`

const Exhibitors = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
  navigationData,
}: any) => {
  const { session } = useSession();
  console.log(data)
  return (
    <>
        <PwaContentContainer>
          <Header title={data.exhibitors ? data.exhibitors.title : "Exhibitors"} headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />

          {data.exhibitors && session.isLoggedIn &&
            <ComponentExhibitorsPanel data={data.exhibitors} />
          }
          {!session.isLoggedIn &&
              <LoginPrompt title={'Get involved in the discussion'} message={'To view the forum'} />
          }
        </PwaContentContainer>
    </>
  )
}

export default Exhibitors