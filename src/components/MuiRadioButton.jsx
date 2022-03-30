import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

const MuiRadioButton = () => {
  /**
   * TextField encapsulates several other components so that's why we were using TextField as Select
   * But Now in this case we have to import and work on component individually 
   * 1) FormControl which is the wrapper component
   * 2) FormLabel which specifies the label of group of RadioButtons 
   * 3) FormControlLabel the label to individual RadioButton
   * 4) RadioGroup which wraps the individual Radio Component 
   * 5) Radio Component itself 
   * A control element. For instance, it can be a Radio, a Switch or a Checkbox.
   * row => it aligns the RadioButton in the row
   * you can change the size and color of individual Radio component 
   * you can pass error as props in the FormControl 
   * if you want to add an error message you can also add FormHelperText component below the RadioGroup Component 
   */
  let [value,setValue] = useState('');
  console.log({value});
  let handleEvent = (e)=>{
    setValue(e.target.value)
  }
  return (
    <>
      <FormControl>
        <FormLabel id='job-experience'>Years of Experience</FormLabel>
        <RadioGroup name='job-experience' aria-labelledby='job-experience' value={value} onChange={handleEvent} row>
          <FormControlLabel control={<Radio/> } label='0-2' value='0-2'/>
          <FormControlLabel control={<Radio/> } label='3-5' value='3-5'/>
          <FormControlLabel control={<Radio/> } label='6-8' value='6-8'/>
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default MuiRadioButton