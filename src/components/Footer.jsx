import React from "react";
import Logo from "./logo";
import classes from "./../styles/Footer.module.css";

function Footer(){
    return(
        <div class="container" id="c-2">
       <Logo size="340px"/>
        <div id="footer">
        <div className={classes.flex}><h3>CONTACT US</h3>
        <ul>
          <li>jamiami@180dc.org</li>
          <li>Jamia Millia Islami , Jamia Nagar Okhla , New Delhi , India ,110025</li>
          <li>+91 XXXXXXXX</li>
        </ul>
        </div>
        <div className={classes.flex}><h3>ABOUT US</h3>
        <ul>
          <li>Mission and vision</li>
          <li>Testimonials</li>
          <li>The Team</li>
          <li>Clients</li>
        </ul>
        </div>
        <div className={classes.flex}><h3>DELIVERABLES</h3>
        <ul>
          <li>Blog</li>
          <li>Articles</li>
          <li>Reports</li>
        </ul>
        </div>
        <div className={classes.flex} ><h3>SHOP</h3>
        <ul>
          <li>180 DC Merchandise</li>
        </ul>
        </div>
        <div className={classes.flex} id="social"><h3>SOCIALS</h3>
        <ul>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
        </div>
      </div>
    </div>

    )

}

export default Footer;