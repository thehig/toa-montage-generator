import React from 'react';
import MUICheckbox from 'material-ui/Checkbox';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';

export const CheckboxGroup = ({
  input,
  label,
  meta: { touched, error },
  options,
  ...rest
}) => (
  <FormControl component="fieldset" error={Boolean(touched && error)}>
    <FormLabel component="legend">{label}</FormLabel>
    <FormGroup {...rest}>
      {options.map((option, i) => (
        <FormControlLabel
          control={<MUICheckbox />}
          key={i}
          defaultChecked={input.value.indexOf(option.value) !== -1}
          onChange={e => {
            let newValue = [...input.value];
            if (e.target.checked) {
              newValue.push(option.value);
            } else {
              newValue.splice(newValue.indexOf(option.value), 1);
            }
            return input.onChange(newValue);
          }}
          {...option}
        />
      ))}
    </FormGroup>
    <FormHelperText>{touched && error && error}</FormHelperText>
  </FormControl>
);

export default CheckboxGroup;
