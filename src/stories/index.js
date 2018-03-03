import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Field, reduxForm } from 'redux-form';

import { MenuItem } from 'material-ui/Menu';

import { SelectField, TextField, Checkbox, RadioGroup } from '../atomic';
import { reduxFormWrapper } from '../../.storybook/decorators';

// 1. Atoms
const atoms = storiesOf('1.Atoms', module);
atoms.addDecorator(reduxFormWrapper);
atoms.add('SelectField', () => (
  <Field name="selectField" component={SelectField} label="SelectField">
    <MenuItem value="slow">Slow</MenuItem>
    <MenuItem value="normal">Normal</MenuItem>
    <MenuItem value="fast">Fast</MenuItem>
  </Field>
));
// atoms.add('TextField', () => <Field name="TextField" label="TextField" component={TextField} />);
// atoms.add('Checkbox', () => <Field name="Checkbox" label="Checkbox" component={Checkbox} />);
// atoms.add('RadioGroup', () => <Field name="RadioGroup" label="RadioGroup" component={RadioGroup} />);

// 3. Organisms
// MontageForm
// MontageOutput

// 4. Ecosystems
// MontagePage
