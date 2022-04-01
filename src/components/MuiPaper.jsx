import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const MuiPaper = () => {
  /**
   * Paper is a surface related Component in material ui 
   * if we want to develop Form then we should put the content in Card with some elevation and shadow, this all will be provided by Paper Component.
   * elevation is used to increase the shadow 
   */
  return (
    <Paper style={{padding:'1rem',margin:'2rem'}} elevation={4} >
      <Typography variant='h2' textAlign='center' gutterBottom>Grid Component</Typography>
      <Grid container spacing={2}   >
      <Grid item xs={12} sm={6} md={4} >
        <Box sx={{backgroundColor:'primary.light',padding:'1rem'}}  >Item 1</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} >
        <Box sx={{backgroundColor:'primary.light',padding:'1rem'}} >Item 2</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} >
        <Box sx={{backgroundColor:'primary.light',padding:'1rem'}} >Item 3</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} >
        <Box sx={{backgroundColor:'primary.light',padding:'1rem'}} >Item 4</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} >
        <Box sx={{backgroundColor:'primary.light',padding:'1rem'}} >Item 4</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} >
        <Box sx={{backgroundColor:'primary.light',padding:'1rem'}} >Item 4</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} >
        <Box sx={{backgroundColor:'primary.light',padding:'1rem'}} >Item 4</Box>
      </Grid>
    </Grid>
    </Paper>
  )
}

export default MuiPaper