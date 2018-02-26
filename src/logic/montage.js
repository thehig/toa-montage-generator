export const montage = resolver => (
  { navigator, pace, speed, navigationDC, encounterDC } = {}
) => {
  const day = () => ({
    navigation: resolver.navigationCheck({
      navigator,
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

  const travel = numDays => {
    const result = {
      days: [],
      completed: true,
      reasonsForStopping: []
    };
    for (let i = 0; i < numDays; i++) {
      if(result.completed === false) break;
      
      const daysTravel = day();
      daysTravel.index = i + 1;

      result.days.push(daysTravel);

      if (daysTravel.navigation.becameFound) {
        result.completed = false;
        result.reasonsForStopping.push("Became Found");
      }
      if (daysTravel.encounters.filter(enc => enc.encounter !== false) > 0){
        result.completed = false;
        result.reasonsForStopping.push("Encounter(s)");
      }
      if (daysTravel.weather.filter(weat => weat.name === "torrent") > 0) {
        result.completed = false;
        result.reasonsForStopping.push("Weather");
      }
    }
    console.log(JSON.stringify(result, null, 2));
    return result;
  };

  return {
    day,
    travel,
  };
};
