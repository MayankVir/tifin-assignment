import { all } from "redux-saga/effects";
import { conversationWatcherSaga } from "./conversationSaga";

export default function* rootSaga() {
  yield all([conversationWatcherSaga()]);
}
