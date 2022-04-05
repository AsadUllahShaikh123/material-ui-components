import {  Edit, FileCopy, Print, Save, Share } from '@mui/icons-material'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'


/**
 * Speed Dial is generally used with 3 components 
 * 1) SpeedDial 
 * 2) SpeedDialIcon
 * 3) SpeedDialAction
 * arialLabel is mandatory to use
 * Note : SpeedDialIcon is imported from @mui/material not from @mui/icons-material
 */
const MuiScreenDial = () => {
  return (
    <SpeedDial
      icon={<SpeedDialIcon openIcon={<Edit/>}/>}
      sx={{position:'absolute',bottom:16,right:16}}
      ariaLabel="SpeedDial openIcon example"
    >
      <SpeedDialAction icon={<FileCopy/>} tooltipTitle='copy'/>
      <SpeedDialAction icon={<Save/>} tooltipTitle='save'/>
      <SpeedDialAction icon={<Share/>} tooltipTitle='share'/>
      <SpeedDialAction icon={<Print/>} tooltipTitle='print'/>

    </SpeedDial>
  )
}

export default MuiScreenDial