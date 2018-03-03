import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Radio Buttons
import Radio from 'material-ui/Radio';
import { FormControlLabel, } from 'material-ui/Form';

// Select Menu Item
import { MenuItem } from 'material-ui/Menu';

import { TextField, RadioGroup, SelectField, Checkbox } from '../';

const validate = values => {
  const errors = {};
  const requiredFields = [
    // 'firstName',
    // 'lastName',
    // 'email',
    'favoriteColor',
    'employed',
    'sex',
    'notes',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      console.log('field', field, values);
      // debugger;
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};


const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          component={TextField}
          label="First Name"
        />
      </div>
      <div>
        <Field name="lastName" component={TextField} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={TextField} label="Email" />
      </div>
      <div>
        <Field name="sex" component={RadioGroup}>
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </Field>
      </div>
      <div>
        <Field
          name="favoriteColor"
          component={SelectField}
          label="Favorite Color">
          <MenuItem value="ff0000">Red</MenuItem>
          <MenuItem value="00ff00">Green</MenuItem>
          <MenuItem value="0000ff">Blue</MenuItem>
        </Field>
      </div>
      <div>
        <Field name="employed" component={Checkbox} label="Employed" />
      </div>
      <div>
        <Field
          name="notes"
          component={TextField}
          label="Notes"
          multiline={true}
          rows={2}
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
})(MaterialUiForm);
