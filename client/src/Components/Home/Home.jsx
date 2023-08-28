import React, { useState, useEffect, useCallback } from "react";
import "./Home.css";

const Home = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState(
    localStorage.getItem("userName") || "Sooraj Singh"
  );

  const roles = [
    "MERN Developer",
    "Web Developer",
    "Software Developer",
    "Back End Developer",
  ];
  const [roleIndex, setRoleIndex] = useState(1);

  const handleIconClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveClick = () => {
    setName(inputValue);
    setShowInput(false);
    localStorage.setItem("userName", inputValue);
  };

  const handleRoleChange = useCallback(() => {
    setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
  }, [roles.length]);

  useEffect(() => {
    const interval = setInterval(handleRoleChange, 1000); // Change role every 3 seconds
    return () => clearInterval(interval);
  }, [handleRoleChange]);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <>
      <div className="home">
        <div className="conetnt">
          <h3>
            Hello, My name is{" "}
            <span>
              {showInput ? (
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  autoFocus
                  placeholder="Enter here..."
                />
              ) : (
                name
              )}
              <i
                className="fa-solid fa-pen-to-square"
                onClick={handleIconClick}
              ></i>
            </span>
          </h3>
          <div className="form">
            {showInput && (
              <div className="inp">
                <button className="btn btn-primary" onClick={handleSaveClick}>
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="conetnt">
          <h3>
            I'm a <span>{roles[roleIndex]}</span>
          </h3>
        </div>
        <div className="conetnt">
          <h4>I'm a website design, graphic design, and many more...</h4>
        </div>
      </div>
      <div className="img">
          <div className="imgForm">
                    <img src="https://soorajsin.github.io/newcontactresume.github.io/image/simple%20photo%20sooraj.jpg" alt="img" />
          </div>
      </div>
    </>
  );
};

export default Home;
