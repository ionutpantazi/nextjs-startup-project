import React, { useState, useEffect, Children } from 'react'
import styled, { css } from 'styled-components'
import Header from '@/components/StrapiComponents/PwaComponents/Header'
import DiscussionComponent from '@/components/StrapiComponents/PwaComponents/Forum/details';
import useSession from "lib/use-session";
import LoginPrompt from '@/components/StrapiComponents/PwaComponents/LoginPrompt';

const PwaContentContainer = styled.div`
`

const Discussion = ({
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
      <Header title={'Discussion'} headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        {data && session.isLoggedIn &&
          <DiscussionComponent data={data.discussion} />
        }
        {!session.isLoggedIn &&
            <LoginPrompt title={'Get involved in the discussion'} message={'To view the discussion'} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Discussion