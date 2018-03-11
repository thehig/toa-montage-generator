import React from 'react';
import { Field } from 'redux-form';

import { TextField, CheckboxGroup } from '../';

const Travel = props => [
  <Field
    name="numdays"
    key="numdays"
    component={TextField}
    label="Num days"
    type="number"
  />,
  <Field
    name="starts-lost"
    key="starts-lost"
    component={CheckboxGroup}
    label="Starts Lost"
    options={[
      {
        value: 'lost',
        label: 'Lost',
      },
    ]}
  />,
  <Field
    name="daysoffset"
    key="daysoffset"
    component={TextField}
    label="Days Offset"
    type="number"
  />,
];
export default Travel;
