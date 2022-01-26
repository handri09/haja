import './App.css';
import React, { Component, Fragment } from 'react'
import LoadingBar from 'react-redux-loading'
import { styled } from '@mui/material/styles'
import { Container, Box, Grid, Paper, Avatar, Divider, Stack, Chip
  } from '@mui/material'
import { Routes, Route, useParams } from 'react-router-dom'
import NavTabs from './components/muis/NavTabs'
import MiniDrawer from './components/muis/MiniDrawer'
import Home from './components/muis/Home'

class App extends Component {
  render () {
    return (
      <Container maxWidth='xxl' sx={{ bgcolor: 'white', height:'50%', textAlign: 'center', color:'white' }} >
        <Box sx={{height:'60px'}} />
        <MiniDrawer />
      </Container>
    );
  }
}

export default App;