import React from 'react'
import ErrorPageTemplate from 'components/ErrorPageTemplate'

const ServerError: React.FC = () => <ErrorPageTemplate statusCode={500} />

export default ServerError