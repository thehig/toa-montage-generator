import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MUISlider from '@material-ui/lab/Slider';
import { Tooltip } from '@material-ui/core';

const noop = () => {};

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit * 1
  },
  slider: {
    width: `calc(100% - ${theme.spacing.unit * 2}px)`,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 1
  }
});

const Slider = ({ classes, input, label, tooltip, meta: { touched, error } = {}, ...custom }) => {
  const wrapper = children =>
    tooltip ? (
      <Tooltip title={tooltip} placement="top-end">
        {children}
      </Tooltip>
    ) : (
      children
    );

  return (
    <FormControl error={Boolean(touched && error)} fullWidth className={classes.root}>
      {label && (
        <FormLabel id="slider-label" component="legend">
          {label.replace(/\$value\$/g, input.value)}
        </FormLabel>
      )}
      {wrapper(
        <MUISlider
          {...input}
          aria-labelledby="slider-label"
          onChange={(evt, value) => input.onChange(value)}
          onBlur={noop}
          value={input.value || 0}
          {...custom}
          className={classes.slider}
        />
      )}
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

Slider.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object,
  label: PropTypes.string,
  tooltip: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any
  }),
  options: PropTypes.array
};

export default withStyles(styles)(Slider);
