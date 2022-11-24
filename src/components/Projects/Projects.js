import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/3.png";
import emotion from "../../Assets/Projects/5.png";
import editor from "../../Assets/Projects/4.jpg";
import chatify from "../../Assets/Projects/6.png";
import suicide from "../../Assets/Projects/1.png";
import bitsOfCode from "../../Assets/Projects/2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Rupyz"
              description="Rupyz is a community of credible business, that allow its members to access & connect with credible business community, helps targeted supplier & buyer discovery to unlock new growth potential & at the same time minimise the counter-party credit risk for business."
              demoLink="https://rupyz.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Covid-19"
              description="During this global crisis, we are committed to maintaining vital reproductive health care. Learn more about building community and health system resilience during the pandemic. Rated a Four Star Charity. 501(c)(3) 900+ Employees Worldwide. 100% Tax Deductible."
              ghLink="https://github.com/kumarshubham10021998/Covid-19-App-Reactjs"
              demoLink="https://covid-19updatedaily.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Quote"
              description="A quotation is the repetition of a sentence, phrase, or passage from speech or text that someone has said or written. In oral speech, it is the representation of an utterance (i.e. of something that a speaker actually said) that is introduced by a quotative marker, such as a verb of saying."
              ghLink="https://shubham-quote-generator.netlify.app"
              demoLink="https://shubham-quote-generator.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Weather-Test"
              description="Weather is the state of the atmosphere, including temperature, atmospheric pressure, wind, humidity, precipitation, and cloud cover. It differs from climate, which is all weather conditions for a particular location averaged over about 30 years."
              ghLink="https://github.com/kumarshubham10021998/ecommerceproject"
              demoLink="https://github.com/kumarshubham10021998/weather-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ecommerce"
              description="E-commerce managers formulate strategies that concern the design and practicality of their companies' online shops and adjacent platforms. E-commerce managers then make executive decisions to ensure that these frameworks facilitate the generation of profit."
              ghLink="https://github.com/kumarshubham10021998/ecommerceproject"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="textutiles"
              description="public static CharSequence ellipsize (CharSequence text, TextPaint paint, float avail, TextUtils.TruncateAt where, boolean preserveLength, TextUtils."
              ghLink="https://github.com/kumarshubham10021998/rupyz-internship/tree/main/reactjs/day1/day1"
              demoLink="https://textutiles.netlify.app"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
