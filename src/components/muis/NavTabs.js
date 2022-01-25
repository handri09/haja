import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'

export default function NavTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" >
        <LinkTab label="home" href="/home" />
        <LinkTab label="resume" href="/resume" />
        <LinkTab label="projects" href="/projects" />
        <LinkTab label="contact" href="/contact" />
      </Tabs>
    </Box>
  );
}

function LinkTab(props) {
  return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault()
          console.log(event)
        }}
        {...props}
      />
  );
}