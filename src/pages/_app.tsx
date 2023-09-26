import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { rtlTheme } from '@/shared/theme/theme';
import createEmotionCache from '../shared/theme/createEmotionCache';
import { NextPageWithLayout } from '@/shared/types';
import '@/assets/fonts/fa/fontiran.css';
import '@/assets/fonts/faNum/fontiran.css';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={rtlTheme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
}
