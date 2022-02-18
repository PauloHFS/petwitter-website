import { extendTheme, theme as base } from '@chakra-ui/react';

export const newTheme = {
  colors: {
    cyan: {
      400: '#00ACC1',
    },
    gray: {
      600: '#757575',
      900: '#212121',
    },
  },
  fonts: {
    heading: `Open Sans, ${base.fonts?.heading}`,
    body: `Open Sans, ${base.fonts?.body}`,
  },
  components: {
    FormLabel: {
      baseStyle: {
        color: 'gray.800',
        fontWeight: '600',
        fontSize: '14',
        lineHeight: '16px',
      },
    },
    Button: {
      variants: {
        solid: {
          backgroundColor: 'cyan.400',
          color: 'white',
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderColor: 'gray.600',
          borderWidth: '1px',
          borderStyle: 'solid',
          _focus: {
            borderWidth: '2px',
            borderColor: 'cyan.400',
          },
        },
      },
      defaultProps: {
        variant: null, // null here
      },
    },
    Link: {
      baseStyle: {
        color: 'cyan.400',
      },
    },
  },
};

export const theme = extendTheme(newTheme);
