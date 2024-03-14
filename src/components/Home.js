import React from 'react'
import { Typography } from '@mui/material'
import {Button} from '@mui/material'
import { ThemeProvider } from '@mui/material'
import Header from './Header'
import Contact from './Contact'
import Skills from './Skills'



function Home() {
  return (
    <div id="Home">
      <br/><br/><br/>
      <Typography color="white" align="center" marginTop={10} variant="h1" marked="center" className='blur'>Stay Fit With Us
      </Typography>
      <Typography marginBottom={3}
        color="#DED0C4"
        align="center"
        variant="h5"
        className='blur'
        marginLeft={4}
        marginRight={4}
        
      >
        Stay consistent in your journey.

      </Typography >
      <Button variant="contained" size="large"  color="secondary"
     component="a" href="/Excercises" 
      >
        Record Activity
      </Button>
      <Typography variant="body2" color="secondary" marginTop={3} variant="h5" >
        START NOW!!
      </Typography>

      <br/><br/><br/><br/> <br/> <br/><br/><br/><br/>  
      {/* <div id="aboutus"><div/> */}
      <Header text="ABOUT US" className="aboutUsHeader"/>
      <Typography marginBottom={3} color="lightgrey" align="center" variant="h6" marginLeft={4} marginRight={4}>
       Get to know more about our services.
       <Skills/>
      </Typography >
      


    Copyright © Fitkit 2023. <br/> .

    </div>
  )
}

export default Home;
