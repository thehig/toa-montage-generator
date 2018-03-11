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
    modifier: options.modifier,
    advantage: options['nav-advantage'] && options['nav-advantage'].indexOf('advantage') > -1,
    disadvantage: options['nav-advantage'] && options['nav-advantage'].indexOf('disadvantage') > -1,
  },
  pace: options.pace,
  speed: options.speed,
  encounterDC: options.encounterDC,
  navigationDC: options.navigationDC,
}).travel(options.numdays, {
  daysOffset: options.daysoffset,
  lost: options.lost,
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