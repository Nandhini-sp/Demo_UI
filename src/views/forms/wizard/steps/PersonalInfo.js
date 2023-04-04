// ** React Imports
import { Fragment } from 'react'
import React,{useState} from 'react'
// ** Third Party Components
// import Select from 'react-select'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { ButtonGroup, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';


// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input,Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const PersonalInfo = ({ stepper, type }) => {
  // let [Name,setname] = useState('');
  // const handleChange =(e,value)=>{
  //   setname(e.target.value);
  // }
  const countryOptions = [
    { value: 'UK', label: 'UK' },
    { value: 'USA', label: 'USA' },
    { value: 'Spain', label: 'Spain' },
    { value: 'France', label: 'France' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Australia', label: 'Australia' }
  ]

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Japanese', label: 'Japanese' }
  ]

  return (
    <Fragment>
     
      <Form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={3}>

            <Grid item xs={12}>
                <Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
					          <Typography color="textSecondary" gutterBottom>Time</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={3}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Button fullWidth variant ="outlined">Notified</Button>
								                 <input type="text" class="form-control" id="inlineFormInputName" placeholder=""/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Button fullWidth variant ="outlined">EN ROUTE</Button>
								                 <input type="text" class="form-control" id="inlineFormInputName" placeholder=""/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Button fullWidth variant ="outlined">AT SCENE</Button>
								                 <input type="text" class="form-control" id="inlineFormInputName" placeholder=""/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Button fullWidth variant ="outlined">CREW PATIENT</Button>
								                 <input type="text" class="form-control" id="inlineFormInputName" placeholder=""/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Button fullWidth variant ="outlined">TIME OUT OF SCENE</Button>
								                 <input type="text" class="form-control" id="inlineFormInputName" placeholder=""/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Button fullWidth variant ="outlined">AT DESTINATION</Button>
								                 <input type="text" class="form-control" id="inlineFormInputName" placeholder=""/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Button fullWidth variant ="outlined">AVAILABLE</Button>
								                 <input type="text" class="form-control" id="inlineFormInputName" placeholder=""/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Button fullWidth variant ="outlined">BACK AREA</Button>
								                 <input type="text" class="form-control" id="inlineFormInputName" placeholder=""/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
                        <Typography color="textSecondary" gutterBottom>Response to Scene</Typography>
                              <Grid container spacing={2}>
						                    <Grid item xs={12} lg={6}>
							                    <Stack direction="row" sx={{ justifyContent: { xs: "space-between", lg: "space-evenly" } }} spacing={2} alignItems="center">
								                    <Typography variant="button">
								                        	Type
								                    </Typography>
								                    <ToggleButtonGroup
									                      exclusive>
									                  <ToggleButton color="info" value="Cold">Cold</ToggleButton>
									                      <ToggleButton color="error" value="Hot">Hot</ToggleButton>
								                    </ToggleButtonGroup>
							                    </Stack>
					                	</Grid>
                            <Grid item xs={12} lg={6}>
							                    <Stack direction="row" sx={{ justifyContent: { xs: "space-between", lg: "space-evenly" } }} spacing={2} alignItems="center">
								                    <Typography variant="button">
								                        	CHANGE IN RESPONSE
								                    </Typography>
								                    <ToggleButtonGroup
									                      exclusive
								                      >
									                  <ToggleButton color="info" value="Cold">Cold</ToggleButton>
									                      <ToggleButton color="error" value="Hot">Hot</ToggleButton>
								                    </ToggleButtonGroup>
							                    </Stack>
					                	</Grid>
                           
                        </Grid>
                    </Paper>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
                        <Typography color="textSecondary" gutterBottom>Response from Scene</Typography>
                              <Grid container spacing={2}>
						                    <Grid item xs={12} lg={6}>
							                    <Stack direction="row" sx={{ justifyContent: { xs: "space-between", lg: "space-evenly" } }} spacing={2} alignItems="center">
								                    <Typography variant="button">
								                        	Type
								                    </Typography>
								                    <ToggleButtonGroup
									                      exclusive>
									                  <ToggleButton color="info" value="Cold">Cold</ToggleButton>
									                      <ToggleButton color="error" value="Hot">Hot</ToggleButton>
								                    </ToggleButtonGroup>
							                    </Stack>
					                	</Grid>
                            <Grid item xs={12} lg={6}>
							                    <Stack direction="row" sx={{ justifyContent: { xs: "space-between", lg: "space-evenly" } }} spacing={2} alignItems="center">
								                    <Typography variant="button">
								                        	CHANGE IN RESPONSE
								                    </Typography>
								                    <ToggleButtonGroup
									                      exclusive
								                      >
									                  <ToggleButton color="info" value="Cold">Cold</ToggleButton>
									                      <ToggleButton color="error" value="Hot">Hot</ToggleButton>
								                    </ToggleButtonGroup>
							                    </Stack>
					                	</Grid>
                           
                        </Grid>
                    </Paper>

                </Grid>
                      
                
      <Grid item xs={12}>
				<Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
					<Typography color="textSecondary" gutterBottom>Crew Type</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} md={4}>
							<Stack spacing={2}>
								<FormControl fullWidth size="small">
									{/* <InputLabel id="c-driver-label">Driver</InputLabel>
                  									<InputLabel id="c-driver-label">Driver</InputLabel>
									<Select
										labelId="c-driver-label"
										id="c-driver"
										label="Driver"
										name="C_driver"
										defaultValue=""
										// value={vehicleDetails.C_driver}
										// onChange={(e) => handleChange(e.target.name, e.target.value)}
									>
										{crewTypes.map((item, index) => (
											<MenuItem key={index} value={item}>{item}</MenuItem>
										))}
									</Select> */}

                              {/* <InputLabel id="c-driver-label">Driver</InputLabel> */}
                              <select class="selectpicker"
                                  data-style="btn-success">
                                  <option>Driver</option>
                              {/* <option>Attendant</option>
                                <option>Assisting Personal</option>
                              <option>Fried Potatoes</option> */}
                             </select>

                  
								</FormControl>
								{/* {vehicleDetails.C_driver === 'Other' &&
									<TextField
										size="small"
										label="Other"
										name="C_driv_oth"
										value={vehicleDetails.C_driv_oth}
										onChange={(e) => handleChange(e.target.name, e.target.value)}
										fullWidth
									/>
								} */}
							</Stack>
						</Grid>
						<Grid item xs={12} md={4}>
							<Stack spacing={2}>
								 <FormControl size="small" fullWidth>
									{/* <InputLabel id="c-attendant-label">Attendant</InputLabel>
									<Select
										labelId="c-attendant-label"
										id="c-attendant"
										name="C_attendant"
										defaultValue=""
										value={vehicleDetails.C_attendant}
										onChange={(e) => handleChange(e.target.name, e.target.value)}
										label="Attendant"
									>
										{crewTypes.map((item, index) => (
											<MenuItem key={index} value={item}>{item}</MenuItem>
										))}
									</Select> */}
                  <select class="selectpicker"
                                  data-style="btn-success">
                                  <option>Attendant</option>
                                  </select>
								</FormControl>
								{/* {vehicleDetails.C_attendant === 'Other' &&
									<TextField
										size="small"
										label="Other"
										name="C_attn_oth"
										value={vehicleDetails.C_attn_oth}
										onChange={(e) => handleChange(e.target.name, e.target.value)}
										fullWidth
									/>
								}  */}
							</Stack>
						</Grid>
						<Grid item xs={12} md={4}>
							<Stack spacing={2}>
								 <FormControl fullWidth size="small">
									{/* <InputLabel id="c-assistant-label">Assistant</InputLabel>
									<Select
										labelId="c-assistant-label"
										id="c-assistant"
										name="C_assistant"
										defaultValue=""
										value={vehicleDetails.C_assistant}
										onChange={(e) => handleChange(e.target.name, e.target.value)}
										label="Assistant"
									>
										{crewTypes.map((item, index) => (
											<MenuItem key={index} value={item}>{item}</MenuItem>
										))}
									</Select> */}
                  <select class="selectpicker"
                                  data-style="btn-success">
                                  <option>Assistant</option>
                                  </select>
								</FormControl>
								{/* {vehicleDetails.C_assistant === 'Other' &&
									<TextField
										size="small"
										label="Other"
										name="C_asst_oth"
										value={vehicleDetails.C_asst_oth}
										onChange={(e) => handleChange(e.target.name, e.target.value)}
										fullWidth
									/>
								}  */}
							</Stack>
						</Grid>
					</Grid >
				</Paper>
			</Grid >

            </Grid>
            

        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default PersonalInfo
