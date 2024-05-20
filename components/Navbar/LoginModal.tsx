import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import FAIcon from 'components/Bootstrap/FAIcon'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import Validation, { ValidationMethods } from '../Bootstrap/Validation'
import useSession from "lib/use-session";
import { LoginForm } from './LoginForm'


export type LoginModal = {
  id: string,
}

export interface LoginModalDataProps {
  data?: LoginModal
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
  data
}: LoginModalDataProps) => {

  const loginEmailValidationRef = useRef<ValidationMethods>(null);
  const loginPasswordValidationRef = useRef<ValidationMethods>(null);
  const signupEmailValidationRef = useRef<ValidationMethods>(null);
  const signupPasswordValidationRef = useRef<ValidationMethods>(null);
  const signupPasswordConfirmValidationRef = useRef<ValidationMethods>(null);

  const signupEmailInput = useRef(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [signupEmailValue, setSignupEmailValue] = useState('');
  const createPasswordInput = useRef(null);
  const [createPasswordValue, setCreatePasswordValue] = useState('');
  const [isCreatePasswordVisible, setIsCreatePasswordVisible] = useState(false);
  const confirmPasswordInput = useRef(null);
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isValid, setIsValid] = useState<any>({});

  useEffect(() => {
    const init = async () => {
      const {
        initTWE,
        Input,
        Modal,
      } = await import("tw-elements");
      initTWE({ Input, Modal });
    };
    init();
  }, []);

  function handleShowPassword(e: any) {
    e.preventDefault()
    setIsPasswordVisible(!isPasswordVisible)
    // const passwordinput = document.getElementById("passwordinput");
    // passwordinput?.focus()
  }

  useEffect(() => {
    if (isValid.signup) {
      console.log('signup')
    }
  }, [isValid.signup]);

  function handleShowCreatePassword(e: any) {
    e.preventDefault()
    setIsCreatePasswordVisible(!isCreatePasswordVisible)
  }

  function handleShowConfirmPassword(e: any) {
    e.preventDefault()
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
  }

  const handleValidationData = (data: any) => {
    setIsValid(data)
  };

  function submitLogin(e: any) {
    e.preventDefault()
    if (loginEmailValidationRef.current && loginPasswordValidationRef.current) {
      loginEmailValidationRef.current.updateErrorStatus('login', 0);
      loginPasswordValidationRef.current.updateErrorStatus('login', 1);
    }
  }

  function submitSignup(e: any) {
    e.preventDefault()
    if (signupEmailValidationRef.current && signupPasswordValidationRef.current && signupPasswordConfirmValidationRef.current) {
      signupEmailValidationRef.current.updateErrorStatus('signup', 0);
      signupPasswordValidationRef.current.updateErrorStatus('signup', 1);
      signupPasswordConfirmValidationRef.current.updateErrorStatus('signup', 2);
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
          <ModalBody key='login' className={`pointer-events-auto ${!isLogin ? 'hidden' : 'visible'}`}>
            <ModalTitle className=''>
              Login
            </ModalTitle>
            <ModalContent className='flex flex-col gap-4 items-center'>
              <LoginForm />
              <StyledText className=''>
                Don&apos;t have an account? <button onClick={(e) => { e.preventDefault(), setIsLogin(!isLogin) }}>Signup</button>
              </StyledText>
            </ModalContent>
          </ModalBody>
          <ModalBody key='signup' className={`pointer-events-auto ${isLogin ? 'hidden' : 'visible'}`}>
            <ModalTitle className=''>
              Signup
            </ModalTitle>
            <ModalContent className='flex flex-col gap-4 items-center'>
              <EmailInput className='relative mb-3 w-full'
                data-twe-input-wrapper-init
              >
                <input
                  type='email'
                  className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0'
                  id='signupemailinput'
                  placeholder='Email'
                  value={signupEmailValue}
                  ref={signupEmailInput}
                  onChange={(e) => setSignupEmailValue(e.target.value)}
                />
                <label
                  htmlFor='signupemailinput'
                  className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
                >
                  Email
                </label>
                <Validation input={signupEmailValue} type='email' message='email not valid' ref={signupEmailValidationRef} sendvalidation={handleValidationData} />
              </EmailInput>
              <PasswordInput className='relative mb-3 w-full'
                data-twe-input-wrapper-init
              >
                <input
                  type={isCreatePasswordVisible ? 'text' : 'password'}
                  className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0'
                  id='createpasswordinput'
                  placeholder='Password'
                  value={createPasswordValue}
                  ref={createPasswordInput}
                  onChange={(e) => setCreatePasswordValue(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2" onClick={handleShowCreatePassword}>
                  {
                    isCreatePasswordVisible
                      ?
                      <FAIcon
                        icon={'fa-eye'}
                        width={20}
                        height={20}
                      />
                      :
                      <FAIcon
                        icon={'fa-eye-slash'}
                        width={20}
                        height={20}
                      />
                  }
                </div>
                <label
                  htmlFor='passwordinput'
                  className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
                >
                  Create Password
                </label>
                <Validation input={createPasswordValue} type='password' message='password not valid' ref={signupPasswordValidationRef} sendvalidation={handleValidationData} />
              </PasswordInput>
              <PasswordInput className='relative mb-3 w-full'
                data-twe-input-wrapper-init
              >
                <input
                  type={isConfirmPasswordVisible ? 'text' : 'password'}
                  className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0'
                  id='confirmpasswordinput'
                  placeholder='Password'
                  value={confirmPasswordValue}
                  ref={confirmPasswordInput}
                  onChange={(e) => setConfirmPasswordValue(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2" onClick={handleShowConfirmPassword}>
                  {
                    isConfirmPasswordVisible
                      ?
                      <FAIcon
                        icon={'fa-eye'}
                        width={20}
                        height={20}
                      />
                      :
                      <FAIcon
                        icon={'fa-eye-slash'}
                        width={20}
                        height={20}
                      />
                  }
                </div>
                <label
                  htmlFor='passwordinput'
                  className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
                >
                  Confirm Password
                </label>
                <Validation input={confirmPasswordValue} match={createPasswordValue} type='password' message='password does not match' ref={signupPasswordConfirmValidationRef} sendvalidation={handleValidationData} />
              </PasswordInput>
              <Button className='w-full' onClick={submitSignup}>
                Signup
              </Button>
              <StyledText className=''>
                Already have an account? <button onClick={(e) => { e.preventDefault(), setIsLogin(!isLogin) }}>Login</button>
              </StyledText>
            </ModalContent>
          </ModalBody>
        </div>
      </ModalContainer>
    </>
  )
}

export default LoginModal