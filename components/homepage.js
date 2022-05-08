import classes from "./homepage.module.css";

import twitter from "../public/assets/twitter.png";
import github from "../public/assets/github.png";
import email from "../public/assets/email.png";
import bannerimg from "../public/assets/bannerimg.png";
import Link from "next/link";

function Homepage() {
  return (
    <div className={classes.homepage}>
      <div className={classes.ctaoutercon}>
        <div className={classes.ctacon}>
          <div className={classes.bannertxt}>
            I&apos;M A WEB <br />
            DEVELOPER
          </div>
          <div className={classes.bannerbtncon}>
            <Link href={"/contact"}>
              <div className={classes.bannerbtn}>let&apos;s talk</div>
            </Link>
          </div>
          <div className={classes.bannersocialscon}>
            <div className={classes.bannersocials}>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://twitter.com/C_edar_"
              >
                <img
                  src={twitter.src}
                  alt="twitter icon"
                  className={classes.icon}
                />
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://github.com/Cedar-81/"
              >
                <img
                  src={github.src}
                  alt="github icon"
                  className={classes.icon}
                />
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=cedarwudnovels@gmail.com"
              >
                <img
                  src={email.src}
                  alt="email icon"
                  className={classes.icon}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bannerimg}>
        <img src={bannerimg.src} alt="an image of me" />
      </div>
    </div>
  );
}

export default Homepage;
