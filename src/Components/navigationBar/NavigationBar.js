import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.svg";
import ProfileImageIcon from "../icons/ProfileImageIcon";
import IconBtn from "../Buttons/IconBtn";
import LogoutIcon from "../../Assets/svgIcons/logoutIcon.svg";
import { colors } from "../../constants/colors";

const styles = {
  navBar: {
    display: "flex",
    height: "80px",
    border: "1px solid black",
    paddingLeft: "15px",
    alignItems: "center",
    position: "sticky",
    top: 0,
    backgroundColor: colors.black,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  rightContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    minWidth: "150px",
  },
  profileImage: {
    height: "30px",
    width: "30px",
  },
};

function NavigationBar() {
  return (
    <nav style={styles.navBar}>
      <div style={styles.logoContainer}>
        <img src={Logo} alt="logo" />
      </div>
      <div style={styles.rightContainer}>
        <Link to={"/profile/ayushThakre"}>
          <ProfileImageIcon />
        </Link>
        <IconBtn
          icon={
            <img
              style={{ height: "1.5rem", width: "1.5rem" }}
              src={LogoutIcon}
              alt={"Logout Icon"}
            />
          }
        />
      </div>
    </nav>
  );
}

export default NavigationBar;
