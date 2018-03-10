import React from 'react';
import { Field } from 'redux-form';

import { TextField } from '../';

const DCInput = props => (
  <div {...props}>
    {/* DC INPUT */}
    <div>
      <Field name="navigationDC" component={TextField} label="Navigation DC" />
    </div>
    <div>
      <Field name="encounterDC" component={TextField} label="Encounter DC" />
    </div>
    {/* DC INPUT */}
  </div>
);

export default DCInput;
