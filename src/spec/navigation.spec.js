//   fixedRolls.navigation(10, 'slow'),
//   fixedRolls.navigation(10, 'normal'),
//   fixedRolls.navigation(10, 'fast'),
//   fixedRolls.direction()

import { resolver, navigation, dice } from '../logic/resolver';

const d20RollsOne = () => 1;
let rollHigherCounter = 1;
const d20RollsHigher = () => rollHigherCounter++;

let rollLowerCounter = 20;
const d20RollsLower = () => rollLowerCounter--;


describe('navigation', () => {
  beforeEach(() => {
    rollHigherCounter = 1;
    rollLowerCounter = 20;
  });

  describe('with a bad navigator (-1)', () => {
    let myNavigator = resolver({...dice, d20: () => 11})({ modifier: -1 });
    it('fails with a roll of 11 vs 15', () => expect(myNavigator.navigation({DC: 15})).toBe(false));
    it('fails with a roll of 11 vs 11', () => expect(myNavigator.navigation({DC: 11})).toBe(false));
    it('succeeds with a roll of 11 vs 10', () => expect(myNavigator.navigation({DC: 10})).toBe(true));
    it('succeeds with a roll of 11 vs 7', () => expect(myNavigator.navigation({DC: 7})).toBe(true));
  });
  describe('with a good navigator (+1)', () => {
    let myNavigator = resolver({...dice, d20: () => 11})({ modifier: +1 });
    it('fails with a roll of 11 vs 15', () => expect(myNavigator.navigation({DC: 15})).toBe(false));
    it('fails with a roll of 11 vs 13', () => expect(myNavigator.navigation({DC: 13})).toBe(false));
    it('succeeds with a roll of 11 vs 12', () => expect(myNavigator.navigation({DC: 12})).toBe(true));
    it('succeeds with a roll of 11 vs 7', () => expect(myNavigator.navigation({DC: 7})).toBe(true));
  });

  describe('advantage', () => {
    let myResolver = resolver({...dice, d20: d20RollsHigher});
    describe('with a bad navigator (-1)', () => {
      let myNavigator = myResolver({ modifier: -1, advantage: true });
      it('fails with a rolls of [1, 2] vs 2', () => expect(myNavigator.navigation({DC: 2})).toBe(false));
      it('succeeds with a rolls of [1, 2] vs 1', () => expect(myNavigator.navigation({DC: 1})).toBe(true));
    });
    describe('with a good navigator (+1)', () => {
      let myNavigator = myResolver({ modifier: +1, advantage: true });
      it('fails with a rolls of [1, 2] vs 4', () => expect(myNavigator.navigation({DC: 4})).toBe(false));
      it('succeeds with a rolls of [1, 2] vs 2', () => expect(myNavigator.navigation({DC: 2})).toBe(true));
    });
  });

  describe('disadvantage', () => {
    let myResolver = resolver({...dice, d20: d20RollsLower});
    describe('with a bad navigator (-1)', () => {
      let myNavigator = myResolver({ modifier: -1, disadvantage: true });
      it('fails with a rolls of [20, 19] vs 19', () => expect(myNavigator.navigation({DC: 19})).toBe(false));
      it('succeeds with a rolls of [20, 19] vs 18', () => expect(myNavigator.navigation({DC: 18})).toBe(true));
    });
    describe('with a good navigator (+1)', () => {
      let myNavigator = myResolver({ modifier: +1, disadvantage: true });
      it('fails with a rolls of [20, 19] vs 21', () => expect(myNavigator.navigation({DC: 21})).toBe(false));
      it('succeeds with a rolls of [20, 19] vs 20', () => expect(myNavigator.navigation({DC: 20})).toBe(true));
    });
  });

});
