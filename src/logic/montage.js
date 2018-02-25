export const montage = resolver => ({ navigator, pace, speed, navigationDC, encounterDC }) => {
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

  return {
    day
  };
};