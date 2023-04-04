// ** React Imports
import { Fragment } from 'react'

import * as React from "react";

import { selectThemeColors } from '@utils'

// ** Icons Imports
import { ArrowLeft } from 'react-feather'

import {
  Autocomplete,
  
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
  
} from "@mui/material";

// import { Card, CardHeader, CardTitle, CardBody, Row, Col, Label } from 'reactstrap'


import Form from "react-bootstrap/Form";
import Box from "@mui/material/Box";


import { useState } from 'react';

// import { DatePicker } from '@mui/x-date-pickers/DatePicker';



// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
// import Select from "@mui/material/Select";


// import { Form } from "react-bootstrap";


// ** Reactstrap Imports
import { Label, Row, Col,  Input,Button} from 'reactstrap'

const SocialLinks = ({ stepper, type }) => {
  const [date, setDate] = useState(new Date());

  const [age, setAge] = React.useState("");
  const handleChange = (e) => {
    setAge(e.target.value);
  };

  // const colourOptions=[
  //   { value: 'ocean', label: 'Ocean' },
  //   { value: 'blue', label: 'Blue' },
  //   { value: 'purple', label: 'Purple' },
  // ];

  return (
    <Fragment>
      
      <Form onSubmit={e => e.preventDefault()}>

      <Grid container spacing={3}>
            <Grid container item spacing={3} xs={12}>

            <Grid item xs={12} md={4}>

            <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Service Code</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>1A</MenuItem>
          <MenuItem value={20}>1B</MenuItem>
          <MenuItem value={30}>1C</MenuItem>
        </Select>
      </FormControl>
    </Box>




            </Grid>
            <Grid item xs={12} md={4}>

            <Box sx={{ minWidth: 120}}>
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Service Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </Grid>

    <Grid item xs={12} md={4}>

            {/* <InputLabel id="demo-simple-select-label ">Service Type</InputLabel> */}

      {/* <input type = "datetime-local" placeholder='Date of Incident'/> */}
     

      {/* <DatePicker label="Basic date picker" /> */}
      
        {/* <DatePicker label="Basic date picker" /> */}
        <Label className='form-label' htmlFor='date-time-picker'>
 Date & Time
  </Label>
    
        <Input type='Date' placeholder='Enter Country'></Input>

        {/* <Input type='text' placeholder='Enter Country'></Input> */}

           
      </Grid>

      <Grid item xs={12} md={4}>

      <Box sx={{ minWidth: 320 }}>
                    <InputLabel id="demo-simple-select-label ">Dispatch Code</InputLabel>
                            <Input type='text' placeholder=''></Input>

        {/* <Input type='text' placeholder='Enter Country'></Input> */}


    </Box>
        </Grid>

        <Grid item xs={12} md={4}>

      <Box sx={{ minWidth: 320 }}>
                    <InputLabel id="demo-simple-select-label ">Time of Incident</InputLabel>
                            <Input type='time' placeholder=''></Input>

        {/* <Input type='text' placeholder='Enter Country'></Input> */}


    </Box>
        </Grid>


            </Grid>

            <Grid item xs={12}>
                  <Paper variant="outlined" sx={{ p: 2, w: "100%" }}>
                  <Typography color="textSecondary" gutterBottom sx={{ mb: 2 }}>
            Incident Location
          </Typography>

              <Grid container spacing={2}>
                   <Grid item xs={12} md={6} lg={9}>
                   <TextField
                label="Street Address"
                size="small"
                fullWidth
                // value={incidentDetails.Inc_Street}
                onChange={(e) => handleChange( e.target.value)}
              />


                    </Grid>

                    <Grid item xs={12} md={4}>
              <TextField
                label="City"
                size="small"
                fullWidth
                // value={incidentDetails.Inc_Community}
                onChange={(e) => handleChange( e.target.value)}
              />
            </Grid>
            

            <Grid item xs={12} md={4}>
              <TextField
                label="State"
                size="small"
                fullWidth
                // value={incidentDetails.Inc_Community}
                onChange={(e) => handleChange(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="street"
                size="small"
                fullWidth
                // value={incidentDetails.Inc_Community}
                onChange={(e) => handleChange(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Postal Code"
                size="small"
                fullWidth
                // value={incidentDetails.Inc_Community}
                onChange={(e) => handleChange(e.target.value)}
              />
            </Grid>
                    </Grid>
                  
                  
                  
                  
                  </Paper>





            </Grid>           
        
      </Grid>

      <Grid item xs={12} md={4}>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={9}>
         
          <div className='mb-3 mt-2'>
          <Label className='form-label fs-5' for='select-custom'>
            Destination Deternination
          </Label>
          <Input type='select' name='select' id='select-custom'>
            <option>Pulp Fiction</option>
            <option>Nightcrawler</option>
            <option>Donnie Darko</option>
          </Input>
        </div>



        
       
          </Grid>

          
          
          </Grid>

          

          </Grid>

          <Grid item xs={12} md={4}>

<Grid container spacing={2}>
  <Grid item xs={12} md={6} lg={9}>
   
    <div className='mb-3 mt-0'>
    <Label className='form-label fs-6' for='select-custom'>
      Grapic Locator
    </Label>
    <Input type='select' name='select' id='select-custom'>
      <option>Pulp Fiction</option>
      <option>Nightcrawler</option>
      <option>Donnie Darko</option>
    </Input>
  </div>
 
    </Grid></Grid>

    </Grid> 


    <Grid item xs={12} md={4}>

<Grid container spacing={2}>
  <Grid item xs={12} md={6} lg={9}>
   
    <div className='mb-3 mt-0'>
    <Label className='form-label fs-6' for='select-custom'>
      Scene Location Type
    </Label>
    <Input type='select' name='select' id='select-custom'>
      <option>Pulp Fiction</option>
      <option>Nightcrawler</option>
      <option>Donnie Darko</option>
    </Input>
  </div>
 
    </Grid></Grid>

    </Grid> 

    <Row>
        

          <Col className='mb-1' xl='4' md='6' sm='12'>
            <Label className='form-label' for='basicInput'>
              Destination Facility Code
            </Label>
            <Input type='email' id='basicInput' placeholder='Enter Email' />
          </Col>

          <Col className='mb-1' xl='4' md='6' sm='12'>
            <Label className='form-label' for='basicInput'>
              Scene Facility Code
            </Label>
            <Input type='email' id='basicInput' placeholder='Enter Email' />
          </Col>
          
          </Row>

          <Grid item xs={12} className='mb-3'>
                  <Paper variant="outlined" sx={{ p: 2, w: "100%" }}>
                  <Typography color="textSecondary" gutterBottom sx={{ mb: 2 }}>
            Destination Loacation
          </Typography>

          <Row className=''>
          <Col className='mb-1' xl='4' md='6' sm='12'>
            <Label className='form-label' for='basicInput'>
              Street
            </Label>
            <Input type='email' id='basicInput' placeholder='Enter Email' />
          </Col>
          <Col className='mb-1' xl='4' md='6' sm='12'>
            <Label className='form-label' for='basicInput'>
              City
            </Label>
            <Input type='email' id='basicInput' placeholder='Enter Email' />
          </Col>
          <Col className='mb-1' xl='4' md='6' sm='12'>
            <Label className='form-label' for='basicInput'>
              State 
            </Label>
            <Input type='email' id='basicInput' placeholder='Enter Email' />
          </Col>
          <Col className='mb-1' xl='4' md='6' sm='12'>
            <Label className='form-label' for='basicInput'>
              Postal Code
            </Label>
            <Input type='email' id='basicInput' placeholder='Enter Email' />
          </Col>
          </Row>
          
          </Paper></Grid>

          <Grid item xs={12} className='mb-3'>

          <Grid item xs={12} md={6} lg={9}>
          <Row className=''>
          <Col className='mb-1' xl='4' md='6' sm='12'>
   <div className='mb-3 mt-0'>
   <Label className='form-label fs-6' for='select-custom'>
     Factors Affecting Ems
   </Label>
   <Input type='select' name='select' id='select-custom'>
     <option>Pulp Fiction</option>
     <option>Nightcrawler</option>
     <option>Donnie Darko</option>
   </Input>
 </div>
 </Col>
 <Col className='mb-1' xl='4' md='6' sm='12'>
   <div className='mb-3 mt-0'>
   <Label className='form-label fs-6' for='select-custom'>
     Patiient Disposition
   </Label>
   <Input type='select' name='select' id='select-custom'>
     <option>Pulp Fiction</option>
     <option>Nightcrawler</option>
     <option>Donnie Darko</option>
   </Input>
 </div>
 </Col>

 </Row>

   </Grid>

          </Grid>

          
          <Grid item xs={12} className='mb-3'>
                  <Paper variant="outlined" sx={{ p: 2, w: "100%" }}>
                  <Typography color="textSecondary" gutterBottom sx={{ mb: 2 }}>
            Service Payment
          </Typography>
          <Row className=''>
          <Col className='mb-1' xl='4' md='6' sm='12'>
            <Label className='form-label' for='basicInput'>
              Response
            </Label>
            <Input type='email' id='basicInput' placeholder='' />
          </Col>
          <Col className='mb-1' xl='4' md='6' sm='12'>
            <Label className='form-label' for='basicInput'>
              Number
            </Label>
            <Input type='email' id='basicInput' placeholder='' />
          </Col>
          </Row>
          </Paper>
          </Grid>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button color='success' className='btn-submit' onClick={() => alert('submitted')}>
            Submit
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default SocialLinks
