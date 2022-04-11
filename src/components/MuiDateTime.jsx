import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import React, { useState } from 'react'

const MuiDateTime = () => {
  let [value,setValue] = useState(null);
  console.log(value && value.toLocaleDateString())
  return (
    <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
  )
}

export default MuiDateTime