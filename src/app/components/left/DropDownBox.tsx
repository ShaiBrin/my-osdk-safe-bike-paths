// components/DropdownBoxLocationServices.tsx

'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, TextField, Chip, useTheme, Button } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Autocomplete from '@mui/lab/Autocomplete';
import { setSelectedLocation, setSelectedServices } from '@/app/store/preferencesSlice';
import Link from 'next/link';
import { RootState } from '@/app/store';

const DropDownBox = () => {
  const { services, selectedServices, selectedLocation } = useSelector((state: RootState) => state.preferences);
  const dispatch = useDispatch();
  const theme = useTheme();

  const [locations, setLocations] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/locations/get-location');
        if (!res.ok) {
          throw new Error('Failed to fetch locations');
        }
        const data = await res.json();
        setLocations(data.locations);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  const handleAutocompleteChange = (event: React.SyntheticEvent, newValue: string[]) => {
    dispatch(setSelectedServices(newValue));
  };

  const handleDeleteOption = (optionToDelete: string) => () => {
    dispatch(setSelectedServices(selectedServices.filter((option: string) => option !== optionToDelete)));
  };

  const handleLocationChange = (event: { target: { value: any; }; }) => {
    dispatch(setSelectedLocation(event.target.value));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box p={2} sx={{ border: '2px solid #ccc', borderRadius: '10px' }}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="location-select-label">
              <Box display="flex" alignItems="center">
                <MyLocationIcon sx={{ mr: 1 }} /> {/* Icon for location */}
                Location
              </Box>
            </InputLabel>
            <Select
              labelId="location-select-label"
              id="location-select"
              value={selectedLocation}
              label="Location"
              onChange={handleLocationChange}
            >
              {locations.map((location, index) => (
                <MenuItem key={index} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Autocomplete
            multiple
            options={services}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            onChange={handleAutocompleteChange}
            value={selectedServices}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Services"
                placeholder="Type..."
                margin="normal"
              />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                // eslint-disable-next-line react/jsx-key
                <Chip
                  {...getTagProps({ index })}
                  label={option}
                  onDelete={handleDeleteOption(option)}
                  color="primary"
                  sx={{ bgcolor: theme.palette.primary.light, margin: '2px' }}
                />
              ))
            }
          />
          <Link href="/maid/pickup" passHref>
            <Button
              variant="outlined"
              fullWidth sx={{ marginBottom: 2, marginTop: 2}}
            >
              Choose Date and Time
            </Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DropDownBox;
