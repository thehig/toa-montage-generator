import  commandLineArgs from 'command-line-args';
import  getUsage from 'command-line-usage';
import  { montage, generateReadout, narrate } from './wrapper';

// Configure command-line-args
const optionDefinitions = [
  // Configure navigation check
  {
    group: 'navigator',
    name: 'modifier',
    defaultOption: +3,
    type: Number,
    typeLabel: '[underline]{ (-20=>+20) }',
    description: 'Number to add to navigation checks',
  },
  {
    group: 'navigator',
    name: 'advantage',
    description: 'Roll twice, take the higher',
  },
  {
    group: 'navigator',
    name: 'disadvantage',
    description: 'Roll twice, take the lower',
  },
  {
    group: 'navigation',
    name: 'pace',
    type: String,
    typeLabel: '[underline]{"slow"|"fast"}',
    description: 'How fast to travel (Alters navigationDC, Defaults to normal)',
  },
  {
    group: 'navigation',
    name: 'speed',
    type: String,
    typeLabel: '[underline]{"walk"|"boat"}',
    description: 'What method/speed of travel',
  },
  {
    group: 'terrain',
    name: 'encounterDC',
    type: Number,
    typeLabel: '[underline]{(1->20)}',
    description: 'Roll this or higher to have an encounter',
  },
  {
    group: 'terrain',
    name: 'navigationDC',
    type: Number,
    typeLabel: '[underline]{(1->30)}',
    description: 'Roll this or higher to navigate safely. (Modified by pace)',
  },

  // Configure Montage
  {
    group: 'montage',
    name: 'numdays',
    type: Number,
    description: 'How many days to simulate, assuming no stops/triggers',
  },
  {
    group: 'montage',
    name: 'offset',
    type: Number,
    description:
      'Offset the days number in output by this much for chaining montages',
  },
  {
    group: 'montage',
    name: 'lost',
    type: Boolean,
    typeLabel: '[underline]{true|false}',
    description: "Determine if navigations begins in a 'lost' state",
  },

  // Configure CLI app
  {
    name: 'output',
    type: String,
    description: 'File to write (append or create) to',
  },
  {
    name: 'help',
    alias: 'h',
    description: 'Show this help document',
  },
];

// Configure command-line-usage
const sections = [
  {
    header: 'Tomb of Annihilation Montage Generator',
    content: 'Generates navigation, encounter and weather rolls for D&D5e.',
  },
  {
    header: 'Navigator',
    optionList: optionDefinitions,
    group: ['navigator'],
  },
  {
    header: 'Navigation',
    optionList: optionDefinitions,
    group: ['navigation'],
  },
  {
    header: 'Terrain',
    optionList: optionDefinitions,
    group: ['terrain'],
  },
  {
    header: 'Montage',
    optionList: optionDefinitions,
    group: ['montage'],
  },
  {
    header: 'Misc',
    optionList: optionDefinitions,
    group: '_none',
  },
];
const usage = getUsage(sections);

// Parse incoming options (unless Quokka)
let options;
if (process.env.NODE_ENV !== 'test') {
  options = commandLineArgs(optionDefinitions);
} else {
  // When running using Quokka, these values will be used instead of commandLineArgs
  options = {
    _all: {
      numdays: 5,
    },
    _none: {},
    navigator: {},
    navigation: {},
    terrain: {},
    montage: {},
  };
}

const exit = (code = -1) => {
  console.log(usage);
  process.exit(code);
};

// Show usage document
if (options._all.hasOwnProperty('help')) exit();

try {
  // ===== Run Montage =====
  const travel = montage({
    navigator: {
      modifier: options._all.modifier,
      advantage: options._all.hasOwnProperty('advantage'),
      disadvantage: options._all.hasOwnProperty('disadvantage'),
    },
    pace: options._all.pace,
    speed: options._all.speed,
    encounterDC: options._all.encounterDC,
    navigationDC: options._all.navigationDC,
  }).travel(options._all.numdays, {
    daysOffset: options._all.offset,
    lost: options._all.lost,
  });

  console.log(travel);

  // Generate more manageable output
  const readout = generateReadout(travel);
  console.log(JSON.stringify(readout, null, 2));
  const narration = narrate({
    readout,
    navoptions: { speed: options._all.speed, pace: options._all.pace },
  });
  console.log(narration);
} catch (exception) {
  console.error(exception);
  exit(1);
}
