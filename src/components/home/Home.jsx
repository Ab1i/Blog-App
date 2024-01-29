import React, { useState, useEffect } from 'react'
import {Box, Typography, Link} from '@mui/material'
import axios from 'axios'

const Home=()=>{
    const [blogs, setBlogs] = useState([])
    const [userId, setUserId] = useState('')
    const [Id, setId] = useState('')
    const [title, setTitle] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setBlogs(response.data)
      })
      .catch(error => {
        console.error('Error fetching blogs:', error)
      });
  }, []);

  const whenClicked = (userid, id, title)=>{
    setUserId(userid)
    setId(id)
    setTitle(title)
  }

  return (
    <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'white'}}>
        <Box sx={{display:'flex', justifyContent:'top', flexDirection:'column', alignItems:'center',border:'2px solid black', width:'25%', margin:'1%'}}>
            <Typography variant='h4' sx={{border:'1px solid black', width:'100%', textAlign:'center',backgroundColor:'white'}}>Blog Dashboard</Typography>
           
                <Link href="/home" sx={{textDecoration:'none', borderBottom:'1px solid black', borderRight:'1px solid black', padding:'0 2.7vw',backgroundColor:'#E0EEEE'}}>Home</Link>{''}
                <Link href="/blogform" sx={{textDecoration:'none',backgroundColor:'#E0EEEE'}}>Add Blog</Link>
            
            <ul style={{listStyleType:'none', padding:'0',}}>
                {blogs.map(blog => (
                    <li key={blog.id} style={{borderBottom:'1px solid black', width:'100%'}}>
                        <p><a onClick={() => whenClicked(blog.userId, blog.id, blog.title)} >{blog.id}.{blog.title}</a></p>
                    </li>
                ))}
            </ul>
        </Box>
      
    </Box>
  )
}

export default Home

