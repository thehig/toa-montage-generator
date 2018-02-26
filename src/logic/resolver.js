import randomDice from './dice';

export const resolver = ({ dice, paces, speeds, directions, weather }) => {
  const rollA = Object.assign({}, randomDice, dice);

  const navigationCheck = ({
    navigator,
    DC = 10,
    pace = 'normal',
    speed = 'walk',
    lost = false,
  }) => {
    // Start with our default results object
    const navigationResults = {
      rolls: [],
      startedLost: lost,
      pace,
      speed,
    };

    // Figure out what the DC modifier is for the selected pace ('slow', 'normal', 'fast')
    navigationResults.paceMod = paces.hasOwnProperty(pace) ? paces[pace] : 0;

    // Roll the d20 with the navigators adv/disadv and modifier versus the terrain DC
    const navigationCheck = rollA.d20(Object.assign({}, navigator, {
      name: 'navigation check',
      versus: DC + navigationResults.paceMod,
    }));

    // Store the navigation roll
    navigationResults.rolls.push(navigationCheck);

    // Store success and lost (inverse)
    navigationResults.success = navigationCheck.success;
    navigationResults.lost = !navigationCheck.success;

    // Determine the distances for the current mode of travel ('walk', 'boat') measured in hexes per day
    const speedVal = speeds.hasOwnProperty(speed) ? speeds[speed] : 1;

    if (pace === 'slow') {
      // Roll d4. On a low roll, players move -1 speed
      const distanceResult = rollA.d4({ name: `pace: ${pace}` });
      navigationResults.rolls.push(distanceResult);
      navigationResults.distance = distanceResult.roll < 3
        ? speedVal - 1
        : speedVal;
    } else if (pace === 'fast') {
      // Roll a d4. On a high roll, players move +1 speed
      const distanceResult = rollA.d4({ name: `pace: ${pace}` });
      navigationResults.rolls.push(distanceResult);
      navigationResults.distance = distanceResult.roll > 2
        ? speedVal + 1
        : speedVal;
    } else {
      // Normal pace for the mode of travel
      navigationResults.distance = speedVal;
    }

    // If navigation failed, we get lost
    if (!navigationCheck.success) {
      navigationResults.lost = true;
      // Roll a d6 to determine what direction is travelled
      const lostDirection = rollA.d6({ name: 'Lost Direction' });
      navigationResults.rolls.push(lostDirection);
      // Convert to letter notation for Hexes
      navigationResults.direction = directions[lostDirection.roll - 1];
    }

    // Determine the status of the party after this navigation check
    if (!navigationCheck.success && !lost) {
      navigationResults.becameLost = true;
    } else if (!navigationCheck.success && lost) {
      navigationResults.stillLost = true;
    } else if (navigationCheck.success && lost) {
      navigationResults.becameFound = true;
    }

    return navigationResults;
  };

  const encounterCheck = ({ DC = 10 } = {}) => {
    const encounterResult = {};

    encounterResult.encounterRoll = rollA.d20({
      versus: DC,
      name: 'Encounter Chance',
    });
    if (encounterResult.encounterRoll.success) {
      encounterResult.tableRoll = rollA.d100({ name: 'Encounter Table' });
      encounterResult.encounter = encounterResult.tableRoll.roll;
    } else {
      encounterResult.encounter = false;
    }

    return encounterResult;
  };

  const weatherCheck = () => {
    const weatherRoll = rollA.d20('Weather');

    // Find the weather value that matches this roll
    const weatherResult = Object.keys(weather).filter(
      key => {
        const effect = weather[key];
        return weatherRoll.roll >= effect.min && weatherRoll.roll <= effect.max;
      }
    )[0];

    return {
      weatherRoll,
      name: weatherResult,
      effect: weather[weatherResult]
    };
  };

  return {
    navigationCheck,
    encounterCheck,
    weatherCheck
  };
};

// const daysTravel = ({ dice }) =>

// import { dice as defaultDice, roll as defaultRoll } from './dice';

// import {

//   directions as defaultDirections,

//   speeds as defaultSpeeds,

//   paceModifiers as defaultPaceModifiers,

// } from '../data/consts';

// // const navigationCheck =  ({ DC = 15, pace = 'normal' } = {}) => roll(d20, { advantage, disadvantage }) + modifier >= DC + myPaces(pace).paceDC;

// // const paces = ({

// //   dice = dice,

// //   paceModifiers = paceModifiers,

// //   speeds = speeds

// // } = {}) => ({pace = "normal", speed="default"}) => {

// //   switch (pace) {

// //     case 'slow':

// //       return {

// //         paceDC: paceModifiers[pace],

// //         distance: speeds[speed] - (dice.d4() <= 2 && 1) };

// //     case 'fast':

// //       return { paceDC: +5, distance: speeds[speed] + (dice.d4() > 2 && 1) };

// //     default:

// //       return { paceDC: 0, distance: speed };

// //   }

// // };

// const navigationCheckBase = ({

//   dice = defaultDice,

//   roll = defaultRoll,

//   paceModifiers = defaultPaceModifiers,

//   terrain: { id = 0, name = 'DEFAULT_TERRAIN', navDC = 10, encChance = 20 } = {

//   },

// }) => (

//   {

//     // Navigator

//     modifier = 0,

//     pace = 'normal',

//     advantage = false,

//     disadvantage = false,

//   } = {}

// ) => () =>

//   roll(dice.d20, { advantage, disadvantage })(`nav check${advantage ? ' ADV' : ''}${disadvantage ? ' DISADV' : ''}`) + modifier >=

//   navDC + (paceModifiers[pace] || 0);

// export const resolver = (

//   {

//     // World

//     dice = defaultDice,

//     roll = defaultRoll,

//     directions = defaultDirections,

//     speeds = defaultSpeeds,

//     paceModifiers = defaultPaceModifiers,

//     terrain,

//   } = {}

// ) => (

//   {

//     // Navigator

//     survivalMod = 0,

//     miscMod = 0,

//     advantage = false,

//     disadvantage = false,

//     speed = 'default',

//     pace = 'normal',

//   } = {}

// ) => {

//   const navigationCheck = navigationCheckBase({

//     dice,

//     roll,

//     paceModifiers,

//     terrain,

//   })({

//     modifier: survivalMod + miscMod,

//     pace,

//     advantage,

//     disadvantage,

//   });

//   return {

//     navigationCheck,

//   };

// };

// /*

// // const myPaces = paces({ d4 });

// // return {

// //   navigation: ({ DC = 15, pace = 'normal' } = {}) =>

// //     roll(d20, { advantage, disadvantage }) + modifier >=

// //     DC + myPaces(pace).paceDC,

// //   direction: () => directions[d6() - 1],

// //   distance: ({ pace, speed } = {}) => myPaces(pace, speed).distance,

// //   encounter: encounterDC => d20() >= encounterDC && d100(),

// // };

// export const paces = ({ d4 }) => (pace, speed = 1) => {

//   switch (pace) {

//     case 'slow':

//       return { paceDC: -5, distance: speed - (d4() <= 2 && 1) };

//     case 'fast':

//       return { paceDC: +5, distance: speed + (d4() > 2 && 1) };

//     default:

//       return { paceDC: 0, distance: speed };

//   }

// };

// export const resolver = ({ d2, d4, d6, d8, d10, d12, d20, d100 }) => (

//   { modifier = 0, advantage = false, disadvantage = false } = {}

// ) => {

// };

// export const montage = resolver => (

//   {

//     terrain = {},

//     navigator = {},

//     numberOfDays = 10,

//     pace = 'normal',

//     speed = 1,

//   } = {}

// ) => {

//   const myResolver = resolver(navigator);

//   const daysResults = [];

//   let lost = false;

//   for (let i = 0; i < numberOfDays; i++) {

//     const day = {

//       day: i,

//       encounters: [

//         myResolver.encounter(terrain.encounterDC),

//         myResolver.encounter(terrain.encounterDC),

//         myResolver.encounter(terrain.encounterDC),

//       ],

//       distance: myResolver.distance({ speed, pace }),

//     };

//     const navCheck = myResolver.navigation({ DC: terrain.DC, pace });

//     if (!navCheck) {

//       lost = true;

//       day.lost = true;

//       day.direction = myResolver.direction();

//     }

//     daysResults.push(day);

//     // Stop on encounter

//     if(day.encounters.filter(enc => enc !== false).length > 0) break;

//     // Stop on found

//     if(navCheck && lost) break;

//   }

//   return daysResults;

// };

// export default resolver;

//  */
