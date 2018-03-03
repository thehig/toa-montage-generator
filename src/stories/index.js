import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Redux Form Component Wrapper
import { Field } from 'redux-form';

// Submit Button
import MUIButton from 'material-ui/Button';
import blue from 'material-ui/colors/blue';

// SelectField Options
import { MenuItem } from 'material-ui/Menu';

// RadioGroup Options
import Radio from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';

// Storybook Decorators
import {
  ReduxDecorator,
  ThemeDecorator,
  FormWrapper,
} from '../../.storybook/decorators';

// Components
import { SelectField, TextField, Checkbox, RadioGroup } from '../atomic';

// Submit Button
const FormSubmitButton = () => <MUIButton color="primary" type="submit">Submit</MUIButton>;

// 1. Atoms
// eslint-disable-next-line
let atoms = storiesOf('1.Atoms', module)
  .addDecorator(
    ReduxDecorator({
      /* Initial redux state */
      stories: 'atoms',
    })
  )
  .addDecorator(ThemeDecorator({
    /* Base theme overrides */
    palette: {
      primary: blue
    }
  }));

const alwaysError = (/* value */) => "This will always cause an error that is very needlessly long";

atoms.add('SelectField', () => (
  <FormWrapper onSubmit={action('handleSubmit')}>
    <Field name="selectField" component={SelectField} label="SelectField">
      <MenuItem value="slow">Slow</MenuItem>
      <MenuItem value="normal">Normal</MenuItem>
      <MenuItem value="fast">Fast</MenuItem>
    </Field>
    <FormSubmitButton />
  </FormWrapper>
));

atoms.add('SelectField with an error (!pristine)', () => (
  <FormWrapper onSubmit={action('handleSubmit')}>
    <Field name="selectField" component={SelectField} label="SelectField" validate={alwaysError} >
      <MenuItem value="slow">Slow</MenuItem>
      <MenuItem value="normal">Normal</MenuItem>
      <MenuItem value="fast">Fast</MenuItem>
    </Field>
    <FormSubmitButton />
  </FormWrapper>
));

atoms.add('TextField', () => (
  <FormWrapper onSubmit={action('handleSubmit')}>
    <Field name="textfield" component={TextField} label="Textfield Label" />
    <FormSubmitButton />
  </FormWrapper>
));

atoms.add('TextField with an error (!pristine)', () => (
  <FormWrapper onSubmit={action('handleSubmit')}>
    <Field name="textfield" component={TextField} label="Textfield Label" validate={alwaysError} />
    <FormSubmitButton />
  </FormWrapper>
));

atoms.add('Checkbox', () => (
  <FormWrapper onSubmit={action('handleSubmit')}>
    <Field name="checkbox" component={Checkbox} label="Checkbox Label" />
    <FormSubmitButton />
  </FormWrapper>
));

atoms.add('Checkbox with an error (!pristine)', () => (
  <FormWrapper onSubmit={action('handleSubmit')}>
    <Field name="checkbox" component={Checkbox} label="Checkbox Label" validate={alwaysError} />
    <FormSubmitButton />
  </FormWrapper>
));

atoms.add('RadioGroup', () => (
  <FormWrapper onSubmit={action('handleSubmit')}>
    <Field name="radiogroup" component={RadioGroup} label="RadioGroup Label">
      <FormControlLabel
        value="male"
        control={<Radio color="primary" />}
        label="Male"
      />
      <FormControlLabel
        value="female"
        control={<Radio color="primary" />}
        label="Female"
      />
      <FormControlLabel
        value="other"
        control={<Radio color="primary" />}
        label="Other"
      />
      <FormControlLabel
        value="disabled"
        disabled
        control={<Radio />}
        label="(Disabled option)"
      />
    </Field>
    <FormSubmitButton />
  </FormWrapper>
));

atoms.add('RadioGroup with an error (!pristine)', () => (
  <FormWrapper onSubmit={action('handleSubmit')}>
    <Field name="radiogroup" component={RadioGroup} label="RadioGroup Label" validate={alwaysError}>
      <FormControlLabel
        value="male"
        control={<Radio color="primary" />}
        label="Male"
      />
      <FormControlLabel
        value="female"
        control={<Radio color="primary" />}
        label="Female"
      />
      <FormControlLabel
        value="other"
        control={<Radio color="primary" />}
        label="Other"
      />
      <FormControlLabel
        value="disabled"
        disabled
        control={<Radio />}
        label="(Disabled option)"
      />
    </Field>
    <FormSubmitButton />
  </FormWrapper>
));

// 3. Organisms
// MontageForm
// MontageOutput

// 4. Ecosystems
// MontagePage
