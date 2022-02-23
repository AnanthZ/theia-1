import React from 'react'
import Teammember from '../Teammember/Teammember'

function Teamcard({data}) {
  return (
    <div>
    <h1>{data.name}</h1>
    <img src={data.imag} alt={data.name}></img>
    <hr></hr>
    <div className='team_members'>
    {
      [...data.team].map((guy)=>{
        return (
            <Teammember guy={guy} />
        )
      })
    }
    </div>
    </div>
  )
}

export default Teamcard