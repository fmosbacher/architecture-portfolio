import { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Portfolio - Ariane Inocêncio</title>
      <meta
        property="og:title"
        content="Portfolio - Ariane Inocêncio"
        key="title"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
