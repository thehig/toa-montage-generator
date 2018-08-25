// Consts
export const CONSTS = {
  MONTAGE_SUBMIT: 'MONTAGE_SUBMIT',
  MONTAGE_SUCCESS: 'MONTAGE_SUCCESS',
  MONTAGE_ERROR: 'MONTAGE_ERROR',
  MONTAGE_RESET: 'MONTAGE_RESET'
};

// Action Creators
export const montageSubmit = formValues => ({
  type: CONSTS.MONTAGE_SUBMIT,
  payload: formValues
});

// Initial State
export const initialState = {
  montage: {
    montageRunning: false,
    content: null,
    error: null
  }
};

// Selectors
export const getOptions = state => state.montage.options || {};
export const getDays = state => (state.montage.content && state.montage.content.days) || [];

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
    case CONSTS.MONTAGE_RESET: {
      return {
        ...state,
        montageRunning: false,
        error: null,
        content: null
      };
    }
    default:
      return state;
  }
};
