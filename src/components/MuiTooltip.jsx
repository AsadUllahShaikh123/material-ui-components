import { Delete } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import React from 'react'

/**
 * we can set positions by using placement props
 * other props are 
 * 1)enterDelay
 * 2)leaveDelay
 * These props are helpful when we have Tables we dont want tooltip on every data instantly
 * 3)arrow
 */


const MuiTooltip = () => {
  return (
    <Tooltip title='Delete' placement='right' arrow enterDelay={500} leaveDelay={200}>
      <IconButton>
        <Delete/>
      </IconButton>
    </Tooltip>
  )
}

export default MuiTooltip