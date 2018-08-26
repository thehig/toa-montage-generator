import { call, put, all, select, takeLatest } from 'redux-saga/effects';
import { change, actionTypes as reduxActionTypes } from 'redux-form';
import { CONSTS, getOptions, getDays } from './montage';
import { montage } from '../logic/wrapper';

// Actions will be listened for and dispatched using this form name
const form = 'MontageOptions';

// Convert the redux form { values } into typesafe parameters and run
const runMontage = options =>
  montage({
    navigator: {
      modifier: Number(options.modifier || 0),
      advantage: Boolean(
        options['nav-advantage'] && options['nav-advantage'].indexOf('advantage') > -1
      ),
      disadvantage: Boolean(
        options['nav-advantage'] && options['nav-advantage'].indexOf('disadvantage') > -1
      )
    },
    pace: options.pace,
    speed: options.speed,
    encounterDC: Number(options.encChance),
    navigationDC: Number(options.navDC)
  }).travel(Number(options.numdays), {
    daysOffset: Number(options.daysoffset || 0),
    lost: Boolean(options['starts-lost'] && options['starts-lost'].indexOf('lost') > -1)
  });

// When the specific redux-form is reset, dispatch our own reset as well
function* resetMontageSaga(action) {
  if (action && action.meta && action.meta.form && action.meta.form === form) {
    yield put({ type: CONSTS.MONTAGE_RESET });
  }
}

// Take action props, run saga, and dispatch error, or success and redux-form changes
function* montageSaga(action) {
  try {
    // Grab default options from state
    const stateOptions = yield select(getOptions);
    const options = { ...stateOptions, ...action.payload };
    // Call the runMontage function with the options from state and the action
    const montageResult = yield call(runMontage, options);

    // Retreive previous days
    const days = yield select(getDays);
    const daysRemaining = Math.max(options.numdays - montageResult.days.length, 0);
    // Retain previous days travel
    montageResult.days = [...days, ...montageResult.days];

    // Dispatch the montage result
    yield put({ type: CONSTS.MONTAGE_SUCCESS, payload: montageResult });

    // Dispatch events to redux-form updating the input state based on this run
    yield put(change(form, 'starts-lost', montageResult.lost ? 'lost' : ''));
    yield put(change(form, 'daysoffset', montageResult.days[montageResult.days.length - 1].index));
    yield put(change(form, 'numdays', daysRemaining));
  } catch (e) {
    yield put({ type: CONSTS.MONTAGE_ERROR, message: e.message, cause: action });
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(CONSTS.MONTAGE_SUBMIT, montageSaga),
    takeLatest(reduxActionTypes.RESET, resetMontageSaga)
  ]);
}
