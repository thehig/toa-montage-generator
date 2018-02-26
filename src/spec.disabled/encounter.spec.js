import resolver, { dice } from '../logic/resolver';

const d20Returns = d20Value => resolver({...dice, d20: () => d20Value, d100: () => 99})();

describe('encounter', () => {
 it('false if roll 10 vs 11', () => expect(d20Returns(10).encounter(11)).toBe(false));
 it('rolls encounter if roll 11 vs 11', () => expect(d20Returns(11).encounter(11)).not.toBe(false));
 it('returns encounter ID', () => expect(d20Returns(11).encounter(11)).toBe(99));
});
