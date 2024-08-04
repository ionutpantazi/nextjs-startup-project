import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { JoinForm } from './JoinForm'
import Text from '@/components/Bootstrap/Text'

export type JoinModal = {
  id: number,
  title: string
}

export interface JoinModalDataProps {
  data: JoinModal
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

const JoinModal = ({
  data
}: JoinModalDataProps) => {

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

  return (
    <>
      <ModalBody data-twe-modal-body-ref key='join' className={`pointer-events-auto`}>
        <ModalTitle className=''>
          {data ? data.title : "Join Breakout"}
        </ModalTitle>
        <ModalContent>
          <Text style={{color: "#000"}}>This breakout requires a password, please enter it below:</Text>
        </ModalContent>
        <ModalContent className='flex flex-col gap-4 items-center'>
          <JoinForm data={{id: data.id}}/>
        </ModalContent>
      </ModalBody>
    </>
  )
}

export default JoinModal