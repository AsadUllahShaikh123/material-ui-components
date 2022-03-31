import { Rating } from '@mui/material'
import React, { useState } from 'react'

const MuiRatings = () => {
  /**
   * we can pass precision as a props (i-e: 0.5 | half )
   * size (small,medium,large)
   * medium is by default 
   * we can also pass icons (icon and emptyIcon)
   * readonly prop which will only display , the cursor is also the default cursor when we hover 
   * used when you have to display the ratings of the product 
   * highlightSelectedOnly prop (it will highlight only selected one )
   * we can use highlightSelectedOnly prop when we have to take feedback in emoji forms 
   */
  let [value,setValue] = useState(null);
  console.log(value)
  
  return (
   <>
    <Rating value={value} precision={0.5} onChange={(event, newValue) => {
          setValue(newValue);
        }}/>
   </>
  )
}

export default MuiRatings