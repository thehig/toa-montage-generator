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
    const navigationCheck = rollA.d20(
      Object.assign({}, navigator, {
        name: 'Navigation Check',
        versus: Number(DC) + Number(navigationResults.paceMod),
      })
    );

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
    const weatherRoll = rollA.d20({name: 'Weather'});

    // Find the weather value that matches this roll
    const weatherResult = Object.keys(weather).filter(key => {
      const effect = weather[key];
      return weatherRoll.roll >= effect.min && weatherRoll.roll <= effect.max;
    })[0];

    return {
      weatherRoll,
      name: weatherResult,
      effect: weather[weatherResult],
    };
  };

  return {
    navigationCheck,
    encounterCheck,
    weatherCheck,
  };
};

