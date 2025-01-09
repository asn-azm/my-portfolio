import '../styles/Home.css';  // Import the CSS file for styling

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <div className="image-container">
          <img src="src/assets/pPics/pic2.jpeg" alt="Your Name" className="profile-img" />
        </div>
        <div className="content">
          <h1 className="greeting">Hello, I am Your Name</h1>
          <p className="intro">
            I am a passionate web developer, designer, and creative thinker. I love building responsive websites and exploring new technologies.
          </p>
          <button className="cta-button">Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
