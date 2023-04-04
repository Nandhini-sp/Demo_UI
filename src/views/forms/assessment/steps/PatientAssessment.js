// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const PatientAssessment = ({ stepper }) => {
  return (
    <Fragment>
      {/* <div className='content-header'>
        <h5 className='mb-0'>Patient Details</h5>
        <small className='text-muted'>Enter Pat Details.</small>
      </div> */}
      <Form onSubmit={e => e.preventDefault()}>
        {/* <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`username-${type}`}>
              User
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`} placeholder='johndoe' />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`email-${type}`}>
              Email
            </Label>
            <Input
              type='email'
              name={`email-${type}`}
              id={`email-${type}`}
              placeholder='john.doe@email.com'
              aria-label='john.doe'
            />
          </Col>
        </Row>
        <Row>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label' for={`password-${type}`}>
              Password
            </Label>
            <Input type='password' id={`password-${type}`} />
          </div>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label' for={`confirm-password-${type}`}>
              Confirm Password
            </Label>
            <Input type='password' id={`confirm-password-${type}`} />
          </div>
        </Row> */}
        <Row>

<Col md='6' className='mb-1'>
  <Label className='form-label'for='firstname'>Firstname</Label>
  <Input type='text'placeholder='Enter the firstname'></Input>
</Col>

<Col md='6' className='mb-1'>
  <Label className='form-label'htmlFor='firstname'>Surname</Label>
  <Input type='text'placeholder='Enter street address'></Input>
</Col>

</Row>
<Row>
<Col md='12' className='mb-1'>
  <Label className='form-label'htmlFor='firstname'>Address</Label>
  <Input type='text'placeholder='Address'></Input>
</Col>
</Row>
<Row>

<Col md='6' className='mb-1'>
  <Label className='form-label'htmlFor='firstname'>City</Label>
  <Input type='text'placeholder='Enter city'></Input>
</Col>
<Col md='6' className='mb-1'>
  <Label className='form-label'htmlFor='firstname'>State</Label>
  <Input type='text'placeholder='Enter state'></Input>
</Col>


</Row>
<Row>

<Col md='6' className='mb-1' >
  <Label className='form-label'htmlFor='firstname'>Country</Label>
  <Input type='text'placeholder='Enter Country'></Input>
</Col>
<Col md='6' className='mb-1'>
  <Label className='form-label'htmlFor='firstname'>Postal code</Label>
  <Input type='text'placeholder='Enter Post Code'></Input>
</Col>


</Row>
<Row>

<Col md='4' className='mb-1' >
  <Label className='form-label'htmlFor='firstname'>Country</Label>
  <Input type='text'placeholder='Enter Country'></Input>
</Col>
<Col md='4' className='mb-1'>
  <Label className='form-label' htmlFor='date-time-picker'>
 Date & Time
  </Label>
    {/* <Flatpickr
      value={picker}
       data-enable-time
        id='date-time-picker'
        classNameName='form-control'
        onChange={date => setPicker(date)}
          /> */}
          {/* <DatePicker
selected={date}
onSelect={handleDateSelect} //when day is clicked
onChange={handleDateChange} //only when value has changed
classNameName='form-control'

/> */}
                  <Input type='Date' placeholder='Enter Country'></Input>

</Col>
<Col md='4' className='mb-1'>
  <Label className='form-label'htmlFor='age'>Age</Label>
  <Input type='number'placeholder='Enter Age'></Input>
</Col>
</Row>
<Row>
            
            <Col md='6' className='mt-2' >
              <label htmlFor="gender" className=''>Gender: </label>
              <div className="form-check form-check-inline" >
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
               </div>
               <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">Female</label>
               </div>


            </Col>
            <Col md='6' className='mb-1'>
                <Label className='form-label'htmlFor='firstname'>Aadhar Card Number</Label>
                <Input type='number'placeholder='Enter Aadhar Card Number'></Input>
            </Col>
          </Row>
        

        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' outline disabled>
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

export default PatientAssessment
