import { roll } from '../resolver';

const d20RollsOne = () => 1;
let rollHigherCounter = 1;
const d20RollsHigher = () => rollHigherCounter++;

let rollLowerCounter = 20;
const d20RollsLower = () => rollLowerCounter--;

describe('roll', () => {
  beforeEach(() => {
    rollHigherCounter = 1;
    rollLowerCounter = 20;
  });

  it('rolls without adv or disadv', () => expect(roll(d20RollsOne)).toBe(1));

  it('rolls with adv', () => {
    expect(roll(d20RollsHigher, { advantage: true })).toBe(2));
    expect(roll(d20RollsLower, { advantage: true })).toBe(20));
  });

  it('rolls with disadv', () => {
    expect(roll(d20RollsHigher, { disadvantage: true })).toBe(1));
    expect(roll(d20RollsLower, { disadvantage: true })).toBe(19);
  });

  it('rolls with both', () => {
    expect(roll(d20RollsHigher, { advantage: true, disadvantage: true })).toBe(1));
    expect(roll(d20RollsLower, { advantage: true, disadvantage: true })).toBe(20));
  });
});
