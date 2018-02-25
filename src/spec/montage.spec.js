import { _dArray } from '../logic/dice';
import { resolver } from '../logic/resolver';
import { montage } from '../logic/montage';

import { paceModifiers, speeds, directions, weather } from '../data/consts';

// Take some override props and create a resolver with the default values and overrides
const buildResolver = overrides =>
  resolver(
    Object.assign({}, { paces: paceModifiers, speeds, directions, weather }, overrides)
  );

describe('Montage', () => {
  it('takes a resolver as a parameter');
  it('takes param numDays');
  
  it('runs for the specified numDays if no triggers stop it');
  describe('triggers', () => {
    it('stops on torrential weather');
    it('stops on encounter');
    it('stops on becameFound');
  });
});