// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
// import Address from './steps-with-validation/Address'
import SocialLinks from './steps/SocialLinks'
import PersonalInfo from './steps/PersonalInfo'
import AccountDetails from './steps/AccountDetails'

const WizardHorizontal = () => {
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'account-details',
      title: 'Patient Details',
      subtitle: 'Enter Patient Account Details.',
      content: <AccountDetails stepper={stepper} />
    },
    {
      id: 'vehicle-details',
      title: 'Vehicle Details',
      subtitle: 'Add Vehicle Info',
      content: <PersonalInfo stepper={stepper} />
    },
    // {
    //   id: 'incident-details',
    //   title: 'Incident Details',
    //   subtitle: 'Add Address',
    //   content: <Address stepper={stepper} />
    // },
    {
      id: 'incident-details',
      title: 'Incident Details',
      subtitle: 'Add Incident Details',
      content: <SocialLinks stepper={stepper} />
    }
  ]

  return (
    <div className='horizontal-wizard'>
      <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
    </div>
  )
}

export default WizardHorizontal
