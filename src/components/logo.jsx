import React from "react";
function Logo(props) {
  return (
    <img
      src={require("./../images/main-logo.png")}
      style={{ width: "260px", bottom : "100px", position : "relative" }}
      alt="180DC"
    />
  );
}

export default Logo;
