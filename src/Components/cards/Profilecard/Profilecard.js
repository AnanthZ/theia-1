import React from 'react'
import ProfileImageIcon from '../../icons/ProfileImageIcon'
import { calculateExperience } from '../../../services/userDataServices'
import './Profilecard.css'

function Profilecard({data}) {
  return (
    <div className='Profilecard'>
        <div>
        <ProfileImageIcon
        cutomStyles={
            {
                height:"200px",
                width:"200px",
            }
        }
        profileImageUrl={data.profileImageUrl}/>
        </div>
        <div className='details'>
        <div className='details-part'>name<h1>{data.firstName+" "+data.lastName}</h1></div>
        <div className='details-part'>email<h4>{data.email}</h4></div>
        <div className='details-part'>DOJ(Date-Of-Joining)<h4>{data.dateofjoining}</h4></div>
        <div className='details-part'>experience<h4>{calculateExperience(data.dateofjoining)}</h4></div>
        <div className='details-part'>technology<h4>{data.technology}</h4></div>
        <div className='details-part'>gender<h4>{data.gender}</h4></div>
        <div className='details-part'>region<h4>{data.region}</h4></div>
        </div>
        </div>
  )
}

export default Profilecard