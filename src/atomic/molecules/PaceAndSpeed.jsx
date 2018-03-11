import React from 'react';
import { Field } from 'redux-form';
import { MenuItem } from 'material-ui/Menu';

import { SelectField } from '../';

const PaceAndSpeed = props => [
  <Field name="pace" key="pace" component={SelectField} label="Pace">
    <MenuItem value="slow">Slow</MenuItem>
    <MenuItem value="normal">Normal</MenuItem>
    <MenuItem value="fast">Fast</MenuItem>
  </Field>,
  <Field name="speed" key="speed" component={SelectField} label="Speed">
    <MenuItem value="walk">Walking</MenuItem>
    <MenuItem value="boat">Boating</MenuItem>
  </Field>,
];
export default PaceAndSpeed;
