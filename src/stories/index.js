import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Redux Form Component Wrapper
import { Field } from 'redux-form';

// Submit Button
import MUIButton from 'material-ui/Button';

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

// 1. Atoms
// eslint-disable-next-line
let atoms = storiesOf('1.Atoms', module)
  .addDecorator(
    ReduxDecorator({
      /* Initial Value */
      stories: 'atoms',
    })
  )
  .addDecorator(ThemeDecorator());

atoms.add('SelectField', () => (
  <FormWrapper onSubmit={action('handleSubmit')}>
    <Field name="selectField" component={SelectField} label="SelectField">
      <MenuItem value="slow">Slow</MenuItem>
      <MenuItem value="normal">Normal</MenuItem>
      <MenuItem value="fast">Fast</MenuItem>
    </Field>
    <MUIButton type="submit">Submit</MUIButton>
  </FormWrapper>
));

atoms.add('TextField', () => (
  <FormWrapper onSubmit={action('handleSubmit')}>
    <Field name="textfield" component={TextField} label="Textfield Label" />
    <MUIButton type="submit">Submit</MUIButton>
  </FormWrapper>
));

atoms.add('Checkbox', () => (
  <FormWrapper onSubmit={action('handleSubmit')}>
    <Field name="checkbox" component={Checkbox} label="Checkbox Label" />
    <MUIButton type="submit">Submit</MUIButton>
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
    <MUIButton type="submit">Submit</MUIButton>
  </FormWrapper>
));

// 3. Organisms
// MontageForm
// MontageOutput

// 4. Ecosystems
// MontagePage
