import classes from "./workpage.module.css";
import Card from "./card";

import css3 from "../public/assets/css3.svg";
import djangoicon from "../public/assets/djangoicon.svg";
import figmaicon from "../public/assets/figmaicon.svg";
import htmlicon from "../public/assets/htmlicon.svg";
import javaicon from "../public/assets/javaicon.svg";
import jsicon from "../public/assets/jsicon.svg";
import nexticon from "../public/assets/nextjsicon.svg";
import reacticon from "../public/assets/reactjsicon.svg";
import blockchainunnimg from "../public/assets/blockchainunnimg.png";
import xplorelibzimg from "../public/assets/xplorelibzimg.png";
import rpsimg from "../public/assets/rpsimg.png";
import flipimg from "../public/assets/flipimg.png";
import flipimgmain from "../public/assets/flipimgmain.png";

function Workpage() {
  return (
    <div className={classes.workpage}>
      <div className={classes.innercon}>
        <div className={classes.cardcon}>
          <Card
            image={flipimgmain}
            con={`Flip is a school management software developed to accomodate note
            manangement and complex classcourse structures for teaches and students.`}
            tech={`Nextjs, Reactjs, Prisma, Apollo Graphql, AWS, Vercel`}
            title={"Flip Classroom Teachers View"}
            link={"https://flip-classroom-teachers.readate.org"}
          />
          <Card
            image={flipimg}
            con={`Flip is a school management software developed to accomodate note
            manangement and complex classcourse structures for teaches and students.`}
            tech={`Nextjs, Reactjs, Prisma, Apollo Graphql, AWS, Vercel`}
            title={"Flip Classroom Students View"}
            link={"https://flip-classroom-students.readate.org"}
          />
          <Card
            image={blockchainunnimg}
            con={`This website was give as a task in the blockchain community in
                    my uni and I took it as an opportunity to learn more and expand
                    my view on how to design a website based on someones need. Its
                    basically a boilerplate of what the actual website could look like.
                    `}
            tech={`Nextjs, Reactjs`}
            title={"Blockchain Unn"}
            link={"https://blockchainunn.vercel.app/"}
          />
          <Card
            image={xplorelibzimg}
            con={`This is a revamp of my previous website Xplore Libz which I had
                    built earlier on in my journey as a web developer. The original
                    version was unresponsive and had many issues which I tried my
                    best to fix in this new build.
                    `}
            tech={`Nextjs, Reactjs(original version was completely Reactjs)`}
            title={"Xplore Libz"}
            link={"https://xplore-beta.vercel.app/"}
          />
          <Card
            image={rpsimg}
            con={`This is a redsign of a rock paper scissors game I created for
                    my younger siblings during the pandemic when I had started learning
                    javascript. It's one of the dearest projects I made because
                    of the memories it brings back.
                    `}
            tech={`HTML5, CSS3, Javascript`}
            title={"Rock Paper Scissors"}
            link={"https://rock-paper-scissors-v2.vercel.app/"}
          />
        </div>
      </div>

      <div className={classes.skills}>
        <div className={classes.skillscon}>
          <img src={reacticon.src} alt="programming languages logo" />
          <img src={nexticon.src} alt="programming languages logo" />
          <img src={figmaicon.src} alt="programming languages logo" />
          <img src={jsicon.src} alt="programming languages logo" />
          <img src={javaicon.src} alt="programming languages logo" />
          <img src={htmlicon.src} alt="programming languages logo" />
          <img src={djangoicon.src} alt="programming languages logo" />
          <img src={css3.src} alt="programming languages logo" />
        </div>
      </div>
    </div>
  );
}

export default Workpage;
