import React from "react";
import "./Header.css";

const Header = ({ setCurrentPage }) => {
  return (
    <nav className="header">
      <h1 className="hh">English Learning </h1>
      <ul >
        <li onClick={() => setCurrentPage("home")}>Главная</li>
        <li onClick={() => setCurrentPage("lessons")}>Уроки</li>
        <li onClick={() => setCurrentPage("tests")}>Тесты</li>
        <li onClick={() => setCurrentPage("rules")}>Правила</li>
        <li onClick={() => setCurrentPage("register")}>Регистрация</li>
      </ul>
    </nav>
  );
};

export default Header;
