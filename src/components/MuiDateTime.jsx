import { DatePicker, TimePicker } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiDateTime = () => {
  let [value, setValue] = useState(null);
  let [time,setTime] = useState(null);
  console.log(value && value.toLocaleDateString());
  console.log(time && time.toLocaleTimeString());
  return (
    <Stack spacing={4} width='300px'>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <TimePicker
        label="Basic example"
        value={time}
        onChange={(newValue) => {
          setTime(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  );
};

export default MuiDateTime;
