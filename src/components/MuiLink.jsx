import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const MuiLink = () => {
  /**  The Link component allows you to easily customize anchor elements with your theme colors and typography styles.
   You can also wrap Link component into Typography
   */
  return (
    <>
      <Stack direction="row" spacing={4}>
        <Typography variant="h5">
          <Link href="#">Primary</Link>
        </Typography>
        {/*  */}
        <Typography variant="h5">
          <Link href="#" color="secondary" underline="hover">
            Secondary
          </Link>
        </Typography>
      </Stack>
    </>
  );
};

export default MuiLink;
