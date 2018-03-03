import React from 'react';

import {
  FormControl,
  FormHelperText,
  // FormControlLabel,
} from 'material-ui/Form';

// import { InputLabel as MUIInputLabel } from 'material-ui/Input';
import MUITextField from 'material-ui/TextField';

export const TextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <FormControl error={Boolean(touched && error)}>
    <MUITextField
      error={Boolean(touched && error)}
      label={label}
      {...input}
      {...custom}
    />
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default TextField;