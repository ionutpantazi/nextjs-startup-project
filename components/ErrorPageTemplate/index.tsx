import React, { useState } from 'react'
import NextImage from 'next/image'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import Layout from 'components/Layout'
import Flex from 'components/Bootstrap/Flex'

export interface ErrorPageTemplateProps {
  statusCode?: number,
  errorMessage?: string,
}

const getError = (statusCode?: number, errorMessage?: string) => {
  switch (statusCode) {
    case 404:
      return {
        title: 'Page not found',
        errorMessage: errorMessage,
        message:
          "The page you are looking for doesn't exist or has been moved.",
      }
    case 500:
      return {
        title: 'Server error',
        errorMessage: errorMessage,
        message:
          'Something went wrong on our end. Please contact support or try again later.',
      }
    default:
      return {
        title: 'Bad request',
        errorMessage: errorMessage,
        message:
          'Something went wrong. Please contact support or try again later.',
      }
  }
}

const ErrorPageTemplate: React.FC<ErrorPageTemplateProps> = ({
  statusCode = 400,
  errorMessage,
}) => {
  const [errTitle] = useState(getError(statusCode).title)
  const [errMsg] = useState(getError(statusCode).message)
  return (
    <Layout title={`${statusCode} | ${errTitle}`} navigationData={undefined}>
      <div className="grid h-screen place-content-center bg-white px-4">
        <h1 className="uppercase tracking-widest text-gray-500">{statusCode} | {errMsg}</h1>
      </div>
    </Layout>
  )
}

export default ErrorPageTemplate