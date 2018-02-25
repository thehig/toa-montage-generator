import { _dArray } from '../logic/dice';
import { resolver } from '../logic/resolver';

describe('resolver', () => {
  it('takes world params and returns an object', () =>
    expect(typeof resolver({ some: 'function' })).toBe('object'));

  describe('navigation check', () => {
    it('takes navigator, terrain and pace params', () => {
      const navcheck = resolver({ dice: { d20: _dArray([11]) } }).navigationCheck;
      const navCheck = navcheck({
        navigator: {},
        DC: 10,
        paceMod: 5,
      });
      expect(typeof navCheck).toBe('object');
    });

    const navcheck = resolver({ dice: { d20: _dArray([11]) } }).navigationCheck;

    describe('with a bad navigator (-1)', () => {
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

    describe('with a good navigator (+1)', () => {
      const navigator = { modifier: +1 };

      it('fails with a roll of 11 vs 15', () => expect(navcheck({ navigator, DC: 15 }).success).toBe(false));

      it('fails with a roll of 11 vs 13', () => expect(navcheck({ navigator, DC: 13 }).success).toBe(false));

      it('succeeds with a roll of 11 vs 12', () => expect(navcheck({ navigator, DC: 12 }).success).toBe(true));

      it('succeeds with a roll of 11 vs 7', () => expect(navcheck({ navigator, DC: 7 }).success).toBe(true));

    });
  });

  describe('distance', () => {});
  describe('direction', () => {});
  describe('encounter', () => {});
  describe('weather', () => {});
});
