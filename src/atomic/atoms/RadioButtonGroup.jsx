import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import Tooltip from '@material-ui/core/Tooltip';

import { withStyles } from '@material-ui/core/styles';

export const RadioButton = ({ tooltip, ...props }) => (
  <Tooltip title={tooltip || ''}>
    <FormControlLabel control={<Radio />} {...props} />
  </Tooltip>
);

const styles = (/*theme*/) => ({
  root: {},
  fullWidth: {
    width: '100%'
  },
  group: {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
});

export const RadioButtonGroup = ({
  classes,
  fullWidth,
  input,
  label,
  tooltip,
  meta: { touched, error },
  options,
  ...rest
}) => (
  <FormControl
    className={cn(classes.root, fullWidth && classes.fullWidth)}
    component="fieldset"
    error={Boolean(touched && error)}
  >
    <Tooltip title={tooltip}>
      <FormLabel component="legend">{label}</FormLabel>
    </Tooltip>

    <RadioGroup
      className={classes.group}
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
  tooltip: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any
  }),
  options: PropTypes.array
};

export default withStyles(styles)(RadioButtonGroup);
