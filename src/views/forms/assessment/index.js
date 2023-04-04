// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components


import AssessmentDetails from './AssessmentDetails'
// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

const Assessment = () => {
  return (
    <Fragment>
      <BreadCrumbs title='Assessment' data={[{ title: 'Form' }, { title: 'Assessment' }]} />
      <Row>
        <Col sm='12'>
          <AssessmentDetails />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Assessment
