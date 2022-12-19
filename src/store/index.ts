import { configureStore } from '@reduxjs/toolkit';
import Default from './reducers/Default';

export const store = configureStore({
  reducer: {
    default: Default,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch