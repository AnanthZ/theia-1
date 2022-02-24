import React from "react";
import { useParams } from "react-router-dom";
import Teamcard from "../../Components/cards/Teamcard/Teamcard";
import "./Profilepage.css";
import { getUserDataByUid } from "../../services/userDataServices";
import Profilecard from "../../Components/cards/Profilecard/Profilecard";
import Projectcard from "../../Components/cards/Projectcard/Projectcard";

function Profilepage() {
  const { uid } = useParams();
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    console.log("called");
    const result = getUserDataByUid(uid);
    setUserData(result);
    console.log(result);
  }, [uid]);

  return userData ? (
    <div className="profile__page">
      <div className="profile__page__left">
        <Profilecard data={userData}/>
        <hr></hr>
        <Projectcard data={userData}/>
      </div>
      <div className="profile__page__right">
        <Teamcard data={userData} />
      </div>
    </div>
  ) : (
    <h1>loading</h1>
  );
}

export default Profilepage;
