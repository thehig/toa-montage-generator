import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MUISlider from '@material-ui/lab/Slider';

const noop = () => {};

const styles = theme => ({
  root: {},
  slider: {
    width: `calc(100% - ${theme.spacing.unit * 2}px)`,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 4
  }
});

const Slider = ({ classes, input, label, sublabel, meta: { touched, error } = {}, ...custom }) => (
  <FormControl error={Boolean(touched && error)} fullWidth className={classes.root}>
    {label && (
      <FormLabel id="slider-label" component="legend">
        {label.replace(/\$value\$/g, input.value)}
        {sublabel && <small> {sublabel} </small>}
      </FormLabel>
    )}
    <MUISlider
      {...input}
      aria-labelledby="slider-label"
      onChange={(evt, value) => input.onChange(value)}
      onBlur={noop}
      value={input.value || 0}
      {...custom}
      className={classes.slider}
    />
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

Slider.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object,
  label: PropTypes.string,
  sublabel: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any
  }),
  options: PropTypes.array
};

export default withStyles(styles)(Slider);
