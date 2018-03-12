import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withKnobs, number, color } from '@storybook/addon-knobs/react';

// Storybook Decorators
import { ThemeDecorator } from '../../../.storybook/decorators';

// Components
import { Dice } from '../';

// eslint-disable-next-line
const stories = storiesOf(`Molecules`, module)
  .addDecorator(withKnobs)
  // Add redux <Provider> with store
  .addDecorator(ThemeDecorator())
  .add('Dice (no props)', () => <Dice />)
  .add('Dice success', () => <Dice success />)
  .add('Dice with Knobs', () => (
    <Dice color={color('Color', '#FF0000')} roll={number('value', 20)} />
  ));

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
      name: 'Weather',
    },
    rolls: [9],
    roll: 9,
  },
].map((roll, index) => {
  stories.add(`Example (${index}): ${roll.options.name}`, () => (
    <Dice {...roll} />
  ));
});
