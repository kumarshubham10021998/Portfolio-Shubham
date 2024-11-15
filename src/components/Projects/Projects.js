import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/ultra-aura.png";
import editor from "../../Assets/Projects/kcc.jpeg";
import chatify from "../../Assets/Projects/images.jpeg";
import suicide from "../../Assets/Projects/rupyz.jpg";
import bitsOfCode from "../../Assets/Projects/DMS.jpeg";

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
              title="The SCHOOL SOCIAL"
              description="The School Social is an innovative platform designed to bridge the gap between education, social learning, and holistic development for students, parents, and educators. It focuses on fostering a supportive and engaging learning ecosystem that goes beyond traditional academic frameworks."
              demoLink="https://theschoolsocial.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DMS IIT DELHI"
              description="
Worked on the DMS IIT Delhi Project, focusing on maintaining the website, developing the admin filter functionality, implementing CRUD operations, and enhancing the frontend. Handled form creation, route management in the navbar, and optimized user experience."
              demoLink="https://dms.iitd.ac.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="KRISHI CRESS"
              description="Krishi Cress is a platform designed to empower farmers by providing them with access to agricultural resources, market insights, and innovative farming techniques. It facilitates seamless communication between farmers, suppliers, and agricultural experts to enhance productivity and sustainability. The platform offers tools for farm management, crop recommendations, and market price tracking to support informed decision-making."
              demoLink="https://www.krishicress.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ULTRA AURA EDUCATION"
              description="UltraAura Education offers an innovative learning platform designed to provide high-quality educational resources and training. It emphasizes personalized learning experiences, offering courses and tools to enhance academic growth and professional development. The platform is user-friendly, designed for students and educators alike, fostering an interactive and engaging learning environment. For more details,"
              demoLink="https://ultraaura.education/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="RUPYZ"
              description="Rupyz is a fintech platform offering a seamless B2B solution for managing financial transactions, investments, and business operations. It provides tools for businesses to manage customer data, track products, generate bills, and visualize sales through charts. The platform focuses on simplifying financial processes with a user-friendly interface and robust admin dashboard."
              demoLink="https://rupyz.com/"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
