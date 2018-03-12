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

export const FormWrapperBase = ({ children = null, handleSubmit }) => (
  // Note that even though the prop here is called 'handleSubmit',
  //  we should pass the prop named 'onSubmit' for redux form to work its magic
  // EG: <FormWrapper onSubmit={action('handleSubmit')}>
  <form onSubmit={handleSubmit}>{children}</form>
);
/**
 * Create a <form> component bound with reduxForm and an onSubmit function
 */
export const FormWrapper = reduxForm({
  form: 'reduxFormWrapper',
})(FormWrapperBase);

/**
 * 
 * @param {object} options
 * @param {object} options.initialState Initial redux state
 * @param {object} options.theme Material-UI theme object intended for createMuiTheme()
 */
export const ReduxFormDecorator = ({
  initialState = {},
  theme = {},
  ...formOptions
} = {}) => getStory => (
  <Provider store={mockFormStore({ ...defaultInitialState, ...initialState })}>
    <MuiThemeProvider theme={createMuiTheme({ ...defaultTheme, ...theme })}>
      <FormWrapper {...formOptions}>{getStory()}</FormWrapper>
    </MuiThemeProvider>
  </Provider>
);

// Example ReduxFormDecorator usage

// const decorator = ReduxFormDecorator({
//   initialState: {
//     _init: "Initialized by Molecules stories"
//   },
//   theme: {
//     palette: {
//       secondary: blue,
//     },
//   },
//   onSubmit: action('On Molecule Submit')
// });

// storiesOf(`Molecules`, module)
//   // Add redux <Provider> with store
//   .addDecorator(decorator)
//   .add('DCInput', () => <DCInput />)

/**
 * Take two sets of props to be applied to a Redux Form Field component
 * Returns
 *    <FormWrapper> - a reduxForm()'ed, <form> component with submit bound
 *    <Field> - a redux-form component with props spread
 *    <Button> - a button with type="submit" which will trigger the FormWrapper onSubmit
 */
export const ReduxFormWithSingleField = (higherPriorityProps = {}) => (
  lowerPriorityProps = {}
) => (
  <FormWrapper onSubmit={action(`${name} handleSubmit`)}>
    <Field {...lowerPriorityProps} {...higherPriorityProps} />
    <MUIButton color="primary" type="submit">
      Submit
    </MUIButton>
  </FormWrapper>
);

