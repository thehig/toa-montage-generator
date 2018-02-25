
// What I want to write is d20({advantage: true, name: "Navigation Check", modifier: +3, versus: 12})
import dice, { d, _d, _dArray } from './src/logic/dice';

// const { d20 } = dice;
// const d20 = d(20);
// const d20 = _d(() => 7);
const d20 = _dArray([12, 13]);

console.log(d20());
console.log(d20({advantage: true}));
console.log(d20({disadvantage: true}));
console.log(d20({advantage: true, disadvantage: true}));


console.log(d20().roll, d20().roll,d20().roll,d20().roll,d20().roll,d20().roll,d20().roll,d20().roll,)





















/* import { resolver } from './src/logic/resolver';

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
} */