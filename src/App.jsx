import "./App.css";
import Hero from "./components/About";
import information from "./content/information";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tagline from "./components/Tagline";

// import ProjectPreview from "./components/ProjectPreview";
// import AboutHeading from "./components/AboutHeading";
// import projects from "./content/projects";
import Skill from "./components/Skill";
import skills from "./content/skills";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// import blogPosts from "./content/blogPosts";
import Reachout from "./components/Reachout";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
// import BlogPost from "./components/BlogPost";

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Header
        firstName={information.userData.firstName}
        lastName={information.userData.lastName}
      />
      <Hero
        img={information.userData.img}
        description={information.userData.description}
        title={information.userData.title}
      />
      {/* <div className="hr"></div> */}
      <section id="experience">
        <Tagline firstWord="Experience &" secondWord=" Education" />
        <Experience />
      </section>
      <section id="projects">
        <Tagline firstWord="Projects" secondWord="" />
        <Projects />
      </section>
      <section id="skills">
        <Tagline firstWord="Skills" secondWord="&Tools" />
        <motion.div
          className="skill-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={skillVariants}>
              <Skill skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="contact">
        <Tagline firstWord="Contact" secondWord="Me" />
        <Reachout />
      </section>

      <Footer />
    </>
  );
}

export default App;
