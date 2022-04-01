import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiAutocomplete = () => {
  /**
   * if you write any thing in the TextField it will give you list of suggestions
   * to use Autocomplete we have to import Autocomplete and TextField
   * there are two mandatory props
   * 1) options (an array of strings )
   * 2) renderInput which will render the input
   * renderInput takes arrow Function (params) as argument which will return the TextField
   * The autocomplete will not accept the free text to permit it we have to pass freeSolo prop
   * this prop is helpfull for Google Search
   * We can work with arrays and arrays of objects in the Autocomplete
   */

  // Arrays
  let skills = ["HTML", "CSS", "JS", "JAVA", "REACT"];
  let [value, setValue] = useState(null);
  console.log(value);

  // Using Array of Objects
  let [skill, setSkill] = useState(null);
  let skillsOptions = skills.map((skill, index) => ({
    index: index + 1,
    label: skill,
  }));
  console.log(skill);
  return (
    <>
      <div style={{ width: "250px" }}>
        {/* Arrays */}
        <Autocomplete
          options={skills}
          renderInput={(params) => (
            <TextField {...params} placeholder="skills" />
          )}
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          freeSolo
        />
        {/* Arrays of Objects */}
        <Autocomplete
          options={skillsOptions}
          renderInput={(params) => (
            <TextField {...params} placeholder="skills" />
          )}
          value={skill}
          onChange={(event, newValue) => setSkill(newValue)}
        />
      </div>
    </>
  );
};

export default MuiAutocomplete;
