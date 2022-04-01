import { Box } from "@mui/material";
import React from "react";

const MuiBox = () => {
  /**
   * Box is simply the replacement of div tag in material ui
   * if you want to change its semantic you can use component props
   * we use Box component bcz Box component accepts a prop called sx which can be used for defining a custom style that has access to the theme.
   * if you were to use regular inline styles on a normal html tag you cannot access the theme nor specify the hover styles like we have done here 
   * Another advantage is that you can also apply mui system properties 
   */
  return (
    <>
      <Box component="span">Hello Form Box</Box>
      <Box sx={{
        backgroundColor:'primary.main',
        color:'white',
        width:'150px',
        height:'100px',
        '&:hover':{
          backgroundColor:'primary.light'
        }
      }}>Hello Form Box</Box>
      
      {/* System Properties */}
      <Box width='150px' height='100px' p={2} bgcolor='black' color='white' border='2px solid gray' mt={2} >
          MUI SYSTEM PROPERTIES
      </Box>
    </>
  );
};

export default MuiBox;
