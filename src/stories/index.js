import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';

// Theme
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
  ReduxFormWithSingleField,
} from '../../.storybook/decorators';

// Components
import { SelectField, TextField, Checkbox, RadioGroup } from '../atomic';

/**
 * Create stories of a group of components intended to be used on redux-forms Fields
 *
 *  Add Decorators: [Redux Store, Material UI Theme]
 */
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



/**
 * Test a collection of components that should all take the same props and display them in some way
 * 
 * Takes a component object to be spread onto a Redux Form Field
 * Creates stories of this component which should support
 * 
 *    no label:           no label property is set for the Field
 *    with label:         label set to $name, should be visible in all cases
 *    validation error:   *must* be visible, else component is not yet properly defined
 */
const makeStoriesOf = component => {
  atoms.add(`${component.name} - no label`, () =>
    ReduxFormWithSingleField()(component)
  );
  atoms.add(`${component.name} - with label`, () =>
    ReduxFormWithSingleField({ label: component.name })(component)
  );
  atoms.add(`${component.name} - validation error`, () =>
    ReduxFormWithSingleField({
      validate: (/* value */) => 'This will always cause an error',
    })(component)
  );
};

/**
 * The components to test. Props will be spread onto redux forms 'Field' component
 * 
 *    name:       Required    The name of the Field in state, dom (only one visible at a time)
 *    component:  Required    The component to send to the redux <Field />
 * 
 *    children:               Render inside component. Used to pass groups of options to selectors
 */
const reduxFormSingleFields = [
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
  },
  {
    name: 'Checkbox',
    component: Checkbox,
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
reduxFormSingleFields.map(makeStoriesOf);

// 3. Organisms
// MontageForm
// MontageOutput

// 4. Ecosystems
// MontagePage
