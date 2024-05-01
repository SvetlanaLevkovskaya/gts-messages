import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import selectedMessagesReducer from './slice/selectedMessages.ts'
import searchSliceReducer from './slice/searchSlice.ts';
import messagesSliceReducer from './slice/messagesSlice.ts';


export const store = configureStore({
  reducer: {
    selectedMessages: selectedMessagesReducer,
    search: searchSliceReducer,
    messages: messagesSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
