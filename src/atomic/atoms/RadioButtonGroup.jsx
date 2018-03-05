import React from 'react';
import Radio, { RadioGroup } from 'material-ui/Radio';
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';

export const RadioButton = props => (
  <FormControlLabel control={<Radio />} {...props} />
);

export const RadioButtonGroup = ({
  input,
  label,
  meta: { touched, error },
  options,
  ...rest
}) => (
  <FormControl component="fieldset" error={Boolean(touched && error)}>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup value={input.value} onChange={event => input.onChange(event.target.value)}>
      {options.map(option => (
        <RadioButton key={option.name || option.label} {...option} />
      ))}
    </RadioGroup>
    <FormHelperText>{touched && error && error}</FormHelperText>
  </FormControl>
);

export default RadioButtonGroup;