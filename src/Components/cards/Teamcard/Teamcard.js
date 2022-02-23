import React from "react";
import Teammember from "../../Teammember/Teammember";
import ProfileImageIcon from "../../icons/ProfileImageIcon";

function Teamcard({ data }) {
  console.log(data, "<<<<<<<<<<<<<");
  return (
    <div>
      <h1>{data.firstName + " " + data.lastName}</h1>
      <ProfileImageIcon
        cutomStyles={{
          height: "100px",
          width: "100px",
        }}
        profileImageUrl={data.profileImageUrl}
      />
      <hr></hr>
      <div className="team_members">
        {data.teamMembers.map((guy) => (
          <Teammember guy={guy} />
        ))}
      </div>
    </div>
  );
}

export default Teamcard;
