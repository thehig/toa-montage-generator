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

export const ReduxDecorator = (initialState) => getStory => (
  <Provider store={mockFormStore({ mocked: 'successfully', ...initialState })}>
    {getStory()}
  </Provider>
);

const defaultTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});
export const ThemeDecorator = (theme = defaultTheme) => getStory => (
  <MuiThemeProvider theme={theme}>{getStory()}</MuiThemeProvider>
);

// Note that even though the prop here is called 'handleSubmit', 
//  we should pass the prop named 'onSubmit' for redux form to work its magic
// EG: <FormWrapper onSubmit={action('handleSubmit')}>
const FormWrapperBase = ({ children = null, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    {children}
    <MUIButton type="submit">Submit</MUIButton>
  </form>
);
export const FormWrapper = reduxForm({
  form: 'reduxFormWrapper',
})(FormWrapperBase);
