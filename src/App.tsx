import "./App.css";
//import reactLogo from "./assets/react.svg";
function App() {
  return (
    <>
      <div className="navbar">
        <div>
          <a className="logo" href="">
            Satrio
          </a>
        </div>
        <div>
          <ul className="nav-links">
            <li className="nav-items">
              <a href="">About</a>
            </li>
            <li className="nav-items">
              <a href="">Skills</a>
            </li>
            <li className="nav-items">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
