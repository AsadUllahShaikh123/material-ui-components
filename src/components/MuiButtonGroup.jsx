import { Button, ButtonGroup } from "@mui/material";
import React from "react";

const MuiButtonGroup = () => {
  /**
   *For the group, the ButtonGroup instance guarantees that only one button can be selected at a time.
   * if you want to change their position you can use orientation = 'vertical |horizontal' 
   *    */ 
  return (
    <>
      <ButtonGroup variant="contained" orientation="vertical">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
};

export default MuiButtonGroup;
