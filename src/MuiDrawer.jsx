import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

/**
 * Generally there are two types of Drawer => temprory and permanent
 * anchor tag is used for positioning
 * temprory Drawer will close on cliking outside of the drawer
 */
const MuiDrawer = () => {
  let [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton size="small" edge='start' onClick={()=> setIsDrawerOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={4} textAlign="center" width='200px'>
          <Typography variant="h4">Drawer</Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
