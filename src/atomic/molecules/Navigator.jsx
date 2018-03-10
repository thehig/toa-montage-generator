import React from 'react';
import { Field } from 'redux-form';

import { CheckboxGroup, TextField } from '../';

const Navigator = props => (
  <div {...props}>
    {/* NAVIGATOR */}
    <div>
      <Field
        name="nav-advantage"
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
      />
    </div>
    <div>
      <Field name="modifier" component={TextField} label="Modifier" />
    </div>
    {/* NAVIGATOR */}
  </div>
);

export default Navigator;
