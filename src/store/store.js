import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import conversationReducer from "./slices/conversationSlice";
import appReducer from "./slices/appSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    conversation: conversationReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
