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
          <Typography>Electrical Engineering</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Having completed 4 years after high school in Electrical Engineering, in University of Antananarivo at Ecole Superieure Polytechnique d'Antananarivo.
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
          <Typography>Telecommunication Engineering</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Graduated from University of Antananarivo, License Es Sciense in Telecommunication in 2015.
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
          <Typography>Full Stack Web Developer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lately, having learned React JS and Python Flask RestFul API. Graduated from Udacity in React nanodegree.
            I use my python skills from my graduation of Data Science with Python to learn Flask RestFul API.
            Now I can say I am good at both.
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
          <Typography>Data Scientist (Python)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lately, having learned React JS and Python Flask RestFul API. Graduated from Udacity in React nanodegree.
            I use my python skills from my graduation of Data Science with Python to learn Flask RestFul API.
            Now I can say I am good at both.
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
          <Typography>Front-End Developer (React JS - Redux)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lately, having learned React JS and Python Flask RestFul API. Graduated from Udacity in React nanodegree.
            I use my python skills from my graduation of Data Science with Python to learn Flask RestFul API.
            Now I can say I am good at both.
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
          <Typography>BackEnd Developer (Python Flask Restful)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lately, having learned React JS and Python Flask RestFul API. Graduated from Udacity in React nanodegree.
            I use my python skills from my graduation of Data Science with Python to learn Flask RestFul API.
            Now I can say I am good at both.
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
          <Typography>AI Developer (with Pytorch)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lately, having learned React JS and Python Flask RestFul API. Graduated from Udacity in React nanodegree.
            I use my python skills from my graduation of Data Science with Python to learn Flask RestFul API.
            Now I can say I am good at both.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Divider color='white'/>

      <Accordion disabled sx={{ bgcolor:'#001e3c', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color:'white' }}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Control System Specialist</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
