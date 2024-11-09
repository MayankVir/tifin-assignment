import { createSlice } from "@reduxjs/toolkit";

const conversationSlice = createSlice({
  name: "conversation",
  initialState: {
    conversations: [],
    loading: false,
    error: null,
  },
  reducers: {
    loadConversations: (state) => {
      state.loading = true;
    },
    loadConversationsSuccess: (state, action) => {
      state.loading = false;
      state.conversations = action.payload;
    },
    loadConversationsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    sendMessage: (state, action) => {
      state.conversations.push(action.payload);
    },
  },
});

export const {
  loadConversations,
  loadConversationsSuccess,
  loadConversationsFailure,
  sendMessage,
} = conversationSlice.actions;

export default conversationSlice.reducer;
