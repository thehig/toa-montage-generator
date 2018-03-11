import React from 'react';
import { Field } from 'redux-form';

import { CheckboxGroup, TextField } from '../';

const Navigator = props => [
  <Field
    name="nav-advantage"
    key="nav-advantage"
    component={CheckboxGroup}
    label="Navigator Advantage"
    row
    options={[
      {
        value: 'advantage',
        label: 'Advantage',
      },
      {
        value: 'disadvantage',
        label: 'Disadvantage',
      },
    ]}
  />,
  <Field
    name="modifier"
    key="nav-modifier"
    component={TextField}
    label="Modifier"
    type="number"
  />,
];

export default Navigator;
