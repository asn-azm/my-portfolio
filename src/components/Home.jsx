import '../styles/Home.css';  // Import the CSS file for styling
import '../styles/MyNameStyle.css'

const Home = () => {
  const text = `Hello,  i'm  Ahsan  Azam`
  return (
    <section className="home">
      <div className="home-container">
        <div className="image-container">
          <img src="src/assets/pPics/pic2.jpeg" alt="Your Name" className="profile-img" />
        </div>
        <div className="content">
          {/* <h1 className="greeting">Hello, I am Ahsan Azam</h1> */}
          <h1 className="greeting">
            {text.split('').map((char, index) => (
              <span key={index} style={{ '--i': index }}>
                {char === ' ' ? '\u00A0' : char} {/* Ensure that spaces are preserved */}
              </span>
            ))}
          </h1>
          <p className="intro">
            I am a passionate web developer, designer, and creative thinker. I love building responsive websites and exploring new technologies.
          </p>
          <h1>My Role</h1>
          <p>In my current role at TeReSol Pvt. Ltd., I have led the design and implementation of scalable microservices using Quarkus and Spring Boot, significantly improving system modularity and performance. I spearheaded the creation of RESTful APIs in Java, seamlessly integrated with IBM DB2, ensuring efficient data retrieval and manipulation. Additionally, I played a key role in designing and deploying Banking and General Ledger (GL) Services, optimizing financial transaction processes with Quarkus.

            I have also been responsible for developing dynamic user interfaces using VueJS, enhancing the user experience across multiple platforms. To ensure efficient resource utilization and seamless scaling, I deployed applications using Docker and Kubernetes. Additionally, I leveraged Xstate to manage application state transitions, improving system efficiency and reliability.

            Throughout my projects, I have utilized Git and TFS for version control, facilitating seamless collaboration and project management within distributed teams. I also engineered optimized database schemas and queries to ensure high data integrity and performance, contributing to the overall success of the development process.

            This experience has allowed me to hone my skills in full-stack development, from backend services and database integration to frontend UI and deployment strategies.</p>

        </div>
      </div>

    </section>



  );
}

export default Home;
