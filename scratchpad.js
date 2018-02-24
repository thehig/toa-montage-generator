import { resolver, montage } from './src/logic/resolver';
import { dice } from './src/logic/dice';

const myMontage = montage(resolver(dice));
const HewHackinstone = {
  modifier: +7,
  // advantage: true
};

const DifficultTerrainFastPace = myMontage({
  navigator: HewHackinstone,
  terrain: {
    DC: 20,
    encounterDC: 1
  },
  numberOfDays: 100,
  pace: 'fast',
  speed: 2
});

console.log(DifficultTerrainFastPace);