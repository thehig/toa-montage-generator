import { montage, generateReadout, narrate } from './src/logic/wrapper';

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
  pace: "slow",
  speed: "walk",
  encounterDC: 20, // Higher the DC the less likely an encounter is
  navigationDC: 1 // Higher the DC the more likely to get lost
};

// Configure Montage
//    numberOfDays:   How many days to simulate, assuming no stops/triggers
//    montageStartState:
//      daysOffset:   Offset the days number in output by this much for chaining montages
//      lost:         Determine if navigations begins in a 'lost' state
const numberOfDays = 1;
const montageStartState = {
  // daysOffset: 22,
  // lost: true
};

// ===== Run Montage =====
const travel = montage(navcheckOptions) .travel(numberOfDays, montageStartState);

// travel
console.log("=== travel");
console.log("keys:", Object.keys(travel));
console.log("keys:", Object.keys(travel.days));
console.log(travel.completed);
console.log(travel.reasonsForStopping);
console.log(travel.distance);
console.log(travel.lost);

console.log("=== day[0]");
const day = travel.days[0];
console.log("keys:", Object.keys(day));
console.log(day.index);

console.log("=== day[0].navigation");
const nav = day.navigation;
console.log("keys:", Object.keys(nav));
console.log(nav);

console.log("=== day[0].encounters[0]");
const enc = day.encounters[0];
console.log("keys:", Object.keys(enc));
console.log(enc);

console.log("=== day[0].weather[0]");
const wthr = day.weather[0];
console.log("keys:", Object.keys(wthr));
console.log(wthr);


const readout = travel.days.map(day => ({
  options: day.navigation.rolls.map(roll => roll.options),
}));

console.log(JSON.stringify(readout, null, 2));
// console.log(readout);
