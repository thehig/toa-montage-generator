import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';

// Theme
import blue from 'material-ui/colors/blue';

// Storybook Decorators
import { ReduxDecorator, ThemeDecorator, FormWrapper } from '../../../.storybook/decorators';

// Components
import {
  DCInput, Navigator, PaceAndSpeed, Travel
} from '../';
import { action } from '@storybook/addon-actions';

// eslint-disable-next-line
storiesOf(`Molecules`, module)
  // Add redux <Provider> with store
  .addDecorator(
    ReduxDecorator({
      /* Initial redux state */
      stories: `molecules`,
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
  // .addDecorator( FormWrapper() )
  .add('DCInput', () => <DCInput />)
  .add('Navigator', () => <Navigator />)
  .add('PaceAndSpeed', () => <PaceAndSpeed />)
  .add('Travel', () => <Travel />);
