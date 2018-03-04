import { montage } from '../logic/wrapper';

export const CONSTS = {
  MONTAGE_SUBMIT: "MONTAGE_SUBMIT"
};

export const initialState = {
  montage: {
    options: {
      advantage: false,
      disadvantage: false,
      modifier: +6,
      pace: "normal",
      speed: "walk",
      navigationDC: 15,
      encounterDC: 19,
      numdays: 1,
      // lost: false,
      // daysoffset: 0
    }    
  }
};

export const montageSubmit = (montage) => ({
  type: CONSTS.MONTAGE_SUBMIT,
  payload: montage
});

const runMontage = options => montage({
  navigator: {
    modifier: options.modifier,
    advantage: options.advantage,
    disadvantage: options.disadvantage,
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