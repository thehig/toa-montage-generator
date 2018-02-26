export const montage = resolver => ({ navigator, pace, speed, navigationDC, encounterDC } = {}) => {
  const day = () => ({
    navigation: resolver.navigationCheck({
      navigator, pace, speed, DC: navigationDC
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
    ]
  });

  const travel = numDays => {
    const daysOfTravel = [];
    for(let i = 0; i < numDays; i++) {
      const daysTravel = day();
      daysOfTravel.push(daysTravel);
    }
    return daysOfTravel;
  };

  return {
    day,
    travel
  };
};