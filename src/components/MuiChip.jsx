import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiChip = () => {

  let [chips,setChips] = useState(['chip1','chip2','chip3'])

  let handleDelete =(value)=>{
    let remainedChips = chips.filter(chip => chip!== value)
    setChips(remainedChips)
  }

  return (
    <Stack direction="row" spacing={3} mt={3}>
      <Chip label="chip" color="primary" icon={<Face />} />
      <Chip label="outlined chip" color="secondary" />
      <Chip
        avatar={<Avatar>V</Avatar>}
        label="Avatar"
        variant="outlined"
        color="secondary"
      />
      <Chip
        color="primary"
        label="Clickable"
        onClick={() => alert("Clicked Chip")}
      />
      <Chip
        color="error"
        label="Delete"
        onClick={() => alert("clicked")}
        onDelete={() => alert("Deleted Called")}
      />
      {
        chips.map(chip => 
          <Chip label={chip} variant='outlined' onDelete={()=> handleDelete(chip)}/>
          )
      }
    </Stack>
  );
};

export default MuiChip;
