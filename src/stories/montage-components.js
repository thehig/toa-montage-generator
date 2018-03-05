import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';

// Theme
import blue from 'material-ui/colors/blue';

// Storybook Decorators
import { ReduxDecorator, ThemeDecorator } from '../../.storybook/decorators';

// Components
import { 
  // Org
  MontageForm
  // MontageOutput
  // Eco
  // MontagePage
} from '../atomic';

// eslint-disable-next-line
storiesOf(`Montage Components`, module)
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
  ).add('MontageForm', () => <MontageForm />);

// // Org
// MontageForm
// MontageOutput
// // Eco
// MontagePage
