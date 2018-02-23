import { resolver, distance, dice } from '../logic/resolver';


const loResolver = resolver({...dice, d4:() => 2})();
const hiResolver = resolver({...dice, d4:() => 3})();
describe('distance', () => {

  describe('slow pace', () => {
    it('distance is 0 if d4 rolls low', () => expect(loResolver.distance({pace: "slow"})).toBe(0));
    it('distance is 1 if d4 rolls high', () => expect(hiResolver.distance({pace: "slow"})).toBe(1));

    it('distance with boat is 1 if d4 rolls low', () => expect(loResolver.distance({pace: "slow", speed: 2})).toBe(1));
    it('distance with boat is 2 if d4 rolls high', () => expect(hiResolver.distance({pace: "slow", speed: 2})).toBe(2));
    
  });
  describe('fast pace', () => {
    it('distance is 1 if d4 rolls low', () => expect(loResolver.distance({pace: "fast"})).toBe(1));
    it('distance is 2 if d4 rolls high', () => expect(hiResolver.distance({pace: "fast"})).toBe(2));

    it('distance with boat is 2 if d4 rolls low', () => expect(loResolver.distance({pace: "fast", speed: 2})).toBe(2));
    it('distance with boat is 3 if d4 rolls high', () => expect(hiResolver.distance({pace: "fast", speed: 2})).toBe(3));
  });
});