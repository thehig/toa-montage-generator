import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import 'typeface-roboto';

import { MontagePage } from '../';
import store from '../../redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8d6e63'
    },
    secondary: {
      main: '#757575'
    },
    error: red
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <MontagePage />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
