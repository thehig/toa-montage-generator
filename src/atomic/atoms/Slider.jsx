import React from 'react';
import PropTypes from 'prop-types';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MUITypography from '@material-ui/core/Typography';
import MUISlider from '@material-ui/lab/Slider';

const noop = () => {};

const Slider = ({ input, label, meta: { touched, error } = {}, ...custom }) => (
  <FormControl error={Boolean(touched && error)} fullWidth>
    {label && (
      <MUITypography id="slider-label">{label.replace(/\$value\$/g, input.value)}</MUITypography>
    )}
    <MUISlider
      {...input}
      aria-labelledby="slider-label"
      onChange={(evt, value) => input.onChange(value)}
      onBlur={noop}
      value={input.value || 0}
      {...custom}
    />
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

Slider.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any
  }),
  options: PropTypes.array
};

export default Slider;
