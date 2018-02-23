//   fixedRolls.navigation(10, 'slow'),
//   fixedRolls.navigation(10, 'normal'),
//   fixedRolls.navigation(10, 'fast'),
//   fixedRolls.direction()

import { resolver, navigation, dice } from '../resolver';

const d20RollsOne = () => 1;
let rollHigherCounter = 1;
const d20RollsHigher = () => rollHigherCounter++;

let rollLowerCounter = 20;
const d20RollsLower = () => rollLowerCounter--;


describe('navigation', () => {
  let myResolver;
  beforeEach(() => {
    rollHigherCounter = 1;
    rollLowerCounter = 20;
    myResolver = resolver({...dice, d20: () => 11})
  });

  describe('with a bad navigator (-1)', () => {
    it('fails with a roll of 11 vs 15', () => expect(myResolver({ modifier: -1}).navigation(15)).toBe(false));
    it('fails with a roll of 11 vs 11', () => expect(myResolver({ modifier: -1}).navigation(11)).toBe(false));
    it('succeeds with a roll of 11 vs 10', () => expect(myResolver({ modifier: -1}).navigation(12)).toBe(true));
  });
  describe('with a good navigator (+1)', () => {
    let myNavigator = myResolver({ modifier: +1 });
    it('fails with a roll of 11 vs 15', () => expect(myNavigator.navigation(15)).toBe(false));
    it('fails with a roll of 11 vs 13', () => expect(myNavigator.navigation(13)).toBe(false));
    it('succeeds with a roll of 11 vs 12', () => expect(myNavigator.navigation(12)).toBe(true));
  });
});
