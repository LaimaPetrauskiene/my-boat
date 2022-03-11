import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [places, setPlaces] = React.useState('');

  const handleChange = (event) => {
    setPlaces(event.target.value);
  };

  return (
    <Box sx={{ minWidth: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="places-select-label">Select destination</InputLabel>
        <Select
          labelId="places-select-label"
          id="places-simple-select"
          value={places}
          label="SelectDestination"
          onChange={handleChange}
        >
          <MenuItem value="Greece">Greece</MenuItem>
          <MenuItem value="Italy">Italy</MenuItem>
          <MenuItem value="Canary Islands">Canary Islands</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}