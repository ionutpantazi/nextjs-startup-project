

export const nextApolloPageError = (
  err: any,
  page: string
): { props: { error: any } } => {
  console.log(err)
  const statusCode: number = err?.networkError?.statusCode;
  return {
    props: {
      error: {
        statusCode,
      }
    }
  }
}