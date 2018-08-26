import React from 'react';
import PropTypes from 'prop-types';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MUITypography from '@material-ui/core/Typography';
import MUISlider from '@material-ui/lab/Slider';

const noop = () => {};

const Slider = ({ input, label, meta: { touched, error } = {}, ...custom }) => (
  <FormControl error={Boolean(touched && error)} fullWidth>
    {label && <MUITypography id="slider-label">{label}</MUITypography>}
    <MUISlider
      {...input}
      aria-labelledby="slider-label"
      onChange={event => input.onChange(event.target.value)}
      onBlur={noop}
      value={input.value}
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
