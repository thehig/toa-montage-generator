export const getRandomInt = (min, max) => () =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const d2 = getRandomInt(1, 2);
const d4 = getRandomInt(1, 4);
const d6 = getRandomInt(1, 6);
const d8 = getRandomInt(1, 8);
const d10 = getRandomInt(1, 10);
const d12 = getRandomInt(1, 12);
const d20 = getRandomInt(1, 20);
const d100 = getRandomInt(1, 100);

export const dice = { d2, d4, d6, d8, d10, d12, d20, d100 };

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

export const roll = (dice, { advantage = false, disadvantge = false }) => {
  if (advantage && !disadvantge) return Math.ceil([dice(), dice()]);
  if (!advantage && disadvantge) return Math.floor([dice(), dice()]);
  return dice();
};

export const directions = ['N', 'NE', 'SE', 'S', 'SW', 'NW'];
export const paces = (pace, speed = 1) => {
  switch (pace) {
    case 'slow':
      return { navDC: -5, distance: speed - (d4() <= 2 && 1) };
    case 'fast':
      return { navDC: +5, distance: speed + (d4() > 2 && 1) };
    default:
      return { navDC: 0, distance: speed };
  }
};

export const resolver = ({ d2, d4, d6, d8, d10, d12, d20, d100 }) => ({
  modifier = 0,
  advantage = false,
  disadvantge = false,
}) => ({
  navigation: ({ navigationDC = 15, pace = 'normal' }) =>
    roll(d20, { advantage, disadvantge }) + modifier >
    navigationDC + paces(pace).navDC,
  direction: () => directions[d6()],
  distance: ({ pace, speed }) => paces(pace, speed).distance,
  encounter: encounterDC => d20() >= encounterDC && d100(),
});

export const montage = resolver => ({
  numberOfDays = 10,
  terrain,
  pace = "normal",
  speed = 1,
  navigator,
}) => () => {
  const myResolver = resolver(navigator);

  const daysResults = [];
  let lost = false;

  for (let i = 0; i < numberOfDays; i++) {
    const navSuccess = myResolver.navigation({ navigationDC: terrain.navigationDC, pace });
    const day = {
      day: i,
      encounters: [myResolver.encounter(terrain.encounterDC), myResolver.encounter(terrain.encounterDC), myResolver.encounter(terrain.encounterDC)],
      distance: myResolver.distance({ speed, pace })
    };
    if(!navSuccess) {
      lost = true;
      day.lost = true;
      day.direction = myResolver.direction()
    }
    
    daysResults.push(day);
  }

  return daysResults;
};

// const randomResolver = resolver(dice);

// const navigator = { modifier: 0 };
// const riggedResolver = resolver({
//   d2,
//   d4: () => 2,
//   d6: () => 3,
//   d8,
//   d10,
//   d12,
//   d20: () => 7,
//   d100: () => 99,
// });

// const fixedRolls = riggedResolver(navigator);

// console.log(
//   fixedRolls.navigation(10, 'slow'),
//   fixedRolls.navigation(10, 'normal'),
//   fixedRolls.navigation(10, 'fast'),
//   fixedRolls.direction()
// );

// console.log(
//   'distance',
//   'slow',
//   fixedRolls.distance('slow'),
//   'normal',
//   fixedRolls.distance('normal'),
//   'fast',
//   fixedRolls.distance('fast')
// );

// console.log(
//   'distance with boat',
//   'slow',
//   fixedRolls.distance('slow', 2),
//   'normal',
//   fixedRolls.distance('normal', 2),
//   'fast',
//   fixedRolls.distance('fast', 2)
// );

// console.log('encounter', fixedRolls.encounter(7));

// const myMontage = montage(randomResolver)({
//   navigator,
//   numberOfDays: 10,
//   terrain: {
//     navigationDC: 10,
//     encounterDC: 18
//   }
// })

// console.log('montage', myMontage());

export default resolver;