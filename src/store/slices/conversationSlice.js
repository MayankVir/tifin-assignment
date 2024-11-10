import { createSlice } from "@reduxjs/toolkit";

const conversationSlice = createSlice({
  name: "conversation",
  initialState: {
    conversations: [
      // {
      //   message: "Hello, how are you?",
      //   time: new Date().getTime(),
      // },
    ],
    suggestedQuestions: {
      data: [],
      loading: false,
      error: null,
    },
    suggestedQuestionsDrawer: false,
  },
  reducers: {
    fetchSuggestedQuestions: (state) => {
      state.suggestedQuestions.loading = true;
      state.suggestedQuestions.error = null;
    },
    fetchSuggestedQuestionsSuccess: (state, action) => {
      state.suggestedQuestions.loading = false;
      state.suggestedQuestions.data = action.payload;
      state.suggestedQuestions.error = null;
    },
    fetchSuggestedQuestionsFailure: (state, action) => {
      state.suggestedQuestions.loading = false;
      state.suggestedQuestions.error = action.payload;
    },
    sendMessage: (state, action) => {
      state.conversations.push({
        message: action.payload,
        time: new Date().getTime(),
      });
    },
    toggleSuggestedQuestionsDrawer: (state, action) => {
      state.suggestedQuestionsDrawer =
        action.payload === undefined
          ? !state.suggestedQuestionsDrawer
          : action.payload;
    },
  },
});

export const {
  fetchSuggestedQuestions,
  fetchSuggestedQuestionsSuccess,
  fetchSuggestedQuestionsFailure,
  sendMessage,
  toggleSuggestedQuestionsDrawer,
} = conversationSlice.actions;

export default conversationSlice.reducer;
