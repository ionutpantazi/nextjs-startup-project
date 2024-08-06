import React, { useState } from 'react'
import NextImage from 'next/image'
import Layout from 'components/Layout'

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
        message: `
        <div class="max-w-[700px] text-center">
          <div class="mb-4">Page not found.</div>
          <span>We're sorry we couldn't find the page you're looking for.</span>
          <span>Please go back to the previous page or let us know what you were looking for here!</span>
        </div>
        `,
      }
    case 500:
      return {
        title: 'Server error',
        errorMessage: errorMessage,
        message: `
        <div class="max-w-[700px] text-center">
          <div class="mb-4">Server error.</div>
          <span>Something went wrong on our end. Please contact support or try again later.</span>
        </div>
        `
      }
    default:
      return {
        title: 'Bad request',
        errorMessage: errorMessage,
        message: `
        <div class="max-w-[700px] text-center">
          <div class="mb-4">Bad request.</div>
          <span>Something went wrong. Please contact support or try again later.</span>
        </div>
        `
      }
  }
}

const ErrorPageTemplate: React.FC<ErrorPageTemplateProps> = ({
  statusCode = 400,
  errorMessage,
}) => {
  const [errTitle] = useState(getError(statusCode).title)
  return (
    <Layout title={`${statusCode} | ${errTitle}`} navigationData={undefined}>
      <div className="flex flex-col items-center gap-4 h-screen place-content-center bg-white px-4">
        <NextImage
          src={'/images/lg-favicon-32x32.png'}
          className=''
          alt=''
          width={40}
          height={40}
        />
        <div className="uppercase tracking-widest text-gray-500"
          dangerouslySetInnerHTML={{
            __html: getError(statusCode).message,
          }}
        />
      </div>
    </Layout>
  )
}

export default ErrorPageTemplate