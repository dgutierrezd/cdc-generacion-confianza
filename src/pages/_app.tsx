import { ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import theme from '../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
