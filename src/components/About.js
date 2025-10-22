import React from "react";
import image from "../images/demo.png"; // 👈 use the actual file name

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I love creating clean, responsive web applications using React.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
