import classes from "./nav.module.css";
import { useState } from "react";

import cancel from "../public/assets/cancelicon.png";
import ham from "../public/assets/hamicon.png";
import Link from "next/link";

function Nav() {
  const [showNav, setshowNav] = useState(false);
  const [innerNavStyle, setinnerNavStyle] = useState({ display: "none" });
  const [navVal, setnavVal] = useState("<Cedar />");

  function show() {
    setshowNav(!showNav);
    setinnerNavStyle({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100vh",
      position: "fixed",
      backgroundColor: "var(--main-dark)",
      top: 0,
      right: 0,
      padding: "0.5em 2em",
      paddingBottom: "0",
    });
  }

  function updateNav(val) {
    setnavVal(val);
  }

  function hide() {
    setshowNav(!showNav);
    setinnerNavStyle({ display: "none" });
  }

  return (
    <div className={classes.outernavcon}>
      <div className={classes.nav}>
        <Link href={"/"}>
          <div className={classes.logo}>{navVal}</div>
        </Link>

        <div className={classes.nav1}>
          <ul className={classes.navli}>
            <div onClick={() => updateNav("<Cedar />")}>
              <Link href={"/"}>
                <li>home</li>
              </Link>
            </div>
            <div onClick={() => updateNav("<Works />")}>
              <Link href={"/works"}>
                <li>works</li>
              </Link>
            </div>
            <div onClick={() => updateNav("<Contact />")}>
              <Link href={"/contact"}>
                <li>about</li>
              </Link>
            </div>
          </ul>
        </div>

        <div onClick={() => updateNav("<Contact />")}>
          <Link href={"/contact"}>
            <div className={classes.reg}>contact</div>
          </Link>
        </div>
      </div>
      <div className={classes.nav2}>
        <Link href={"/"}>
          <div className={classes.logo}>{navVal}</div>
        </Link>
        <img
          className={classes.icon}
          src={ham.src}
          onClick={show}
          alt="menu icon"
        />

        <div className={classes.con} style={innerNavStyle}>
          <div className={classes.innercon}>
            <Link href={"/"}>
              <div className={classes.logo}>{navVal}</div>
            </Link>
            <img
              className={classes.icon}
              src={cancel.src}
              onClick={hide}
              alt="cancelicon"
            />
          </div>

          <ul className={classes.navli}>
            <div onClick={() => updateNav("<Cedar />")}>
              <Link href={"/"}>
                <li onClick={hide}>home</li>
              </Link>
            </div>
            <div onClick={() => updateNav("<Work />")}>
              <Link href="/works">
                <li onClick={hide}>works</li>
              </Link>
            </div>
            <div onClick={() => updateNav("<Contact />")}>
              <Link href={"/contact"}>
                <li onClick={hide}>about</li>
              </Link>
            </div>
            <hr />
            <div onClick={() => updateNav("<Contact />")}>
              <Link href={"/contact"}>
                <div className={classes.reg}>contact</div>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
