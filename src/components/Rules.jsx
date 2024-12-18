import React from "react";
import "./Rules.css";

const Rules = () => {
  const tenses = [
    {
      category: "Present",
      tenses: [
        { name: "Present Simple", structure: "Subject + V1 (+s/es)", example: "He works every day." },
        { name: "Present Continuous", structure: "Subject + am/is/are + V-ing", example: "I am reading now." },
        { name: "Present Perfect", structure: "Subject + have/has + V3", example: "She has finished her work." },
        { name: "Present Perfect Continuous", structure: "Subject + have/has been + V-ing", example: "She has been studying." },
      ],
    },
    {
      category: "Past",
      tenses: [
        { name: "Past Simple", structure: "Subject + V2", example: "She visited London." },
        { name: "Past Continuous", structure: "Subject + was/were + V-ing", example: "He was sleeping." },
        { name: "Past Perfect", structure: "Subject + had + V3", example: "He had left by then." },
        { name: "Past Perfect Continuous", structure: "Subject + had been + V-ing", example: "They had been waiting." },
      ],
    },
    {
      category: "Future",
      tenses: [
        { name: "Future Simple", structure: "Subject + will + V1", example: "They will travel tomorrow." },
        { name: "Future Continuous", structure: "Subject + will be + V-ing", example: "They will be working." },
        { name: "Future Perfect", structure: "Subject + will have + V3", example: "I will have completed it." },
        { name: "Future Perfect Continuous", structure: "Subject + will have been + V-ing", example: "He will have been running." },
      ],
    },
  ];

  return (
    <div className="rules-container">
      <h1>Grammar Rules</h1>
      {tenses.map((group, index) => (
        <div key={index} className="category">
          <h2>{group.category} Tenses</h2>
          <div className="cards-wrapper">
            {group.tenses.map((tense, i) => (
              <div key={i} className="card">
                <h3>{tense.name}</h3>
                <p><strong>Structure:</strong> {tense.structure}</p>
                <p><strong>Example:</strong> {tense.example}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rules;

