import { AppProvider } from "@/context/store";
import { QueryClientStore } from "@/services/QueryClient";
import { cacheRtl } from "@/styles/cache";
import { GlobalStyled } from "@/styles/global";
// import "@/styles/globals.css";
import { theme } from "@/styles/material";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import { GlobalStyles, CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { EmotionCacheInstance } from "@/styles/emotion.config";

interface EmotionCacheProps {
  emotionCache: EmotionCache;
}

interface ApplicationProps extends AppProps, EmotionCacheProps {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<any>;
  };
}

export default function App({
  Component,
  pageProps,
  emotionCache = EmotionCacheInstance
}: ApplicationProps) {
  return (
    <QueryClientProvider client={QueryClientStore}>
      <AppCacheProvider emotionCache={emotionCache}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AppProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles styles={GlobalStyled} />
            <Component {...pageProps} />
            <CssBaseline />
          </ThemeProvider>
        </AppProvider>
      </AppCacheProvider>
    </QueryClientProvider>
  );
}
