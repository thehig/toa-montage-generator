import { resolver } from './src/logic/resolver';
import { montage } from './src/logic/montage';
import { paceModifiers, speeds, directions, weather } from './src/data/consts';

const myMontage = montage(
  resolver({ paces: paceModifiers, speeds, directions, weather })
);

const HewHackinstone = {
  modifier: -5,
  disadvantage: true,
};

const terrain = {
  encounterDC: 20,
  navigationDC: 20,
};

const options = {
  navigator: HewHackinstone,
  pace: 'fast',
  speed: 'boat',
};

const travelConfig = Object.assign({}, terrain, options);
const numberOfDays = 4;

const myResult = myMontage(travelConfig).travel(numberOfDays);

if (myResult.completed) {
  console.log(`Successfully travelled for ${numberOfDays} days`);
}
console.log(myResult.days.length, myResult.reasonsForStopping);

const lastDay = myResult.days.pop();

const myLastDayReadout = {
  completed: myResult.completed /*?*/,
  days: lastDay.index/*?*/,
  'reason for stopping': myResult.reasonsForStopping/*?*/,
  'nav rolls': lastDay.navigation.rolls.map(roll => roll.roll) /*?*/,
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
