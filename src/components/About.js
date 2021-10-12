import React from "react";
import Links from "./Links";

function About(props) {
  // const isLoggedIn = props.isLoggedIn;
  if (props.bio) {
    return(
      <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
    );
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      {/* <a href="https://github.com/liza">https://github.com/liza</a>
      <a href="https://www.linkedin.com/in/liza/">https://www.linkedin.com/in/liza/</a> */}
    </div>
  );
}

export default About;
