import GetData from "../function/GetData";
import "../project.css";
function Project() {
  const repositoryLinks: string[] = [
    "https://api.github.com/repos/sdssaeq/CapthaSolver",
    "https://api.github.com/repos/sdssaeq/SpareDiscordBot",
    "https://api.github.com/repos/sdssaeq/web_app",
    "https://api.github.com/repos/sdssaeq/portofolio",

    // Add more repository links as needed
  ];
  return (
    <>
      <section id="project" className="section">
        <div className="project-container">
          <div className="project-title">
            <h1>My Github Project</h1>
          </div>
          <div className="card-project">
            {repositoryLinks.map((link, index) => (
              <GetData key={index} link={link} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Project;
