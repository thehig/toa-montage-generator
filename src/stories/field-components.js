import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';

// Theme
import blue from 'material-ui/colors/blue';

// SelectField Options
import { MenuItem } from 'material-ui/Menu';


// Storybook Decorators
import {
  ReduxDecorator,
  ThemeDecorator,
  ReduxFormWithSingleField,
} from '../../.storybook/decorators';

// Components
import { SelectField, TextField, CheckboxGroup, RadioButtonGroup } from '../atomic';

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
const makeStories = component => {
  const render = ReduxFormWithSingleField(component);
  const validate = (/* value */) => 'This will always cause an error';
  const { name } = component;

  // eslint-disable-next-line
  storiesOf(`Redux-Form Field/${name}`, module)
    // Add redux <Provider> with store
    .addDecorator(
      ReduxDecorator({
        /* Initial redux state */
        stories: `redux-form-field-${name}`,
      })
    )
    // Add <MuiThemeProvider> with theme
    .addDecorator(
      ThemeDecorator({
        /* Base theme overrides */
        palette: {
          primary: blue,
        },
      })
    )
    .add(`minimal props`, () => render())
    .add(`with label`, () => render({ label: `${name} label` }))
    .add(`validation error`, () => render({ validate }))
    .add(`label and validation error`, () =>
      render({ validate, label: `This is the label for ${name}` })
    );
};

/**
 * The components to test. Props will be spread onto redux forms 'Field' component
 *
 *    name:       Required    The name of the Field in state, dom (only one visible at a time)
 *    component:  Required    The component to send to the redux <Field />
 *
 *    children:               Render inside component. Used to pass groups of options to <select> for example
 */
const reduxFormFieldComponents = [
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
    name: 'CheckboxGroup',
    component: CheckboxGroup,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
      { label: "Disabled", value: "disabled", disabled: true }
    ],
  },
  {
    name: 'CheckboxGroup/Row',
    component: CheckboxGroup,
    row: true,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
      { label: "Disabled", value: "disabled", disabled: true }
    ],
  },
  {
    name: 'RadioButtonGroup/Row',
    component: RadioButtonGroup,
    row: true,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
      { label: "Disabled", value: "disabled", disabled: true }
    ],
  },
  {
    name: 'RadioButtonGroup',
    component: RadioButtonGroup,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
      { label: "Disabled", value: "disabled", disabled: true }
    ],
  },
];
reduxFormFieldComponents.map(makeStories);
