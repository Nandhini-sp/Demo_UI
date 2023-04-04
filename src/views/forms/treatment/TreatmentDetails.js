// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import {PatientDetails} from './steps/PatientDetails';
import {VitalSign} from './steps/VitalSign'

const TreatmentDetails= () => {
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'patientdeails',
      title: 'Patient Details',
      subtitle: 'Enter Patient Account Details.',
      content: <PatientDetails stepper={stepper} />
    },
    {
      id: 'vital-sign',
      title: 'Vital Sign',
      subtitle: 'Add Patient Vital Sign',
      content: <VitalSign stepper={stepper} />
    },
    // {
    //   id: 'incident-details',
    //   title: 'Incident Details',
    //   subtitle: 'Add Address',
    //   content: <Address stepper={stepper} />
    // },
    // {
    //   id: 'primary-assessment',
    //   title: 'Primary Assessment',
    //   subtitle: 'Add Primary Details',
    //   content: <PrimaryAssessment stepper={stepper} />
    // }
  ]

  return (
    <div className='horizontal-wizard'>
      <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
    </div>
  )
}

export default TreatmentDetails
