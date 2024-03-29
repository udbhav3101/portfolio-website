import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#fefce8', '#101010')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
      'heading-post': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 2,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },

  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#0BC5EA')(props),
      textUnderlinOffset: 3,
    }),
  },
};

const fonts = {
  heading: 'Roboto, sans-serif',
  body: 'Menlo, monospace',
};

const colors = {
  glassTeal: '#88ccca',
  darkGreen: '#48BB78',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const Theme = extendTheme({ config, styles, components, fonts, colors });

export default Theme;
