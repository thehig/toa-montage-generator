import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';

// Theme
import blue from 'material-ui/colors/blue';

// Storybook Decorators
import { ReduxDecorator, ThemeDecorator } from '../../../.storybook/decorators';

// Components
import {
  MontageForm,
  // MontageOutput
  // Eco
  MontagePage,
} from '../';
import { action } from '@storybook/addon-actions';

// eslint-disable-next-line
storiesOf(`Montage Components`, module)
  // Add redux <Provider> with store
  .addDecorator(
    ReduxDecorator({
      /* Initial redux state */
      stories: `montage-components`,
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
  .add('MontageForm', () => (
    <MontageForm onSubmit={action('Montage Form Submit')} />
  ));
// .add('MontagePage', () => (
//   <MontagePage />
// ));
