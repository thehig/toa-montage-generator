import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';

// Configure navigation check
//    navigator:
//      modifier:     Number to add to navigation checks
//      advantage:    Roll twice, take the higher
//      disadvantage: Roll twice, take the lower
//    pace:           How fast to travel
//    speed:          What method/speed of travel
//    encounterDC:    Roll this or higher to have an encounter
//    navigationDC:   Roll this or higher to navigate safely


// Configure Montage
//    numberOfDays:   How many days to simulate, assuming no stops/triggers
//    montageStartState:
//      daysOffset:   Offset the days number in output by this much for chaining montages
//      lost:         Determine if navigations begins in a 'lost' state
const numberOfDays = 1;
const montageStartState = {
  // daysOffset: 22,
  // lost: true
};


const optionDefinitions = [
  // Configure navigation check
  //    navigator:
  //      modifier:     Number to add to navigation checks
  //      advantage:    Roll twice, take the higher
  //      disadvantage: Roll twice, take the lower
  //    pace:           How fast to travel
  //    speed:          What method/speed of travel
  //    encounterDC:    Roll this or higher to have an encounter
  //    navigationDC:   Roll this or higher to navigate safely
  { name: 'navigatorModifier', type: Number },
  { name: 'navigatorAdvantage', type: Boolean },
  { name: 'navigatorDisadvantage', type: Boolean },
  { name: 'pace', type: String },
  { name: 'speed', type: String },
  { name: 'encounterDC', type: Number },
  { name: 'navigationDC', type: Number },

  // Configure Montage
  //    numberOfDays:   How many days to simulate, assuming no stops/triggers
  //    montageStartState:
  //      daysOffset:   Offset the days number in output by this much for chaining montages
  //      lost:         Determine if navigations begins in a 'lost' state
  { name: 'numberOfDays', type: Number },
  { name: 'daysOffset', type: Number },
  { name: 'lost', type: Boolean },

  // Configure CLI app
  { name: 'outputFile', type: String },
  { name: 'verbose', type: Boolean }
]

const options = commandLineArgs(optionDefinitions)
options
