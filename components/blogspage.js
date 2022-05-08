import classes from "./blogspage.module.css";
import Card from "./card";

import comingsoonimg from "../public/assets/comingsoon.png";

function Blogspage() {
  return (
    <div className={classes.blogspage}>
      <div className={classes.innercon}>
        {/* <div className={classes.cardcon}>
                <Card />
                <Card />
                <Card />
            </div> */}
        <img src={comingsoonimg.src} alt={"coming soon img"} />
      </div>
    </div>
  );
}

export default Blogspage;
