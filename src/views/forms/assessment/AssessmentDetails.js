// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import  PatientHistory  from "./steps/PatientHistory";
import PatientAssessment   from "./steps/PatientAssessment";
import PrimaryAssessment  from "./steps/PrimaryAssessment";

const AssessmentDetails= () => {
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'account-details',
      title: 'PatientHistory',
      subtitle: 'Enter Patient Account Details.',
      content: <PatientHistory stepper={stepper} />
    },
    {
      id: 'patient-assessment',
      title: 'Patient Assessment',
      subtitle: 'Add Patient Info',
      content: <PatientAssessment stepper={stepper} />
    },
    // {
    //   id: 'incident-details',
    //   title: 'Incident Details',
    //   subtitle: 'Add Address',
    //   content: <Address stepper={stepper} />
    // },
    {
      id: 'primary-assessment',
      title: 'Primary Assessment',
      subtitle: 'Add Primary Details',
      content: <PrimaryAssessment stepper={stepper} />
    }
  ]

  return (
    <div className='horizontal-wizard'>
      <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
    </div>
  )
}

export default AssessmentDetails
