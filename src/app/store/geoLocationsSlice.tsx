// store/geoLocationSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GeoLocationsState {
  clientGeoLocations: {
    lat: number | null;
    lng: number | null;
  };
  maidGeoLocations: {
    lat: number | null;
    lng: number | null;
  };

}

const initialState: GeoLocationsState = {
  clientGeoLocations: {
    lat: 45.5017, // Montreal latitude
    lng: -73.5673,
  },
  maidGeoLocations: {
    lat: 40.8799866,
    lng: 90.5048004,
  },
 
};

const geoLocationsSlice = createSlice({
  name: 'geolocations',
  initialState,
  reducers: {
    setSelectClientGeolocation: (state, action: PayloadAction<{ lat: number; lng: number }>) => {
      state.clientGeoLocations = action.payload;
    },

    setSelectMaidGeolocation: (state, action: PayloadAction<{ lat: number; lng: number }>) => {
        state.maidGeoLocations = action.payload;
      },
  },
});

export const { setSelectClientGeolocation, setSelectMaidGeolocation } = geoLocationsSlice.actions;
export default geoLocationsSlice.reducer;