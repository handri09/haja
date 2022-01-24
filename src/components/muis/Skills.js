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
          <Typography>Algorithms and Data Structures</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            For algorithms skills, I know Dynamic Programming, .... 
            <br/>
            For data structures, I master all basic like list(array), set, dictionary...
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
          <Typography>Data Science</Typography>
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
          <Typography>Front-End</Typography>
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
          <Typography>Back-End</Typography>
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
          <Typography>Mobile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            BackEnd Developer (Python Flask Restful)
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
          <Typography>Data Engineer</Typography>
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
          <Typography>Artificiel Intelligent</Typography>
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
