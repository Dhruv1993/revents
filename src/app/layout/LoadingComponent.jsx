import React from 'react'
// rfac is the short cut for bringing in the react functional coponent
import { Loader, Dimmer } from 'semantic-ui-react'
const LoadingComponent = ({inverted}) => { // inverted is if you send back true or false flag for inverted from the component defination which in this case is used in 
    // eventdashboard
  return (
    <div>
      <Dimmer inverted={inverted} active={true}>
            <Loader content='Loading.....'/>
      </Dimmer>
    </div>
  )
}
// rfac is the short cut for bringing in the react functional coponent
export default LoadingComponent
