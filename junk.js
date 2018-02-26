const travel = {
  days: [
    {
      navigation: {
        rolls: [
          {
            options: {
              name: 'navigation check',
              versus: 10,
            },
            rolls: [20],
            roll: 20,
            success: true,
          },
        ],
        startedLost: false,
        pace: 'normal',
        speed: 'walk',
        paceMod: 0,
        success: true,
        lost: false,
        distance: 1,
      },
      encounters: [
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
      ],
      weather: [
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
      ],
      index: 1,
    },
    {
      navigation: {
        rolls: [
          {
            options: {
              name: 'navigation check',
              versus: 10,
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          {
            options: {
              name: 'Lost Direction',
            },
            rolls: [4],
            roll: 4,
          },
        ],
        startedLost: false,
        pace: 'normal',
        speed: 'walk',
        paceMod: 0,
        success: false,
        lost: true,
        distance: 1,
        direction: 'S',
        becameLost: true,
      },
      encounters: [
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
      ],
      weather: [
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
      ],
      index: 2,
    },
    {
      navigation: {
        rolls: [
          {
            options: {
              name: 'navigation check',
              versus: 10,
            },
            rolls: [20],
            roll: 20,
            success: true,
          },
        ],
        startedLost: false,
        pace: 'normal',
        speed: 'walk',
        paceMod: 0,
        success: true,
        lost: false,
        distance: 1,
      },
      encounters: [
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
      ],
      weather: [
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
      ],
      index: 3,
    },
    {
      navigation: {
        rolls: [
          {
            options: {
              name: 'navigation check',
              versus: 10,
            },
            rolls: [20],
            roll: 20,
            success: true,
          },
        ],
        startedLost: false,
        pace: 'normal',
        speed: 'walk',
        paceMod: 0,
        success: true,
        lost: false,
        distance: 1,
      },
      encounters: [
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
      ],
      weather: [
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
      ],
      index: 4,
    },
    {
      navigation: {
        rolls: [
          {
            options: {
              name: 'navigation check',
              versus: 10,
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          {
            options: {
              name: 'Lost Direction',
            },
            rolls: [3],
            roll: 3,
          },
        ],
        startedLost: false,
        pace: 'normal',
        speed: 'walk',
        paceMod: 0,
        success: false,
        lost: true,
        distance: 1,
        direction: 'SE',
        becameLost: true,
      },
      encounters: [
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
        {
          encounterRoll: {
            options: {
              versus: 10,
              name: 'Encounter Chance',
            },
            rolls: [1],
            roll: 1,
            success: false,
          },
          encounter: false,
        },
      ],
      weather: [
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
        {
          weatherRoll: {
            options: 'Weather',
            rolls: [1],
            roll: 1,
          },
          name: 'none',
          effect: {
            min: 1,
            max: 5,
            name: 'None',
            effects: '',
          },
        },
      ],
      index: 5,
    },
  ],
  completed: true,
  reasonsForStopping: [],
};

const rolls = travel.days.map((day, index) => ({
  day: index + 1,
  navRolls: day.navigation.rolls.map(roll => `${roll.options.name} ${roll.roll}`),
  encounterRolls: day.encounters.map(enc => enc.encounterRoll.roll),
  weatherRolls: day.weather.map(weather => weather.weatherRoll.roll),
}));

console.log(rolls);