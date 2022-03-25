import { Typography } from "@mui/material";
import React from "react";

const MuiTypography = () => {
  return (
    /**
     *  There are 12 variants of Typography but we will discuss only 10
     *  6 of headings
     *  2 of subtitles
     *  2 of body
     */
    <>
      {/* heading variants with same semantics */}

      {/* gutterBottom = "marginBottom" it varies according to the variant, h1 has highest gutterBottom value */}
      <Typography variant="h1" gutterBottom>
        h1 Heading
      </Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>

      {/* by using component parameter you can change the semantic name without changing any property --Note: class name will not be affected */}
      <Typography variant="h6" component='h4'>h6 Heading</Typography>

      {/* subtitles variants with semantic h6 difference of fontsize and fontweight  */}

      <Typography variant="subtitle1">Subtitle 1 </Typography>
      <Typography variant="subtitle2">Subtitle 2 </Typography>

      {/* body variants with semantic p */}

      {/* By default Typography variant is "body1" */}
      <Typography variant="body1">Lorem ipsum dolor sit amet.</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet.</Typography>
    </>
  );
};

export default MuiTypography;
