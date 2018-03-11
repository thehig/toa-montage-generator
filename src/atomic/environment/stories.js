import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';

// Components
import {
  App
} from '../';

// eslint-disable-next-line
storiesOf(`App`, module)
  .add('Functional', () => (
    <App />
  ));

