import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Field, reduxForm } from 'redux-form';

import { SelectField, TextField, Checkbox, RadioGroup } from '../atomic';
import { reduxFormWrapper } from '../../.storybook/decorators';

// 1. Atoms
const atoms = storiesOf('1.Atoms', module);
atoms.addDecorator(reduxFormWrapper('atoms'));
atoms.add('SelectField', () => <Field name="SelectField" label="SelectField" component={SelectField} />);
atoms.add('TextField', () => <Field name="TextField" label="TextField" component={TextField} />);
atoms.add('Checkbox', () => <Field name="Checkbox" label="Checkbox" component={Checkbox} />);
atoms.add('RadioGroup', () => <Field name="RadioGroup" label="RadioGroup" component={RadioGroup} />);

// 3. Organisms
// MontageForm
// MontageOutput

// 4. Ecosystems
// MontagePage

