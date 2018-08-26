import { d20 as realD20, _dArray } from './dice';

describe('dice', () => {
  const d20 = realD20;
  it('should roll [ 1 -> 20 ] on a d20', () => {
    for (let i = 0; i < 100; i++) {
      const roll = d20().roll;
      expect(roll).toBeGreaterThanOrEqual(1);
      expect(roll).toBeLessThanOrEqual(20);
    }
  });
});

describe('fake dice', () => {
  const d20 = _dArray([12, 15]);
  it('should roll 12, 15 on consecutive _d20', () => {
    for (let i = 0; i < 100; i++) {
      expect(d20().roll).toBe(12);
      expect(d20().roll).toBe(15);
    }
  });
});

describe('advantage', () => {
  const d20 = _dArray([12, 15]);
  it('should return 15 if rolled with advantage', () => {
    const result = d20({ advantage: true });
    expect(result.roll).toBe(15);
    expect(result.rolls.length).toBe(2);
  });

  it('should return 12 if rolled with disadvantage', () => {
    const result = d20({ disadvantage: true });
    expect(result.roll).toBe(12);
    expect(result.rolls.length).toBe(2);
  });

  it('should return only one roll if both adv and disadv', () => {
    const result = d20({ advantage: true, disadvantage: true });
    expect(result.rolls.length).toBe(1);
  });
});

describe('versus', () => {
  const d20 = _dArray([12, 15]);
  it('is true if d20 > 10', () => expect(d20({ versus: 10 }).success).toBe(true));
  it('is false if d20 < 20', () => expect(d20({ versus: 20 }).success).toBe(false));

  it('includes the modifier', () => {
    expect(d20({ versus: 10, modifier: -20 }).success).toBe(false);
    expect(d20({ versus: 20, modifier: 10 }).success).toBe(true);
  });
});
