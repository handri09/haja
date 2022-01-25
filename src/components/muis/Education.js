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
          <Typography>React Developer Certificate (Aug 2021)</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Graduated as "React Developer" by Udacity, deliver August 2021. 
            ID: <a href='https://confirm.udacity.com/DDKJTMUA' target="_blank"> DDKJTMUA</a>
            <img src='./certificates/React.PNG' height={'100%'} width={'100%'}/>
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
          <Typography>Data Science Certificate (Jan 2021)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Graduated as "Data Scientist" by Udacity, deliver January 2021.
            ID:<a href='https://confirm.udacity.com/3LJ5GUKD' target="_blank"> 3LJ5GUKD</a>
            <img src='./certificates/DS.PNG' height={'100%'} width={'100%'}/>
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
          <Typography>Electrical Engineering Degree (2015)</Typography>
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
          <Typography>Telecommunication Degree (2014)</Typography>
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
