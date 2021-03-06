import React from 'react';
import PropTypes from 'prop-types';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MUIInputLabel from '@material-ui/core/InputLabel';
import MUISelect from '@material-ui/core/Select';

const noop = () => {};

/* 
// Example Usage:
<div>
  <Field name="pace" component={SelectField} label="Pace">
    <MenuItem value="slow">Slow</MenuItem>
    <MenuItem value="normal">Normal</MenuItem>
    <MenuItem value="fast">Fast</MenuItem>
  </Field>
</div>
 */

const SelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <FormControl error={Boolean(touched && error)} fullWidth>
    {label && <MUIInputLabel>{label}</MUIInputLabel>}
    <MUISelect
      {...input}
      onChange={event => input.onChange(event.target.value)}
      // https://github.com/erikras/redux-form/issues/2768
      onBlur={noop}
      value={input.value}
      {...custom}
    >
      {children}
    </MUISelect>
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

SelectField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any
  }),
  children: PropTypes.node,
  options: PropTypes.array
};

export default SelectField;
