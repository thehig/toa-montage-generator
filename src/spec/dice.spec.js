import { d20 as realD20, _dArray } from '../logic/dice';

describe('dice', () => {
  const d20 = realD20;
  it("should roll [ 1 -> 20 ] on a d20", () => {
    for(let i = 0; i < 100; i++) {
      const roll = d20().roll;
      expect(roll).toBeGreaterThanOrEqual(1);
      expect(roll).toBeLessThanOrEqual(20);
    }
  });
});

describe ('fake dice', () => {
  const d20 = _dArray([12, 15]);
  it("should roll 12, 15 on consecutive _d20", () => {
    for(let i = 0; i < 100; i++) {
      expect(d20().roll).toBe(12);
      expect(d20().roll).toBe(15);
    }
  })
});

describe('advantage', () => {
  const d20 = _dArray([12, 15]);
  it("should return 15 if rolled with advantage", () => {
    const result = d20({advantage: true});
    expect(result.roll).toBe(15)
    expect(result.rolls.length).toBe(2);
  });

  it("should return 12 if rolled with disadvantage", () => {
    const result = d20({disadvantage: true});
    expect(result.roll).toBe(12)
    expect(result.rolls.length).toBe(2);
  });

  it("should return only one roll if both adv and disadv", () => {
    const result = d20({advantage: true, disadvantage: true});
    expect(result.rolls.length).toBe(1);
  })
});