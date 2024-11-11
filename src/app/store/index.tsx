// store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import preferencesSlice from './preferencesSlice';
import geoLocationsSlice from './geoLocationsSlice';

export const store = configureStore({
  reducer: {
    preferences: preferencesSlice,
    geoLocations: geoLocationsSlice, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
