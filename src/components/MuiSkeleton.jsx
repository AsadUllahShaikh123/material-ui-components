import React,{useEffect,useState} from "react";
import { Skeleton, Box, Stack,Typography,Avatar } from "@mui/material";
const MuiSkeleton = () => {
  let [loading,setLoading] = useState(false)
  useEffect(() => {
    
    setTimeout(()=>{
      setLoading(true)
    },3000)
  });
  return (
    <>
      <Box sx={{ width: "400px" }}>
        <Stack spacing={1}>
          {
            loading ? (
              <Avatar>V</Avatar>
            ):(
              <Skeleton animation='wave' variant="circular" width={48} height={48}/>
            )
          }
          {
            
              <Typography variant='h5'>
                {
                  loading ? 'Hello From The Skelton Text' : <Skeleton animation='wave'/>
                } 
                </Typography>
            
          }
          {
            loading ? (
              <img src="https://source.unsplash.com/random" alt="skeleton" width='250px' height='250px' />
            ) :(

              <Skeleton animation='wave' variant="rectangular" width={250} height={250}/>
            )
          }
        </Stack>
      </Box>
    </>
  );
};

export default MuiSkeleton;
