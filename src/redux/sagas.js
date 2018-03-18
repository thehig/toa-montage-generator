import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { change } from 'redux-form';
import { CONSTS, getOptions } from './montage';
import { montage } from '../logic/wrapper';

// Convert the redux form { values } into typesafe parameters and run
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

function* montageSaga(action) {
  try {
    // Grab default options from state
    const options = yield select(getOptions);
    // Call the runMontage function with the options from state and the action
    const montageResult = yield call(runMontage, { ...options, ...action.payload});

    // Dispatch the montage result 
    yield put({ type: CONSTS.MONTAGE_SUCCESS, payload: montageResult });
    
    // Dispatch an event to redux form updating the 'lost' state based on this run
    yield put(change('MontageForm', 'lost', montageResult.lost));
    yield put(change('MontageForm', 'daysoffset', montageResult.days[montageResult.days.length - 1].index));

  } catch (e) {
    yield put({ type: CONSTS.MONTAGE_ERROR, message: e.message });
  }
}

function* mySaga() {
  yield takeLatest(CONSTS.MONTAGE_SUBMIT, montageSaga);
}

export default mySaga;
