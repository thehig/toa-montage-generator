import { dice, resolver } from '../resolver';

describe('Resolver', () => {
  it('takes dice as first param', () => {
    expect(typeof resolver(dice)).toBe("function");
  });

  describe('With dice that always return 1', () => {
    const riggedDice = {
      d2: () => 1;
      d4: () => 1;
      d6: () => 1;
      d8: () => 1;
      d10: () => 1;
      d12: () => 1;
      d20: () => 1;
      d100: () => 1;
    }

    let myResolver;
    beforeEach(() => myResolver = resolver(riggedDice));
    afterEach(() => myResolver = undefined);
    
  })
})