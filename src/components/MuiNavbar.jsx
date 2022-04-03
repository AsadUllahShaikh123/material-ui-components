import { CatchingPokemon } from '@mui/icons-material'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

/**
 * 
 * By default the position of AppBar is set to Fixed 
 * Toolbar adds some padding on the left and right 
 */
const MuiNavbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton size='large' color='inherit' edge='start'>
          <CatchingPokemon/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow:'1'}}>
          POKEMONAPP
        </Typography>
        <Stack spacing={2} direction='row'>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>About</Button>
          <Button color='inherit'>Features</Button>
          <Button color='inherit'>Pricing</Button>
        </Stack>

      </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar