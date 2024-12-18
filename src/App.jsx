import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Lessons from "./components/Lessons";
import Tests from "./components/Tests";
import Rules from "./components/Rules";
import Register from "./components/Register";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "lessons":
        return <Lessons />;
      case "tests":
        return <Tests />;
      case "rules":
        return <Rules />;
      case "register":
        return <Register />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} />
      <div className="content">{renderPage()}</div>
      <Footer/>
    </div>
  );
};

export default App;
