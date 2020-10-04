import { ThemeProvider } from 'styled-components';

import { RecoilRoot } from 'recoil';
import '../styles/globals.scss';
const theme = {
  colors: {
    primary: '#0070f3',
    dark: '#292929',
    calm: '#e6e6e6',
    bright: '#fff',
  },
  shadows: {
    primary: '0px 0px 15px -8px rgba(97, 97, 97, 0.692)',
  },
  fonts: {
    size: {
      header: '2rem',
      semiBig: '1.5rem',
      standard: '1rem',
      desc: '0.6rem',
    },
    weight: {
      light: 200,
      mid: 400,
      semiBold: 600,
      Bold: 800,
    },
  },
};

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
