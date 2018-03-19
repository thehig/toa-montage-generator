export const montage = resolver => (
  { navigator, pace, speed, navigationDC, encounterDC } = {}
) => {
  const day = (lost = false) => ({
    navigation: resolver.navigationCheck({
      navigator,
      lost,
      pace,
      speed,
      DC: navigationDC,
    }),
    encounters: [
      resolver.encounterCheck({ DC: encounterDC }),
      resolver.encounterCheck({ DC: encounterDC }),
      resolver.encounterCheck({ DC: encounterDC }),
    ],
    weather: [
      resolver.weatherCheck(),
      resolver.weatherCheck(),
      resolver.weatherCheck(),
    ],
  });

  const travel = (numDays, { lost = false, daysOffset = 0 } = {}) => {
    const result = {
      startedLost: lost,
      days: [],
      completed: true,
      reasonsForStopping: [],
      distance: 0,
      lost: lost
    };
    for (let i = 0; i < numDays; i++) {
      if (result.completed === false) break;

      // Feed the previous days lost result in to start this days
      const daysTravel = day(result.lost);
      result.lost = daysTravel.navigation.lost;

      daysTravel.index = i + 1 + daysOffset;

      result.days.push(daysTravel);
      result.distance = result.distance + Number(daysTravel.navigation.distance);
      result.lost = daysTravel.navigation.lost;

      // Trigger stop events
      if (daysTravel.navigation.becameFound) {
        result.completed = false;
        result.reasonsForStopping.push('Became Found');
      }
      if (
        daysTravel.encounters.filter(enc => enc.encounter !== false).length > 0
      ) {
        result.completed = false;
        result.reasonsForStopping.push('Encounter(s)');
      }
      if (
        daysTravel.weather.filter(weat => weat.name === 'torrent').length > 0
      ) {
        result.completed = false;
        result.reasonsForStopping.push('Weather');
      }
    }
    return result;
  };

  return {
    day,
    travel,
  };
};
