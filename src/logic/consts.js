// Directions you can go in when you fail a navigation check
// Must be of length 6 for d6 to roll into
export const directions = ['N', 'NE', 'SE', 'S', 'SW', 'NW'];

// # Hexes of travel per day under normal circumstances
export const speeds = {
  walk: 1,
  boat: 2,
};

// By what amount do changes to pace affect the DC of terrain navigation
export const paceModifiers = {
  slow: -5,
  fast: +5,
};

export const weather = {
  none: {
    min: 1,
    max: 5,
    name: 'None',
    effects: '',
  },
  light: {
    min: 6,
    max: 10,
    name: 'Light Rain',
    effects: '',
  },
  medium: {
    min: 11,
    max: 15,
    name: 'Normal Rain',
    effects: '',
  },
  heavy: {
    min: 16,
    max: 19,
    name: 'Heavy',
    effects: 'Visibility is limited to 50 yards. Huge or larger objects can still be distinguished. Missile weapon ranges are halved.',
  },
  torrent: {
    min: 20,
    max: 20,
    name: 'Torrent',
    effects: 'Travel by river is impossible.',
  },
};

// navDC describes what number you must roll equal to or higher to safely navigate
// encChances describes what number you must roll equal to or higher for an encounter to occur
export const terrain = [
  {
    id: 0,
    name: 'Beach',
    navDC: 10,
    encChance: 20,
  },
  {
    id: 1,
    name: 'Jungle No Undead',
    navDC: 10,
    encChance: 20,
  },
  {
    id: 2,
    name: 'Jungle Lesser Undead',
    navDC: 10,
    encChance: 20,
  },
  {
    id: 3,
    name: 'Jungle Greater Undead',
    navDC: 10,
    encChance: 20,
  },
  {
    id: 4,
    name: 'Mountain',
    navDC: 10,
    encChance: 20,
  },
  {
    id: 5,
    name: 'River',
    navDC: 10,
    encChance: 20,
  },
  {
    id: 6,
    name: 'Ruins',
    navDC: 10,
    encChance: 20,
  },
  {
    id: 7,
    name: 'Swamp',
    navDC: 10,
    encChance: 20,
  },
  {
    id: 8,
    name: 'Wasteland',
    navDC: 10,
    encChance: 20,
  },
];
