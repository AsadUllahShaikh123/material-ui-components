import { InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";

const MuiTextField = () => {
  /**
   * There are three variants of TextField
   * 1) outlined by default
   * 2) filled
   * 3) standard
   * color can be only from default pallete (primary,secondary...)
   * Followings are the props that can be passed in the TextField
   *  1)required   it will show * with label name
   *  2)helperText it will be shown below the TextField
   *  3)type is generally used what kind of data you want to enter (email,password...)
   *  4)disabled
   *  5)InputProps={{readOnly:true}} we can't edit the TextField
   *  6) error
   *  By default we have floating TextField just add placeholder instead of label to stop floating
   */
  return (
    <>
      <Stack spacing={4}>
        <Stack direction="row" spacing={4}>
          <TextField label="Name" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>
        {/* TextField is the Wrapper of Input Field so if you want and updation we can change through InputProps  */}
        {/* Input Adornments */}
        <Stack direction="row" spacing={4}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">kg</InputAdornment>
              ),
            }}
          ></TextField>
        </Stack>
      </Stack>
    </>
  );
};

export default MuiTextField;
