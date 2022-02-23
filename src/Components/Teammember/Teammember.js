import React from "react";
import ProfileImageIcon from "../icons/ProfileImageIcon";
import { Link } from "react-router-dom";

function Teammember({ guy }) {
  return (
    <div>
      <div className="team_member">
        <Link to={`/profile/${guy.uid}`}>
          <ProfileImageIcon
            cutomStyles={{
              height: "100px",
              width: "100px",
            }}
            profileImageUrl={guy.profileImageUrl}
          />
        </Link>
        <h4>{`${guy.fistName} ${guy.lastName}`}</h4>
      </div>
    </div>
  );
}

export default Teammember;
