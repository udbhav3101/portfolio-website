import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from '../components/Layouts/main';
import theme from '../lib/theme';
import Fonts from '../components/fonts';
import ENG from '../lang/eng.json';
import { IntlProvider } from 'react-intl';
function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <IntlProvider locale="en" messages={ENG}>
        <Fonts />
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </ChakraProvider>
  );
}

export default MyApp;
