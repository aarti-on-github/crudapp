import { styled, Table, TableCell, TableHead, TableRow, TableBody, Button } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { getDetails,deleteDetail } from '../service/api';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Thead=styled(TableRow)`
background:#8b8b8bad;
& >th {
  color:black;
  font-size:16px
}
`

function Alldetails() {

  useEffect(() => {
    getAllDetails();
  }, []);

  const [details, setDetails] = useState([]);

  const getAllDetails = async () => {
    let response = await getDetails();
    console.log(response)
    setDetails(response.data)
  }
  const deleteDetails=async(id)=>{
    await deleteDetail(id);
    window.location.href = '/';
  }
  return (
    <>
    <Navbar/>
    <div className='table'>
    <Table sx={{
      width:"75%",
      alignItems:'center',
      marginTop:10,
      mx:'auto'
    }}>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Channel</TableCell>
          <TableCell>Region</TableCell>
          <TableCell>Code</TableCell>
          <TableCell>Vehichle Tested</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>{
        details.map(detail => (
          <TableRow>
            <TableCell>{detail.id}</TableCell>
            <TableCell>{detail.name}</TableCell>
            <TableCell>{detail.location}</TableCell>
            <TableCell>{detail.channel}</TableCell>
            <TableCell>{detail.region}</TableCell>
            <TableCell>{detail.code}</TableCell>
            <TableCell>{detail.vehicle_tested}</TableCell>
            <TableCell>
            <Button variant='contained' style={{marginRight:10}} color='success'
            component={Link} to={`/edit/${detail.id}`}
            >Update</Button> 
              <Button 
              sx={{
                '@media (max-width: 1110px)': {
                  marginTop:3
                },
              }}
               variant='contained' 
               onClick={()=>deleteDetails(detail.id)}>
                Delete
               </Button>
            </TableCell>
          </TableRow>
        ))
      }

      </TableBody>
    </Table>
    </div>
    </>
  )
}

export default Alldetails
