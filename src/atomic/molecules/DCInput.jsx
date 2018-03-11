import React from 'react';
import { Field } from 'redux-form';

import { TextField } from '../';

const DCInput = props => [
  <Field name="navigationDC" key="navigationDC" component={TextField} label="Navigation DC" />,
  <Field name="encounterDC" key="encounterDC" component={TextField} label="Encounter DC" />,
];

export default DCInput;
