import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
const MuiDialog = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Submit The Text ?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure want to submit the test ? you will not be able to edit
            after submitting
          </DialogContentText>
          <input type="text" placeholder="Enter your email please" />
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Submit</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MuiDialog;
