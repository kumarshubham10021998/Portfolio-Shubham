import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             I am <span className="purple">Shubham kumar </span>
             with expertise in <span className="purple"> ReactJS and Redux,</span>
            <br />passionate about creating dynamic, responsive, and user-friendly web applications.
            <br />
            <br />
            
          </p>
          <p style={{ textAlign: "justify" }}>
          I am from Bhagalpur, Bihar, India, and have completed my B.Tech from Poornima Institute of Engineering & Technology from Jaipur. With over 2 years of experience in frontend development, I have honed my skills in crafting modern interfaces and integrating APIs to enhance functionality.
            <br />
            <br />
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
