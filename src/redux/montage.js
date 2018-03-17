import { montage } from '../logic/wrapper';

export const CONSTS = {
  MONTAGE_SUBMIT: "MONTAGE_SUBMIT"
};

export const initialState = {
  montage: {
  }
};

export const montageSubmit = (montage) => ({
  type: CONSTS.MONTAGE_SUBMIT,
  payload: montage
});

const runMontage = options => montage({
  navigator: {
    modifier: Number(options.modifier || 0),
    advantage: Boolean(options['nav-advantage'] && options['nav-advantage'].indexOf('advantage') > -1),
    disadvantage: Boolean(options['nav-advantage'] && options['nav-advantage'].indexOf('disadvantage') > -1),
  },
  pace: options.pace,
  speed: options.speed,
  encounterDC: Number(options.encounterDC || 0),
  navigationDC: Number(options.navigationDC || 0),
}).travel(Number(options.numdays || 0), {
  daysOffset: Number(options.daysoffset || 0),
  lost: Boolean(options.lost),
});


export const reducer = (state = initialState.montage, action) => {
  switch (action.type) {
    case CONSTS.MONTAGE_SUBMIT: {
      const options = {
        ...state.options,
        ...action.payload
      };

      const content = runMontage(options);

      return {
        ...state,
        options,
        content
      };
    }
    default: return state;
  }
};