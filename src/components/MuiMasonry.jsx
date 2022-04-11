import { Masonry } from "@mui/lab";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const MuiMasonry = () => {
  const heights = [
    150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
  ];
  return (
    <Box sx={{ width: 500, minHeight: 393,backgroundColor:'gray' }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height:{height}
            }}
          >
            <Typography>{index + 1} </Typography>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default MuiMasonry;
