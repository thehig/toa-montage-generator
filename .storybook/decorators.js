import React from 'react';

import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import MUIButton from 'material-ui/Button';

import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { reducer as reduxFormReducer, reduxForm, Field } from 'redux-form';

import { action } from '@storybook/addon-actions';

import mockFormStore from './mockFormStore';

export const ReduxDecorator = () => getStory => (
  <Provider store={mockFormStore({ mocked: 'successfully' })}>
    {getStory()}
  </Provider>
);

const defaultTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  }
});
export const ThemeDecorator = (theme = defaultTheme) => getStory => (
  <MuiThemeProvider theme={theme}>{getStory()}</MuiThemeProvider>
);

// const FormWrapperBase = ({ children }) => (
//   <form onSubmit={action('form onSubmit')}>
//     {children}
//     <MUIButton type="submit">Submit</MUIButton>
//   </form>
// );

// const ConnectedFormWrapper = connect(() => {}, null)(FormWrapperBase);

// const FormWrapper = reduxForm({
//   form: 'reduxFormWrapper',
// })(ConnectedFormWrapper);

// export const FullReduxWrapper = () => getStory => (
//   <Provider store={storyStore()}>
//     <MuiThemeProvider theme={theme}>
//       <FormWrapper>{getStory()}</FormWrapper>
//     </MuiThemeProvider>
//   </Provider>
// );
