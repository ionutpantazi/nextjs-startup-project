import { useRef } from 'react'

// Allows for an optional ref to be given to components with forwarded refs.
export const useDefaultRef = <T extends HTMLElement>(ref: React.Ref<T>) => {
  const localRef = useRef<T>(null)
  return ref || localRef
}