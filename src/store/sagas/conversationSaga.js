import { put, takeLatest, call } from "redux-saga/effects";
import {
  fetchSuggestedQuestions,
  fetchSuggestedQuestionsSuccess,
  fetchSuggestedQuestionsFailure,
} from "../slices/conversationSlice";
import { getSuggestedQuestionsService } from "../../services/conversations";

function* fetchSuggestedQuestionsSaga(action) {
  try {
    const response = yield call(getSuggestedQuestionsService, action.payload);
    yield put(fetchSuggestedQuestionsSuccess(response));
  } catch (error) {
    yield put(fetchSuggestedQuestionsFailure(error.message));
  }
}

export function* conversationWatcherSaga() {
  yield takeLatest(fetchSuggestedQuestions.type, fetchSuggestedQuestionsSaga);
}
