import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'

const MuiGrid = () => {
  /**
   * Gird is useful for Two Dimension Layout 
   * it has two variation 
   * 1) Grid container for Parent 
   * 2) Grid item for Children
   * There are five breakpoints each corresponding to a certain device width
   * xs : mobile 
   * sm : tablet 
   * md : desktop
   * lg and xl for large monitors 
   */
  return (
    <Grid container rowSpacing={2} columnSpacing={4} >
      <Grid item xs={12} sm={6} md={4} >
        <Box sx={{backgroundColor:'primary.light',padding:'2rem'}} mt={2} >Item 1</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} >
        <Box sx={{backgroundColor:'primary.light',padding:'2rem'}} mt={2}>Item 2</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} >
        <Box sx={{backgroundColor:'primary.light',padding:'2rem'}} mt={2}>Item 3</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} >
        <Box sx={{backgroundColor:'primary.light',padding:'2rem'}} mt={2}>Item 4</Box>
      </Grid>
    </Grid>
  )
}

export default MuiGrid