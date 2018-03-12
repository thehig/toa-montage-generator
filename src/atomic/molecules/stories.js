import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Storybook Decorators
import { ThemeDecorator } from '../../../.storybook/decorators';

// Components
import { Dice } from '../';

// // eslint-disable-next-line
const stories = storiesOf(`Molecules`, module)
  // Add redux <Provider> with store
  .addDecorator(ThemeDecorator())
  .add('Dice', () => <Dice />);

[
  {
    options: {
      modifier: 5,
      advantage: false,
      disadvantage: false,
      name: 'Navigation Check',
      versus: 10,
    },
    rolls: [12],
    roll: 12,
    success: true,
  },
  {
    options: {
      versus: 19,
      name: 'Encounter Chance',
    },
    rolls: [4],
    roll: 4,
    success: false,
  },
  {
    options: {
      name: 'Weather'
    },
    rolls: [9],
    roll: 9,
  },
].map((roll, index) => {
  stories.add(`Example (${index}): ${roll.options.name}`, () => <Dice {...roll} />);
});
