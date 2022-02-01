import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion sx={{ bgcolor: '#001e3c', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color:'white' }}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>React Developer Certificate (Udacity)</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Having successfully completed the Nanodegree Program <a href='https://confirm.udacity.com/DDKJTMUA' target="_blank">React Developer's</a> Udacity, delivered in October 2021.
            <a href='https://confirm.udacity.com/DDKJTMUA' target="_blank"><img src='./certificates/React.PNG' height={'100%'} width={'100%'}/></a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Divider color='white'/>

      <Accordion sx={{ bgcolor: '#001e3c', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color:'white' }}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Data Science Certificate (Udacity)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Having successfully completed the <a href='https://confirm.udacity.com/DDKJTMUA' target="_blank">Data Scientist</a> Udacity Nanodegree Program, delivered in January 2021.
            ID:<a href='https://confirm.udacity.com/3LJ5GUKD' target="_blank"> 3LJ5GUKD</a>
            <a href='https://confirm.udacity.com/3LJ5GUKD' target="_blank"><img src='./certificates/DS.PNG' height={'100%'} width={'100%'}/></a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Divider color='white'/>

      <Accordion sx={{ bgcolor: '#001e3c', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color:'white' }}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Electrical Engineering Degree</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Graduated from University of Antananarivo, License Es Sciense in Electrical Engineering in 2015.
            <img src='./certificates/GE.jpg' height={'100%'} width={'100%'}/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Divider color='white'/>

      <Accordion sx={{ bgcolor: '#001e3c', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color:'white' }}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Telecommunication Degree</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Graduated from University of Antananarivo, License Es Sciense in Telecommunication in 2014.
            <img src='./certificates/telecom.jpg' height={'100%'} width={'100%'}/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Divider color='white'/>

      <Accordion sx={{ bgcolor: '#001e3c', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color:'white' }}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>PI System Certificate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To imporve myself in my current job, I started with PI System Basic.
            <img src='./certificates/PI.PNG' height={'100%'} width={'100%'}/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Divider color='white'/>

      <Accordion sx={{ bgcolor: '#001e3c', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color:'white' }}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Python (TestDOME Challenge)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Having passed the testDome challenge.
            <img src='./certificates/TestDome.PNG' height={'100%'} width={'100%'}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
