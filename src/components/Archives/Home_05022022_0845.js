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
import { presentations, skills, toImprove, begginer, profile, test } from '../data/data'
import Accordion from './accordion'
import Formations from './formations_acc'
import Body from './body'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import NoteIcon from '@mui/icons-material/Note';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Header from '../header/Head'
import Projects from '../Projects'
import { Container, Grid, Paper, Avatar, Stack, Chip, Button } from '@mui/material'
import { Routes, Route, useParams } from 'react-router-dom'

import Experiences from './Experience'
import Skills from './Skills'
import Degrees from './Education'

import JavascriptIcon from '@mui/icons-material/Javascript';

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

function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
            Mini variant drawer
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
            <ListItem button component={Link} to={'/haja/'+text} onClick={() => {
              active = text;
              console.log(active)
            }} key={index} >
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
            <ListItem button key={index} component={Link} to={'/haja/'+"Home"} onClick={() => {
              console.log(active)
            }} >
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
          <Route path='/haja/Home' element={<Head />} />
          <Route path='/haja/Projects' element={<Projects />} />  
          <Route path='/haja/Resume' element={<Part />} />  
          <Route path='/haja/Contact' element={<Header />} /> 
        </Routes>
      </Box>

    </Box>
  );
}

export default function Head(){
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `Hajaniaina_CV.pdf`;
    link.href = "./certificates/CV.pdf";
    link.click();
  }

  return (      
    <Grid container spacing={1}>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} marginBottom={1} className='grid'>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" gutterBottom>
            Hajaniaina ANDRIANAVALONA
          </Typography>
        </ThemeProvider>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={5.98} xl={5.98} marginBottom={1} marginLeft={0.1} marginRight={0.1} className='grid'>      
        <ThemeProvider theme={theme}>
          <Typography variant="h4" gutterBottom>
            OSISoft PI System Administrator
          </Typography>
        </ThemeProvider> 
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={5.98} xl={5.98} marginBottom={1} marginLeft={0.1} marginRight={0.1} className='grid'>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" gutterBottom>
            Jr. React Developer
          </Typography>
        </ThemeProvider>       
      </Grid>

      <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} sx={{ padding: 0, bgcolor: "white"  }}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className='grid'>
          <Avatar
            alt="Haja Niaina"
            src='./test.png'
            sx={{  width: '100%', height:'100%' }}
            variant="rounded" //square
            />  
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={{bgcolor:'white'}} className='readMe' padding={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{color:'#001e3c'}} marginLeft={2} className='profile'>
            <h2>👋 Hello! I'm Haja,</h2>
            <h2>I'm a React Developer and an OSISoft PI Developer</h2>
            <h2>From Toamasina, Madagascar.</h2>
            <p>{profile}</p>
            <p>I am opened to opportunity, as "React Developer", "OSISoft PI Developer" & "Data Scientist".</p>
            <p>📫 hajaniaina.andri@gmail.com.</p>
	          <p>📞 +261 34 27 536 51</p>
            <Grid className='center'>
              <Button 
                variant="contained" 
                color="success"
                onClick={() => onDownload()}
                >Resume</Button>
            </Grid>
          {/* 
            <ul> 
            {presentations.map((item, index) => (
              <li key={index}>{item}</li>
              ))}
            </ul>
          */}
          </Grid>
        </Grid>
      </Grid>

      {/* SKILLS */}
      <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} sx={{ bgcolor:'white', padding: 0.5, color:'blue', marginTop: 1.5, textAlign: 'center' }} className='readMe' >  
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{textAlign: 'center'}}>
          <ThemeProvider theme={theme}>
            <Typography variant="h4" gutterBottom sx={{ color: '#001e3c' }}>
              Skills
            </Typography>
          </ThemeProvider>
        </Grid>

          {begginer.map((item, index) => (
            <Grid item margin={0.5}>
              <Button key={index} 
                variant="contained" 
                color="primary"
                onClick={() => onDownload()}
                >{item}</Button>
              </Grid>
            ))} 

          {toImprove.map((item, index) => (
            <Grid item margin={0.5}>
              <Button key={index} 
                variant="contained" 
                color="secondary"
                onClick={() => onDownload()}
                disabled={true}
                >{item}</Button>
              </Grid>
            ))} 
          {skills.map((item, index) => (
            <Grid item margin={0.5}>
              <Button key={index} 
                variant="contained" 
                color="success"
                onClick={() => onDownload()}
                >{item}</Button>
              </Grid>
            ))}
      </Grid>

      {/* TOOLS */}
      <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} sx={{ bgcolor:'white', padding: 0.5, color:'blue', marginTop: 1.5 }} className='readMe' >  
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{textAlign: 'center'}}>
          <ThemeProvider theme={theme}>
            <Typography variant="h4" gutterBottom sx={{ color: '#001e3c' }}>
              Tools
            </Typography>
          </ThemeProvider>
        </Grid>

        {begginer.map((item, index) => (
          <Grid item margin={0.5}>
            <Button key={index} 
              variant="contained" 
              color="primary"
              onClick={() => onDownload()}
              >{item}</Button>
            </Grid>
          ))} 
      </Grid>

      {/* PROJECTS */}
      <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} sx={{ bgcolor:'white', padding: 0.5, color:'blue', marginTop: 1.5 }} className='readMe' >  
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{textAlign: 'center'}}>
          <ThemeProvider theme={theme}>
            <Typography variant="h4" gutterBottom sx={{ color: '#001e3c' }}>
              Projects
            </Typography>
          </ThemeProvider>
        </Grid>

        {begginer.map((item, index) => (
          <Grid item margin={0.5}>
            <Button key={index} 
              variant="contained" 
              color="primary"
              onClick={() => onDownload()}
              >{item}</Button>
            </Grid>
          ))} 
      </Grid>


      {/** EDUCATION **/}
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3} padding={1} sx={{ borderRadius: '5px', color:'#001e3c', textAlign:'center', marginBottom: 1, marginTop: 1 }} className='blocks'>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" gutterBottom sx={{ color: '#001e3c' }}>
            Education
          </Typography>
        </ThemeProvider>
        <Degrees />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3} padding={1} sx={{ borderRadius: '5px', color:'#001e3c', textAlign:'center',  marginTop: 1}} className='blocks'>
          <ThemeProvider theme={theme}>
            <Typography variant="h4" gutterBottom sx={{ color: '#001e3c' }}>
              Skills
            </Typography>
          </ThemeProvider>
        <Skills />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3} padding={1} sx={{ borderRadius: '5px', color:'#001e3c', textAlign:'center',  marginTop: 1 }} className='blocks'>
          <ThemeProvider theme={theme}>
            <Typography variant="h4" gutterBottom sx={{ color: '#001e3c' }}>
              Experiences
            </Typography>
          </ThemeProvider>
        <Experiences />
      </Grid>

    </Grid>
  );
}

const Part = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sx={{ borderRadius : 0, bgcolor: 'darkcyan' }} marginTop={0}>
        <Grid container spacing={0}>
          <Grid item xs={4} sx={{ borderRadius : 0, bgcolor: 'error.dark', height: 100 }} marginTop={0}>
            <h1>Part1</h1>
          </Grid>
          <Grid item xs={8} sx={{ borderRadius : 0, bgcolor: 'success.dark' }} marginTop={0}>  
            <Grid item xs={12} sx={{ borderRadius : 0, bgcolor: 'white', color:'blue', height: '50%' }} marginTop={0}>
              <h2>Part21</h2>
            </Grid>
            <Grid item xs={12} sx={{ borderRadius : 0, bgcolor: 'primary.dark', height: '50%', textAlign: 'center' }} marginTop={0}>
              <h2>Part22</h2>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={4} sx={{ borderRadius : 0, bgcolor: 'darkcyan' }} marginTop={0}>
        <h1>Part1</h1>
      </Grid>
      <Grid item xs={8} sx={{ borderRadius : 0, bgcolor: 'darkcyan' }} marginTop={0}>
        <h1>Part2</h1>
      </Grid>
    </Grid>
  );
}