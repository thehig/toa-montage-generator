const commandLineArgs = require('command-line-args');
const getUsage = require('command-line-usage');

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
    type: Boolean,
    typeLabel: '[underline]{true|false}',
    description: 'Roll twice, take the higher',
  },
  {
    group: 'navigator',
    name: 'disadvantage',
    type: Boolean,
    typeLabel: '[underline]{true|false}',
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

let options;
if (process.env.NODE_ENV !== 'test') {
  options = commandLineArgs(optionDefinitions);
} else {
  // When running using Quokka, these values will be used instead of commandLineArgs
  options = {
    _all: {},
    navigator: {},
    navigation: {},
    terrain: {},
    montage: {},
  };
}

console.log('option', options);
