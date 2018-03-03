import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  FormControl,
  FormHelperText,
  FormControlLabel,
} from 'material-ui/Form';

import TextField from 'material-ui/TextField';
import Radio, { RadioGroup as RadioButtonGroup } from 'material-ui/Radio';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

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

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <FormControl error={Boolean(touched && error)}>
    <TextField
      error={Boolean(touched && error)}
      label={error || label}
      {...input}
      {...custom}
    />
  </FormControl>
);

const renderCheckbox = ({ input, meta: { touched, error }, label }) => (
  <FormControlLabel
    error={touched && error ? error : null}
    control={
      <Checkbox
        checked={input.value ? true : false}
        onChange={input.onChange}
      />
    }
    label={label}
  />
);

const renderRadioGroup = ({ input, meta: { touched, error }, ...rest }) => (
  <FormControl error={Boolean(touched && error)}>
    <RadioButtonGroup
      {...input}
      {...rest}
      value={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
  </FormControl>
);

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={Boolean(touched && error)}>
    <SelectField
      {...input}
      onChange={event => input.onChange(event.target.value)}
      onBlur={event => {}}
      // https://github.com/erikras/redux-form/issues/2768
      value={input.value}
      children={children}
      {...custom}
    />
    <FormHelperText>{error || label}</FormHelperText>
  </FormControl>
);

const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
        />
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field name="sex" component={renderRadioGroup}>
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </Field>
      </div>
      <div>
        <Field
          name="favoriteColor"
          component={renderSelectField}
          label="Favorite Color">
          <MenuItem value="ff0000">Red</MenuItem>
          <MenuItem value="00ff00">Green</MenuItem>
          <MenuItem value="0000ff">Blue</MenuItem>
        </Field>
      </div>
      <div>
        <Field name="employed" component={renderCheckbox} label="Employed" />
      </div>
      <div>
        <Field
          name="notes"
          component={renderTextField}
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
