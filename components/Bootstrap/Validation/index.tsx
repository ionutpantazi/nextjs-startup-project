import React, { useState, useEffect, ReactNode, useImperativeHandle, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import {
  StrapiFile
} from 'interfaces'
import {
  OuterContainer,
  Container,
  InnerContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import { isEmpty } from 'lodash'

export interface ValidationProps {
  input: string
  match?: string
  type?: string
  setErrorProp?: boolean
  children?: ReactNode
  message?: string
  ref: any
  sendvalidation: any,
  className?: any,
}

export interface ValidationMethods {
  updateErrorStatus: (type: string, i: number, removeError?: boolean) => void;
}

const ValidationContainer = styled.div`
`

var errorArray: any[] = []

const Validation = forwardRef<ValidationMethods, ValidationProps>((props, ref) => {

  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(props.setErrorProp ?? false);
  const [isValid, setIsValid] = useState<any>({});

  useEffect(() => {
    if (props.sendvalidation instanceof Function) {
      props.sendvalidation(isValid)
    }
  }, [isValid]);

  const updateErrorStatus = (type: string, i: number, removeError?: boolean) => {
    var emptyInput = props.input.length ? false : true
    setIsEmpty(emptyInput)
    var re = /^/i;
    if (props.type == 'email') {
      re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    }
    if (props.type == 'password') {
      re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    }
    if (props.match) {
      re = new RegExp(String.raw`^${props.match}$`, "g");
    }
    var match = props.input.match(re) ? true : false

    errorArray[i] = match
    let checker = (error: any[]) => error.every((v: boolean) => v === true);
    setIsValid({ [type]: checker(errorArray) })

    // console.log(`input: ${props.input}; empty: ${emptyInput}; match: ${match ? true : false}; hasError: ${hasError}`)
 
    if (removeError) {
      setError(false)
      setIsEmpty(false)
    } else if (!match && !emptyInput) {
      setError(true)
    } else {
      setError(false)
    }
  }

  useImperativeHandle(ref, () => ({
    updateErrorStatus
  }));

  return (
    <ValidationContainer className={props.className}>
      {props.children}
      {isEmpty &&
        <span className={`mb-[-20px] top-full left-0 m-1 w-auto text-sm text-danger animate-[fade-in_0.3s_both] validation`}>{`${props.type} is required`}</span>
      }
      {error &&
        <span className={`mb-[-20px] top-full left-0 m-1 w-auto text-sm text-danger animate-[fade-in_0.3s_both] validation`}>{props.message}</span>
      }
    </ValidationContainer>
  )
})

Validation.displayName = 'Validation';

export default Validation