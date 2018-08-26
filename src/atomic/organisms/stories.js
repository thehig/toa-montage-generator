import React from 'react';
import { connect } from 'react-redux';

// Storybook
import { storiesOf } from '@storybook/react';

// Theme
import blue from '@material-ui/core/colors/blue';

// Storybook Decorators
import { ReduxDecorator, ThemeDecorator } from '../../../.storybook/decorators';

// Components
import { MontageOutput, MontageOptions } from '../';

import { selector as MontageOptionsSelector } from './MontageOptions';

import { action } from '@storybook/addon-actions';

// eslint-disable-next-line
storiesOf(`Montage Components`, module)
  // Add redux <Provider> with store
  .addDecorator(
    ReduxDecorator({
      /* Initial redux state */
      stories: `montage-components`
    })
  )
  // Add <MuiThemeProvider> with theme
  .addDecorator(
    ThemeDecorator({
      /* Base theme overrides */
      palette: {
        primary: blue
      }
    })
  )
  .add('MontageOptions', () => {
    // The MontageOptions needs to have the selected 'id' passed back into itself
    const ConnectedMontageOptions = connect(state => ({
      terrain: MontageOptionsSelector(state, 'terrain')
    }))(MontageOptions);

    return <ConnectedMontageOptions onSubmit={action('Terrain Form Submit')} />;
  })
  .add('MontageOutput', () => <MontageOutput montage={sampleMontage} />);

const sampleMontage = {
  days: [
    {
      navigation: {
        rolls: [
          {
            options: {
              modifier: 5,
              advantage: false,
              disadvantage: false,
              name: 'navigation check',
              versus: 10
            },
            rolls: [12],
            roll: 12,
            success: true
          }
        ],
        startedLost: false,
        pace: 'normal',
        speed: 'walk',
        paceMod: 0,
        success: true,
        lost: false,
        distance: 1
      },
      encounters: [
        {
          encounterRoll: {
            options: {
              versus: 19,
              name: 'Encounter Chance'
            },
            rolls: [4],
            roll: 4,
            success: false
          },
          encounter: false
        },
        {
          encounterRoll: {
            options: {
              versus: 19,
              name: 'Encounter Chance'
            },
            rolls: [9],
            roll: 9,
            success: false
          },
          encounter: false
        },
        {
          encounterRoll: {
            options: {
              versus: 19,
              name: 'Encounter Chance'
            },
            rolls: [16],
            roll: 16,
            success: false
          },
          encounter: false
        }
      ],
      weather: [
        {
          weatherRoll: {
            options: { name: 'Weather' },
            rolls: [9],
            roll: 9
          },
          name: 'light',
          effect: {
            min: 6,
            max: 10,
            name: 'Light',
            effects: ''
          }
        },
        {
          weatherRoll: {
            options: { name: 'Weather' },
            rolls: [12],
            roll: 12
          },
          name: 'medium',
          effect: {
            min: 11,
            max: 15,
            name: 'Medium',
            effects: ''
          }
        },
        {
          weatherRoll: {
            options: { name: 'Weather' },
            rolls: [9],
            roll: 9
          },
          name: 'light',
          effect: {
            min: 6,
            max: 10,
            name: 'Light',
            effects: ''
          }
        }
      ],
      index: 1
    },
    {
      navigation: {
        rolls: [
          {
            options: {
              modifier: 5,
              advantage: false,
              disadvantage: false,
              name: 'navigation check',
              versus: 10
            },
            rolls: [12],
            roll: 12,
            success: true
          }
        ],
        startedLost: false,
        pace: 'normal',
        speed: 'walk',
        paceMod: 0,
        success: true,
        lost: false,
        distance: 1
      },
      encounters: [
        {
          encounterRoll: {
            options: {
              versus: 19,
              name: 'Encounter Chance'
            },
            rolls: [10],
            roll: 10,
            success: false
          },
          encounter: false
        },
        {
          encounterRoll: {
            options: {
              versus: 19,
              name: 'Encounter Chance'
            },
            rolls: [11],
            roll: 11,
            success: false
          },
          encounter: false
        },
        {
          encounterRoll: {
            options: {
              versus: 19,
              name: 'Encounter Chance'
            },
            rolls: [3],
            roll: 3,
            success: false
          },
          encounter: false
        }
      ],
      weather: [
        {
          weatherRoll: {
            options: { name: 'Weather' },
            rolls: [9],
            roll: 9
          },
          name: 'light',
          effect: {
            min: 6,
            max: 10,
            name: 'Light',
            effects: ''
          }
        },
        {
          weatherRoll: {
            options: { name: 'Weather' },
            rolls: [9],
            roll: 9
          },
          name: 'light',
          effect: {
            min: 6,
            max: 10,
            name: 'Light',
            effects: ''
          }
        },
        {
          weatherRoll: {
            options: { name: 'Weather' },
            rolls: [16],
            roll: 16
          },
          name: 'heavy',
          effect: {
            min: 16,
            max: 18,
            name: 'Heavy',
            effects: ''
          }
        }
      ],
      index: 2
    },
    {
      navigation: {
        rolls: [
          {
            options: {
              modifier: 5,
              advantage: false,
              disadvantage: false,
              name: 'navigation check',
              versus: 10
            },
            rolls: [2],
            roll: 2,
            success: false
          },
          {
            options: {
              name: 'Lost Direction'
            },
            rolls: [4],
            roll: 4
          }
        ],
        startedLost: false,
        pace: 'normal',
        speed: 'walk',
        paceMod: 0,
        success: false,
        lost: true,
        distance: 1,
        direction: 'S',
        becameLost: true
      },
      encounters: [
        {
          encounterRoll: {
            options: {
              versus: 19,
              name: 'Encounter Chance'
            },
            rolls: [11],
            roll: 11,
            success: false
          },
          encounter: false
        },
        {
          encounterRoll: {
            options: {
              versus: 19,
              name: 'Encounter Chance'
            },
            rolls: [16],
            roll: 16,
            success: false
          },
          encounter: false
        },
        {
          encounterRoll: {
            options: {
              versus: 19,
              name: 'Encounter Chance'
            },
            rolls: [4],
            roll: 4,
            success: false
          },
          encounter: false
        }
      ],
      weather: [
        {
          weatherRoll: {
            options: { name: 'Weather' },
            rolls: [8],
            roll: 8
          },
          name: 'light',
          effect: {
            min: 6,
            max: 10,
            name: 'Light',
            effects: ''
          }
        },
        {
          weatherRoll: {
            options: { name: 'Weather' },
            rolls: [17],
            roll: 17
          },
          name: 'heavy',
          effect: {
            min: 16,
            max: 18,
            name: 'Heavy',
            effects: ''
          }
        },
        {
          weatherRoll: {
            options: { name: 'Weather' },
            rolls: [4],
            roll: 4
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: ''
          }
        }
      ],
      index: 3
    }
  ],
  completed: true,
  reasonsForStopping: [],
  distance: 3,
  lost: true
};
