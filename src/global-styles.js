import { createGlobalStyle } from 'styled-components';

const mainFont = 'Proza Libre';
const subFont = 'Open Sans';

export const theme = {
  display: {
    desktop: 960,
    tablet: 600,
    phone: 480,
  },
  colors: {
    link: '#ff8396',
    black: '#000000',
    gray: '#808080',
    background: '#f5f5f5',
  },
  text: {
    title: {
      type: 'p',
      style: {
        fontSize: '1.5rem',
        fontFamily: mainFont,
      },
    },
    subtitle: {
      type: 'p',
      style: {
        fontSize: '1.1rem',
        fontFamily: mainFont,
      },
    },
    body: {
      type: 'p',
      style: {
        fontSize: '0.9rem',
        fontFamily: subFont,
      },
    },
    subscript: {
      type: 'span',
      style: {
        fontSize: '0.7rem',
        fontFamily: subFont,
      },
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${theme.colors.background};
  }
`;
