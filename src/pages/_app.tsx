import { ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>chec Generación de Confianza</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
