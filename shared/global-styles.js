import { css, Global } from '@emotion/react';

const globalStylesCss = css({
  html: {
    fontSize: '100%',
    boxSizing: 'border-box'
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },
  body: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    padding: 0,
    margin: 0
  },
  'html, body': {
    width: '100%',
    height: 'max-content'
  },
  img: {
    verticalAlign: 'top'
  },
  'select, option': {
    boxSizing: 'border-box'
  }
});

export const globalStyles = <Global styles={globalStylesCss} />;