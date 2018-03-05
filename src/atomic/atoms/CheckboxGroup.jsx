import React from 'react';
import MUICheckbox from 'material-ui/Checkbox';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';

const handleChange = (event, options) => {
  console.log('event', event);
  console.log('target', event.target);
  console.log('value', event.target.value);
  console.log('options', options);
};

export const CheckboxGroup = ({
  input,
  label,
  meta: { touched, error },
  options,
  ...rest
}) => {
  let selectedValues = [];
  return (
    <FormControl component="fieldset" error={Boolean(touched && error)}>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup
        onChange={(e) => {
          const name = e.target.value;
          if (e.target.checked) {
            input.onChange(selectedValues.concat(name));
          } else {
            const valuesCopy = [...selectedValues];
            const valueIndex = selectedValues.indexOf(name);

            valuesCopy.splice(valueIndex, 1);
            input.onChange(valuesCopy);
          }
        }}
      >
        {options.map(option => (
          <FormControlLabel
            control={<MUICheckbox />}
            key={option.name || option.label}
            {...option}
          />
        ))}
      </FormGroup>
      <FormHelperText>{touched && error && error}</FormHelperText>
    </FormControl>
  );
};

export default CheckboxGroup;
