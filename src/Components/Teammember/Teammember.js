import React from 'react'

function Teammember({guy}) {
  return (
    <div>
        <div className='team_member'>
        <img className='team_member_img' src={guy.imag} alt={guy.name}></img>
        <h4>{guy.name}</h4>
        </div>
    </div>
  )
}

export default Teammember