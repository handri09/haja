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
          <Typography>REACT & REDUX</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React Component State, React Router, Environment, React Lifecycle, 
            React Design Patterns, React Styling, React Native,
            Redux-Thunk, Redux Store API, Redux Design Patterns, 
            JavaScript Composition, Idiomatic Redux, Redux Middleware,
            Redux Actions, Redux Reducers, Redux Stores,
            React-Redux Bindings, Redux Integration, JSX,
            JavaScript Functions, Asynchronous Redux
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
          <Typography>JAVASCRIPT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            JavaScript ES6, JavaScript Promises, Javascript OOP, 
            API Requests, JEST, Cypress
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
          <Typography>FRONT-END & WEB DEVELOPMENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Flexbox, CSS, HTML, Material UI
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
          <Typography>Software Development Process</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            GIT & GITHUB
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
          <Typography>Computer Science & Programming</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Iterators, UNIX Shell, User Input Handling
            <br />
            Control Flow, Variable Scope, DocStrings
            <br/>
            Algorithms & Data Structures 
            <br />
            App Developement: Application State, Management
            <br />
            Code debugging
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
            SQL: Subqueries, Aggregations, Queries, Window Functions, JOINs
            <br/>
            PYTHON: NumPy, Anaconda, Pandas, Python Data Structures, Pytorch
            <br/>
            Software Development Process: GIT & GITHUB
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
          <Typography>DATABASE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            SQL, SQLite & Postgresql
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
          <Typography>Backend</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I used Python as BackEnd (Flask Restful)
            <br />
            Graduated from Udacity in Data Science, I used my python skills to learn Flask RestFul API.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
