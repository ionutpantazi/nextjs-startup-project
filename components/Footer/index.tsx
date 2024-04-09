import { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import { NavigationData, NavigationItem } from 'lib/queries/nav-data'
import Link from 'next/link'
import Text from 'components/Bootstrap/Text'

const FooterContainer = styled.footer`
  background-color: ${theme.colors.grey};
  margin: ${theme.margins.homepage_large};
  padding: 50px 40px;
  border-radius: 20px 20px 0px 0px;

  @media screen and (max-width: ${theme.screens.sm}) {
    margin: ${theme.margins.homepage_small};
    padding: 10px 20px;
    border-radius: 0px;
  }
`
const LeftColumn = styled.div`
`

const RightColumn = styled.div`
`

const FooterText = styled(Text)`
  color: ${theme.colors.white};
`

const NavigationItemContainer = styled.div`
`

export interface FooterProps {
  navigationData: NavigationData
}

const Footer: React.FC<FooterProps> = ({
  navigationData,
}) => {
  console.log(navigationData.footerNavigationData)


  return (
    <FooterContainer className='flex flex-col sm:flex-row'>
      <LeftColumn className='flex-auto w-50 content-between'>
        {/* Logo  */}
        {navigationData?.siteLogo &&
          <Link href="/">
            <img
              src={IMAGE_DOMAIN + navigationData.siteLogo.url}
              alt={navigationData.siteLogo.alternativeText ?? ""}
              loading="lazy"
            />
          </Link>
        }
        <FooterText>
          All content © Delegate Live Limited. All rights reserved.
        </FooterText>
      </LeftColumn>
      <RightColumn className='flex-auto w-50 justify-between'>
        <NavigationItemContainer>

        </NavigationItemContainer>
      </RightColumn>
    </FooterContainer>
  )
}

export default Footer