import React,{useState} from "react";
import "./Lessons.css";

const lessons = [
  {
    title: "Present Simple",
    description: "Learn the basics of Present Simple tense and how to use it in daily conversations.",
    explanation: "The Present Simple tense is used for regular actions or facts. It’s formed with the base form of the verb. For example: 'I go to work every day.'",
    examples: [
      "I work every day.",
      "She plays tennis on Sundays.",
      "They study English."
    ],
    tasks: [
      "Write 5 sentences using Present Simple.",
      "Change the following sentences into Present Simple: 'She is working.'",
    ]
  },
  {
    title: "Past Simple",
    description: "Understand the Past Simple tense and how to describe actions in the past.",
    explanation: "The Past Simple tense is used for actions that happened at a specific time in the past. It’s formed with the second form of the verb. Example: 'I visited London last year.'",
    examples: [
      "I visited Paris last summer.",
      "He watched a movie yesterday.",
      "They studied for the test."
    ],
    tasks: [
      "Write 5 sentences using Past Simple.",
      "Change the following sentences into Past Simple: 'I am reading a book.'",
    ]
  },
  {
    title: "Future Simple",
    description: "Explore Future Simple tense for discussing future events and plans.",
    explanation: "The Future Simple tense is used to describe actions that will happen in the future. Formed by: Subject + will + base verb.",
    examples: [
      "I will go to the store tomorrow.",
      "They will visit us next week.",
      "She will call me later."
    ],
    tasks: [
      "Write 5 sentences using Future Simple.",
      "Change the following sentences into Future Simple: 'I am going to the party.'",
    ]
  },
  {
    title: "Present Continuous",
    description: "Learn how to describe actions happening right now with Present Continuous tense.",
    explanation: "The Present Continuous tense is used for actions happening at the moment of speaking. Formed by: Subject + am/is/are + verb-ing.",
    examples: [
      "I am reading a book.",
      "She is working on her project.",
      "They are watching TV."
    ],
    tasks: [
      "Write 5 sentences using Present Continuous.",
      "Change the following sentences into Present Continuous: 'He eats lunch.'",
    ]
  },
  {
    title: "Future Continuous",
    description: "Learn how to talk about ongoing actions in the future with Future Continuous tense.",
    explanation: "The Future Continuous tense is used to describe actions that will be ongoing at a specific moment in the future. Formed by: Subject + will be + verb-ing.",
    examples: [
      "I will be studying at 8 PM.",
      "She will be traveling next month.",
      "They will be working on the project all week."
    ],
    tasks: [
      "Write 5 sentences using Future Continuous.",
      "Change the following sentences into Future Continuous: 'I am going to the store.'"
    ]
  },
  {
    title: "Present Perfect",
    description: "Master Present Perfect tense for discussing actions with relevance to the present.",
    explanation: "The Present Perfect tense is used to talk about actions that occurred at an unspecified time in the past, but are relevant to the present moment. Formed by: Subject + have/has + past participle (V3).",
    examples: [
      "I have finished my homework.",
      "She has lived in London for 5 years.",
      "They have visited many countries."
    ],
    tasks: [
      "Write 5 sentences using Present Perfect.",
      "Change the following sentences into Present Perfect: 'I write a letter.'"
    ]
  },
  {
    title: "Past Perfect",
    description: "Understand Past Perfect tense to describe actions completed before another past action.",
    explanation: "The Past Perfect tense is used for actions that happened before another action in the past. Formed by: Subject + had + past participle (V3).",
    examples: [
      "I had already eaten when he arrived.",
      "She had finished her work before the meeting started.",
      "They had left by the time we reached the airport."
    ],
    tasks: [
      "Write 5 sentences using Past Perfect.",
      "Change the following sentences into Past Perfect: 'I see the movie.'"
    ]
  },
  {
    title: "Future Perfect",
    description: "Learn how to talk about actions that will be completed in the future with Future Perfect tense.",
    explanation: "The Future Perfect tense is used to talk about actions that will be completed before a specific moment in the future. Formed by: Subject + will have + past participle (V3).",
    examples: [
      "By next year, I will have graduated.",
      "They will have completed the project by Friday.",
      "She will have finished reading the book by tomorrow."
    ],
    tasks: [
      "Write 5 sentences using Future Perfect.",
      "Change the following sentences into Future Perfect: 'I finish my homework by 8 PM.'"
    ]
  },
  {
    title: "Present Perfect Continuous",
    description: "Master Present Perfect Continuous tense for describing actions that started in the past and continue to the present.",
    explanation: "The Present Perfect Continuous tense is used for actions that started in the past and are still continuing in the present. Formed by: Subject + have/has been + verb-ing.",
    examples: [
      "I have been studying for two hours.",
      "She has been working at this company since 2015.",
      "They have been playing football all afternoon."
    ],
    tasks: [
      "Write 5 sentences using Present Perfect Continuous.",
      "Change the following sentences into Present Perfect Continuous: 'He reads a book.'"
    ]
  },
  {
    title: "Past Perfect Continuous",
    description: "Learn how to use Past Perfect Continuous tense to talk about actions that were ongoing in the past.",
    explanation: "The Past Perfect Continuous tense is used for actions that were happening before another past action. Formed by: Subject + had been + verb-ing.",
    examples: [
      "I had been working for two hours when she called.",
      "They had been studying all day before the exam.",
      "He had been living in New York for five years before he moved."
    ],
    tasks: [
      "Write 5 sentences using Past Perfect Continuous.",
      "Change the following sentences into Past Perfect Continuous: 'I write for 2 hours before lunch.'"
    ]
  },
  {
    title: "Future Perfect Continuous",
    description: "Explore Future Perfect Continuous tense for talking about future ongoing actions.",
    explanation: "The Future Perfect Continuous tense is used to describe actions that will be ongoing at a specific time in the future. It emphasizes the duration of the action. Formed by: Subject + will have been + verb-ing.",
    examples: [
      "By next year, I will have been working at this company for 10 years.",
      "She will have been studying all night before the exam.",
      "They will have been waiting for hours when we arrive."
    ],
    tasks: [
      "Write 5 sentences using Future Perfect Continuous.",
      "Change the following sentences into Future Perfect Continuous: 'I work at the office tomorrow.'"
    ]
  },
  {
    title: "First Conditional",
    description: "Learn how to express real possibilities in the future with First Conditional.",
    explanation: "The First Conditional is used to express real and possible situations in the future. Formed by: If + present simple, + will + verb.",
    examples: [
      "If it rains tomorrow, we will stay inside.",
      "If I finish my work early, I will call you.",
      "If they study hard, they will pass the test."
    ],
    tasks: [
      "Write 5 sentences using the First Conditional.",
      "Change the following sentences into the First Conditional: 'I go to the beach if it is sunny.'"
    ]
  },
  {
    title: "Second Conditional",
    description: "Understand Second Conditional for expressing hypothetical situations.",
    explanation: "The Second Conditional is used for hypothetical or unreal situations in the present or future. Formed by: If + past simple, + would + verb.",
    examples: [
      "If I were you, I would talk to her.",
      "If I had a million dollars, I would travel the world.",
      "If they lived closer, they would visit us more often."
    ],
    tasks: [
      "Write 5 sentences using the Second Conditional.",
      "Change the following sentences into the Second Conditional: 'I buy the car if I have enough money.'"
    ]
  },
  {
    title: "Third Conditional",
    description: "Master Third Conditional for talking about imaginary past situations and their results.",
    explanation: "The Third Conditional is used to express imaginary or unreal situations in the past and their possible results. Formed by: If + past perfect, + would have + past participle.",
    examples: [
      "If I had studied harder, I would have passed the exam.",
      "If they had left earlier, they would have caught the train.",
      "If we had known about the meeting, we would have attended."
    ],
    tasks: [
      "Write 5 sentences using the Third Conditional.",
      "Change the following sentences into the Third Conditional: 'I call you if I knew the answer.'"
    ]
  },
  {
    title: "Zero Conditional",
    description: "Learn how to use Zero Conditional for expressing facts and general truths.",
    explanation: "The Zero Conditional is used to express general truths, facts, or things that are always true. Formed by: If + present simple, + present simple.",
    examples: [
      "If you heat water to 100°C, it boils.",
      "If I wake up late, I miss the bus.",
      "If you mix red and blue, you get purple."
    ],
    tasks: [
      "Write 5 sentences using the Zero Conditional.",
      "Change the following sentences into the Zero Conditional: 'I turn off the light if I leave the room.'"
    ]
  },
  {
    title: "Modal Verbs",
    description: "Explore the use of Modal Verbs to express ability, permission, advice, and possibility.",
    explanation: "Modal verbs are used to express possibility, necessity, ability, or permission. Common modal verbs include can, could, may, might, must, should, etc.",
    examples: [
      "You can study whenever you want.",
      "I must finish my work before 5 PM.",
      "She should call her mom.",
      "Might you help me with this?"
    ],
    tasks: [
      "Write 5 sentences using different modal verbs.",
      "Change the following sentences using a modal verb: 'I am able to solve this problem.'"
    ]
  },
  {
    title: "Passive Voice",
    description: "Understand how to use Passive Voice to shift the focus from the subject to the action.",
    explanation: "The Passive Voice is used when the action is more important than the person doing the action. Formed by: Subject + form of 'to be' + past participle.",
    examples: [
      "The book was read by many people.",
      "The house is being built right now.",
      "The letter has been sent."
    ],
    tasks: [
      "Write 5 sentences in the Passive Voice.",
      "Change the following sentences into the Passive Voice: 'The chef prepares the meal.'"
    ]
  },
  {
    title: "Reported Speech",
    description: "Learn how to report what someone else has said using indirect speech.",
    explanation: "Reported speech is used to report what someone else has said. Changes are made to the tense, pronouns, and time expressions.",
    examples: [
      "He said that he was going to the store.",
      "She told me that she had finished her homework.",
      "They asked if I was coming to the party."
    ],
    tasks: [
      "Write 5 sentences in Reported Speech.",
      "Change the following sentences into Reported Speech: 'I am going home now.'"
    ]
  },
    {
      title: "Relative Clauses",
      description: "Master the use of relative clauses to combine sentences and give more information about a noun.",
      explanation: "Relative clauses give additional information about a noun and are often introduced by relative pronouns like 'who', 'which', 'that', etc.",
      examples: [
        "The man who lives next door is my friend.",
        "I have a book that explains grammar rules.",
        "She showed me the picture which was taken in Paris."
      ],
      tasks: [
        "Write 5 sentences using relative clauses.",
        "Combine these two sentences using a relative clause: 'I met a woman. She was wearing a red dress.'"
      ]
    },
    {
      title: "Question Forms",
      description: "Learn how to form different types of questions in English.",
      explanation: "In English, questions can be formed with 'wh' questions (who, what, where, etc.), yes/no questions, and tag questions. The word order changes based on the type of question.",
      examples: [
        "What is your name?",
        "Are you coming to the party?",
        "He is tired, isn't he?"
      ],
      tasks: [
        "Write 5 different types of questions: one 'wh' question, one yes/no question, and one tag question.",
        "Change the following sentence into a question: 'She works at a hospital.'"
      ]
    },
    {
      title: "Comparatives and Superlatives",
      description: "Understand how to use comparatives and superlatives for making comparisons.",
      explanation: "Comparatives are used to compare two things, while superlatives are used to show the highest degree of something in a group. Comparatives often end in '-er' or use 'more', and superlatives often end in '-est' or use 'most'.",
      examples: [
        "This book is more interesting than that one.",
        "She is the tallest person in the class.",
        "My car is faster than yours."
      ],
      tasks: [
        "Write 5 sentences using comparatives and superlatives.",
        "Change the following sentence to use a comparative: 'This is a good book.'"
      ]
    },
    {
      title: "Articles (a, an, the)",
      description: "Master the use of articles in English and when to use 'a', 'an', and 'the'.",
      explanation: "'A' and 'an' are indefinite articles used to refer to something not specific, while 'the' is a definite article used to refer to something specific.",
      examples: [
        "I have a dog. (indefinite)",
        "I am reading an interesting book. (indefinite)",
        "The book on the table is mine. (definite)"
      ],
      tasks: [
        "Write 5 sentences using different articles.",
        "Decide whether to use 'a', 'an', or 'the' in the following sentence: 'I saw ___ elephant.'"
      ]
    },
    {
      title: "Adverbs of Frequency",
      description: "Learn how to use adverbs of frequency like 'always', 'never', 'often', etc.",
      explanation: "Adverbs of frequency describe how often an action occurs. They are usually placed before the main verb but after the verb 'to be'.",
      examples: [
        "I always drink coffee in the morning.",
        "She never eats chocolate.",
        "They often go to the gym."
      ],
      tasks: [
        "Write 5 sentences using adverbs of frequency.",
        "Fill in the blanks with an appropriate adverb of frequency: 'I ___ go to the beach in summer.'"
      ]
    },
    {
      title: "Conditionals in Reporting",
      description: "Explore how to use conditionals in reported speech.",
      explanation: "Conditionals in reported speech involve reporting hypothetical situations and using the appropriate tense. The tense often changes when switching from direct to indirect speech.",
      examples: [
        "He said that if he had known, he would have acted differently.",
        "She told me that if she studied more, she would pass the exam.",
        "They said that if we had arrived earlier, we would have caught the train."
      ],
      tasks: [
        "Write 5 sentences using conditionals in reported speech.",
        "Change the following sentence into reported speech: 'If I win the lottery, I will travel the world.'"
      ]
    }
];

const Lessons = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleStartLesson = (index) => {
    setSelectedLesson(lessons[index]);
  };

  const handleCloseLesson = () => {
    setSelectedLesson(null);
  };

  return (
    <div className="lessons-container">
      <h1 className="lessons-title">English Lessons</h1>
      <div className="lessons-list">
        {lessons.map((lesson, index) => (
          <div className="lesson-card" key={index}>
            <h2 className="lesson-title">{lesson.title}</h2>
            <p className="lesson-description">{lesson.description}</p>
            <button className="lesson-btn" onClick={() => handleStartLesson(index)}>Start Lesson</button>
          </div>
        ))}
      </div>

      {selectedLesson && (
        <div className="lesson-detail">
          <div className="lesson-detail-content">
            <h2>{selectedLesson.title}</h2>
            <button className="close-btn" onClick={handleCloseLesson}>Close</button>
            <p><strong>Explanation:</strong> {selectedLesson.explanation}</p>
            <h3>Examples:</h3>
            <ul>
              {selectedLesson.examples.map((example, idx) => (
                <li key={idx}>{example}</li>
              ))}
            </ul>
            <h3>Tasks:</h3>
            <ul>
              {selectedLesson.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lessons;