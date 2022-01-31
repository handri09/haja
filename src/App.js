import './App.css';
import React, { useState, useEffect } from 'react'
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
  let [authUser, setAuthUser] = useState('')
  if (authUser !== 'demo') {
    return (
      <Container>
        <div className='auth'>
          <LoadingBar />
          <h1>Type 'demo'</h1>
          <input 
            placeholder='user'
            value={authUser}
            onChange={(e) => setAuthUser(e.target.value.toLowerCase())}
            />
        </div>
      </Container>
    )
  }

  return (
    <Container maxWidth='xxl' sx={style} >
      <Box sx={{height:'60px'}} />
      <MiniDrawer />
    </Container>
  );
}
export default App;