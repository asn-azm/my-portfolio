import { MdWork, MdSchool } from 'react-icons/md';

const experienceData = [
  {
    id:1,
    instituteOfLearning:
      "TeReSol (Technological Research Solutions)",
    role: "Senior Software Design Engineer",
    description: "At TeReSol Pvt. Ltd., I led the design and implementation of scalable microservices using Quarkus and Spring Boot, developed RESTful APIs integrated with IBM DB2, and optimized financial processes with Banking and GL Services. I also created dynamic UIs using VueJS, deployed applications via Docker and Kubernetes, and utilized Xstate for state management. Additionally, I ensured efficient collaboration using Git and TFS, and optimized database schemas for high performance.",
    timePeriod: "Nov 2021",
    mdIcon: MdWork,
    location: "Islamabad, Pakistan"
  },
  {
    id:2,
    instituteOfLearning:
      "RiceTec, Inc.",
    role: "Intern",
    description: "A Simple Hotel Management System built with VueJS, allowing users to manage bookings, view room availability, and track guest information. The system features an intuitive interface for efficient management of hotel operations.",
    timePeriod: "Aug 2020 - Oct 2020",
    mdIcon: MdWork,
    location: "Islamabad, Pakistan"
  },
  { 
    id:3,
    instituteOfLearning:
      "Mirpur University of Science & Technology (MUST)",
    role: "B.sc in Computer Systems Engineering",
    description: "B.Sc. in Computer Systems Engineering combines principles of computer science and electrical engineering to design and manage computer systems. It covers areas such as software development, computer architecture, and network systems, preparing graduates for roles in IT, telecommunications, and automation industries. This degree equips students with both theoretical knowledge and practical skills in system integration and problem-solving.",
    timePeriod: "Sep 2017 - Dec 2021",
    mdIcon: MdSchool,
    location: "Mirpur, AJK"
  },

];
export default experienceData;
