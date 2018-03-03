import React from 'react';

const DiceRoll = ({ options, roll, rolls }) => <span>{options && options.name && `${options.name}: `}({roll})</span>;

const MontageEncounter = ({ encounterRoll, encounter }) => (
  <span>
    <DiceRoll {...encounterRoll} /> {encounter && encounter}
  </span>
);

const MontageNavigation = ({
  becameLost,
  direction,
  distance,
  pace,
  paceMod,
  rolls,
  speed,
  startedLost,
  success,
}) => (
  <div>
    <h4>Navigation:</h4>
    <div>Pace: {pace}</div>
    <div>Speed: {speed}</div>
    <div>Distance: {distance}</div>
    <div>PaceMod: {paceMod}</div>
    <div>Rolls: <ul>{rolls.map((roll, index) => <li key={index}><DiceRoll {...roll} /></li>)}</ul></div>
    <div>Success: {success ? "true" : "false"}</div>
    { startedLost && <div>STARTED LOST</div> }
    { becameLost && <div>Became Lost</div> }
    { becameLost && direction && <div>{direction}</div> }
  </div>
);

const MontageWeather = ({ weatherRoll, name, effect }) => (
  <span>
    <DiceRoll {...weatherRoll} /> {name}
  </span>
);

const MontageDay = ({ day: { index, encounters, navigation, weather } }) => (
  <div>
    <h3>Day {index}</h3>
    <MontageNavigation {...navigation} />
    <div>
      <h4>Encounters:</h4>
      <ul>
        {encounters.map((encounter, index) => (
          <li key={index}>
            <MontageEncounter {...encounter} />
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h4>Weather:</h4>
      <ul>
        {weather.map((w, index) => (
          <li key={index}>
            <MontageWeather {...w} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const MontageDays = ({ days }) => (
  <div>
    <h2>Days:</h2>
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
  reasons && reasons.length && reasons.length > 0 ? (
    <div>
      <h4>Reasons for Stopping:</h4>
      <ul>{reasons.map(reason => <li key={reason}>{reason}</li>)}</ul>
    </div>
  ) : null;

const MontageOutput = props => {
  const {
    montage: { days, completed, reasonsForStopping, distance, lost },
  } = props;

  return (
    <div>
      <div>
        <h4>Completed:</h4> {completed ? 'yes' : 'no'}
      </div>
      <div>
        <h4>Distance:</h4> {distance} Hex(es)
      </div>
      <div>
        <h4>Lost:</h4> {lost ? 'yes' : 'no'}
      </div>
      <MontageReasons reasons={reasonsForStopping} />
      <MontageDays days={days} />
    </div>
  );
};

export default MontageOutput;
