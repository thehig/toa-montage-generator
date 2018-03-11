import React from 'react';
import MUICheckbox from 'material-ui/Checkbox';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';

import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit * 2}px 0`,
  }
});

export const CheckboxGroup = ({
  input,
  label,
  meta: { touched, error },
  options,
  classes,
  ...rest
}) => (
  <FormControl
    component="fieldset"
    error={Boolean(touched && error)}
    fullWidth
    className={classes.root}>
    {label && (
      <FormLabel component="legend">
        {label}
      </FormLabel>
    )}
    <FormGroup className={classes.group} {...rest}>
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
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default withStyles(styles)(CheckboxGroup);
