import classes from "./contact.module.css";
import { useState } from "react";

import profileimg from "../public/assets/profileimg.png";

function Contactpage(props) {
  const [inputTitle, setinputTitle] = useState("");
  const [inputBody, setinputBody] = useState("");
  const [inputName, setinputName] = useState("");

  const send = () => {
    if (document.getElementById("error")) {
      document.getElementById("error").remove();
    }
    if (inputBody != "" && inputName != "" && inputTitle != "") {
      let val = {
        message: inputBody,
        from_name: inputName,
        from_title: inputTitle,
      };
      props.sendEmail(val);
      setinputBody("");
      setinputTitle("");
      setinputName("");
    } else {
      document
        .getElementById("body")
        .insertAdjacentHTML(
          "afterend",
          `<p id='error'>Please enter valid values.</p>`
        );
      document.getElementById("error").style.color = "yellow";
      document.getElementById("error").style.paddingTop = "1em";
      document.getElementById("error").style.margin = 0;
    }
  };

  return (
    <div className={classes.contactpage}>
      <div className={classes.con}>
        <div className={classes.aboutme}>
          <h2>About Me</h2>
          <div className={classes.profileimg}>
            <img src={profileimg.src} alt="profile image" />
          </div>
          <div className={classes.content}>
            <h3>Hi, I am Cedar.</h3>
            <p>
              I am an adaptable and responsible Computer Science undergraduate
              seeking an mid-level position in Web Development. <br />
              My previous experience as a software developer have provided me
              with a well-rounded background and enabled me to develop an
              analytical/logical approach to tasks, software skills, and the
              ability to work under pressure. <br />
              In short, I am reliable, hard-working with strong attention to
              detail and eager to learn about new technologies. I am able to
              work well both on my own initiative an as part of a team as well
              as to travel abroad.
            </p>
          </div>
        </div>

        <div className={classes.contactform}>
          <h2>Contact Me</h2>
          <input
            type="text"
            id="name"
            value={inputName}
            className={classes.name}
            placeholder="Enter your name."
            onChange={(e) => setinputName(e.target.value)}
          />
          <input
            id="name"
            type="text"
            value={inputTitle}
            className={classes.email}
            placeholder="Enter title"
            onChange={(e) => setinputTitle(e.target.value)}
          />
          <textarea
            id="body"
            className={classes.msg}
            value={inputBody}
            onChange={(e) => setinputBody(e.target.value)}
            placeholder="Feel free to express yourself here"
          ></textarea>
          <div className={classes.submit} onClick={send}>
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactpage;
