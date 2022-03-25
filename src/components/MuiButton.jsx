import React from "react";
import { Button, IconButton, Stack } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
const MuiButton = () => {
  return (
    /**
     *  Buttons are of three variants
     *  1) text (always used as a footer inside the cards or while confirming the popup)
     *  2) contained (primary actions i-e: Login , Submit , Logout)
     *  3) outlined  (seconday action i-e: GoBack , Deleted )
     *  Note : we can also use Buttons as a links <a> using href attribute
     */

    <>
      <Stack spacing={4}>
        <Stack direction="row" spacing={4}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        {/* Six  Colors  */}
        <Stack direction="row" spacing={4}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
        </Stack>
        {/* Sizes */}
        {/* display:block is important bcz by default its flex which affects the size of buttons*/}
        <Stack display="block" direction="row" spacing={4}>
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>
        
        {/* Icons  */}
        <Stack direction='row' spacing={4}>
          <Button variant="contained" startIcon={<SendIcon/>} disableRipple disableElevation>Send</Button>
          <Button variant="contained" endIcon={<SendIcon/>} disableElevation>Send</Button>
        </Stack>

        {/* Buttons withour Text i-e mainly used in navigation links*/}
        <Stack direction='row' spacing={4}>
        <IconButton color="primary" size='medium'>
          <SendIcon/>
        </IconButton>
        </Stack>

      </Stack>
    </>
  );
};

export default MuiButton;
