// Directions you can go in when you fail a navigation check
// Must be of length 6 for d6 to roll into
export const directions = ['N', 'NE', 'SE', 'S', 'SW', 'NW'];

// # Hexes of travel per day under normal circumstances
export const speeds = {
  walk: 1,
  boat: 2
};

// By what amount do changes to pace affect the DC of terrain navigation
export const paceModifiers = {
  slow: -5,
  fast: +5
};

export const weather = {
  none: {
    min: 1,
    max: 5,
    name: 'None',
    effects: ''
  },
  light: {
    min: 6,
    max: 10,
    name: 'Light Rain',
    effects: ''
  },
  medium: {
    min: 11,
    max: 15,
    name: 'Normal Rain',
    effects: ''
  },
  heavy: {
    min: 16,
    max: 19,
    name: 'Heavy',
    effects:
      'Visibility is limited to 50 yards. Huge or larger objects can still be distinguished. Missile weapon ranges are halved.'
  },
  torrent: {
    min: 20,
    max: 20,
    name: 'Torrent',
    effects: 'Travel by river is impossible.'
  }
};

// navDC describes what number you must roll equal to or higher to safely navigate
// encChances describes what number you must roll equal to or higher for an encounter to occur
export const terrain = [
  {
    id: 1,
    name: 'Easy Navigation, 5% encounter chance',
    navDC: 10,
    encChance: 20
  },
  {
    id: 2,
    name: 'Easy Navigation, 15% encounter chance',
    navDC: 10,
    encChance: 18
  },
  {
    id: 3,
    name: 'Easy Navigation, 25% encounter chance',
    navDC: 10,
    encChance: 16
  },
  {
    id: 4,
    name: 'Hard Navigation, 5% encounter chance',
    navDC: 15,
    encChance: 20
  },
  {
    id: 5,
    name: 'Hard Navigation, 15% encounter chance',
    navDC: 15,
    encChance: 18
  },
  {
    id: 6,
    name: 'Hard Navigation, 25% encounter chance',
    navDC: 15,
    encChance: 16
  }
];
