

export const nextApolloPageError = (
  err: any,
  page: string
): { props: { error: any } } => {
  console.log(err)
  // const statusCode: number = err?.networkError?.statusCode;
  const statusCode: number = 500;
  // const errorMessage: string = err?.networkError?.ApolloError;
  const errorMessage: string = "Database error";
  return {
    props: {
      error: {
        statusCode,
        errorMessage,
      }
    }
  }
}