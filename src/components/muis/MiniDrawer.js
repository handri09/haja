import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom'
import { createSvgIcon } from '@mui/material/utils';
import ContactsIcon from '@mui/icons-material/Contacts';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

// Import Data
import { presentation } from '../data/data'
import Accordion from './accordion'
import Formations from './formations_acc'
import Body from './body'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import NoteIcon from '@mui/icons-material/Note';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

import { createTheme, responsiveFontSizes, ThemeProvider,
  } from '@mui/material/styles';
import { Container, Grid, Paper, Avatar, Stack, Chip, Button
  } from '@mui/material'
import { Routes, Route, useParams } from 'react-router-dom'

import Header from '../header/Head'
import Projects from '../Projects'
import Head from './Home'

let theme = createTheme({
  typography: {
    h2: {
      color: 'white',
    },
    fontFamily: [
     'Paytone One',
     'sans-serif',
    ].join(','),
  }
});

let themee = createTheme({
  typography: {
    p: {
      color: 'white',
      fontSize: 25,
    },
    fontFamily: [
     'Lobster',
     'sans-serif',
    ].join(','),
  }
});

let themepre = createTheme({
  typography: {
    h2: {
      color: 'white',
    },
    fontFamily: [
     'IBM Plex Sans',
     'sans-serif',
    ].join(','),
  }
});

const drawerWidth = 180;

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('Portfolio')

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const active = 'nothing at all'

  return (
    <Box sx={{ display: 'flex', bgcolor:'white' }}>
      <CssBaseline/>
      <AppBar position="fixed" open={open} sx={{ bgcolor: '#071a2f' }}>
        <Toolbar>
          <IconButton
            color="inherit" //inherit
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open} sx={{ textAlign: 'center', margin: 0}}>
        <DrawerHeader sx={{ bgcolor:'#071a2f'}}>
          <IconButton onClick={handleDrawerClose} sx={{color:'white'}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List sx={{ bgcolor:'#071a2f', color:'white' }}>
          {['Home', 'Resume', 'Projects', 'Contact', 'Skills', 'Certificate', 'Formations' ].map((text, index) => (
            <ListItem button component={Link} to={'/haja/'+text} onClick={() => { setTitle(text) }} key={index} >
              <ListItemIcon key={index} >
                { text === 'Skills' && <HomeIcon sx={{ fontSize: 30, color:'white'  }} />}
                { text === 'Home' && <HomeOutlinedIcon sx={{ fontSize: 30, color:'white' }} />}
                { text === 'Resume' && <NoteOutlinedIcon color='primary' sx={{ fontSize: 30, color:'white' }} />}
                { text === 'Projects' && <AccountTreeOutlinedIcon color='primary' sx={{ fontSize: 30, color:'white' }} />}
                { text === 'Contact' && <ContactPhoneOutlinedIcon color='primary' sx={{ fontSize: 30, color:'white' }} />}
                { text === 'Certificate' && <AccountTreeOutlinedIcon color='primary' sx={{ fontSize: 30, color:'white' }} />}
                { text === 'Formations' && <ContactPhoneOutlinedIcon color='primary' sx={{ fontSize: 30, color:'white' }} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}  
        </List>

        <Divider />

        <List sx={{ bgcolor:'white', color:'#001e3c' }}>
          {['linkedin', 'github', 'instagram', 'facebook', 'youtube', 'twitter', 'whatsapp', 'stackOverflow' ].map((text, index) => (
            <ListItem button key={index} component={Link} to={'/haja/'+"Home"} onClick={() => { setTitle(text) }} >
              <ListItemIcon key={index}>
                { text === 'linkedin' && <LinkedInIcon sx={{ fontSize: 30, color:'primary.dark'  }} />}
                { text === 'github' && <GitHubIcon sx={{ fontSize: 30, color:'black' }} />}
                { text === 'instagram' && <InstagramIcon color='primary' sx={{ fontSize: 30, color:'error.dark' }} />}
                { text === 'facebook' && <FacebookIcon color='primary' sx={{ fontSize: 30, color:'bleu' }} />}
                { text === 'youtube' && <YouTubeIcon color='primary' sx={{ fontSize: 30, color:'warning.dark' }} />}
                { text === 'twitter' && <TwitterIcon color='primary' sx={{ fontSize: 30, color:'bleu' }} />}
                { text === 'whatsapp' && <WhatsAppIcon color='primary' sx={{ fontSize: 30, color:'green' }} />}
                { text === 'stackOverflow' && <StackedLineChartIcon color='primary' sx={{ fontSize: 30, color:'secondary.dark' }} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <p> https://stackoverflow.com/users/edit/17447025 </p>
        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p:0.7, bgcolor: 'white', marginTop:'1.5%'  }}>
        <Routes>
          <Route path='/haja' element={<Head />} />
          <Route path='/haja/Home' element={<Head />} />
          <Route path='/haja/Projects' element={<Projects />} />  
          <Route path='/haja/Resume' element={<Part />} />  
          <Route path='/haja/Contact' element={<Header />} /> 
        </Routes>
      </Box>
    </Box>
  );
}

const Headi = () => {
  return (      
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} marginBottom={0.5} sx={{ borderRadius : 0, width: '100%', height: '100%', bgcolor: '#001e3c' }} padding={1}>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" gutterBottom>
            Hajaniaina ANDRIANAVALONA
          </Typography>
        </ThemeProvider>
      </Grid>

      <Grid item xs={4} sm={12} md={12} lg={12} xl={12} sx={{ borderRadius : 0, width: '100%', height: '100%', bgcolor:'#001e3c' }} padding={1}>
        <Stack direction='row' divider={<Divider orientation="vertical" flexItem color='white'/>} spacing={2} justifyContent='center'>
          <ThemeProvider theme={themee}>
            <Typography variant="p" gutterBottom>
              OSISoft PI System Administrator
            </Typography>
          </ThemeProvider>   
          <ThemeProvider theme={themee}>
            <Typography variant="p" gutterBottom>
              React Developer
            </Typography>
          </ThemeProvider> 
        </Stack>       
      </Grid>

      <Grid item xs={12} sm={5} md={4} lg={3} xl={2} sx={{ borderRadius : 0, width: '100%', height: '100%', bgcolor:'#001e3c' }} padding={1}>
        <Avatar
          alt="Haja Niaina"
          src='./test.png'
          sx={{  width: '100%', height:'100%' }}
          variant="rounded" //square
          />  
        <Stack direction='column' spacing={0}> 
          <ThemeProvider theme={themee}>
            <Typography variant="h5" gutterBottom>
              31 years old
            </Typography>
          </ThemeProvider> 
          <Divider color='white' />
          <ThemeProvider theme={themee}>
            <Typography variant="h5" gutterBottom>
              Toamasina, Madagascar
            </Typography>
          </ThemeProvider>  
          <Divider color='white' />
          <ThemeProvider theme={themee}>
            <Typography variant="h6" gutterBottom>
              Married
            </Typography>
          </ThemeProvider> 
          <Divider color='white' />
          <ThemeProvider theme={themee}>
            <Typography variant="h6" gutterBottom>
              Open to opportunities
            </Typography>
          </ThemeProvider>
          <Divider color='white' />
          <Button variant="contained" color="primary">Experiencies</Button>   
          <Button variant="contained" color="secondary">Formations</Button>   
          <Button variant="contained" color="warning">Skills</Button>   
          <Button variant="contained" color="success">Interest</Button>   
          <Button variant="contained" color="error">Download Resume</Button>   
        </Stack> 
        <p>{presentation}</p>  
      </Grid>

      <Grid item xs={12} sm={7} md={8} lg={9} xl={10} marginBottom={0}  sx={{ borderRadius : 0, bgcolor:'#a01e3c' }} padding={0}>
        <Body />
      </Grid>
    </Grid>
  );
}

const Part = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sx={{ borderRadius : 0, bgcolor: 'primary.dark' , height:'80%'}} >
        <Avatar
          alt="Haja Niaina"
          src='./certificates/CV1.jpg'
          sx={{  width: '100%', height:'100%' }}
          variant="rounded" //square
          /> 
      </Grid>
      <Grid item xs={12} sx={{ borderRadius : 0, bgcolor: 'primary.dark' , height:'80%'}} >
        <Avatar
          alt="Haja Niaina"
          src='./certificates/CV2.jpg'
          sx={{  width: '100%', height:'100%' }}
          variant="rounded" //square
          /> 
      </Grid> 
    </Grid>
  );
}