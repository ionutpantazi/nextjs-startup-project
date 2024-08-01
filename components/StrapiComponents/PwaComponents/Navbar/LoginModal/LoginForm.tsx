import React, { useState, useEffect, useRef } from 'react'
import useSession from "lib/use-session";
import { defaultSession } from "lib/session";
import styled, { css } from 'styled-components'
import Validation, { ValidationMethods } from 'components/Bootstrap/Validation'
import FAIcon from 'components/Bootstrap/FAIcon'
import axios from 'axios'
import { getSecondSegment } from 'utils/helpers'

const EmailInput = styled.div`
  height: 40px;

  input {
    color: ${props => props.theme.colors.black};
  }
`

const PasswordInput = styled.div`
  height: 40px;

  input {
    color: ${props => props.theme.colors.black};
  }

  svg {
    color: ${props => props.theme.colors.brand};
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.brandlight};
    }
  }
`

export const Button = styled.button`
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.small};
  background: ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.white};

  &:hover {
    background: ${props => props.theme.colors.brandlight};
  }
`

export function LoginForm() {
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
      const path = window.location.pathname
      const isPwa = path.includes('pwa')
      if (isPwa) {
        // handle pwa login
        let postData = {
          email: emailValue,
          password: passwordValue,
          eventID: getSecondSegment(window.location.toString()),
          isPwa: isPwa,
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
              setEmailValue('')
              setPasswordValue('')
              setIsValid({})
              setIsPasswordVisible(false)
              document.getElementById('loginModal')?.click()
              window.location.reload()
            }
          })
          .catch((err: any) => {
            console.log(err)
            alert(err.response.data)
          })
      } else {
        // handle strapi login
        let postData = {
          email: emailValue,
          password: passwordValue,
        }
        axios
          .post(`/api/auth/login`, postData)
          .then((res: any) => {
            if (res.data.user) {
              let username = res.data.user.username
              login(username, {
                optimisticData: {
                  isLoggedIn: true,
                  username,
                },
              });
              setEmailValue('')
              setPasswordValue('')
              setIsValid({})
              setIsPasswordVisible(false)
              document.getElementById('loginModal')?.click()
            } else {
              alert(res.err ?? 'invalid user/pass')
            }
          })
          .catch((err: any) => {
            console.log(err)
            alert(err.response.data)
          })
      }
    }
  }, [isValid.login, retry]);

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

  const submitLoginOnEnter = (e: any) => {
    e.preventDefault()
    console.log(e.key)
  }

  return (
    <>
      <EmailInput className='relative mb-3 w-full'
        data-twe-input-wrapper-init
        data-te-class-notch-leading-valid="border-[#ff0] dark:border-[#ff0] group-data-[te-input-focused]:shadow-[-1px_0_0_#ff0,_0_1px_0_0_#ff0,_0_-1px_0_0_#ff0] group-data-[te-input-focused]:border-[#ff0]"
      >
        <input
          type='email'
          className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0'
          id='emailinput'
          placeholder='Email'
          value={emailValue}
          ref={emailInput}
          onChange={(e) => setEmailValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' ? submitLogin(e) : ''}
        />
        <label
          htmlFor='emailinput'
          className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
        >
          Email
        </label>
        <Validation input={emailValue} type='email' message='email not valid' ref={loginEmailValidationRef} sendvalidation={handleValidationData} />
      </EmailInput>
      <PasswordInput className='relative mb-3 w-full'
        data-twe-input-wrapper-init
      >
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0'
          id='passwordinput'
          placeholder='Password'
          value={passwordValue}
          ref={passwordInput}
          onChange={(e) => setPasswordValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' ? submitLogin(e) : ''}
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-2" onClick={handleShowPassword}>
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
        <Validation input={passwordValue} type='password' message='password not valid' ref={loginPasswordValidationRef} sendvalidation={handleValidationData} />
        <label
          htmlFor='passwordinput'
          className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
        >
          Password
        </label>
      </PasswordInput>
      <Button className='w-full' onClick={submitLogin}>
        Log in
      </Button>
    </>
  );
}

function LogoutButton() {
  const { logout } = useSession();

  return (
    <p>
      <a
        onClick={(event) => {
          event.preventDefault();
          logout(null, {
            optimisticData: defaultSession,
          });
        }}
      >
        Log out
      </a>
    </p>
  );
}