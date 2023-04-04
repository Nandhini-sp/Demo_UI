// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components

import {TreatmentDetails} from './TreatmentDetails';

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

const Treatment = () => {
  return (
    <Fragment>
      <BreadCrumbs title='Treatment' data={[{ title: 'Form' }, { title: 'Treatment' }]} />
      <Row>
        <Col sm='12'>
          <TreatmentDetails />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Treatment
