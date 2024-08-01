// import React, { useCallback, useState, useEffect, useRef } from 'react'
// import { useDocumentEvent } from './useDocumentEvent'
// import styled, { css } from 'styled-components'

// const DropdownContainer = styled.div(
//   {
//     position: 'absolute',
//     backgroundColor: 'white',
//     color: 'black',
//     borderRadius: '2px',
//     width: 400,
//     boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.5)',
//     zIndex: 1,
//     overflow: 'hidden',
//     right: 0,
//   },
//   (props:any) => ({
//     transition: props.isVisible
//       ? `all 700ms ease-in-out`
//       : `all ${props.timeout}ms ease-in-out`,
//     maxHeight: props.isVisible ? props.maxHeight || 300 : 0,
//   })
// )

// export const useDropdown = (initialState = false, onAfterClose = null) => {
//   const ref = useRef(null)
//   const [isOpen, setIsOpen] = useState(initialState)

//   const handleClickOutside = useCallback(
//     (event:any) => {
//       if (ref.current && ref.current.contains(event.target)) {
//         return
//       }
//       setIsOpen(false)
//       onAfterClose && onAfterClose()
//     },
//     [ref, onAfterClose]
//   )

//   const handleHideDropdown = useCallback(
//     (event) => {
//       if (event.key === 'Escape') {
//         setIsOpen(false)
//         onAfterClose && onAfterClose()
//       }
//     },
//     [onAfterClose]
//   )

//   useDocumentEvent([
//     { type: 'click', callback: handleClickOutside },
//     { type: 'keydown', callback: handleHideDropdown },
//   ])

//   return [ref, isOpen, setIsOpen]
// }

// const Dropdown = ({ children, closeText, openText, ...rest }: any) => {

//   const [dropdownRef, isOpen, setIsOpen] = useDropdown()
//   const [inner, setInner] = useState(false)
//   const [disabled, setDisabled] = useState(false)
//   const timeout = 150
//   useEffect(() => {
//     if (isOpen) {
//       setInner(true)
//     } else {
//       setDisabled(true)
//       setTimeout(() => {
//         setDisabled(false)
//         setInner(false)
//       }, timeout + 10)
//     }
//   }, [isOpen])

//   return (
//     <div style={{ position: 'relative' }} ref={dropdownRef}>
//       <button onClick={() => setIsOpen(!isOpen)} disabled={disabled}>
//         {isOpen ? closeText || 'Close' : openText || 'Open'}
//       </button>
//       <DropdownContainer timeout={timeout} isVisible={isOpen} {...rest}>
//         {inner && children}
//       </DropdownContainer>
//     </div>
//   )
// }

// export default Dropdown