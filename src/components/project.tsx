import { useEffect, useState } from "react";
import GetData from "../function/GetData";
import "../css/project.css";
import "../css/slideshow.css";

function Project() {
  const repositoryLinks = [
    "https://api.github.com/repos/sdssaeq/CapthaSolver",
    "https://api.github.com/repos/sdssaeq/SpareDiscordBot",
    "https://api.github.com/repos/sdssaeq/web_app",
    "https://api.github.com/repos/sdssaeq/portofolio",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);
  const showSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % repositoryLinks.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + repositoryLinks.length) % repositoryLinks.length
    );
  };

  return (
    <>
      <section id="project" className="section">
        <div className="project-container">
          <div className="project-title">
            <h1>My Github Project</h1>
          </div>
          <div className="card-project">
            {repositoryLinks.map((link, index) => (
              <GetData activeIndex={currentSlide} key={index} link={link} />
            ))}
          </div>
          <div className="bullet-container">
            {repositoryLinks.map((_, index) => (
              <div
                key={index}
                className={`bullet ${
                  index === currentSlide ? "active-bullet" : ""
                }`}
                onClick={() => showSlide(index)}
              ></div>
            ))}
          </div>
          <svg
            className="btn-prev"
            onClick={prevSlide}
            width="25px"
            height="25px"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          <svg
            onClick={nextSlide}
            className="btn-next"
            width="25px"
            height="25px"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </section>
    </>
  );
}

export default Project;
