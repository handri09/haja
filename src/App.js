import './App.css';
import React from 'react'
import LoadingBar from 'react-redux-loading'
import { styled } from '@mui/material/styles'
import { Container, Box } from '@mui/material'
import MiniDrawer from './components/muis/MiniDrawer'

// Styles
const style = { 
  bgcolor: 'white', 
  height:'50%', 
  textAlign: 'center', 
  color:'white' 
}

function App () {
  return (
    <Container maxWidth='xxl' sx={style} >
      <Box sx={{height:'60px'}} />
      <MiniDrawer />
    </Container>
  );
}

export default App;