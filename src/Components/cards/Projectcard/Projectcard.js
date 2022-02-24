import React from 'react'
import './Projectcard.css'


function Projectcard({data}) {
  return (
    <div className='project'>
        <div className='project_title'>
        <h1>{data.projectName}</h1>
        <div>Role in Project<h3>{data.projectTask}</h3></div>
        {data.lead?<div>Reports to<h3>{data.lead}</h3></div>:""}
        </div>
        <div className='project_description'>
        {[...data.projectStatusArray].map((status)=>{
            return <h4>{status}</h4>
        })}
        </div>
    </div>
  )
}

export default Projectcard