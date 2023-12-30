import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import aiseo from '../../Assets/Projects/Captureaiseo-front.png'
import qrapp from '../../Assets/Projects/qrgenerator-front.png'
import construction from '../../Assets/Projects/construction-front.png'
import silvemine from '../../Assets/Projects/silivermines-front.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Sme of the Projects that i've worked
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiseo}
              isBlog={false}
              title="Ai Seo 360"
              description="A fully functional website with a powerful backend that helps generate SEO-friendly keywords for content creation. The site incorporates an OpenAI model, enabling users to generate blog topics, content, and other SEO-optimized text. I also set up a payment system using Stripe, allowing users to access premium features and services. This makes the platform user-friendly and equips content creators with advanced tools for effective online presence and content development."
              demoLink="https://aiseo-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrapp}
              isBlog={false}
              title="QR-Code-Generator"
              description="I collaborated on the development of a Full Stack App using MERN Stack. Utilizing Redux, I implemented effective state management for the application. To enhance functionality, I integrated the react-qr-logo library, enabling the generation of custom-designed QR codes. I also designed and developed a dashboard catering to users, super admin, and their teams. The UI dynamically adjusts based on users' roles through conditional rendering."
              demoLink="https://qr-app-drab.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={silvemine}
              isBlog={false}
              title="Silver Mines Corp Website"
              description="The Silver Mines website, built with React, offers a user-friendly platform to explore the company's story and diverse product range. The dynamic design ensures smooth browsing across different devices. The homepage provides a snapshot of Silver Mines, emphasizing its history and values. The Products page delivers detailed information and vibrant images for each product, creating an engaging user experience."
              demoLink="https://silvermines.vercel.app"
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;