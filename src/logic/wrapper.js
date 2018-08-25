import { resolver as _resolver } from './resolver';
import { montage as _montage } from './montage';
import { paceModifiers, speeds, directions, weather } from './consts';

export const resolver = _resolver({
  paces: paceModifiers,
  speeds,
  directions,
  weather
});

export const montage = _montage(resolver);

export const generateReadout = travel => {
  const lastDay = travel.days[travel.days.length - 1];

  return {
    completed: travel.completed,
    lost: lastDay && lastDay.navigation && lastDay.navigation.lost,
    days: travel.days.length,
    dayNum: lastDay.index,
    distance: `${travel.distance} Hexes`,
    'reason for stopping': travel.reasonsForStopping,
    'nav rolls': lastDay.navigation.rolls.map(
      roll =>
        `${roll.roll}${roll.options.advantage ? '+' : ''}${roll.options.disadvantage ? '-' : ''}${
          roll.options.name ? ' ' + roll.options.name : ''
        }`
    ),
    'encounter rolls': lastDay.encounters.map(encounter => encounter.encounterRoll.roll),
    encounters: lastDay.encounters
      .filter(encounter => encounter.encounter !== false)
      .map(encounter => encounter.encounter),
    'weather rolls': lastDay.weather.map(weather => weather.weatherRoll.roll)
  };
};

export const narrate = ({ readout, navoptions: { speed = 'walk', pace = 'normal' } = {} }) => `
After ${readout.days} day(s) ${speed}ing at a
${pace} pace covering ${readout.distance},
the party ${
  readout.completed
    ? 'completes their montage'
    : 'is stopped by trigger(s):\n\t' + readout['reason for stopping']
}
${readout.lost ? 'but remain lost' : ''}`;
