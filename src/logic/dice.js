export const getRandomInt = (min, max) => name => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  // console.log(`d${max}=${result}${name ? name : ''}`);
  return result;
};

export const roll = die => sides => options => {
  // Deconstruct options or configure defaults
  const {
    name = '',
    advantage = false,
    disadvantage = false,
    modifier = 0,
    versus = undefined,
  } = options || {};
  let result = {
    options,
    sides,
    rolls: [die()],
    roll: -1,
  };

  // console.log("name", name, "advantage", advantage, "disadvantage", disadvantage, "modifier", modifier, "versus", versus);

  if (advantage && !disadvantage) {
    result.rolls.push(die());
    result.roll = Math.max(...result.rolls);
  } else if (!advantage && disadvantage) {
    result.rolls.push(die());
    result.roll = Math.min(...result.rolls);
  } else {
    result.roll = result.rolls[0];
  }

  if (versus) {
    result.success = result.roll + modifier >= versus;
  }

  // console.log(
  //   `${name}: ${result.rolls}${versus ? ' vs ' + versus + '' + result.success : ''}`
  // );
  return result;
};

export const d = sides => roll(getRandomInt(1, sides))(sides);
export const _d = generator => roll(generator)('generator');
export const _dArray = results => {
  let index = 0;
  return roll(() => {
    let result = results[index++ % results.length];
    return result;
  })('fixed dice array');
};

export const d2 = d(2);
export const d4 = d(4);
export const d6 = d(6);
export const d8 = d(8);
export const d10 = d(10);
export const d12 = d(12);
export const d20 = d(20);
export const d100 = d(100);
export const dice = { d2, d4, d6, d8, d10, d12, d20, d100 };

export default dice;

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
