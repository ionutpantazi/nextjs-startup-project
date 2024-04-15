import { useState, useEffect, useCallback } from 'react'

export interface UseWindowSize {
  width?: number
  height?: number
  resizing: boolean
}

const debounce = (func: any, wait: any, leading = false) => {
  let timeout: any;
  return (...args: any) => {
    clearTimeout(timeout);
    if (leading && !timeout) {
      func.apply(this, args);
    };
    timeout = setTimeout(() => {
      timeout = null;
      if (!leading) {
        func.apply(this, args);
      };
    }, wait);
  };
}

export const useWindowSize = (debounceDuration = 0): UseWindowSize => {
  const isClient = typeof window === 'object'

  const getSize = useCallback(
    () => ({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }),
    [isClient]
  )

  const [windowSize, setWindowSize] = useState(getSize)
  const [resizing, setResizing] = useState(false)

  // ESlint is not detecting the debounce function return well. Leaving for now.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetWindowSize = useCallback(
    debounce(() => {
      setResizing(false)
      setWindowSize(getSize())
    }, debounceDuration),
    [debounceDuration, getSize]
  )

  const handleResize = useCallback(() => {
    setResizing(true)
    debouncedSetWindowSize()
  }, [debouncedSetWindowSize])

  useEffect(() => {
    if (!isClient) {
      return
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getSize, isClient, handleResize])

  return { ...windowSize, resizing }
}
