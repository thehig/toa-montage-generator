import resolver, { montage, dice } from '../logic/resolver';

const myMontage = montage(
  resolver({
    d2: () => 1,
    d4: () => 2,
    d6: () => 3,
    d8: () => 4,
    d10: () => 5,
    d12: () => 6,
    d20: () => 10,
    d100: () => 50,
  })
);

let rollHigherCounter = 10;
const d20RollsHigher = () => rollHigherCounter++;
const increasingMontage = montage(
  resolver({ ...dice, d6: () => 3, d20: d20RollsHigher })
);

describe('montage', () => {
  beforeEach(() => {
    rollHigherCounter = 10;
  });

  it('returns 10 days if nothing triggers', () =>
    expect(myMontage().length).toBe(10));
  it('returns 1 day if has an encounter on day 1', () =>
    expect(myMontage({ terrain: { encounterDC: 10 } }).length).toBe(1));
  it('returns 2 days if has lost on day 1, found on day 2', () =>
    expect(increasingMontage({ terrain: { DC: 14 } })/*?*/.length).toBe(2)
  );

  // it('returns 1 day if has torrential weather on day 1', () => expect(myMontage().length).toBe(1));
});
