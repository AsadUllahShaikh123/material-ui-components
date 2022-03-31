import { FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

const MuiSwitch = () => {
  let [value,setValue] = useState(false)
  console.log(value)
  let handleChange =(e)=>{
    setValue(e.target.checked)
  }
  return (
    <>
      <FormControlLabel label='Darkmode' control={<Switch checked={value} />} onChange={handleChange}/>
    </>
  )
}

export default MuiSwitch