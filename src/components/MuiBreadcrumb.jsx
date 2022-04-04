import { NavigateNext } from '@mui/icons-material'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

/**
 * It reveals the user location in the website 
 * by default the separator is / (forward slash)
 * we can also use Icon as a separator
 * we can set the no:of links (breadcrumbs) by default it is 8 
 * we can set ItemsBeforeCollapse and ItemsAfterCollapse
 */
const MuiBreadcrumb = () => {
  return (
    <Breadcrumbs separator={<NavigateNext/>} maxItems={2} >
      <Link href='#' underline='none'>Home</Link>
      <Link href='#' underline='none'>Catalog</Link>
      <Link href='#' underline='none'>Accessories</Link>
      <Typography>Shoes</Typography>
    </Breadcrumbs>
  )
}

export default MuiBreadcrumb