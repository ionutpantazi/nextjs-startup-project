import { useState, useEffect, useContext } from 'react'
import { IMAGE_DOMAIN } from 'lib/constants'
import { HeaderNavigationProps, PillarsProps } from 'lib/queries/nav-data'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import styled, { css } from 'styled-components'
import LoginModal from './LoginModal'
import useSession from "lib/use-session";
import { defaultSession } from "lib/session";
import { redirectToEventRoot } from 'utils/helpers'
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ThemeContext } from 'components/Layout';

export interface NavbarProps {
  isOpen?: boolean
  navigationData: any
  logo?: any
}

const NavigationContainer = styled.nav`
  z-index: 99;
  background-color: ${props => props.theme.components?.Navbar?.NavigationContainerBackground};
  // @media screen and (min-width: ${props => props.theme.screens.md}) {
  //   height: 80px;
  // }
  height: auto;
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    position: fixed;
    top: 0px;
    background-color: ${props => props.theme.colors.white};
  }
`

const LogoContainer = styled.div`
  // position: absolute;
  // top: 1px;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    display: none;
  }
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
  width: 120px;
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

const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 1500px;
  padding: 0 100px;
  row-gap: 10px;
  column-gap: 20px;
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    padding: 0;
    row-gap: 2px;
  }
`

const Navbar: React.FC<NavbarProps> = ({
  isOpen,
  navigationData,
  logo,
}) => {

  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const { session, isLoading, logout } = useSession();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const init = async () => {
      const {
        Collapse,
        Dropdown,
        initTWE,
        Modal,
      } = await import("tw-elements");
      initTWE({ Collapse, Dropdown, Modal });
    };
    init();
  }, []);

  useEffect(() => {
    if (width && width < Number(theme.screens['md'].replace('px', ''))) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  const MoreItems = (navigationData: any) => {
    return (
      <>
        {navigationData?.map((navItem: any) => (
          <>
            <li className="mb-4 md:mb-0 md:pe-10" key={navItem.id} data-twe-nav-item-ref>
              <Pillar className='flex gap-2' data-twe-nav-link-ref>
                <FAIcon
                  icon={navItem.icon}
                  width={20}
                  height={20}
                />
                <span>
                  {navItem.title}
                </span>
              </Pillar>
            </li>
          </>
        ))
        }
      </>
    )
  }

  const RightButtons = (props: any) => {
    return (
      <RightButtonsContainer show={props.show} className={`flex items-center gap-x-1`}>
        {session.isLoggedIn
          ? <RegisterBtn className='flex items-center justify-center gap-x-1'
            onClick={(event) => {
              event.preventDefault();
              logout(null, {
                optimisticData: defaultSession,
              });
            }}
          >
            <FAIcon
              icon={'fa-user'}
              width={20}
              height={20}
            />
            <span>Log out</span>
          </RegisterBtn>
          : <RegisterBtn className='flex items-center justify-center gap-x-1'
            data-twe-toggle="modal"
            data-twe-target="#loginModal"
          >
            <FAIcon
              icon={'fa-user'}
              width={20}
              height={20}
            />
            <span>Log in</span>
          </RegisterBtn>
        }

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
    <>
      <NavigationContainer className='flex-no-wrap relative flex w-full items-center justify-between py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4'>
        <div className="flex w-full md:flex-nowrap flex-wrap items-center justify-between px-3">
          {/* Logo  */}
          {logo?.path &&
            <LogoContainer as='a' href={redirectToEventRoot()} className='flex items-center'>
              <>
                {logo.path &&
                  <NextImage
                    src={logo.path}
                    className=''
                    alt={logo.alt ?? ""}
                    width={80}
                    height={80}
                  />
                }
              </>
            </LogoContainer>
          }
          <div>

          </div>
          <RightButtons show={'hidedesktop'} />
          <CollapsibleMenu className='!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center md:mt-0 md:!flex md:basis-auto' id="navbarSupportedContent1" data-twe-collapse-item>
            {navigationData.length &&
              <MenuList className="list-style-none flex flex-col ps-0 md:mt-1 mt-4 md:flex-row" data-twe-navbar-nav-ref>
                {navigationData?.map((navItem: any) => (
                  <>
                    {isMobile
                      ?
                      <li className="mb-4 md:mb-0 md:pe-10" key={navItem.id} data-twe-nav-item-ref>
                        <Pillar className='flex gap-2' data-twe-nav-link-ref>
                          <FAIcon
                            icon={navItem.icon}
                            width={20}
                            height={20}
                          />
                          <span>
                            {navItem.title}
                          </span>
                        </Pillar>
                      </li>
                      :
                      <>
                        {navItem.featured &&
                          <li className="mb-4 md:mb-0 md:pe-10" key={navItem.id} data-twe-nav-item-ref>
                            <Pillar className='flex gap-2' data-twe-nav-link-ref>
                              <FAIcon
                                icon={navItem.icon}
                                width={20}
                                height={20}
                              />
                              <span>
                                {navItem.title}
                              </span>
                            </Pillar>
                          </li>
                        }
                      </>
                    }
                  </>
                ))
                }
              </MenuList>
            }
          </CollapsibleMenu>
          <RightButtons show={'hidemobile'} />
        </div>
      </NavigationContainer>
      <LoginModal data={undefined} />
    </>
  )
}

export default Navbar