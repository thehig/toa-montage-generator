import { _dArray } from './src/logic/dice';
import { resolver } from './src/logic/resolver';
// import { montage } from './src/logic/montage';

import { paceModifiers, speeds, directions, weather } from './src/data/consts';

// Take some override props and create a resolver with the default values and overrides
const buildResolver = overrides =>
  resolver(
    Object.assign({}, { paces: paceModifiers, speeds, directions, weather }, overrides)
  );

const aGoodDaysResolver = buildResolver({
  dice: {
    d20: _dArray([
      16, 12,     // Navigation with advantage
      15, 4, 12,  // Encounters
      3, 5, 2     // Weather
    ])
    // No d100 override because no Encounter triggers
    // No d6 override because no Navigation fails
    // No d4 override because pace is normal
  }
});

const day = {
  navigation: aGoodDaysResolver.navigationCheck({
    navigator: {
      advantage: true
    }
  }),
  encounters: [
    aGoodDaysResolver.encounterCheck({ DC: 16 }),
    aGoodDaysResolver.encounterCheck({ DC: 16 }),
    aGoodDaysResolver.encounterCheck({ DC: 16 }),
  ],
  weather: [
    aGoodDaysResolver.weatherCheck(),
    aGoodDaysResolver.weatherCheck(),
    aGoodDaysResolver.weatherCheck(),
  ]
};

console.log(JSON.stringify(day, null, 4));