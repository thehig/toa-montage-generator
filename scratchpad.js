import { resolver } from './src/logic/resolver';

import * as defaultConsts from './src/data/consts';
// console.log(defaultConsts);

const world = resolver(defaultConsts);

const HewHackinstone = {
  survivalMod: +5,
  miscMod: +2
}

const myResolver = world(HewHackinstone);
for(let i = 0; i < 10; i ++) {
  console.log(myResolver.navigationCheck());
}