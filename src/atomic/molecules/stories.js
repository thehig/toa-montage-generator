import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withKnobs, number, color } from '@storybook/addon-knobs/react';

// Storybook Decorators
import { ThemeDecorator } from '../../../.storybook/decorators';

// Components
import { Dice, Day, Encounters, Navigation, Weathers } from '../';

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
  stories.add(`Dice (${index}): ${roll.options.name}`, () => (
    <Dice {...roll} />
  ));
});

stories.add('Encounters', () => (<Encounters index={1} encounters={montage.days[0].encounters} />));
stories.add('Weathers', () => (<Weathers index={1} weathers={montage.days[0].weather}/>));

stories.add('Navigation', () => (<Navigation index={1} {...montage.days[0].navigation}/>));

stories.add('Day', () => (<Day day={montage.days[0]}/>));

const montage = {
  "days": [
    {
      "navigation": {
        "rolls": [
          {
            "options": {
              "advantage": false,
              "disadvantage": false,
              "name": "navigation check",
              "versus": 10
            },
            "rolls": [
              15
            ],
            "roll": 15,
            "success": true
          }
        ],
        "startedLost": false,
        "pace": "normal",
        "speed": "walk",
        "paceMod": 0,
        "success": true,
        "lost": false,
        "distance": 1
      },
      "encounters": [
        {
          "encounterRoll": {
            "options": {
              "versus": 10,
              "name": "Encounter Chance"
            },
            "rolls": [
              20
            ],
            "roll": 20,
            "success": true
          },
          "tableRoll": {
            "options": {
              "name": "Encounter Table"
            },
            "rolls": [
              40
            ],
            "roll": 40
          },
          "encounter": 40
        },
        {
          "encounterRoll": {
            "options": {
              "versus": 10,
              "name": "Encounter Chance"
            },
            "rolls": [
              1
            ],
            "roll": 1,
            "success": false
          },
          "encounter": false
        },
        {
          "encounterRoll": {
            "options": {
              "versus": 10,
              "name": "Encounter Chance"
            },
            "rolls": [
              16
            ],
            "roll": 16,
            "success": true
          },
          "tableRoll": {
            "options": {
              "name": "Encounter Table"
            },
            "rolls": [
              19
            ],
            "roll": 19
          },
          "encounter": 19
        }
      ],
      "weather": [
        {
          "weatherRoll": {
            "options": "Weather",
            "rolls": [
              20
            ],
            "roll": 20
          },
          "name": "torrent",
          "effect": {
            "min": 19,
            "max": 20,
            "name": "Torrent",
            "effects": ""
          }
        },
        {
          "weatherRoll": {
            "options": "Weather",
            "rolls": [
              17
            ],
            "roll": 17
          },
          "name": "heavy",
          "effect": {
            "min": 16,
            "max": 18,
            "name": "Heavy",
            "effects": ""
          }
        },
        {
          "weatherRoll": {
            "options": "Weather",
            "rolls": [
              18
            ],
            "roll": 18
          },
          "name": "heavy",
          "effect": {
            "min": 16,
            "max": 18,
            "name": "Heavy",
            "effects": ""
          }
        }
      ],
      "index": 1
    }
  ],
  "completed": false,
  "reasonsForStopping": [
    "Encounter(s)",
    "Weather"
  ],
  "distance": 1,
  "lost": false
};