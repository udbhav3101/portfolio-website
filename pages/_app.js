import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from '../components/Layouts/main';
import theme from '../lib/theme';
import Fonts from '../components/fonts';


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}



function MyApp({ Component, pageProps, router }) {

  return(
  
  <ChakraProvider theme={theme}> 
    <Fonts/>
    <Layout router={router}>
      <Component {...pageProps}/>
    </Layout> 
  </ChakraProvider> 
    ) 
}

export default MyApp
