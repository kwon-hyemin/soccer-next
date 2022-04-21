import { all } from 'redux-saga/effects';
import { watchJoin } from "./userSaga";
import * as _ from 'lodash'

export default function* rootSaga() {
    yield all([watchJoin()]);
    // watchJoin()
  }