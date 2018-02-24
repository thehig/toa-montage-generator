import { resolver } from './src/logic/resolver';

import * as defaultConsts from './src/data/consts';
// console.log(defaultConsts);

const world = resolver(defaultConsts);

const HewHackinstone = {
  survivalMod: +0,
  miscMod: +2,
  // advantage: true
}

const myResolver = world(HewHackinstone);
for(let i = 0; i < 10; i ++) {
  console.log(myResolver.navigationCheck());
}