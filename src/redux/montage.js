// Consts
export const CONSTS = {
  MONTAGE_SUBMIT: "MONTAGE_SUBMIT",
  MONTAGE_SUCCESS: "MONTAGE_SUCCESS",
  MONTAGE_ERROR: "MONTAGE_ERROR"
};

// Initial State
export const initialState = {
  montage: {
    montageRunning: false
  }
};

// Action Creators
export const montageSubmit = (montage) => ({
  type: CONSTS.MONTAGE_SUBMIT,
  payload: montage
});

// Selectors
export const getOptions = (state) => state.options;

// Reducer
export const reducer = (state = initialState.montage, action) => {
  switch (action.type) {
    case CONSTS.MONTAGE_SUBMIT: {
      return {
        ...state,
        montageRunning: true
      };
    }
    case CONSTS.MONTAGE_SUCCESS: {
      return {
        ...state,
        montageRunning: false,
        content: action.payload
      };
    }
    case CONSTS.MONTAGE_ERROR: {
      return {
        ...state,
        montageRunning: false,
        error: action.message
      };
    }
    default: return state;
  }
};