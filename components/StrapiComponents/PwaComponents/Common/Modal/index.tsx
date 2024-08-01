import React, {
  useState,
  useEffect,
  MouseEvent,
  createContext,
  useContext,
  useCallback,
  ReactNode,
  useImperativeHandle,
} from 'react'
import Flex from 'components/Bootstrap/Flex'
import Box from 'components/Bootstrap/Box'
import { createPortal } from 'react-dom'

import {
  StyledModal,
  StyledModalInnerWrapper,
  StyledModalWrapper,
} from './styles'


export interface ModalProps {
  isOpen?: boolean
  target?: HTMLElement
  modalContent?: ReactNode
  children?: React.ReactNode
  blank?: boolean
}

interface ModalContext {
  modalIsOpen: boolean
  setModalIsOpen: (arg0: boolean) => void
  modalContent: ReactNode
  setModalContent: (arg0: ReactNode) => void
}

export const ModalContext = createContext<ModalContext>({
  modalIsOpen: false,
  setModalIsOpen: () => { },
  modalContent: null,
  setModalContent: () => { },
})

export interface ModalRefActions {
  open: () => void
  close: () => void
}

const Modal = React.forwardRef<ModalRefActions, ModalProps>(
  ({ isOpen, target, children, blank }, ref) => {
    const modalContext = useContext(ModalContext)
    const [modalParent, setModalParent] = useState<HTMLElement | null>(null)

    const handleClose = useCallback(() => {
      modalContext.setModalIsOpen(false)
    }, [modalContext])

    const handleOpen = useCallback(() => {
      modalContext.setModalIsOpen(true)
    }, [modalContext])

    const handleEscape = useCallback(
      (e: any) => {
        if (e.keyCode === 27) handleClose()
      },
      [handleClose]
    )

    useImperativeHandle(ref, () => ({
      open: handleOpen,
      close: handleClose,
    }))

    useEffect(() => {
      if (isOpen !== undefined) {
        modalContext.setModalIsOpen(isOpen)
      }
    }, [isOpen, modalContext])

    useEffect(() => {
      if (target) {
        setModalParent(target)
      } else {
        setModalParent(document.body)
      }
    }, [target])

    useEffect(() => {
      if (modalContext.modalIsOpen) {
        document.addEventListener('keydown', handleEscape, false)
      }
      if (modalContext.modalIsOpen && modalParent) {
        modalParent.style.overflow = 'hidden'
      } else if (modalParent) {
        modalParent.style.overflow = 'auto'
      }
      return () => {
        document.removeEventListener('keydown', handleEscape, false)
      }
    }, [modalContext.modalIsOpen, handleEscape, modalParent])

    const ModalComponent = (
      <StyledModal isopen={modalContext.modalIsOpen ? 'true' : 'false'} onClick={handleClose}>
        {!blank ? (
          <>
            <StyledModalWrapper>
              <StyledModalInnerWrapper
                onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              >
                {modalContext.modalContent}
                {children}
              </StyledModalInnerWrapper>
            </StyledModalWrapper>
          </>
        ) : (
          <Box width='100%' height='100%' onClick={handleClose}>
            <Flex
              width='100%'
              height='100%'
              onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              {modalContext.modalContent}
              {children}
            </Flex>
          </Box>
        )}
      </StyledModal>
    )

    if (modalParent) {
      return createPortal(ModalComponent, modalParent)
    }
  }
)

Modal.displayName = 'Modal';

export default Modal
