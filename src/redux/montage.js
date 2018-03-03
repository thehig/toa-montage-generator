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

export const reducer = (state = initialState.montage, action) => {
  switch (action.type) {
    case CONSTS.MONTAGE_SUBMIT: return {
      ...state,
      options: {
        ...state.options,
        ...action.payload
      }
    };
    default: return state;
  }
};