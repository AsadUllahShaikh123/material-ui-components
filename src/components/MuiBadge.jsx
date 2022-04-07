import { Mail } from '@mui/icons-material'
import { Badge, Stack } from '@mui/material'
import React from 'react'
/**
 * The default maximum value of the badge content is 99 
 * you can set maximum value using max prop
 * showZero prop is used to show the 0 
 * variant = dot , badgeContent can be handled by using invisible ={true} prop
 */
const MuiBadge = () => {
  return (
    <Stack spacing={4} direction='row' mt={4}>
      <Badge badgeContent={4} color='primary'>
        <Mail/>
      </Badge>
      <Badge badgeContent={4} color='primary' invisible={true}>
        <Mail color='primary'/>
      </Badge>
      <Badge variant='dot' color='primary'>
        <Mail color='secondary'/>
      </Badge>
      <Badge badgeContent={0} showZero color='error'>
        <Mail color='primary' />
      </Badge>
    </Stack>
  )
}

export default MuiBadge