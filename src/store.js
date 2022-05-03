import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './reducers/messagesReducer';

const store = configureStore({
  reducer: {
    messages: messagesReducer
  }
});

export default store;