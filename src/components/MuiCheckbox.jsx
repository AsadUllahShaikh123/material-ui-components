import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

const MuiCheckbox = () => {
  // For Single Checkbox
  let [checked, setChecked] = useState(false);
  console.log(checked);

  let handleEvent = (e) => {
    setChecked(e.target.checked);
  };

  // For Group of Checkboxes
  let [skills, setSkills] = useState([]);
  console.log(skills);

  let handleSkillsChange = (e) => {
    // indexOf returns -1 if it doesnot find the given value
    let index = skills.indexOf(e.target.value);
    console.log(index);

    // This condition will work when no checkbox willbe selected so whenever we will select the checkbox it will check the index value, initially []skills doesnot contain any values so it will give us -1 which sets the value in the setSkills
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    }
    // This condition will be checked, if the value is selected and we are deselecting it  as we will deselect handleSkillsChange() will run and then first we will get the index value as it was already present in the array so it will not give us -1, which will  give chance to else condition to execute, then else will evaluate the statement which causes the targeted value out from []skills.
    else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };
  return (
    <>
      {/* Single Checkbox  */}
      <FormControlLabel
        label="I accept terms and conditions"
        control={<Checkbox checked={checked} onChange={handleEvent} />}
      />
      <Checkbox
        icon={<BookmarkBorder />}
        checkedIcon={<Bookmark />}
        onChange={handleEvent}
      />

      {/* A group of Checkboxes  */}
      <FormControl>
        <FormLabel>Skills</FormLabel>
        <FormGroup>
          <FormControlLabel
            label="HTML"
            value="HTML"
            control={
              <Checkbox
                checked={skills.includes("HTML")}
                onChange={handleSkillsChange}
              />
            }
          />
          <FormControlLabel
            label="CSS"
            value="CSS"
            control={
              <Checkbox
                checked={skills.includes("CSS")}
                onChange={handleSkillsChange}
              />
            }
          />
          <FormControlLabel
            label="JS"
            value="JS"
            control={
              <Checkbox
                checked={skills.includes("JS")}
                onChange={handleSkillsChange}
              />
            }
          />
        </FormGroup>
      </FormControl>
    </>
  );
};

export default MuiCheckbox;
