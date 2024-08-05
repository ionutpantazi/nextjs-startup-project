import React, { useState, useEffect, useRef } from 'react'
import useSession from "lib/use-session";
import { defaultSession } from "lib/session";
import styled, { css } from 'styled-components'
import Validation, { ValidationMethods } from 'components/Bootstrap/Validation'
import FAIcon from 'components/Bootstrap/FAIcon'
import axios from 'axios'
import { getSecondSegment } from 'utils/helpers'

import {
  StyledInput,
  PasswordContainer,
  Button,
} from './styles'

export function LoginForm(props: any) {
  const { login } = useSession();
  const loginEmailValidationRef = useRef<ValidationMethods>(null);
  const loginPasswordValidationRef = useRef<ValidationMethods>(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const [retry, setRetry] = useState(0);
  const [isValid, setIsValid] = useState<any>({});
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  useEffect(() => {
    if (isValid.login) {
      let postData = {
        email: emailValue,
        password: passwordValue,
        eventID: getSecondSegment(window.location.toString()),
        isPwa: true,
      }
      axios
        .post(`/api/auth/pwa/login`, postData)
        .then((res: any) => {
          if (res.data?.access_token) {
            let username = emailValue
            login(username, {
              optimisticData: {
                isLoggedIn: true,
                username,
              },
            });
            // setEmailValue('')
            // setPasswordValue('')
            // setIsValid({})
            // setIsPasswordVisible(false)
            // document.getElementById('loginModal')?.click()
            window.location.reload()
          }
        })
        .catch((err: any) => {
          console.log(err)
          alert(err.response.data)
        })
    }
  }, [isValid.login, retry]);

  useEffect(() => {
    setEmailValue('')
    setPasswordValue('')
    setIsValid({})
    setIsPasswordVisible(false)
    if (loginEmailValidationRef.current && loginPasswordValidationRef.current) {
      loginEmailValidationRef.current.updateErrorStatus('login', 0, true);
      loginPasswordValidationRef.current.updateErrorStatus('login', 1, true);
    }
  }, [props.refreshModal]);

  const handleValidationData = (data: any) => {
    setRetry(retry + 1)
    setIsValid(data)
  };

  function handleShowPassword(e: any) {
    e.preventDefault()
    setIsPasswordVisible(!isPasswordVisible)
  }

  function submitLogin(e: any) {
    e.preventDefault()
    if (loginEmailValidationRef.current && loginPasswordValidationRef.current) {
      loginEmailValidationRef.current.updateErrorStatus('login', 0);
      loginPasswordValidationRef.current.updateErrorStatus('login', 1);
    }
  }

  return (
    <>
      <div className='mb-8 w-full'>
        <StyledInput className='w-full'
          type='email'
          id='emailinput'
          placeholder='Email'
          value={emailValue}
          ref={emailInput}
          onChange={(e) => setEmailValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' ? submitLogin(e) : ''}
        />
        <Validation className='h-0' input={emailValue} type='email' message='email not valid' ref={loginEmailValidationRef} sendvalidation={handleValidationData} />
      </div>

      <div className='mb-8 w-full'>
        <PasswordContainer className='relative w-full'>
          <StyledInput className='w-full'
            type={isPasswordVisible ? 'text' : 'password'}
            id='passwordinput'
            placeholder='Password'
            value={passwordValue}
            ref={passwordInput}
            onChange={(e) => setPasswordValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ? submitLogin(e) : ''}
          >

          </StyledInput>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pb-1" onClick={handleShowPassword}>
            {
              isPasswordVisible
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
        </PasswordContainer>
        <Validation className='h-0' input={passwordValue} type='password' message='password not valid' ref={loginPasswordValidationRef} sendvalidation={handleValidationData} />
      </div>


      <div className='flex self-center'>
        <Button className='' onClick={submitLogin}>
          <span>
            Login
          </span>
        </Button>
      </div>

    </>
  );
}