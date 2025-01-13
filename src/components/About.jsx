import PropTypes from "prop-types";
// import { motion } from "framer-motion";  
// import Tagline from "./Tagline";
import socials from "../content/socials";
import Typewriter from "typewriter-effect";


const About = (props) => {

    return (
        <div className="container">
            <div className="imageContainer">
                <img
                    src={props.img}
                    alt=""
                />
            </div>

            {/* <Tagline firstWord="Learn More About Me" secondWord="" /> */}
            <div className="hero-typewriter">
                <h3>I tend to be 😊</h3>
                <Typewriter
                    options={{
                        strings: [
                            "Software Design Engineer",
                            "An Aspiring Developer",
                            "An Apprentice",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                    className="typewriter"
                />
            </div>

            <div className="button-effect">
                <div className="hero-text">
                    <p className="hero-desc">{props.description}</p>
                </div>
                <br />
                <br />
                Find me on:
                <div className="hero-socials">
                    {socials.map((social, index) => (
                        <a key={index} href={social.url}>
                            <img src={`/socials/${social.icon}`} alt="TEST" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default About;
About.propTypes = {
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
