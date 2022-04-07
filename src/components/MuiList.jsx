import { Mail } from "@mui/icons-material";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

/**
 * To work with List we have to use three components
 * 1) List the wrapper of all ListItem
 * 2) ListItem the wrapper of other used components
 * 3) ListItemText
 * ListItemText has primary prop which is used to give value to the List Item
 * by default there is the padding in ListItem so we can disable padding using the disablePadding props
 */

const MuiList = () => {
  return (
    <Box sx={{ bgcolor: "lightgray", width: "400px" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="primary Text 1" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="primary Text 2" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="primary Text 3" />
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
