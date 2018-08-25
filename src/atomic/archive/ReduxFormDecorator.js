/* import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';

// Theme
import blue from '@material-ui/core/colors/blue';

// Storybook Decorators
import {
  ReduxFormDecorator
} from '../../../.storybook/decorators';

// Components
import { DCInput, Navigator, PaceAndSpeed, Travel } from '../';
import { action } from '@storybook/addon-actions';

const decorator = ReduxFormDecorator({
  initialState: {
    _init: "Initialized by Molecules stories"
  },
  theme: {
    palette: {
      secondary: blue,
    },
  },
  onSubmit: action('On Molecule Submit')
});

// eslint-disable-next-line
storiesOf(`Molecules`, module)
  // Add redux <Provider> with store
  .addDecorator(decorator)
  .add('DCInput', () => <DCInput />)
  .add('Navigator', () => <Navigator />)
  .add('PaceAndSpeed', () => <PaceAndSpeed />)
  .add('Travel', () => <Travel />);
 */