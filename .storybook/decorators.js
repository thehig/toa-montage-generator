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

const defaultInitialState = {
  mocked: 'successfully',
};
/**
 * Create a Redux provider with a given initial state
 */
export const ReduxDecorator = initialState => getStory => (
  <Provider store={mockFormStore({ ...defaultInitialState, ...initialState })}>
    {getStory()}
  </Provider>
);

const defaultTheme = {
  palette: {
    primary: purple,
    secondary: green,
  },
};
/**
 * Create a MUI Theme Provider with a given theme object
 */
export const ThemeDecorator = theme => getStory => (
  <MuiThemeProvider theme={createMuiTheme({ ...defaultTheme, ...theme })}>
    {getStory()}
  </MuiThemeProvider>
);

const FormWrapperBase = ({ children = null, handleSubmit }) => (
  // Note that even though the prop here is called 'handleSubmit',
  //  we should pass the prop named 'onSubmit' for redux form to work its magic
  // EG: <FormWrapper onSubmit={action('handleSubmit')}>
  <form onSubmit={handleSubmit}>
    {children}
  </form>
);
/**
 * Create a <form> component bound with reduxForm and an onSubmit function
 */
export const FormWrapper = reduxForm({
  form: 'reduxFormWrapper',
})(FormWrapperBase);
