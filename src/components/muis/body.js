import React, { Component } from 'react'
import Divider from '@mui/material/Divider'
import { 
	Container, Grid, Paper, Avatar, Stack, Chip, Button
  } from '@mui/material'
import Experiences from './Experiences'
import Skills from './Skills'
import Degrees from './Experiences'
import Certificates from './Certificates'

class Body extends Component {
	render(){
		return(
			<Grid container spacing={0} direction='row'>
				<Grid item xs={12} sm={12} md={12} lg={6} xl={3} sx={{ bgcolor:'error.dark'}} padding={1} sx={{ borderRadius: '5px'}}>
					<h1>Skills</h1>
					<Skills />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={6} xl={3} sx={{ bgcolor:'secondary.dark'}} padding={1} sx={{ borderRadius: '5px'}}>
					<h1>Degrees</h1>
					<Degrees />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={6} xl={3} sx={{ bgcolor:'success.dark'}} padding={1} sx={{ borderRadius: '5px'}}>
					<h1>Certificates</h1>
					<Certificates />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={6} xl={3} sx={{ bgcolor:'warning.dark'}} padding={1} sx={{ borderRadius: '5px'}}>
					<h1>Experience</h1>
					<Experiences />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={6} xl={3} sx={{ bgcolor:'warning.dark'}} padding={1} sx={{ borderRadius: '5px'}}>
					<h1>Experience</h1>
					<Experiences />
				</Grid>
			</Grid>
		);
	}
}

export default Body