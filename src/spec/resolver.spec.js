import { _dArray } from '../logic/dice';
import { resolver } from '../logic/resolver';

import { paceModifiers, speeds, directions, weather } from '../data/consts';

// Take some override props and create a resolver with the default values and overrides
const buildResolver = overrides =>
  resolver(
    Object.assign({}, { paces: paceModifiers, speeds, directions, weather }, overrides)
  );

describe('resolver', () => {
  it('takes world params and returns an object', () =>
    expect(typeof buildResolver({ some: 'function' })).toBe('object'));

  describe('navigation check', () => {
    it('takes navigator, terrain and pace params', () => {
      const navcheck = buildResolver({
        dice: { d20: _dArray([11]) },
      }).navigationCheck;

      const navCheck = navcheck({
        navigator: {},
        DC: 10,
        paceMod: 5,
      });
      expect(typeof navCheck).toBe('object');
    });

    const navcheck = buildResolver({
      dice: { d20: _dArray([11]) },
    }).navigationCheck;

    describe('with modifier (-1)', () => {
      const navigator = { modifier: -1 };

      it('fails with a roll of 11 vs 15', () =>
        expect(navcheck({ navigator, DC: 15 }).success).toBe(false));

      it('fails with a roll of 11 vs 11', () =>
        expect(navcheck({ navigator, DC: 11 }).success).toBe(false));

      it('succeeds with a roll of 11 vs 10', () =>
        expect(navcheck({ navigator, DC: 10 }).success).toBe(true));

      it('succeeds with a roll of 11 vs 7', () =>
        expect(navcheck({ navigator, DC: 7 }).success).toBe(true));
    });

    describe('with modifier (+1)', () => {
      const navigator = { modifier: +1 };

      it('fails with a roll of 11 vs 15', () =>
        expect(navcheck({ navigator, DC: 15 }).success).toBe(false));

      it('fails with a roll of 11 vs 13', () =>
        expect(navcheck({ navigator, DC: 13 }).success).toBe(false));

      it('succeeds with a roll of 11 vs 12', () =>
        expect(navcheck({ navigator, DC: 12 }).success).toBe(true));

      it('succeeds with a roll of 11 vs 7', () =>
        expect(navcheck({ navigator, DC: 7 }).success).toBe(true));
    });

    describe('distance/pace', () => {
      const navcheck = buildResolver({
        dice: { d20: _dArray([11]) },
      }).navigationCheck;
      const navcheckD4Low = buildResolver({
        dice: { d20: _dArray([11]), d4: _dArray([1, 2]) },
      }).navigationCheck;
      const navcheckD4High = buildResolver({
        dice: { d20: _dArray([11]), d4: _dArray([3, 4]) },
      }).navigationCheck;
      const navigator = {};

      describe('on foot', () => {
        it('should have distance 1 when pace is normal', () =>
          expect(navcheck({ navigator }).distance).toBe(1));

        it('should have distance 0 when pace is slow and d4 rolls low', () =>
          expect(navcheckD4Low({ navigator, pace: 'slow' }).distance).toBe(0));
        it('should have distance 1 when pace is slow and d4 rolls high', () =>
          expect(navcheckD4High({ navigator, pace: 'slow' }).distance).toBe(1));

        it('should have distance 1 when pace is fast and d4 rolls low', () =>
          expect(navcheckD4Low({ navigator, pace: 'fast' }).distance).toBe(1));
        it('should have distance 2 when pace is fast and d4 rolls high', () =>
          expect(navcheckD4High({ navigator, pace: 'fast' }).distance).toBe(2));
      });
      describe('with a boat', () => {
        it('should have distance 2 when pace is normal', () =>
          expect(
            navcheck({ navigator, speed: 'boat', pace: 'normal' }).distance
          ).toBe(2));

        it('should have distance 1 when pace is slow and d4 rolls low', () =>
          expect(
            navcheckD4Low({ navigator, speed: 'boat', pace: 'slow' }).distance
          ).toBe(1));
        it('should have distance 2 when pace is slow and d4 rolls high', () =>
          expect(
            navcheckD4High({ navigator, speed: 'boat', pace: 'slow' }).distance
          ).toBe(2));

        it('should have distance 2 when pace is fast and d4 rolls low', () =>
          expect(
            navcheckD4Low({ navigator, speed: 'boat', pace: 'fast' }).distance
          ).toBe(2));
        it('should have distance 3 when pace is fast and d4 rolls high', () =>
          expect(
            navcheckD4High({ navigator, speed: 'boat', pace: 'fast' }).distance
          ).toBe(3));
      });
    });

    describe('lost', () => {
      const navcheckD20 = returnNumber =>
        buildResolver({
          dice: { d20: _dArray(returnNumber) },
        }).navigationCheck;
      it('becomes lost after a failed nav check', () => {
        const check = navcheckD20([2])({ navigator, DC: 12 });
        expect(check.lost).toBe(true);
        expect(check.becameLost).toBe(true);
      });
      it('still lost after continued failed nav check', () => {
        const check = navcheckD20([2])({ navigator, DC: 12, lost: true });
        expect(check.lost).toBe(true);
        expect(check.stillLost).toBe(true);
      });

      it('becomes found after successful nav check', () => {
        const check = navcheckD20([20])({ navigator, DC: 12, lost: true });
        expect(check.lost).toBe(false);
        expect(check.becameFound).toBe(true);
      });
    });

    describe('direction', () => {
      const navcheckd6 = returnNumber =>
        buildResolver({
          dice: { d20: _dArray([11]), d6: _dArray(returnNumber) },
        }).navigationCheck;

      it('should return direction N if fails with a 1', () => {
        const check = navcheckd6([1])({ navigator, DC: 12 });
        expect(check.lost).toBe(true);
        expect(check.direction).toBe('N');
      });

      it('should return direction NE if fails with a 2', () => {
        const check = navcheckd6([2])({ navigator, DC: 12 });
        expect(check.lost).toBe(true);
        expect(check.direction).toBe('NE');
      });

      it('should return direction SE if fails with a 3', () => {
        const check = navcheckd6([3])({ navigator, DC: 12 });
        expect(check.lost).toBe(true);
        expect(check.direction).toBe('SE');
      });

      it('should return direction S if fails with a 4', () => {
        const check = navcheckd6([4])({ navigator, DC: 12 });
        expect(check.lost).toBe(true);
        expect(check.direction).toBe('S');
      });

      it('should return direction SW if fails with a 5', () => {
        const check = navcheckd6([5])({ navigator, DC: 12 });
        expect(check.lost).toBe(true);
        expect(check.direction).toBe('SW');
      });

      it('should return direction NW if fails with a 6', () => {
        const check = navcheckd6([6])({ navigator, DC: 12 });
        expect(check.lost).toBe(true);
        expect(check.direction).toBe('NW');
      });
    });
  });

  describe('encounter', () => {
    const encounterD20 = (d20, d100) =>
      buildResolver({
        dice: { d20: _dArray(d20), d100: _dArray(d100) },
      }).encounterCheck;

    it('returns encounter roll for 20 vs 16', () => {
      const encounterResult = encounterD20([20], [50])({
        DC: 16,
      });
      expect(encounterResult.encounterRoll.success).toBe(true);
      expect(encounterResult.encounter).toBe(50);
    });

    it('returns false for 10 vs 16', () => {
      const encounterResult = encounterD20([10], [50])({
        DC: 16,
      });
      expect(encounterResult.encounterRoll.success).toBe(false);
      expect(encounterResult.encounter).toBe(false);
    });
  });

  describe('weather', () => {
    const weatherD20 = d20 =>
      buildResolver({
        dice: { d20: _dArray(d20) },
      }).weatherCheck;


    it('returns "none" for 1 - 5', () => expect(weatherD20([1, 2, 3, 4, 5])().name).toBe('none'));
    it('returns "light" for 6 - 10', () => expect(weatherD20([6, 7, 8, 9, 10])().name).toBe('light'));
    it('returns "medium" for 11 - 15', () => expect(weatherD20([11, 12, 13, 14, 15])().name).toBe('medium'));
    it('returns "heavy" for 16 - 18', () => expect(weatherD20([16, 17, 18])().name).toBe('heavy'));
    it('returns "torrent" for 19 - 20', () => expect(weatherD20([19, 20])().name).toBe('torrent'));
  });
});
