import React from 'react';

import { withStyles } from 'material-ui/styles';
import {
  FormControl,
  FormHelperText,
  // FormControlLabel,
} from 'material-ui/Form';

// import { InputLabel as MUIInputLabel } from 'material-ui/Input';
import MUITextField from 'material-ui/TextField';

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit
  }
});

export const TextField = ({
  input,
  label,
  meta: { touched, error },
  classes,
  ...custom
}) => (
  <FormControl error={Boolean(touched && error)} fullWidth className={classes.root}>
    <MUITextField
      error={Boolean(touched && error)}
      label={label}
      {...input}
      {...custom}
    />
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default withStyles(styles)(TextField);