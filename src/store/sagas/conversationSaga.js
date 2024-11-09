import { put, takeLatest, call } from "redux-saga/effects";
import {
  loadConversationsSuccess,
  loadConversationsFailure,
  loadConversations,
} from "../slices/conversationSlice";

function* loadConversationsSaga() {
  try {
    const response = yield call(fetch, "/mock-api/conversations");
    const data = yield response.json();
    yield put(loadConversationsSuccess(data));
  } catch (error) {
    yield put(loadConversationsFailure(error.message));
  }
}

export function* conversationWatcherSaga() {
  yield takeLatest(loadConversations.type, loadConversationsSaga);
}
