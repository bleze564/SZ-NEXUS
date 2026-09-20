import { configureStore } from '@reduxjs/toolkit';

import { nexusApi } from '../services/api/api';

export const store = configureStore({
  reducer: {
    [nexusApi.reducerPath]: nexusApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nexusApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;