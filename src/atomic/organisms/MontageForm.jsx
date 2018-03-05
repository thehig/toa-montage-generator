import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Select Menu Item
import { MenuItem } from 'material-ui/Menu';

import MUIButton from 'material-ui/Button';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import RefreshIcon from 'material-ui-icons/Refresh';

import { TextField, SelectField, CheckboxGroup } from '../';

const validate = values => {
  const errors = {};
  const requiredFields = [
    'modifier',
    'pace',
    'speed',
    'navigationDC',
    'encounterDC',
    'numdays',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
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

const MontageForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
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

      {/* DC INPUT */}
      <div>
        <Field
          name="navigationDC"
          component={TextField}
          label="Navigation DC"
        />
      </div>
      <div>
        <Field name="encounterDC" component={TextField} label="Encounter DC" />
      </div>
      {/* DC INPUT */}

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

      <div>
        <MUIButton
          type="submit"
          variant="fab"
          color="secondary"
          aria-label="go"
          disabled={submitting}>
          <PlayArrowIcon />
        </MUIButton>
        <MUIButton
          variant="fab"
          aria-label="reset"
          disabled={pristine || submitting}
          onClick={reset}>
          <RefreshIcon />
        </MUIButton>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'MontageForm', // a unique identifier for this form
  validate,
})(MontageForm);
