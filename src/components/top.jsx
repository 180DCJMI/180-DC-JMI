import React from "react";
import Logo from "./logo";
import Nav from "./navbar";
import classes from "../styles/top.module.css";

function Top() {
  const bg = {
    backgroundImage: `url(${require("../images/bg-1.png")})`,
    backgroundSize: `100% 650px`,
    backgroundRepeat: `no-repeat`,
  };
  return (
    <div className={classes.box} id="c-1" style={bg}>
      <div id="top">
        <div className={classes.box}>
          <Logo />
          <Nav />
        </div>
        <div id="box2">
          <h1>
            Worlds largest student-based consultancy .{" "}
            <span>This is 180DC-JMI</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Top;
