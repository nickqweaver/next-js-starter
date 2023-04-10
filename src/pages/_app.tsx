import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  DehydratedState,
} from '@tanstack/react-query'
import "../../tailwind.css"

const queryClient = new QueryClient()

function CustomApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  return (
    <main>
      <Head>
        <title>Welcome to Bella Cadeaux</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </main>
  )
}

export default CustomApp
