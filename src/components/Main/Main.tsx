import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";

export function Main() {
  return (
    <Container>
      {/* The Particles component is commented out, removing all animations or moving icons */}
      {/* <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          particles: {
            number: {
              value: 0, // Disables particles
            },
          },
        }}
      /> */}
      <Hero />
      <About />
      <Project />
      <Contact />
    </Container>
  );
}
