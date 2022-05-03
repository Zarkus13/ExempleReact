import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'message',
  initialState: {
    // list: JSON.parse(localStorage.getItem('messages') || '[]')
    list: []
  },
  reducers: {
    addMessage: (state, action) => {
      console.log('Add Message :', action.payload);
      const messages = state.list.concat([action.payload]);

      // localStorage.setItem('messages', JSON.stringify(messages));

      return {
        list: messages
      }
    }
  }
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;