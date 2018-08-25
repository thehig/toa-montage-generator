import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

// import { InputLabel as MUIInputLabel } from '@material-ui/core/Input';
import MUITextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit
  }
});

export const TextField = ({ input, label, meta: { touched, error }, classes, ...custom }) => (
  <FormControl error={Boolean(touched && error)} fullWidth className={classes.root}>
    <MUITextField error={Boolean(touched && error)} label={label} {...input} {...custom} />
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default withStyles(styles)(TextField);
