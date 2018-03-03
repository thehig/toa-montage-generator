import React from 'react';

const DiceRoll = ({ options, roll, rolls }) => (
  <span>
    { console.log(options, roll, )}
    {options && options.name && `${options.name}: `}({rolls.join(', ')}){options && options.versus &&  ` v DC${options.versus}`}
  </span>
);

const MontageEncounter = ({ encounterRoll, encounter }) => (
  <span>
    <DiceRoll {...encounterRoll} /> {encounter && <strong>{` #${encounter}`}</strong>}
  </span>
);

const MontageEncounters = ({ encounters }) => (
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
);

const MontageNavigation = ({
  navigation: {
    direction,
    distance,
    pace,
    paceMod,
    rolls,
    speed,
    startedLost,
    lost,
    becameLost,
    becameFound,
    success,
  },
}) => (
  <div>
    <h4>Navigation:</h4>
    <div>
      <h4>Options:</h4>
      <div>Pace: {pace}</div>
      <div>PaceMod: {paceMod}</div>
      <div>Speed: {speed}</div>
    </div>
    <div>
      <h4>Outcome:</h4>
      <div>Distance: {distance}</div>
      <div>
        Rolls:{' '}
        <ul>
          {rolls.map((roll, index) => (
            <li key={index}>
              <DiceRoll {...roll} />
            </li>
          ))}
        </ul>
      </div>
      <div>Success: {success ? 'true' : 'false'}</div>
      {lost && <div>LOST</div>}
      {startedLost && <div>STARTED LOST</div>}
      {becameLost && <div>Became Lost: {direction} </div>}
      {becameFound && <div>Became Found</div>}
    </div>
  </div>
);

const MontageWeather = ({ weatherRoll, name, effect }) => (
  <span>
    <DiceRoll {...weatherRoll} /> {name}
  </span>
);

const MontageWeathers = ({ weathers }) => (
  <div>
    <h4>Weather:</h4>
    <ul>
      {weathers.map((weather, index) => (
        <li key={index}>
          <MontageWeather {...weather} />
        </li>
      ))}
    </ul>
  </div>
);

const MontageDay = ({ day: { index, encounters, navigation, weather } }) => (
  <div>
    <h3>Day {index}</h3>
    <MontageNavigation navigation={navigation} />
    <MontageEncounters encounters={encounters} />
    <MontageWeathers weathers={weather} />
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
        <h4>Montage Completed:</h4> {completed ? 'yes' : 'no'}
      </div>
      <div>
        <h4>Distance Travelled:</h4> {distance} Hex(es)
      </div>
      {lost && (
        <div>
          <h2>Currently Lost</h2>
        </div>
      )}

      <MontageReasons reasons={reasonsForStopping} />
      <MontageDays days={days} />
    </div>
  );
};

export default MontageOutput;
