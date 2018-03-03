import React from 'react';

import {
  FormControl,
  FormHelperText,
  FormControlLabel,
} from 'material-ui/Form';

import MUITextField from 'material-ui/TextField';
import { RadioGroup as MUIRadioGroup } from 'material-ui/Radio';
import MUICheckbox from 'material-ui/Checkbox';
import MUISelect from 'material-ui/Select';

export const TextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <FormControl error={Boolean(touched && error)}>
    <MUITextField
      error={Boolean(touched && error)}
      label={error || label}
      {...input}
      {...custom}
    />
  </FormControl>
);

export const Checkbox = ({ input, meta: { touched, error }, label }) => (
  <FormControlLabel
    error={touched && error ? error : null}
    control={
      <MUICheckbox
        checked={input.value ? true : false}
        onChange={input.onChange}
      />
    }
    label={label}
  />
);

export const RadioGroup = ({ input, meta: { touched, error }, ...rest }) => (
  <FormControl error={Boolean(touched && error)}>
    <MUIRadioGroup
      {...input}
      {...rest}
      value={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
  </FormControl>
);

export const SelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={Boolean(touched && error)}>
    <MUISelect
      {...input}
      onChange={event => input.onChange(event.target.value)}
      onBlur={event => {}}
      // https://github.com/erikras/redux-form/issues/2768
      children={children}
      {...custom}
    />
    <FormHelperText>{error || label}</FormHelperText>
  </FormControl>
);
