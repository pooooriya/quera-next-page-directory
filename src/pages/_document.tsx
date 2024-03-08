import { Html, Head, Main, NextScript } from "next/document";
import {
  DocumentHeadTags,
  documentGetInitialProps
} from "@mui/material-nextjs/v14-pagesRouter";
import createEmotionCache from "@/styles/emotion.config";
export default function Document(props: any) {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: any) => {
  const finalProps = await documentGetInitialProps(ctx, {
    emotionCache: createEmotionCache()
  });
  return finalProps;
};
