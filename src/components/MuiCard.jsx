import React from 'react'
import {Box,Card,CardContent,Typography,CardActions,Button,CardMedia} from '@mui/material'
const MuiCard = () => {
  return (
   <Box width='400px'>
     <Card>
       <CardMedia component = 'img' image='https://source.unsplash.com/random' height='250px'alt='unsplash'/>
      <CardContent>
        <Typography variant='h5' gutterBottom >React</Typography>
        <Typography variant='body2' color='text.secondary'>React is a Javascript Library Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, asperiores.</Typography>
      </CardContent>
      <CardActions>
        <Button>Share</Button>
        <Button>Learn More</Button>
      </CardActions>
     </Card>
   </Box>
  )
}

export default MuiCard