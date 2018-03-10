import React from 'react';
import { Field } from 'redux-form';

import { TextField, CheckboxGroup } from '../';

const Travel = props => (
  <div {...props}>
    {/* TRAVEL */}
    <div>
      <Field name="numdays" component={TextField} label="Num days" />
    </div>

    <div>
      <Field
        name="starts-lost"
        component={CheckboxGroup}
        label="Starts Lost"
        options={[
          {
            value: 'lost',
            label: 'Lost',
          },
        ]}
      />
    </div>

    <div>
      <Field name="daysoffset" component={TextField} label="Days Offset" />
    </div>
    {/* TRAVEL */}
  </div>
);

export default Travel;