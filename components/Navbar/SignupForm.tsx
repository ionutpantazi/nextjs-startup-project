import React, { useState, useEffect, useRef } from 'react'
import useSession from "lib/use-session";
import { defaultSession } from "lib/session";
import styled, { css } from 'styled-components'
import Validation, { ValidationMethods } from '../Bootstrap/Validation'
import FAIcon from 'components/Bootstrap/FAIcon'
import axios from 'axios'

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

export function SignupForm(props: any) {
  
  const { login } = useSession();
  const signupEmailValidationRef = useRef<ValidationMethods>(null);
  const signupPasswordValidationRef = useRef<ValidationMethods>(null);
  const signupPasswordConfirmValidationRef = useRef<ValidationMethods>(null);

  const [retry, setRetry] = useState(0);
  const signupEmailInput = useRef(null);
  const [signupEmailValue, setSignupEmailValue] = useState('');
  const createPasswordInput = useRef(null);
  const [createPasswordValue, setCreatePasswordValue] = useState('');
  const [isCreatePasswordVisible, setIsCreatePasswordVisible] = useState(false);
  const confirmPasswordInput = useRef(null);
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const [isValid, setIsValid] = useState<any>({});

  const handleShowQuestions = (userId: number) => {
    props.showQuestions(userId)
  }

  useEffect(() => {
    const init = async () => {
      const {
        initTWE,
        Input,
      } = await import("tw-elements");
      initTWE({ Input });
    };
    init();
  }, []);

  useEffect(() => {
    if (isValid.signup) {
      let postData = {
        email: signupEmailValue,
        password: createPasswordValue
      }
      axios
        .post(`/api/auth/signup`, postData)
        .then((res: any) => {
          if (res.data.user) {
            let username = res.data.user.username
            let userId = res.data.user.id
            login(username, {
              optimisticData: {
                isLoggedIn: true,
                username,
              },
            });
            setSignupEmailValue('')
            setCreatePasswordValue('')
            setConfirmPasswordValue('')
            setIsValid({})
            setIsCreatePasswordVisible(false)
            handleShowQuestions(userId)
            // document.getElementById('loginModal')?.click()
          } else {
            alert('error creating user')
          }
        })
        .catch((err: any) => {
          console.log(err)
        })
    }
  }, [isValid.login, retry]);

  const handleValidationData = (data: any) => {
    setRetry(retry + 1)
    setIsValid(data)
  };

  function handleShowCreatePassword(e: any) {
    e.preventDefault()
    setIsCreatePasswordVisible(!isCreatePasswordVisible)
  }

  function handleShowConfirmPassword(e: any) {
    e.preventDefault()
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
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
    </>
  );
}