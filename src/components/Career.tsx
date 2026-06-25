import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Journey <span>&</span>
          <br /> Experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* College */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Computer Science</h4>
                <h5>University of South ASia</h5>
              </div>
              <h3>2022 – 2026</h3>
            </div>
            <p>
              Pursuing a Bachelor's degree in Computer Science while developing
              expertise in Web Development, Data Structures & Algorithms, and
              modern technologies including React.js, Next.js, and the MERN
              Stack.
            </p>
          </div>

          {/* Projects / Learning */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>Cybros. Dev</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed a 3-4 month Internship where I worked with HTML, CSS,
              JavaScript, React.js, Next.js and Bootstrap. Built multiple Web
              Applications and gained practical experience in frontend
              development.
            </p>
          </div>

          {/* Fiverr SEO Specialist */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SEO Specialist (Freelance)</h4>
                <h5>Fiverr</h5>
              </div>
              <h3>2024 – Present</h3>
            </div>
            <p>
              Providing SEO services to clients on Fiverr, including keyword
              research, on-page SEO, content optimization, website audits, and
              search engine ranking improvements. Working with clients from
              different industries to enhance their online visibility and
              organic traffic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
