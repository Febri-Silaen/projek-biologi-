import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Quiz.css';

const QuizCard = ({ question, options, correctAnswer, explanation, onAnswerSubmit }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (option) => {
    if (selectedOption) return;
    setSelectedOption(option);
    setShowExplanation(true);
    onAnswerSubmit(option);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="quiz-card"
    >
      <h3 className="question">{question}</h3>
      <div className="options-grid">
        {options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`option-btn ${selectedOption === option ? 
              (option === correctAnswer ? 'correct' : 'incorrect') : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            <span className="option-label">{String.fromCharCode(65 + index)}.</span>
            <span className="option-text">{option}</span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`explanation ${selectedOption === correctAnswer ? 'correct' : 'incorrect'}`}
          >
            <div className="explanation-content">
              <span className="explanation-icon">
                {selectedOption === correctAnswer ? '✅' : '❌'}
              </span>
              <p>{explanation}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const quizQuestions = {
    virus: [
      {
        question: "Apakah ciri utama virus?",
        options: [
          "Makhluk hidup bersel satu",
          "Parasit obligat",
          "Dapat berkembang biak di media mati",
          "Memiliki organel lengkap"
        ],
        correctAnswer: "Parasit obligat",
        explanation: "Virus merupakan parasit obligat yang hanya dapat berkembang biak di dalam sel hidup."
      },
     
    
    ],
    bakteri: [
      {
        question: "Bakteri yang berbentuk batang disebut...",
        options: [
          "Kokus",
          "Basil",
          "Spiral",
          "Vibrio"
        ],
        correctAnswer: "Basil",
        explanation: "Basil adalah istilah untuk bakteri berbentuk batang."
      },
     
    ],
    plantae: [
      {
        question: "Bakteri yang berbentuk batang disebut...",
        options: [
          "Kokus",
          "Basil",
          "Spiral",
          "Vibrio"
        ],
        correctAnswer: "Basil",
        explanation: "Basil adalah istilah untuk bakteri berbentuk batang."
      },
     
     
    ]

  };

  const topics = [
    {
      id: 'virus',
      name: 'Virus',
      icon: '👹',
      color: '#FF6B6B'
    },
    {
      id: 'bakteri',
      name: 'Bakteri',
      icon: '🥶',
      color: '#4ECDC4'
    },
    {
      id: 'plantae',
      name: 'plantae',
      icon: '🌱',
      color: 'blue'
    }
  ];

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  const handleAnswerSubmit = (selectedOption) => {
    if (selectedOption === quizQuestions[selectedTopic][currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < quizQuestions[selectedTopic].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-wrapper">
      <div className="quiz-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="quiz-title">
            <span className="title-icon">🎓</span>
            Quiz Biologi Kelas 10
          </h1>
          
          {!selectedTopic ? (
            <motion.div 
              className="topic-selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2>Pilih Topik Quiz</h2>
              <div className="topics-grid">
                {topics.map((topic) => (
                  <motion.button
                    key={topic.id}
                    className="topic-card"
                    style={{ backgroundColor: topic.color }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleTopicSelect(topic.id)}
                  >
                    <span className="topic-icon">{topic.icon}</span>
                    <h3>{topic.name}</h3>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : showScore ? (
            <motion.div 
              className="score-section"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="score-content">
                <h2>Quiz Selesai! 🎉</h2>
                <div className="score-display">
                  <div className="score-circle">
                    <svg viewBox="0 0 36 36" className="circular-chart">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#eee"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#4CAF50"
                        strokeWidth="3"
                        strokeDasharray={`${(score / quizQuestions[selectedTopic].length) * 100}, 100`}
                      />
                      <text x="18" y="20.35" className="percentage">
                        {Math.round((score / quizQuestions[selectedTopic].length) * 100)}%
                      </text>
                    </svg>
                  </div>
                  <div className="score-details">
                    <p>
                      Anda menjawab <strong>{score}</strong> dari {quizQuestions[selectedTopic].length} pertanyaan dengan benar
                    </p>
                  </div>
                </div>
                <div className="score-actions">
                  <motion.button 
                    className="retry-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={restartQuiz}
                  >
                    <span className="btn-icon">🔄</span> Coba Lagi
                  </motion.button>
                  <motion.button 
                    className="new-topic-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTopic(null)}
                  >
                    <span className="btn-icon">📚</span> Pilih Topik Lain
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="quiz-container"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="quiz-header">
                <h2>
                  <span className="topic-icon">
                    {topics.find(t => t.id === selectedTopic)?.icon}
                  </span>
                  {topics.find(t => t.id === selectedTopic)?.name}
                </h2>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${((currentQuestionIndex + 1) / quizQuestions[selectedTopic].length) * 100}%` }}
                  />
                </div>
                <div className="quiz-progress">
                  Pertanyaan {currentQuestionIndex + 1} dari {quizQuestions[selectedTopic].length}
                </div>
              </div>
              <QuizCard
                question={quizQuestions[selectedTopic][currentQuestionIndex].question}
                options={quizQuestions[selectedTopic][currentQuestionIndex].options}
                correctAnswer={quizQuestions[selectedTopic][currentQuestionIndex].correctAnswer}
                explanation={quizQuestions[selectedTopic][currentQuestionIndex].explanation}
                onAnswerSubmit={handleAnswerSubmit}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;