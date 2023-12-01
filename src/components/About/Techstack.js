import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiBootstrap,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={{
          color: 'purple',
          fontSize: '20px',
          fontWeight: 'bold'
        }} >HTML</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{
          color: 'purple',
          fontSize: '20px',
          fontWeight: 'bold'
        }} >CSS</p>


      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <p style={{
          color: 'purple',
          fontSize: '20px',
          fontWeight: 'bold'
        }} >BootStrap</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{
          color: 'purple',
          fontSize: '20px',
          fontWeight: 'bold'
        }} >JavaScript</p>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{
          color: 'purple',
          fontSize: '20px',
          fontWeight: 'bold'
        }} >Node.js</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{
          color: 'purple',
          fontSize: '20px',
          fontWeight: 'bold'
        }} >React.js</p>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{
          color: 'purple',
          fontSize: '20px',
          fontWeight: 'bold'
        }} >Mongo db</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p style={{
          color: 'purple',
          fontSize: '20px',
          fontWeight: 'bold'
        }} >Next.js</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{
          color: 'purple',
          fontSize: '20px',
          fontWeight: 'bold'
        }} >Git</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{
          color: 'purple',
          fontSize: '20px',
          fontWeight: 'bold'
        }} >Fire base</p>

      </Col>




    </Row>
  );
}

export default Techstack;
