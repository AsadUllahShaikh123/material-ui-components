import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

    /**
     *  loading = 'lazy' it will only load image when it is needed
     */
const MuiImageList = () => {
  return (
    <Grid container rowSpacing={4} mt={4} mb={6}>
      {/* Standard Image List  */}
      <Grid
        item
        sm={6}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" textAlign="center">
          Standard Image LIst
        </Typography>
        <ImageList
          cols={3}
          rowHeight={164}
          sx={{ width: "500px", height: "450px" }}
        >
          {itemData.map((values) => (
            <ImageListItem key={values.img}>
              <img
                src={`${values.img}?w=164&h=164&fit=crop&auto=format`}
                alt="unsplash"
                loading="lazy"
              />
              <ImageListItemBar title={values.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>

      {/* Quilted Standard ImageList  */}

      <Grid
        item
        sm={6}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" textAlign="center">
          Quilted Image LIst
        </Typography>
        <ImageList
          cols={4}
          rowHeight={121}
          sx={{ width: "500px", height: "450px" }}
          variant="quilted"
        >
          {itemData2.map((values) => (
            <ImageListItem
              key={values.img}
              cols={values.cols || 1}
              rows={values.rows || 1}
            >
              <img
                src={`${values.img}?w=164&h=164&fit=crop&auto=format`}
                alt="unsplash"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>

      {/* Woven Standard ImageList */}

      <Grid
        item
        sm={6}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" textAlign="center">
          Woven Image LIst
        </Typography>
        <ImageList
          cols={3}
          variant="woven"
          sx={{ width: "500px", height: "450px" }}
        >
          {itemData3.map((values) => (
            <ImageListItem key={values.img}>
              <img
                src={`${values.img}?w=164&h=164&fit=crop&auto=format`}
                alt="unsplash"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>

      {/* Masonry Standard ImageList */}

      <Grid
        item
        sm={6}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5">Masonry Standard</Typography>
        <Box style={{ width: 500, height: 450, overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData3.map((values) => (
              <ImageListItem key={values.img}>
                <img
                  src={`${values.img}?w=248&fit=crop&auto=format`}
                  alt={values.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MuiImageList;

// Standard ImageList Data
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

// Quilted ImageList Data
const itemData2 = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];

// Woven ImageList Data
const itemData3 = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
];
