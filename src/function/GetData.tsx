import { useState, useEffect, CSSProperties } from "react";
import "../css/project.css";
interface ProjectData {
  name: string;
  language: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  svn_url: string;
}
interface ProjectProps {
  link: string;
  activeIndex: number;
}

function GetData({ link, activeIndex }: ProjectProps) {
  const redirectToExternalUrl = (url: string) => {
    window.open(url, "_blank");
  };
  const svgStyle: CSSProperties = {
    verticalAlign: "middle", // Align the SVG in the middle vertically
    marginRight: "10px", // Adjust the margin between SVG and text
  };
  const [data, setData] = useState<ProjectData>({
    name: "",
    language: "",
    description: "",
    stargazers_count: 0,
    forks_count: 0,
    svn_url: "",
  });
  useEffect(() => {
    fetch(link, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [link]);

  const getCircleColor = () => {
    switch (data.language) {
      case "JavaScript":
        return "#f1e05a";
      case "TypeScript":
        return "#3178c6";
      default:
        return "#ccc"; // Default color or any other color you prefer
    }
  };

  return (
    <>
      <div
        className="card-github"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
        onClick={() => redirectToExternalUrl(data.svn_url)}
      >
        <div className="header">
          <h3>
            <svg
              style={svgStyle}
              width="40"
              height="40"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            {""}
            {data.name}
          </h3>
        </div>
        <div className="main">
          <p>{data.description}</p>
        </div>
        <div className="footer">
          <p>
            <span
              style={{
                display: "inline-block",
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: getCircleColor(),
              }}
            />{" "}
            {data.language}
          </p>
          <p>
            <svg
              width="10"
              height="10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>{" "}
            {data.stargazers_count}
          </p>
          <p>
            <svg
              width="10"
              height="10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10v5m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
              />
            </svg>{" "}
            {data.forks_count}
          </p>
        </div>
      </div>
    </>
  );
}
export default GetData;
