import { _dArray } from '../logic/dice';
import { resolver } from '../logic/resolver';
import { montage } from '../logic/montage';

import { paceModifiers, speeds, directions, weather } from '../data/consts';

// Take some override props and create a resolver with the default values and overrides
const buildResolver = overrides =>
  resolver(
    Object.assign({}, { paces: paceModifiers, speeds, directions, weather }, overrides)
  );

/*
  Dice rolls for 1 day
    Survival - 2x d20
      if LOST => d6 Direction
      if PACE != normal => d4 Pace
    Encounter - 3 x d20
      if ENCOUNTER: d100
    Weather - d20
*/

/*
  TODO:
    Create a resolver that will return the dice values I want, in order
      {
        d20: nav, nav?, encounter, encounter, encounter, weather
        d100: encounter?, encounter?, encounter?
        d6: direction?
        d4: pace?
      }
 */

const aGoodDaysResolver = buildResolver({
  dice: {
    d20: _dArray([
      16, 12,     // Navigation with advantage
      15, 4, 12,  // Encounters
      3, 6, 12    // Weather
    ])
    // No d100 override because no Encounter triggers
    // No d6 override because no Navigation fails
    // No d4 override because pace is normal
  }
});

const day = {
  navigation: aGoodDaysResolver.navigationCheck({}),
  encounters: [
    aGoodDaysResolver.encounterCheck(),
    aGoodDaysResolver.encounterCheck(),
    aGoodDaysResolver.encounterCheck(),
  ],
  weather: [
    aGoodDaysResolver.weatherCheck(),
    aGoodDaysResolver.weatherCheck(),
    aGoodDaysResolver.weatherCheck(),
  ]
};

console.log(JSON.stringify(day));

describe('Montage', () => {
  it('takes a resolver as a parameter');
  it('takes param numDays');

  it('runs for the specified numDays if no triggers stop it');

  describe('day solver', () => {
    it('stops on torrential weather');
    it('stops on encounter');
    it('stops on becameFound');
  });
});