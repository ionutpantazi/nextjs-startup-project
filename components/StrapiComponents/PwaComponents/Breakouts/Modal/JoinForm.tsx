import React, { useState, useEffect, useRef, useContext } from 'react'
import styled, { css } from 'styled-components'
import FAIcon from 'components/Bootstrap/FAIcon'
import Validation, { ValidationMethods } from '@/components/Bootstrap/Validation';
import { post } from '@/lib/httpClient';
import { useRouter } from 'next/router';
import { ModalContext } from '../../Common/Modal';

export type JoinForm = {
  id: number
}

export interface JoinFormDataProps {
  data: JoinForm
}

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

export function JoinForm({
  data
}: JoinFormDataProps) {
  const joinPasswordValidationRef = useRef<ValidationMethods>(null);
  const passwordInput = useRef(null);
  const [isValid, setIsValid] = useState<any>({});
  const [passwordValue, setPasswordValue] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();

  const modalContext = useContext(ModalContext);

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
    if (isValid.join) {
      let slugs = router.query;
      post('/api/breakouts/joinBreakout', { eventId: slugs.slug, breakoutId: data.id, password: passwordValue}, {})
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setPasswordValue('');
          setIsValid({});
          modalContext.setModalIsOpen(false);
          window.open(res.data, '_blank');
        }
      });
    }
  }, [isValid.join]);

  const handleValidationData = (data: any) => {
    setIsValid(data)
  };

  function handleShowPassword(e: any) {
    e.preventDefault()
    setIsPasswordVisible(!isPasswordVisible)
  }

  function submitJoin(e: any) {
    e.preventDefault();
    if (joinPasswordValidationRef.current) {
        joinPasswordValidationRef.current.updateErrorStatus('join', 0);
    }
  }

  return (
    <>
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
          onKeyDown={e => e.key === 'Enter' ? submitJoin(e) : ''}
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
        <Validation input={passwordValue} type='password' message='password not valid' ref={joinPasswordValidationRef} sendvalidation={handleValidationData} />
        <label
          htmlFor='passwordinput'
          className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
        >
          Password
        </label>
      </PasswordInput>
      <Button className='w-full' onClick={submitJoin}>
        Join
      </Button>
    </>
  );
}