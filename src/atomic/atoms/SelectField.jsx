import React from 'react';

import {
  FormControl,
  FormHelperText
} from 'material-ui/Form';

import { InputLabel as MUIInputLabel } from 'material-ui/Input';
import MUISelect from 'material-ui/Select';

const noop = () => {};

/* 
// Example Usage:
<div>
  <Field name="pace" component={SelectField} label="Pace">
    <MenuItem value="slow">Slow</MenuItem>
    <MenuItem value="normal">Normal</MenuItem>
    <MenuItem value="fast">Fast</MenuItem>
  </Field>
</div>
 */

const SelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={Boolean(touched && error)} fullWidth>
    <MUIInputLabel>{label}</MUIInputLabel>
    <MUISelect
      {...input}
      onChange={event => input.onChange(event.target.value)}
      // https://github.com/erikras/redux-form/issues/2768
      onBlur={noop}
      value={input.value}
      {...custom}>
      {children}
    </MUISelect>
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default SelectField;
