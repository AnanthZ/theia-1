import React from "react";

function IconBtn({ onPress = () => {}, customStyles = {}, icon }) {
  return (
    <div
      style={{
        cursor: "pointer",
        ...customStyles,
      }}
      onClick={onPress}
    >
      {icon}
    </div>
  );
}

export default IconBtn;
