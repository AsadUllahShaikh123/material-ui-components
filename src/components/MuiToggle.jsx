import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

const MuiToggle = () => {
  /**
   * The primary objective of using ToggleGroup and Toggle is in editor, where we select or deselect the Bold,Italic and Underlined.
   * We can select more than one buttons
   */

  let [formats, setFormats] = useState([]);

  console.log({ formats });
  let handleFormats = (event,newFormats) => {
    setFormats(newFormats);
  };
  return (
    <>
      <ToggleButtonGroup
        onChange={handleFormats}
        value={formats}
        color='success'
        size="large"
        orientation="vertical"
        exclusive
      >

        <ToggleButton value="bold" aria-label="bold">
          <FormatBold />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalic />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlined />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default MuiToggle;
