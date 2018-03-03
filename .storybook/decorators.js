import React from 'react';

import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import { Field, reduxForm } from 'redux-form';
import { action } from '@storybook/addon-actions';

const theme = createMuiTheme();

export const MuiProvider = () => getStory => (
  <MuiThemeProvider theme={theme}>{getStory()}</MuiThemeProvider>
);


// Render story of component
// Add redux form and state bindings
export const reduxFormWrapper = formName => (getStory => {
  const formWrapper = <form onSubmit={action('form onSubmit')}>{getStory()}</form>;
  return reduxForm({
    form: formName, // a unique identifier for this form
  })(formWrapper);
});