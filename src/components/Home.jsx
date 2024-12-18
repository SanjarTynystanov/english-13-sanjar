import React, { useState } from "react";
import "./Home.css"; // Подключение стилей

const Home = () => {
  const [progress, setProgress] = useState(50); // Прогресс от 0 до 100

  return (
    <div className="home-container">
      {/* Приветствие и описание */}
      <div className="intro-section">
        <h1 className="main-title">Welcome to the English Learning Platform</h1>
        <p className="description">
          Improve your English skills step by step. We have interactive lessons,
          quizzes, and a variety of tools to help you master the language.
        </p>
        <img src="https://yandex-images.clstorage.net/10BS0P363/f49a6aOZmic/DX7oaceBnKs-f3nwg0ftqhFAXRhl4G5Pig90NBi5fCIUE2dYT2fI5fcYOdR3ZiNMUpL5BbgKAEBJVLB3HTSpTE2v-3kXxwr-b3hp44KFrK3Dhw8YdCd6zU_JteII-yn01FL8gkavFbx8gGZI6fvx2IUTuJdqm9FaxhE9atF2411OPeztylSSrLJpfX3LDyFkzkJe2LyqcwkKUfPjxuEpbYsLd4mKZF43fownSu_6u5TLVrpY_FbQHwWEOmcX_evdS7YlIYsYFm6x4LSwhUiuak_BHV41qHJAzVl1YIAvJ2AKDPPIwusY_nsAaoAvOfIVCNd5WP0eVdsMTD0mEfDtUkT7Ke0GHhbisWGzswuOrWmPRl8fO2Z1jkCS9CcFpS9hyQrxzUij3nH_iCpCqzG-VUxeOt8y3toRTMNw4BZ9LB_G8aIgBhCTb7-q9_iNAmjnwUCWUPMoPYyPmzGtQKAqJgxN9siNLlm4PQHsSei8fllNkDJR8VkRGwiKMuKXf2lUhrftqEZQk6Aw6rLygsCuLciAkRHwabhEAtm3qsivIWXFCzDHRy8ZcPuA4klrcnKaCB4ykfKUHROBT7Qr3PVuk4Qx4KaNE98p-KY29kxCoGxHQpfdPe86BsVSd69Obq5uzMb_gQ0vHbM7RKhHLzK1nQSac58y018XxIi46Vz2rJHF-eHmCZ6d7LwnPHOKyG8lyMbVGXOhtwuKUzigyeThJQSFM4UHqxC7dAbnj6dzsRmI1LBZsplYl8AA8yKdMW7UwfIio0qUVeB7qPK0g83pbkOPEdi87v2GwNX8Ycbv7i9FjbhIQqtX-vxKZwGrcTbWxJw73zeaFdzMT3VkX3SomU916exI1hrkOWC68UuH5qaDz9oZ8-Ayj84csaRMr6flBkd1wMfjmbv7TSpAZvl-FovQ-V10l9Sbh4j0o1nwZlUHuyaphxuZpH_o93qAD63vAwHVlbZv8QeIErErjE" alt="English Learning" className="intro-image" />
      </div>

      {/* Прогресс */}
      <div className="progress-section">
        <h2>Your Progress</h2>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%`, transition: "width 1s ease" }}
          >
            <span className="progress-text">{progress}%</span>
          </div>
        </div>
        <button className="progress-button" onClick={() => setProgress(progress + 10)}>
          Increase Progress
        </button>
      </div>

      {/* Визуальные элементы */}
      <div className="visual-section">
        <h2>Start Your Learning Journey</h2>
        <div className="image-container">
          <img src="https://unecon.ru/wp-content/uploads/2022/11/2113515504765283.jpg" alt="Learning" className="learning-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;

