import Resume from '../assets/Nivetha_resume.pdf'
const Home = () => {
  return (
    <div className="Home">
      <h1>Nivetha Shree</h1>
      <h3>Full Stack Developer | MERN Stack Enthusiast</h3>
      <p>
        Welcome to my portfolio! I am Nivetha Shree, a skilled full stack
        developer specializing in the MERN stack. With a passion for creating
        responsive web applications, I bring expertise in frontend development
        with React.js and Redux, backend development using Node.js and
        Express.js, and database management with MongoDB. Explore my projects
        and skills to see how I can contribute to your next development
        initiative.
      </p>
      <a
        className="button resume-button"
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  );
};

export default Home;
