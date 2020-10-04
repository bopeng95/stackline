import '@babel/polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css';

import App from 'containers/App';

import store from 'store';

import { GlobalStyle, theme } from './global-styles';

const render = (Component) =>
  ReactDom.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>,
    document.querySelector('#root'),
  );

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}
