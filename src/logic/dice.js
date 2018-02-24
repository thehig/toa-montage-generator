export const getRandomInt = (min, max) => (name) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`d${max}=${result}: ${name}`);
  return result;
}

export const d = num => () => getRandomInt(1, num);

export const d2 = d(2);
export const d4 = d(4);
export const d6 = d(6);
export const d8 = d(8);
export const d10 = d(10);
export const d12 = d(12);
export const d20 = d(20);
export const d100 = d(100);
export const dice = { d2, d4, d6, d8, d10, d12, d20, d100 };

export const roll = (
  dice,
  { advantage = false, disadvantage = false } = {},
  name = ''
) => {
  if (advantage && !disadvantage) return Math.max(dice('roll adv'), dice('roll adv'));
  if (!advantage && disadvantage) return Math.min(dice('roll disadv'), dice('roll disadv'));
  return dice();
};
/* 
// Randomness tester
let iterations = 100000;
let results = [];

const sides = 20;
const dice = d20;

for(let i = 0; i < sides; i++) {
  results.push(0);
}

for(let i = 0; i < iterations; i++) {
  const roll = dice();
  results[roll - 1]++;
}

console.log(results);
*/
