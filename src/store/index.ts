import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { messagesReducer, messagesStateName } from './messages';
import { searchReducer, searchStateName } from './search';
import { selectedMessagesReducer, selectedMessagesStateName } from './selectedMessages';

export const store = configureStore({
  reducer: {
    [messagesStateName]: messagesReducer,
    [searchStateName]: searchReducer,
    [selectedMessagesStateName]: selectedMessagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
