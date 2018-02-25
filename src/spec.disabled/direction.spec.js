import resolver, { dice } from '../logic/resolver';

const d6Returns = d6Value => resolver({...dice, d6: () => d6Value })();


describe('direction', () => {
  it('1 is N', () => expect(d6Returns(1).direction()).toBe('N'));
  it('2 is NE', () => expect(d6Returns(2).direction()).toBe('NE'));
  it('3 is SE', () => expect(d6Returns(3).direction()).toBe('SE'));
  it('4 is S', () => expect(d6Returns(4).direction()).toBe('S'));
  it('5 is SW', () => expect(d6Returns(5).direction()).toBe('SW'));
  it('6 is NW', () => expect(d6Returns(6).direction()).toBe('NW'));
});