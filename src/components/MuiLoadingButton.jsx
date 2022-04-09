import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

const MuiLoadingButton = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <Stack spacing={2} direction="row" mt={4}>
      <LoadingButton variant="outlined"> Submit </LoadingButton>
      <LoadingButton variant="outlined" loading />
      <LoadingButton loadingIndicator="loading..." variant="outlined">
        Fetch Data
      </LoadingButton>
      <LoadingButton
        loadingIndicator="loading..."
        variant="outlined"
        loading={loading}
      >
        Data Fetched
      </LoadingButton>

      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
        loading={loading}
      >
        Saved
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoadingButton;
