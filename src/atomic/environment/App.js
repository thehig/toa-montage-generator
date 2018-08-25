import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import lightGreen from '@material-ui/core/colors/lightGreen';
import red from '@material-ui/core/colors/red';
import 'typeface-roboto';

import { MontagePage } from '../';
import store from '../../redux/store';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: lightGreen,
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
