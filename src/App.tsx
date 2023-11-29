import "./App.css";
import { useState } from "react";
import Contact from "./components/contact";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Project from "./components/project";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);

    if (!isDarkMode) {
      toast.success("Dark Mode Activated", {
        position: "bottom-center",
        autoClose: 200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("Light Mode Activated", {
        position: "bottom-center",
        autoClose: 200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
        <Navbar toggleDarkMode={toggleDarkMode}></Navbar>
        <Main></Main>
        <Project></Project>
        <Contact></Contact>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
