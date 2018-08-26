import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import { withStyles } from '@material-ui/core/styles';

export const RadioButton = props => <FormControlLabel control={<Radio />} {...props} />;

const styles = (/*theme*/) => ({
  root: {},
  fullWidth: {
    width: '100%'
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  radioButton: {
    // flexGrow: 1
  }
});

export const RadioButtonGroup = ({
  classes,
  fullWidth,
  input,
  label,
  meta: { touched, error },
  options,
  ...rest
}) => (
  <FormControl
    className={cn(classes.root, fullWidth && classes.fullWidth)}
    component="fieldset"
    error={Boolean(touched && error)}
  >
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup
      className={classes.radioGroup}
      value={input.value}
      onChange={event => input.onChange(event.target.value)}
      {...rest}
    >
      {options.map(option => (
        <RadioButton
          className={classes.radioButton}
          key={option.key || option.name || option.label}
          {...option}
        />
      ))}
    </RadioGroup>
    <FormHelperText>{touched && error && error}</FormHelperText>
  </FormControl>
);

RadioButtonGroup.propTypes = {
  classes: PropTypes.object.isRequired,
  fullWidth: PropTypes.bool,
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any
  }),
  options: PropTypes.array
};

export default withStyles(styles)(RadioButtonGroup);
