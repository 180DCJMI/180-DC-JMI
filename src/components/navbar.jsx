import classes from "./../styles/navbar.module.css";

function Nav() {
  return (
    <div  className={classes.nav}>
        <div className={classes.navItem}>Home</div>
        <div className={classes.navItem}>About us</div>
        <div className={classes.navItem}>Featured</div>
        <div className={classes.navItem}>Our Services</div>
        <div className={classes.navItem}>Gallery</div>
        <div className={classes.navItem}>Our Achievements</div>
    </div>
  );
}

export default Nav;
