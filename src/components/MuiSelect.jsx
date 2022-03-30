import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  /**
   * Select used to collect user input
   * We will Use TextField as a "select" and MenuItem as "Option"
   * we are using sx props for autowidth of TextField
   */

  let [data, setData] = useState("");
  console.log(data);

  let [countries, setCountries] = useState([]);
  console.log({ countries });

  let handleEvent = (e) => {
    setData(e.target.value);
  };

  let handleMultiple = (e) => {
    setCountries(e.target.value);
  };
  return (
    <>
      {/*  Single Select DropDown */}
      <div>
        <TextField
          value={data}
          label="Select Your Country"
          select
          onChange={handleEvent}
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="PK">Pakistan</MenuItem>
          <MenuItem value="US">America</MenuItem>
          <MenuItem value="KSA">Saudi-Arabia</MenuItem>
        </TextField>
      </div>


      {/* Multiple Select DropDown */}
      <div >
        <TextField
          value={countries}
          onChange={handleMultiple}
          SelectProps={{ multiple: true }}
          select
          sx={{minWidth:'200px'}}  
        >
          <MenuItem value="PK">Pakistan</MenuItem>
          <MenuItem value="US">America</MenuItem>
          <MenuItem value="KSA">Saudi-Arabia</MenuItem>
        </TextField>
      </div>
    </>
  );
};

export default MuiSelect;
