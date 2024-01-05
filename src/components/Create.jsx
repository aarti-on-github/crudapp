import React from 'react'
import {FormGroup,FormControl, InputLabel, Input,Typography,Button,styled}from "@mui/material"
import { useState } from 'react'
import { postDetails } from '../service/api'
import Navbar from './Navbar'
const Container=styled(FormGroup)`
width:30%;
margin:2% auto 0 auto;
& > div{
    margin-top:20px
}
`

const initialValues={
    name:'',
    location:'',
    channel:' ',
    region:' ',
    code:' ',
    vehicle_tested:' '
}

function Create() {

    const[details,setDetails]=useState(initialValues);

    const onValueChange=(e)=>{
        setDetails({ ...details,[e.target.name]:e.target.value})
    }
    const addDetails=async()=>{
         await postDetails(details);
         window.location.href = '/';
         
    }
  return (
    <div>
        <Navbar/>
        <Typography variant='h5' sx={{textAlign:'center',marginTop:2}}>Add Details</Typography>
      <Container>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='name'/>
        </FormControl>
        <FormControl>
            <InputLabel>Location</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='location'/>
        </FormControl>
        <FormControl>
            <InputLabel>Channel</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='channel'/>
        </FormControl>
        <FormControl>
            <InputLabel>Region</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='region'/>
        </FormControl>
        <FormControl>
            <InputLabel>Code</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='code'/>
        </FormControl>
        <FormControl>
            <InputLabel>Vehicle Tested</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='vehicle_tested'/>
        </FormControl>
        <FormControl>
            <Button onClick={()=>addDetails()} variant='contained'>Add</Button>
        </FormControl>

      </Container>
    </div>
  )
}

export default Create
