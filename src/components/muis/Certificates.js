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
          <Typography>OSISoft PI System Administrator</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            4 years in PI System Administration, I have a deep understanding on PI Data Archive and PI AF.
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
          <Typography>OSISoft PI System Developer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Using PI System, I could customize some UI and features to allow the PI Users interact 
            with the PI System. , for instance there was a downtime and Manual entry for PI Users.
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
          <Typography>Python, Ranking in the TOP <a href='https://app.testdome.com/cert/92058cbf498d4664b7f38458f14fbb41' target="_blank">10%</a></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a href='https://app.testdome.com/cert/92058cbf498d4664b7f38458f14fbb41' target="_blank">Certificate ID</a>
            <br/> 
            <a href='https://app.testdome.com/cert/92058cbf498d4664b7f38458f14fbb41' target="_blank"><img src='./certificates/TestDome.PNG' height={'100%'} width={'100%'}/></a>  
            <br/>
            Lately, having learned React JS and Python Flask RestFul API. Graduated from Udacity in React nanodegree.
            I use my python skills from my graduation of Data Science with Python to learn Flask RestFul API.
            Now I can say I am good at both.
          </Typography>
        </AccordionDetails>
      </Accordion>
!!
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
