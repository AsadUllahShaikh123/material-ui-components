import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import React, { useState } from "react";

const MuiBottomNavigation = () => {
  let [value, setValue] = useState(0);
  return (
    
      <Box sx={{ width: "100%", position: "absolute", bottom: 0 }}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Favourite" icon={<Favorite />} />
          <BottomNavigationAction label="Profile" icon={<Person />} />
        </BottomNavigation>
      </Box>
  );
};

export default MuiBottomNavigation;
