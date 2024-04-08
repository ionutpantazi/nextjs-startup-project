import { NextPageContext } from 'next'
import { ErrorProps } from 'next/error'
import ErrorPageTemplate from 'components/ErrorPageTemplate'

function Error({ statusCode = 404 }: ErrorProps) {
  return <ErrorPageTemplate statusCode={statusCode} />
}

export const getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error