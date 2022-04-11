import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Box, TextField } from '@mui/material';
import React, { useState } from 'react'

const MuiDateRange = () => {
  let [value,setValue] = useState([null,null]);
  console.log({value:value })
  return (
    <DateRangePicker
    startText="Check-in"
    endText="Check-out"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(startProps, endProps) => (
      <React.Fragment>
        <TextField {...startProps} />
        <Box sx={{ mx: 2 }}> to </Box>
        <TextField {...endProps} />
      </React.Fragment>
    )}
  />
  )
}

export default MuiDateRange