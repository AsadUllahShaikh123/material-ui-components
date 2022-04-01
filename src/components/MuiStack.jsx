import { Box, Divider, Stack } from "@mui/material";
import React from "react";

const MuiStack = () => {
  /**
   * Stack is used to manage layout in one direction (row,column)
   * It is useful for one Dimension layout
   * by default it arranges all elements in one column
   * directions (row,row-reverse,column,column-reverse)
   * Divider is used to put element btwn the elements, Use the divider prop to insert an element between each child
   * we can also mui system properties in 
   */
  return (
    <Stack direction='row' spacing={2} divider={<Divider orientation="vertical" flexItem/>}>
      <Box
        sx={{
          width: "150px",
          height: "150px",
          backgroundColor: "black",
          color: "white",
          '&:hover':{
            backgroundColor:'white',
            border:'2px solid black',
            color:'black'
          }
        }}
      >
        Box 1
      </Box>
      <Box
        sx={{
          width: "150px",
          height: "150px",
          backgroundColor: "blue",
          color: "white",
          '&:hover':{
            backgroundColor:'white',
            color:'black',
            border:'2px solid black'
          }
        }}
      >
        Box 2
      </Box>
    </Stack>
  );
};

export default MuiStack;
