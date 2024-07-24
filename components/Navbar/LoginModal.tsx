import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import FAIcon from 'components/Bootstrap/FAIcon'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import Validation, { ValidationMethods } from '../Bootstrap/Validation'
import useSession from "lib/use-session";
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
import SignupQuestions from './SignupQuestions'
import { Registration_Questions } from 'lib/queries/settings'

export type LoginModal = {
  id: string,
}

export interface LoginModalDataProps {
  data?: LoginModal
  questions?: [Registration_Questions]
}

const ModalContainer = styled.div`
`

const ModalBody = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.components?.Common?.ComponentContainerBorder};
  padding: 60px 40px 20px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    border-radius: 0px;
  }
`

const ModalContent = styled.div`
  padding: 20px 0px;
`

const ModalTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: 34px;
  text-align: center;
  color: ${props => props.theme.colors.black};
`

const EmailInput = styled.div`
  height: 40px;
`

const PasswordInput = styled.div`
  height: 40px;

  svg {
    color: ${props => props.theme.colors.brand};
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.brandlight};
    }
  }
`

const Button = styled.button`
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.small};
  background: ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.white};

  &:hover {
    background: ${props => props.theme.colors.brandlight};
  }
`

const StyledText = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  button {
    color: ${props => props.theme.colors.brand};

    &:hover {
      color: ${props => props.theme.colors.brandlight};
    }
  }
`

const LoginModal = ({
  data,
  questions,
}: LoginModalDataProps) => {

  const { session, isLoading } = useSession();
  const [isLogin, setIsLogin] = useState(true);
  const [showQuestions, setShowQuestions] = useState(0);

  useEffect(() => {
    const init = async () => {
      const {
        initTWE,
        Modal,
      } = await import("tw-elements");
      initTWE({ Modal });
    };
    init();
  }, []);

  useEffect(() => {
    if(!session.isLoggedIn){
      setShowQuestions(0)
      setIsLogin(true)
    }
  }, [session]);

  const handleChildData = (userId: any) => {
    if (userId) {
      setShowQuestions(userId)
    }
  }

  return (
    <>
      <ModalContainer className='fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
        data-twe-modal-init
        id='loginModal'
        tabIndex={-1}
        aria-hidden='true'
      >
        <div className='pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]'
          data-twe-modal-dialog-ref
        >
          <ModalBody key='login' className={`pointer-events-auto ${showQuestions ? 'hidden' : !isLogin ? 'hidden' : 'visible'}`}>
            <ModalTitle className=''>
              Log in
            </ModalTitle>
            <ModalContent className='flex flex-col gap-4 items-center'>
              <LoginForm />
              <StyledText className=''>
                Don&apos;t have an account? <button onClick={(e) => { e.preventDefault(), setIsLogin(!isLogin) }}>Sign up</button>
              </StyledText>
            </ModalContent>
          </ModalBody>
          <ModalBody key='signup' className={`pointer-events-auto ${showQuestions ? 'hidden' : isLogin ? 'hidden' : 'visible'}`}>
            <ModalTitle className=''>
              Sign up
            </ModalTitle>
            <ModalContent className='flex flex-col gap-4 items-center'>
              <SignupForm showQuestions={handleChildData} />
              <StyledText className=''>
                Already have an account? <button onClick={(e) => { e.preventDefault(), setIsLogin(!isLogin) }}>Log in</button>
              </StyledText>
            </ModalContent>
          </ModalBody>
          <ModalBody key='questions' className={`pointer-events-auto ${showQuestions ? 'visible' : 'hidden'}`}>
            <ModalTitle className=''>
              Questions
            </ModalTitle>
            <ModalContent className='flex flex-col gap-4 items-center'>
              <SignupQuestions questions={questions} userId={showQuestions} />
            </ModalContent>
          </ModalBody>
        </div>
      </ModalContainer>
    </>
  )
}

export default LoginModal