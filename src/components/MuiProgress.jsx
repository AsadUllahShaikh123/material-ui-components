import { CircularProgress,LinearProgress,Stack } from "@mui/material";
import React from "react";

const MuiProgress = () => {
  return (
    <>
      <Stack spacing={4}>
        {/* by default indeterminant => infinite circulation */}
        <CircularProgress />
        <CircularProgress color="success" />
        <CircularProgress variant="determinate" value={60}/>
        <LinearProgress/>
        <LinearProgress color="success"/>
        <LinearProgress variant="determinate" value={50}/>
      </Stack>
    </>
  );
};

export default MuiProgress;
