import React from 'react'
import {FormGroup,FormControl, InputLabel, Input,Typography,Button,styled}from "@mui/material"
import { useState,useEffect} from 'react'
import { getDetail,editDetail} from '../service/api'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

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

function Edit() {

    const[details,setDetails]=useState(initialValues);
    const {id}=useParams();

    useEffect(()=>{
        getSingleDetail();
      },[]);

      const getSingleDetail=async()=>{
         let response=await getDetail(id);
         console.log(response);
         setDetails(response.data);
         
      }

    const onValueChange=(e)=>{
        setDetails({ ...details,[e.target.name]:e.target.value})
    }
    const updateDetails=async()=>{
         await editDetail(details,id);
         window.location.href = '/';
         alert("Successfully updated");
         
    }
  return (
    <div>
        <Navbar/>
        <Typography variant='h5' sx={{textAlign:'center',marginTop:2}}>Edit Details</Typography>
      <Container>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='name' value={details.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>Location</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='location' value={details.location}/>
        </FormControl>
        <FormControl>
            <InputLabel>Channel</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='channel' value={details.channel}/>
        </FormControl>
        <FormControl>
            <InputLabel>Region</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='region' value={details.region}/>
        </FormControl>
        <FormControl>
            <InputLabel>Code</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='code' value={details.code}/>
        </FormControl>
        <FormControl>
            <InputLabel>Vehicle Tested</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='vehicle_tested' value={details.vehicle_tested}/>
        </FormControl>
        <FormControl>
            <Button onClick={()=>updateDetails()} variant='contained'>Edit</Button>
        </FormControl>

      </Container>
    </div>
  )
}

export default Edit