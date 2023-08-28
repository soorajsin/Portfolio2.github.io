import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState(
    localStorage.getItem("userName") || "Sooraj Singh"
  );

  const handleIconClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveClick = () => {
    setName(inputValue);
    setShowInput(false);

    // Store the updated name in localStorage
    localStorage.setItem("userName", inputValue);
  };

  useEffect(() => {
    // Update the name from localStorage when the component mounts
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
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
    </div>
  );
};

export default Home;
