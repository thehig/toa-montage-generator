import { resolver } from './src/logic/resolver';
import { montage } from './src/logic/montage';
import { paceModifiers, speeds, directions, weather } from './src/data/consts';

// Configure resolver
//    paces: { 'slow': -5, 'fast': +5 }
//    speeds: { 'walk': 1, 'boat': 2 }
//    directions: ['N', 'NE', 'SE', 'S', 'SW', 'NW']
//    weather: [ none: { min: 1, max: 5, name: 'None', effects: '', }, ... ]
const resolverConfig = {
  paces: paceModifiers, speeds, directions, weather
};

// Configure navigation check
//    navigator:
//      modifier:     Number to add to navigation checks
//      advantage:    Roll twice, take the higher
//      disadvantage: Roll twice, take the lower
//    pace:           How fast to travel
//    speed:          What method/speed of travel
//    encounterDC:    Roll this or higher to have an encounter
//    navigationDC:   Roll this or higher to navigate safely
const navcheckOptions = {
  navigator: {
    modifier: +3,
    advantage: true
  },
  pace: "fast",
  speed: "boat",
  encounterDC: 20, // Higher the DC the less likely an encounter is
  navigationDC: 15 // Higher the DC the more likely to get lost
};

// Configure Montage
//    numberOfDays:   How many days to simulate, assuming no stops/triggers
//    montageStartState:
//      daysOffset:   Offset the days number in output by this much for chaining montages
//      lost:         Determine if navigations begins in a 'lost' state
const numberOfDays = 4;
const montageStartState = {
  daysOffset: 22,
  lost: true
};

const travel = montage(resolver(resolverConfig)) (navcheckOptions) .travel(numberOfDays, montageStartState);

const lastDay = travel.days.pop();
if (travel.completed) {
  console.log(`Successfully travelled for ${numberOfDays} days`);
}

const myLastDayReadout = {
  completed: travel.completed,
  days: travel.days.length,
  dayNum: lastDay.index,
  distance: `${travel.distance} Hexes`,
  'reason for stopping': travel.reasonsForStopping,
  'nav rolls': lastDay.navigation.rolls.map(
    roll =>
      `${roll.roll}${roll.options.advantage ? '+' : ''}${roll.options.disadvantage ? '-' : ''}${roll.options.name ? ' ' + roll.options.name : ''}`
  ),
  'encounter rolls': lastDay.encounters.map(
    encounter => encounter.encounterRoll.roll
  ),
  encounters: lastDay.encounters
    .filter(encounter => encounter.encounter !== false)
    .map(encounter => encounter.encounter),
  'weather rolls': lastDay.weather.map(
    weather => weather.weatherRoll.roll
  ),
};

console.log(myLastDayReadout);
