import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from '../components/Layouts/main';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })


function MyApp({ Component, pageProps, router }) {

  return(
  <ChakraProvider> 
  <Layout router={router}>
    <Component {...pageProps}/>
 </Layout> 
  </ChakraProvider> 
    ) 
}

export default MyApp
