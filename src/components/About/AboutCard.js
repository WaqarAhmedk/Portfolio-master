import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {


  // Certainly! Here's a personalized introduction as Waqar Ahmed:

  // Hello,

  //   I'm Waqar Ahmed, a recent graduate from the National University of Modern Languages, Islamabad, with a degree in Software Engineering. Over the past 1.5 years, I've immersed myself in the dynamic world of web application development, honing my skills and contributing to meaningful projects.


  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there I'm <span className="purple">Waqar Ahmed </span>, A graduate from the <span className="purple">National University of Modern Languages, Islamabad </span>, with a degree in  <span className="purple">Software Engineering. </span>
            I am working as <span className="purple">Full Stack Developer </span>,
            Over the past 1.5 years, I've immersed myself in the dynamic world of <span className="purple">Web Application Development, </span> honing my skills and contributing to meaningful projects.
            <br />
            In my professional journey, I've had the opportunity to be part of diverse web application development teams, where I've not only applied my technical know-how but also cultivated a proactive problem-solving approach. I believe in staying ahead of the curve, keeping pace with the latest trends in software engineering to deliver solutions that meet the evolving needs of the industry.
          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            Every error conquered is a testament to dedication."{" "}
          </p>

        </blockquote>
      </Card.Body>
    </Card >
  );
}

export default AboutCard;
