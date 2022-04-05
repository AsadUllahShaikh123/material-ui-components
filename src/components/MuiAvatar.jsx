import { Avatar, AvatarGroup, Stack } from '@mui/material'
import React from 'react'

const MuiAvatar = () => {
  return (
    <Stack spacing={4} >
      <Stack spacing={2} direction='row'>
        <Avatar sx={{bgcolor:'primary.light'}}>AS</Avatar>
        <Avatar sx={{bgcolor:'success.light'}}>IA</Avatar>
      </Stack>
      <Stack  direction='row' >
        <AvatarGroup max={4}>
          <Avatar sx={{bgcolor:'primary.light'}}>AS</Avatar>
          <Avatar sx={{bgcolor:'success.light'}}>AS</Avatar>
          <Avatar sx={{bgcolor:'primary.light'}}>SS</Avatar>
          <Avatar sx={{bgcolor:'success.light'}}>MS</Avatar>
          <Avatar sx={{bgcolor:'primary.light'}}>AS</Avatar>
        </AvatarGroup>
      </Stack>
    </Stack>
  )
}

export default MuiAvatar