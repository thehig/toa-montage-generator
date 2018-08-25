import React from 'react';
import PropTypes from 'prop-types';

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

TextField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any
  }),
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextField);
