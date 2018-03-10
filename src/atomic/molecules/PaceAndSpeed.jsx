import React from 'react';
import { Field } from 'redux-form';
import { MenuItem } from 'material-ui/Menu';

import { SelectField } from '../';

const PaceAndSpeed = props => (
  <div {...props}>
    {/* PACE & SPEED */}
    <div>
      <Field name="pace" component={SelectField} label="Pace">
        <MenuItem value="slow">Slow</MenuItem>
        <MenuItem value="normal">Normal</MenuItem>
        <MenuItem value="fast">Fast</MenuItem>
      </Field>
    </div>
    <div>
      <Field name="speed" component={SelectField} label="Speed">
        <MenuItem value="walk">Walking</MenuItem>
        <MenuItem value="boat">Boating</MenuItem>
      </Field>
    </div>
    {/* PACE & SPEED */}
  </div>
);

export default PaceAndSpeed;
