import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Select Menu Item
import { MenuItem } from 'material-ui/Menu';

import MUIButton from 'material-ui/Button';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import RefreshIcon from 'material-ui-icons/Refresh';

import { DCInput, Navigator, PaceAndSpeed, Travel } from '../';

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
      <Navigator />
      <PaceAndSpeed />
      <DCInput />
      <Travel />
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
          disabled={submitting}
          onClick={reset}>
          <RefreshIcon />
        </MUIButton>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'MontageForm', // a unique identifier for this form
  initialValues: {
    modifier: 3,
    pace: "normal",
    speed: "walk",
    navigationDC: 10,
    encounterDC: 19,
    numdays: 3
  },
  validate,
})(MontageForm);
