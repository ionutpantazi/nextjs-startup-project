import React, { useState, useEffect, useRef } from 'react'
import useSession from "lib/use-session";
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
import SignupQuestions from './SignupQuestions'

import {
  ModalContainer,
  ModalBody,
  ModalContent,
  ModalTitle,
  EmailInput,
  PasswordInput,
  Button,
  StyledText,
} from './styles'

const LoginModal = ({
  data,
  questions,
  refreshModal,
}: any) => {

  const { session, isLoading } = useSession();
  const [isLogin, setIsLogin] = useState(true);
  const [showQuestions, setShowQuestions] = useState(0);

  useEffect(() => {
    if (!session.isLoggedIn) {
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
      <ModalBody key='login' className={`pointer-events-auto ${showQuestions ? 'hidden' : !isLogin ? 'hidden' : 'visible'}`}>
        <ModalTitle className='mb-6 text-center'>
          Login
        </ModalTitle>
        <ModalContent className='flex flex-col gap-4 items-center'>
          <LoginForm refreshModal={refreshModal} />
          <StyledText className=''>
            Don&apos;t have an account? <button onClick={(e) => { e.preventDefault(), setIsLogin(!isLogin) }}>Sign up</button>
          </StyledText>
        </ModalContent>
      </ModalBody>
      <ModalBody key='signup' className={`pointer-events-auto ${showQuestions ? 'hidden' : isLogin ? 'hidden' : 'visible'}`}>
        <ModalTitle className='mb-6 text-center'>
          Sign up
        </ModalTitle>
        <ModalContent className='flex flex-col gap-4 items-center'>
          <SignupForm showQuestions={handleChildData} refreshModal={refreshModal} />
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
    </>
  )
}

export default LoginModal