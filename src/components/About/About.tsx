import { Container } from "./styles";
import Michael_Clinton from "../../assets/Michael Clinton.webp";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p>
            Hi there! I'm Michael, an enthusiastic Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) and scalable software solutions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I build responsive and dynamic web applications leveraging the MERN stack to create efficient, scalable, and user-friendly solutions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={300}>
          <p>
            My expertise includes creating robust APIs, designing front-end interfaces with React, and managing back-end systems with Node.js and MongoDB.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Qualifications:</h3>

            <h4>Master of Science (Computer Science)</h4>
            <p>SIES College of Arts, Science & Commerce, Mumbai | July 2025</p>
            <p>8.15 CGPA</p>

            <h4>Bachelor of Science (Computer Science)</h4>
            <p>Nagindas Khandwala College, Mumbai | October 2020</p>
            <p>9.2 CGPA</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3>
            <h4>Technical Support Engineer</h4>
            <p>Teleperformance Global Services | July 2022 - Present</p>
            <p>Mumbai, India</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
            <p>• JavaScript - Building interactive and dynamic front-end applications.</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
            <p>• React - Developing responsive and scalable front-end solutions.</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
            <p>• Node.js - Crafting robust server-side applications.</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
            <p>• MongoDB - Managing data effectively with NoSQL databases.</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
            <p>• Express.js - Creating efficient and RESTful APIs.</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
            <p>• Spring Boot - Developing REST APIs for web applications.</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.22 * 1000}>
            <p>• HTML & CSS - Crafting visually appealing and accessible user interfaces.</p>
          </ScrollAnimation>
        </div>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={Michael_Clinton} alt="Michael Clinton" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
