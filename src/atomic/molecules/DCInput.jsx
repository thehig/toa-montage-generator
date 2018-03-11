import React from 'react';
import { Field } from 'redux-form';

import { TextField } from '../';

const DCInput = props => [
  <Field
    name="navigationDC"
    key="navigationDC"
    component={TextField}
    label="Navigation DC"
    type="number"
  />,
  <Field
    name="encounterDC"
    key="encounterDC"
    component={TextField}
    label="Encounter DC"
    type="number"
  />,
];

export default DCInput;
