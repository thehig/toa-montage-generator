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


// 1. Atoms
// eslint-disable-next-line
let atoms = storiesOf('1.Atoms', module)
  .addDecorator(
    ReduxDecorator({
      /* Initial redux state */
      stories: 'atoms',
    })
  )
  .addDecorator(
    ThemeDecorator({
      /* Base theme overrides */
      palette: {
        primary: blue,
      },
    })
  );

const components = [
  {
    name: 'SelectField',
    component: SelectField,
    children: [
      <MenuItem key="slow" value="slow">
        Slow
      </MenuItem>,
      <MenuItem key="normal" value="normal">
        Normal
      </MenuItem>,
      <MenuItem key="fast" value="fast">
        Fast
      </MenuItem>,
    ],
  },
  {
    name: 'TextField',
    component: TextField,
    children: null,
  },
  {
    name: 'Checkbox',
    component: Checkbox,
    children: null,
  },
  {
    name: 'RadioGroup',
    component: RadioGroup,
    children: [
      <FormControlLabel
        key="male"
        value="male"
        control={<Radio color="primary" />}
        label="Male"
      />,
      <FormControlLabel
        key="female"
        value="female"
        control={<Radio color="primary" />}
        label="Female"
      />,
      <FormControlLabel
        key="other"
        value="other"
        control={<Radio color="primary" />}
        label="Other"
      />,
      <FormControlLabel
        key="disabled"
        value="disabled"
        disabled
        control={<Radio />}
        label="(Disabled option)"
      />,
    ],
  },
];

/**
 * Takes two sets of props to be applied to a Redux Form Field component, inner and outer
 * Returns 
 *    <FormWrapper> - a reduxForm()'ed, <form> component
 *    <Field> - a redux-form component with inner and outer props spread
 *    <Button> - a button with type="submit" which will trigger the FormWrapper onSubmit
 */
const ReduxFormField = (outerProps = {}) => ( innerProps = {}) => (
  <FormWrapper onSubmit={action(`${name} handleSubmit`)}>
    <Field {...innerProps} {...outerProps} />
    <MUIButton color="primary" type="submit">
      Submit
    </MUIButton>
  </FormWrapper>
);

components.map(component => {
  atoms.add(`${component.name} - no label`, () => ReduxFormField()(component));
  atoms.add(`${component.name} - with label`, () => ReduxFormField({label: component.name})(component));
  atoms.add(`${component.name} - validation error`, () =>
    ReduxFormField({
      validate: (/* value */) => 'This will always cause an error',
    })(component)
  );
});

// 3. Organisms
// MontageForm
// MontageOutput

// 4. Ecosystems
// MontagePage
