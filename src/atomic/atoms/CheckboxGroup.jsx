import React from 'react';
import MUICheckbox from '@material-ui/core/Checkbox';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit * 2}px 0`
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
    className={classes.root}
  >
    {label && <FormLabel component="legend">{label}</FormLabel>}
    <FormGroup className={classes.group} {...rest}>
      {options.map((option, i) => (
        <FormControlLabel
          control={<MUICheckbox />}
          key={i}
          {...option}
          checked={input.value.indexOf(option.value) >= 0}
          onChange={e => {
            let newValue = [...input.value];
            if (e.target.checked) {
              newValue.push(option.value);
            } else {
              newValue.splice(newValue.indexOf(option.value), 1);
            }
            return input.onChange(newValue);
          }}
        />
      ))}
    </FormGroup>
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default withStyles(styles)(CheckboxGroup);
