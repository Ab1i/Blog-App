import { Box, Typography, Card, Stack, Input, InputLabel, TextareaAutosize, Button, CardContent } from '@mui/material';
import React from 'react'
import {useNavigate} from 'react-router-dom'

const BlogForm=()=>{
    const navigate=useNavigate()

    return (
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box>
                <Card sx={{backgroundColor:'#FCF6CF'}}>
                    <CardContent>
                        <Typography variant='h4'sx={{backgroundColor:'#FEFFF1'}}>Add Your  Blog</Typography><br></br>
                        <Stack>
                            <InputLabel htmlFor="blogName"sx={{backgroundColor:'#FEFFF1'}}>Blog name:</InputLabel>
                            <Input type="text" id="blogName" name="blogName"/>
                            <InputLabel htmlFor="authorName" sx={{marginTop:'1vh',backgroundColor:'#FEFFF1'}}>Author's Name:</InputLabel>
                            <Input type="text" id="authorName" name="authorName"/>
                            <InputLabel htmlFor="description" sx={{marginTop:'1vh',backgroundColor:'#FEFFF1'}}>Description:</InputLabel><br></br>
                            <TextareaAutosize id="description" name="description" minRows={10}></TextareaAutosize>    
                            <Button variant='contained' onClick={()=>{navigate('/home')}} type="submit" sx={{marginTop:'5vh',backgroundColor:'#CDAA7D'}}>submit</Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Box>
      )
  }

  export default BlogForm;