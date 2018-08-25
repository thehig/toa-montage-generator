import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

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
    <RadioGroup
      value={input.value}
      onChange={event => input.onChange(event.target.value)}
      {...rest}
    >
      {options.map(option => (
        <RadioButton
          key={option.key || option.name || option.label}
          {...option}
        />
      ))}
    </RadioGroup>
    <FormHelperText>{touched && error && error}</FormHelperText>
  </FormControl>
);

export default RadioButtonGroup;
