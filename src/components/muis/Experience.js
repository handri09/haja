import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

//const imageName = require('TestDome.PNG')

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion sx={{ bgcolor: '#001e3c', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color:'white' }}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>OSISoft PI System Developer</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography sx={{ textAlign: 'left'}}>
            Develop Web Application for Data Entry and Data Monitoring (with React and PI Web API).
            <br/>
            Develop PI System Health Check, which sends Emails and SMS for any anomaly detection. (with PI WEB API and Python)
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Divider color='white'/>

      <Accordion sx={{ bgcolor: '#001e3c', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color:'white' }}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>OSISoft PI System Administrator</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography sx={{ textAlign: 'left'}}>
            4 years in PI System Administration, I have a deep understanding in PI Server Administration and Implementation.
            I am good at managing PI Points (tags), installiong PI OPC Interface and PI UFL.
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
          <Typography>Junior PI System Adminstrator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'left'}}>
            Meet customer needs in a consistent manner, closely discussing each individual's needs and how best to meet them.
            Telephone support for users to diagnose, troubleshoot and resolve issues.
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
          <Typography>Control System Technician</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'left'}}>
            PLC Programmer.
            <br/>
            OS system and software installation.
            <br/>
            Monitoring of remote panel’s communication (FO, MODBUS, PROFIBUS, ETHERNET). 
            <br/>
            Preventive maintenance of all Distributed Control System (DCS) devises
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
