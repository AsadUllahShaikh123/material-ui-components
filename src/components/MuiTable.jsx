import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const MuiTable = () => {
  return (
    <>
      <TableContainer component={Paper} sx={{height:'200px'}}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              tableData.map(values => 
                  <TableRow key={values.id}>
                    <TableCell>{values.id}</TableCell>
                    <TableCell>{values.name}</TableCell>
                    <TableCell>{values.email}</TableCell>
                    <TableCell>{values.address}</TableCell>
                  </TableRow>
                )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default MuiTable

let tableData = [
  {
    id:1,
    name:'Asadullah',
    email:'asadullahshaikh713@gmail.com',
    address:'MUET Jamshoro'
  },
  {
    id:2,
    name:'Azhar Ali',
    email:'azharali456@gmail.com',
    address:'DUET Karachi'
  },
  {
    id:3,
    name:'Safdar Ali',
    email:'safdarshaikh786@gmail.com',
    address:'DUET karachi'
  },
  {
    id:4,
    name:'FarazAli',
    email:'farazali254@gmail.com',
    address:'MUET Jamshoro'
  },
  {
    id:5,
    name:'Mustafa brohii',
    email:'mustafa124@gmail.com',
    address:'MUET Jamshoro'
  }
]