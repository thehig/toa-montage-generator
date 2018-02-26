import { resolver } from './src/logic/resolver';
import { montage } from './src/logic/montage';
import { paceModifiers, speeds, directions, weather } from './src/data/consts';

const myMontage = montage(
  resolver({ paces: paceModifiers, speeds, directions, weather })
);

const HewHackinstone = {
  modifier: +3,
  // disadvantage: true,
};

const terrain = {
  encounterDC: 20, // Higher the DC the less likely an encounter is
  navigationDC: 15, // Higher the DC the more likely to get lost
};

const options = {
  navigator: HewHackinstone,
  pace: 'fast',
  speed: 'boat',
};

const travelConfig = Object.assign({}, terrain, options);
const numberOfDays = 4;

const myResult = myMontage(travelConfig).travel(numberOfDays);
const lastDay = myResult.days.pop();

if (myResult.completed) {
  console.log(`Successfully travelled for ${numberOfDays} days`);
}

const myLastDayReadout = {
  completed: myResult.completed /*?*/,
  days: lastDay.index /*?*/,
  distances: myResult.days.map(day => day.navigation.distance) /*?*/,
  'total distance': myResult.days.reduce(
    (acc, next) => acc + next.navigation.distance,
    0
  ) /*?*/,
  'reason for stopping': myResult.reasonsForStopping /*?*/,
  'nav rolls': lastDay.navigation.rolls.map(
    roll =>
      `${roll.roll}${roll.options.advantage ? '+' : ''}${roll.options.disadvantage ? '-' : ''}${roll.options.name ? " " + roll.options.name : ''}`
  ) /*?*/,
  'encounter rolls': lastDay.encounters.map(
    encounter => encounter.encounterRoll.roll
  ) /*?*/,
  encounters: lastDay.encounters
    .filter(encounter => encounter.encounter !== false)
    .map(encounter => encounter.encounter) /*?*/,
  'weather rolls': lastDay.weather.map(
    weather => weather.weatherRoll.roll
  ) /*?*/,
};

console.log(myLastDayReadout);
