import React, { Component } from 'react'
import Divider from '@mui/material/Divider'
import { 
	Container, Grid, Paper, Avatar, Stack, Chip, Button
  } from '@mui/material'
import Experiences from './Experience'
import Skills from './Skills'
import Degrees from './Education'

class Body extends Component {
	render(){
		return(
			<Grid container spacing={0} direction='row'>
				<Grid item xs={12} sm={12} md={12} lg={6} xl={4} sx={{ bgcolor:'error.dark'}} padding={1} sx={{ borderRadius: '5px'}}>
					<h1>Education</h1>
					<Degrees />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={6} xl={4} sx={{ bgcolor:'secondary.dark'}} padding={1} sx={{ borderRadius: '5px'}}>
					<h1>Skills</h1>
					<Skills />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={6} xl={4} sx={{ bgcolor:'warning.dark'}} padding={1} sx={{ borderRadius: '5px'}}>
					<h1>Experience</h1>
					<Experiences />
				</Grid>
			</Grid>
		);
	}
}

export default Body