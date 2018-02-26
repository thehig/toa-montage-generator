import { _dArray } from '../logic/dice';
import { resolver } from '../logic/resolver';
import { montage } from '../logic/montage';

import { paceModifiers, speeds, directions, weather } from '../data/consts';

// Take some override props and create a resolver with the default values and overrides
const buildMontage = overrides =>
  montage(
    resolver(
      Object.assign(
        {},
        { paces: paceModifiers, speeds, directions, weather },
        overrides
      )
    )
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

describe.only('Montage', () => {
  describe('day', () => {
    it('returns an uneventful days travel', () => {
      const day = buildMontage({
        dice: {
          d20: _dArray([
            16, 12, // Navigation with advantage
            15, 4, 12, // Encounters
            3, 6, 12, // Weather
          ]),
          // No d100 override because no Encounter triggers
          // No d6 override because no Navigation fails
          // No d4 override because pace is normal
        },
      })({
        navigator: {
          advantage: true,
        },
        encounterDC: 16,
      }).day();

      // Navigation
      expect(day.navigation.success).toBe(true);
      expect(day.navigation.rolls.length).toBe(1);
      expect(day.navigation.rolls[0].roll).toBe(16);
      expect(day.navigation.rolls[0].rolls.length).toBe(2);
      expect(day.navigation.rolls[0].rolls[0]).toBe(16);
      expect(day.navigation.rolls[0].rolls[1]).toBe(12);
      expect(day.navigation.distance).toBe(1);

      // Encounters
      expect(day.encounters.length).toBe(3);
      expect(day.encounters[0].encounterRoll.roll).toBe(15);
      expect(day.encounters[1].encounterRoll.roll).toBe(4);
      expect(day.encounters[2].encounterRoll.roll).toBe(12);
      expect(day.encounters.filter(enc => enc.encounter !== false).length).toBe(
        0
      );

      // Weather
      expect(day.weather.length).toBe(3);
      expect(day.weather[0].weatherRoll.roll).toBe(3);
      expect(day.weather[0].name).toBe('none');
      expect(day.weather[1].weatherRoll.roll).toBe(6);
      expect(day.weather[1].name).toBe('light');
      expect(day.weather[2].weatherRoll.roll).toBe(12);
      expect(day.weather[2].name).toBe('medium');
    });

    it('returns a bad days travel', () => {
      const day = buildMontage({
        dice: {
          d20: _dArray([
            4, 6, // Navigation with disadvantage
            18, 16, 19, // Encounter rolls
            18, 19, 19, // Weather rolls
          ]),
          d100: _dArray([
            95, 21, 66, // Encounters
          ]),
          d6: _dArray([4]), // Lost direction
          d4: _dArray([1]), // Pace
        },
      })({
        navigator: {
          disadvantage: true
        },
        pace: 'slow',
        encounterDC: 16
      }).day();

      // Navigation
      expect(day.navigation.success).toBe(false);
      expect(day.navigation.becameLost).toBe(true);
      expect(day.navigation.rolls.length).toBe(3);
      expect(day.navigation.rolls[0].roll).toBe(4);
      expect(day.navigation.rolls[0].rolls.length).toBe(2);
      expect(day.navigation.rolls[0].rolls[0]).toBe(4);
      expect(day.navigation.rolls[0].rolls[1]).toBe(6);

      // TODO: No direction if distance == 0
      expect(day.navigation.direction).toBe('S');
      expect(day.navigation.distance).toBe(0);

      // Encounters
      expect(day.encounters.length).toBe(3);
      expect(day.encounters[0].encounterRoll.roll).toBe(18);
      expect(day.encounters[0].encounter).toBe(95);
      expect(day.encounters[1].encounterRoll.roll).toBe(16);
      expect(day.encounters[1].encounter).toBe(21);
      expect(day.encounters[2].encounterRoll.roll).toBe(19);
      expect(day.encounters[2].encounter).toBe(66);
      expect(day.encounters.filter(enc => enc.encounter !== false).length).toBe(
        3
      );

      // Weather
      expect(day.weather.length).toBe(3);
      expect(day.weather[0].weatherRoll.roll).toBe(18);
      expect(day.weather[0].name).toBe('heavy');
      expect(day.weather[1].weatherRoll.roll).toBe(19);
      expect(day.weather[1].name).toBe('torrent');
      expect(day.weather[2].weatherRoll.roll).toBe(19);
      expect(day.weather[2].name).toBe('torrent');
    });
  });

  describe('travel', () => {
    it('runs for 200 days without incident', () => {
      const travel = buildMontage({
        dice: {
          d20: _dArray([
            16, 12, // Navigation with advantage
            15, 4, 12, // Encounters
            3, 6, 12, // Weather
          ]),
          // No d100 override because no Encounter triggers
          // No d6 override because no Navigation fails
          // No d4 override because pace is normal
        },
      })({
        navigator: {
          advantage: true,
        },
        encounterDC: 16,
      }).travel(200);
      
      expect(travel.length).toBe(200);
    });
    it('stops on torrential weather');
    it('stops on encounter');
    it('stops on becameFound');
  });
});
