import { _dArray } from '../logic/dice';
import { resolver } from '../logic/resolver';

import { paceModifiers, speeds, directions } from '../data/consts';

const buildResolver = overrides =>
  resolver(Object.assign({}, { paceModifiers, speeds, directions }, overrides));

describe('resolver', () => {
  it('takes world params and returns an object', () =>
    expect(typeof buildResolver({ some: 'function' })).toBe('object'));

  describe('navigation check', () => {
    it('takes navigator, terrain and pace params', () => {
      const navcheck = buildResolver({
        paces: paceModifiers,
        speeds,
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
      paces: paceModifiers,
      speeds,
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
        paces: paceModifiers,
        speeds,
        dice: { d20: _dArray([11]) },
      }).navigationCheck;
      const navcheckD4Low = buildResolver({
        paces: paceModifiers,
        speeds,
        dice: { d20: _dArray([11]), d4: _dArray([1, 2]) },
      }).navigationCheck;
      const navcheckD4High = buildResolver({
        paces: paceModifiers,
        speeds,
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
  
    describe('lost & direction', () => {
      const navcheckd6 = returnNumber => buildResolver({
        paces: paceModifiers,
        speeds,
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
    const encounter = buildResolver({
      paces: paceModifiers,
      speeds,
      dice: { d20: _dArray([11]) },
    }).encounter;
  });

  describe('weather', () => {});
});
