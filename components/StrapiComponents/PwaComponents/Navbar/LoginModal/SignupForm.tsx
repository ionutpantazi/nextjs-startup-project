import React, { useState, useEffect, useRef } from 'react'
import useSession from "lib/use-session";
import styled, { css } from 'styled-components'
import Validation, { ValidationMethods } from 'components/Bootstrap/Validation'
import FAIcon from 'components/Bootstrap/FAIcon'
import axios from 'axios'

import {
  StyledInput,
  PasswordContainer,
  Button,
} from './styles'

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

  useEffect(() => {
    // setSignupEmailValue('')
    // setCreatePasswordValue('')
    // setConfirmPasswordValue('')
    // setIsValid({})
    // setIsCreatePasswordVisible(false)
    // setIsConfirmPasswordVisible(false)
    // if (signupEmailValidationRef.current && signupPasswordValidationRef.current && signupPasswordConfirmValidationRef.current) {
    //   signupEmailValidationRef.current.updateErrorStatus('signup', 0, true);
    //   signupPasswordValidationRef.current.updateErrorStatus('signup', 1, true);
    //   signupPasswordConfirmValidationRef.current.updateErrorStatus('signup', 2, true);
    // }
  }, [props.refreshModal]);

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

      {/* email input */}
      <div className='mb-8 w-full'>
        <StyledInput className='w-full'
          type='email'
          id='signupemailinput'
          placeholder='Email'
          value={signupEmailValue}
          ref={signupEmailInput}
          onChange={(e) => setSignupEmailValue(e.target.value)}
        />
        <Validation className='h-0' input={signupEmailValue} type='email' message='email not valid' ref={signupEmailValidationRef} sendvalidation={handleValidationData} />
      </div>

      {/* password input */}
      <div className='mb-8 w-full'>
        <PasswordContainer className='relative w-full'>
          <StyledInput className='w-full'
            type={isCreatePasswordVisible ? 'text' : 'password'}
            id='createpasswordinput'
            placeholder='Password'
            value={createPasswordValue}
            ref={createPasswordInput}
            onChange={(e) => setCreatePasswordValue(e.target.value)}
          >

          </StyledInput>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pb-1" onClick={handleShowCreatePassword}>
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
        </PasswordContainer>
        <Validation className='h-0' input={createPasswordValue} type='password' message='password not valid' ref={signupPasswordValidationRef} sendvalidation={handleValidationData} />
      </div>

      {/* confirm password input */}
      <div className='mb-8 w-full'>
        <PasswordContainer className='relative w-full'>
          <StyledInput className='w-full'
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            id='confirmpasswordinput'
            placeholder='Password'
            value={confirmPasswordValue}
            ref={confirmPasswordInput}
            onChange={(e) => setConfirmPasswordValue(e.target.value)}
          >

          </StyledInput>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pb-1" onClick={handleShowConfirmPassword}>
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
        </PasswordContainer>
        <Validation className='h-0' input={confirmPasswordValue} type='password' message='password not valid' ref={signupPasswordConfirmValidationRef} sendvalidation={handleValidationData} />
      </div>


      <div className='flex self-center'>
        <Button className='' onClick={submitSignup}>
          <span>
            Sign up
          </span>
        </Button>
      </div>
    </>
  );
}