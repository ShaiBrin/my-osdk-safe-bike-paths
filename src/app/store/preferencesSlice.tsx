// store/maidSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PrefencesState {
  services: string[];
  locations: string[];
  selectedServices: string[];
  address: string;
  selectedLocation: string;
  selectedDate: string;
  selectedTime: string;
}

const initialState: PrefencesState = {
  services: ['Broom', 'Window', 'Kitchen'],
  locations: ['Montreal', 'Laval'],
  selectedServices: [],
  address: '',
  selectedLocation: '',
  selectedDate: '', 
  selectedTime: '', 
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setSelectedServices: (state, action: PayloadAction<string[]>) => {
      state.selectedServices = action.payload;
    },
    setSelectedLocation: (state, action: PayloadAction<string>) => {
      state.selectedLocation = action.payload;
    },
    setAddressd: (state, action: PayloadAction<string>) => { // Add setSelectAddress action
      state.selectedDate = action.payload;
    },
    setSelectedDate: (state, action: PayloadAction<string>) => { // Add setSelectedDate action
      state.selectedDate = action.payload;
    },
    setSelectedTime: (state, action: PayloadAction<string>) => { // Add setSelectedTime action
      state.selectedTime = action.payload;
    },
  },
});

export const { setSelectedServices, setSelectedLocation, setAddressd, setSelectedDate, setSelectedTime } = preferencesSlice.actions;
export default preferencesSlice.reducer;
