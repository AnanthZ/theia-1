import React from "react";
import Teammember from "../../Teammember/Teammember";
import ProfileImageIcon from "../../icons/ProfileImageIcon";
import './Teamcard.css';

function Teamcard({ data }) {
  console.log(data, "<<<<<<<<<<<<<");
  return (
    <div>
      <div className="team_leader">
        <h1>{data.firstName + " " + data.lastName}</h1>
        <ProfileImageIcon
          cutomStyles={{
            height: "180px",
            width: "180px",
          }}
          profileImageUrl={data.profileImageUrl}
        />
        </div>
      <hr></hr>
      <div className="team_members">
        {data.teamMembers.map((guy,index) => (
          <Teammember guy={guy} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default Teamcard;
