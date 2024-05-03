import { useEffect } from 'react'
import { IMAGE_DOMAIN } from 'lib/constants'
import { HeaderNavigationProps, PillarsProps } from 'lib/queries/nav-data'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import styled, { css } from 'styled-components'

export interface NavbarProps {
  isOpen?: boolean
  navigationData: HeaderNavigationProps
}

const NavigationContainer = styled.nav`
  z-index: 99;
  background-color: ${props => props.theme.components?.Navbar?.NavigationContainerBackground};
  @media screen and (min-width: ${props => props.theme.screens.md}) {
    height: 80px;
  }
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    position: fixed;
    top: 0px;
    background-color: ${props => props.theme.colors.white};
  }
`

const LogoContainer = styled.div`
`

const RightButtonsContainer = styled.div <{ show?: any }>`
 
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    ${({ show }) => css`
      ${props => show == 'hidemobile' ? 'display: none' : ''};
    `}
  }

  @media screen and (min-width: ${props => props.theme.screens.md}) {
    ${({ show }) => css`
      ${props => show == 'hidedesktop' ? 'display: none' : ''};
    `}
  }
`

const RegisterBtn = styled.div`
  border-radius: ${props => props.theme.components?.Navbar?.BtnRadius};
  background-color: ${props => props.theme.colors.grey1};
  padding: 10px 20px;
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${props => props.theme.colors.black};
  }
  svg {
    color: ${props => props.theme.colors.brand};
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.lightgrey};
    svg {
      color: ${props => props.theme.colors.brandlight};
    }
  }
`

const MenuBtn = styled.div`
  border-radius: ${props => props.theme.components?.Navbar?.BtnRadius};
  background-color: ${props => props.theme.colors.brand};
  padding: 10px 20px;
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${props => props.theme.colors.black};
  }
  svg {
    color: ${props => props.theme.colors.darkestgrey};
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.brandlight};
    svg {
      color: ${props => props.theme.colors.darkgrey};
    }
  }
`

const MenuBtnMobile = styled(MenuBtn)`
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    display: none;
  }
`

const MenuBtnDesktop = styled(MenuBtn)`
  @media screen and (min-width: ${props => props.theme.screens.md}) {
    display: none;
  }
`

const Pillar = styled.div`
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${props => props.theme.colors.black};
  }
  svg {
    color: ${props => props.theme.colors.brand};
  }
  &:hover {
    cursor: pointer;
    span {
      color: ${props => props.theme.colors.darkgrey};
    }
    svg {
      color: ${props => props.theme.colors.brandlight};
    }
  }
  @media screen and (min-width: ${props => props.theme.screens.md}) {
    justify-content: left;
  }
`

const CollapsibleMenu = styled.div`
  @media screen and (min-width: ${props => props.theme.screens.md}) {
    // display: none;
  }
`

const Navbar: React.FC<NavbarProps> = ({
  isOpen,
  navigationData,
}) => {

  useEffect(() => {
    const init = async () => {
      const {
        Collapse,
        Dropdown,
        initTWE,
      } = await import("tw-elements");
      initTWE({ Collapse, Dropdown });
    };
    init();
  }, []);

  const RightButtons = (props: any) => {
    return (
      <RightButtonsContainer show={props.show} className={`flex items-center gap-x-1`}>
        <RegisterBtn className='flex items-center justify-center gap-x-1'>
          <FAIcon
            icon={'fa-user'}
            width={20}
            height={20}
          />
          <span>Register</span>
        </RegisterBtn>
        {/* Hamburger button for mobile view */}
        <MenuBtnDesktop
          className='flex items-center justify-center gap-x-1'
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FAIcon
            icon={'fa-bars'}
            width={20}
            height={20}
          />
          <span>Menu</span>
        </MenuBtnDesktop>
        <MenuBtnMobile className='flex items-center justify-center gap-x-1'>
          <FAIcon
            icon={'fa-bars'}
            width={20}
            height={20}
          />
          <span>More</span>
        </MenuBtnMobile>
      </RightButtonsContainer>
    )
  }

  return (
    <NavigationContainer className='flex-no-wrap relative flex w-full items-center justify-between py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4'>
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* Logo  */}
        {navigationData?.Logo?.data &&
          <LogoContainer as='a' href='#' className='flex items-center'>
            <>
              {navigationData?.Logo?.data.attributes?.url &&
                <NextImage
                  src={IMAGE_DOMAIN + navigationData.Logo.data.attributes.url}
                  className=''
                  alt={navigationData.Logo.data.attributes.alternativeText ?? ""}
                  width={64}
                  height={20}
                />
              }
            </>
          </LogoContainer>
        }
        <RightButtons show={'hidedesktop'} />
        <CollapsibleMenu className='!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center md:mt-0 md:!flex md:basis-auto' id="navbarSupportedContent1" data-twe-collapse-item>
          {navigationData?.Pillars?.length &&
            <ul className="list-style-none flex flex-col ps-0 md:mt-1 mt-4 md:flex-row" data-twe-navbar-nav-ref>
              {navigationData?.Pillars.map((navItem: PillarsProps) => (
                <li className="mb-4 md:mb-0 md:pe-10" key={navItem.id} data-twe-nav-item-ref>
                  <Pillar className='flex gap-2' data-twe-nav-link-ref>
                    <FAIcon
                      icon={navItem.FAIcon.Icon}
                      width={Number(navItem.FAIcon.Width)}
                      height={Number(navItem.FAIcon.Height)}
                    />
                    <span>
                      {navItem.Title}
                    </span>
                  </Pillar>
                </li>
              ))
              }
            </ul>
          }
        </CollapsibleMenu>
        <RightButtons show={'hidemobile'} />
      </div>
    </NavigationContainer>
  )
}

export default Navbar