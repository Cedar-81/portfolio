import classes from "./card.module.css";

function Card({ image, con, tech, title, link }) {
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <div className={classes.card}>
        <div className={classes.cardimgcon}>
          <img src={image.src} alt="card img" />
        </div>
        <div className={classes.cardtxt}>
          <div className={classes.cardheader}>{title}</div>
          <p className={classes.cardbody}>
            {con}
            <br />
            <b className={classes.tech}>Tech: </b>
            {tech}
          </p>
        </div>
      </div>
    </a>
  );
}

export default Card;
