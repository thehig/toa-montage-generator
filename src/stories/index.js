import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Field, reduxForm } from 'redux-form';

import { MenuItem } from 'material-ui/Menu';

import Button from 'material-ui/Button';

import { SelectField, TextField, Checkbox, RadioGroup } from '../atomic';
import { ReduxDecorator, ThemeDecorator } from '../../.storybook/decorators';

// 1. Atoms
let atoms = storiesOf('1.Atoms', module)
  .addDecorator(ReduxDecorator())
  .addDecorator(ThemeDecorator());

// atoms.add('SelectField', () => (
//     <Field name="selectField" component={SelectField} label="SelectField">
//       <MenuItem value="slow">Slow</MenuItem>
//       <MenuItem value="normal">Normal</MenuItem>
//       <MenuItem value="fast">Fast</MenuItem>
//     </Field>
//   ));

atoms.add('Something', () => <Button color="primary" onClick={action('onClick')}>With something</Button>);

// TextField
// Checkbox
// RadioGroup

// 3. Organisms
// MontageForm
// MontageOutput

// 4. Ecosystems
// MontagePage
