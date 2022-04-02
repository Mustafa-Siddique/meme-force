import React from 'react'
import Navlaunch from './Navlaunch'
import ProjectsOpen from './ProjectsOpen'

export default function Launchpad({price}) {
  return (
    <div>
      <div className="launchpad-container">
        {/* <Navlaunch/> */}
        <ProjectsOpen price={price}/>
      </div>
    </div>
  )
}
