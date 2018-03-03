import React from 'react';

const DiceRoll = ({ options, roll, rolls }) => <span>({roll})</span>;

const MontageEncounter = ({ encounterRoll, encounter }) =>
  (
    <span>
      <DiceRoll {...encounterRoll} /> { encounter && encounter }
    </span>
  );

const MontageWeather = ({ weatherRoll, name, effect }) => (
  <span>
    <DiceRoll {...weatherRoll} /> {name}
  </span>
);

const MontageDay = ({ day: { index, encounters, navigation, weather } }) => (
  <div>
    Day {index}
    Encounters:
    <ul>
      {encounters.map((encounter, index) => (
        <li key={index}>
          <MontageEncounter {...encounter} />
        </li>
      ))}
    </ul>
    Weather:
    <ul>
      {weather.map((w, index) => (
        <li key={index}>
          <MontageWeather {...w} />
        </li>
      ))}
    </ul>
  </div>
);

const MontageDays = ({ days }) => (
  <div>
    Days:
    <ul>
      {days.map(day => (
        <li key={day.index}>
          <MontageDay day={day} />
        </li>
      ))}
    </ul>
  </div>
);

const MontageReasons = ({ reasons }) =>
  reasons &&
  reasons.length &&
  reasons.length > 0 && (
    <div>
      Reasons for Stopping:
      <ul>{reasons.map(reason => <li key={reason}>{reason}</li>)}</ul>
    </div>
  );

const MontageOutput = props => {
  const {
    montage: { days, completed, reasonsForStopping, distance, lost },
  } = props;

  return (
    <div>
      Completed: {completed ? 'yes' : 'no'}
      Distance: {distance} Hex(es) Lost: {lost ? 'yes' : 'no'}
      <MontageReasons reasons={reasonsForStopping} />
      <MontageDays days={days} />
    </div>
  );
};

export default MontageOutput;
