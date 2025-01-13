import experienceData from '../content/experienceData'
import { IoLocation } from "react-icons/io5";
import { MdTimer } from "react-icons/md";
import ScrollAnimation from "react-animate-on-scroll";


// MdSchool
const Experience = () => {
    return (

        <div className="experience-container">
            {experienceData.map((item) => (
                <ScrollAnimation animateIn={item.id % 2 === 0 ? "fadeInLeft" : "fadeInRight"} key={item.id}>
                    <div key={item.id} className="experience-section">
                        <div>
                            <h1>
                                <item.mdIcon /> {item.instituteOfLearning}
                            </h1>
                            <br />
                            <h3>{item.role}</h3>
                            <br />
                            <p className='exp-desc'>{item.description}</p>
                            <br />
                            <br />
                            <p className="contact-links"><MdTimer />  {item.timePeriod}</p>
                            <br />
                            <p className="contact-links">
                                <IoLocation />
                                {item.location}
                            </p>
                            <br />
                        </div>
                    </div>
                </ScrollAnimation>
            ))}
        </div>

    );
};

export default Experience

