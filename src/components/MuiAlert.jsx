import { Check } from '@mui/icons-material'
import { Alert, AlertTitle, Stack } from '@mui/material'
import React from 'react'

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      {/* default */}
      <Alert severity='error'>This is an error alert</Alert>
      <Alert severity='info'>This is an info alert</Alert>
      <Alert severity='warning'>This is warning alert</Alert>
      <Alert severity='success'>This is an success alert</Alert>

      <h1>Outlined Alert </h1>
      {/* varaint = 'outlined' */}
      
      <Alert variant='outlined' severity='error'>This is an error alert</Alert>
      <Alert variant='outlined' severity='info'>This is an info alert</Alert>
      <Alert variant='outlined' severity='warning'>This is warning alert</Alert>
      <Alert variant='outlined' severity='success'>This is an success alert</Alert>

      <h1>Filled Alert</h1>
      {/* variant = 'filled' */}
      
      <Alert variant='filled' severity='error'>
        <AlertTitle>error</AlertTitle>
        This is an error alert</Alert>
      <Alert variant='filled' severity='info'>
        <AlertTitle>info</AlertTitle>
        This is an info alert</Alert>
      <Alert variant='filled' severity='warning'>
        <AlertTitle>warning</AlertTitle>
        This is warning alert</Alert>
      <Alert variant='filled' severity='success' icon={<Check fontSize='inherit'/> }>
        <AlertTitle>success</AlertTitle>
        This is an success alert</Alert>
    </Stack>
  )
}

export default MuiAlert