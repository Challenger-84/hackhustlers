import React from 'react';

function CardDesign() {
  return (
    <div className="main">
      <div className="card">
        <img src="fiverr.webp" alt="event pic" className="card-img" />
        <div className="card-text">
          <h2>Freelancing</h2>
          <p>
            Discover Freelance Freedom! Explore endless opportunities in freelancing and kickstart your career journey today!
          </p>
          <a href="#" style={{ textDecoration: 'none' }}>
            Know More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="blue"
              className="bi bi-caret-right"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img src="Logo4x.png" alt="event pic" className="card-img card_2" />
        </div>
        <div className="card-text">
          <h2>Club Recruitment</h2>
          <p>Recruitments open for a new Game-Dev project</p>
          <a href="#" style={{ textDecoration: 'none' }}>
            Know More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="blue"
              className="bi bi-caret-right"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img src="220010007.png" alt="event pic" className="card-img card_2" />
        </div>
        <div className="card-text">
          <h2>Alumni Help</h2>
          <p>Your Alumni Mr. Ramesh added a new internship opportunity in the field of Machine Learning</p>
          <a href="#" style={{ textDecoration: 'none' }}>
            Know More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="blue"
              className="bi bi-caret-right"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img src="prof_silhout.jpg" alt="event pic" className="card-img card_2" />
        </div>
        <div className="card-text">
          <h2>Work with Profs.</h2>
          <p>Prof. Ramesh is looking for enthusiastic students to work with him in his research projects.</p>
          <a href="#" style={{ textDecoration: 'none' }}>
            Know More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="blue"
              className="bi bi-caret-right"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="card last">
        <img src="coding.jpeg" alt="event pic" className="card-img" />
        <div className="card-text">
          <h2>Consultancies</h2>
          <p>FlexJob is looking for IIT Dh students for a machine learning freelancing opportunity</p>
          <a href="#" style={{ textDecoration: 'none' }}>
            Know More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="blue"
              className="bi bi-caret-right"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardDesign;
