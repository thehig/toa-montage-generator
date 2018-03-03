import React from 'react';

import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import MUIButton from 'material-ui/Button';

import { Field, reduxForm } from 'redux-form';
import { action } from '@storybook/addon-actions';

const theme = createMuiTheme();

export const MuiProvider = () => getStory => (
  <MuiThemeProvider theme={theme}>{getStory()}</MuiThemeProvider>
);

// export const reduxFormWrapper = formName => getStory =>
//   reduxForm({
//     form: formName,
//   })(

//   );

export const reduxFormWrapper = getStory => {
  const FormWrapper = (
    <form onSubmit={action('form onSubmit')}>
      Story Here
      <MUIButton type="submit">Submit</MUIButton>
    </form>
  );

  // return FormWrapper;
  return reduxForm({
    form: 'reduxFormWrapper'
  })(FormWrapper);
};
