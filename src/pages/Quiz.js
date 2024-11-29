import React, { useState, useEffect } from 'react';
import '../styles/Quiz.css';
import { motion, AnimatePresence } from 'framer-motion';

const quizData = [
  {
    id: 1,
    category: 'Keanekaragaman Hayati',
    icon: '🌿',
    color: '#4CAF50',
    questions: [
      {
        text: 'Apa yang dimaksud dengan keanekaragaman hayati?',
        options: [
          'Perbedaan antar makhluk hidup',
          'Jumlah spesies di suatu wilayah',
          'Variasi genetik dalam satu spesies',
          'Kompleksitas ekosistem'
        ],
        correctAnswer: 0
      },
      // Tambahkan pertanyaan lain
    ]
  },
  {
    id: 2,
    category: 'Virus',
    icon: '🦠',
    color: '#2196F3',
    questions: [
      {
        text: 'Virus termasuk ke dalam golongan?',
        options: [
          'Makhluk hidup sempurna',
          'Benda mati',
          'Makhluk hidup tidak sempurna',
          'Organisme bersel'
        ],
        correctAnswer: 2
      },
      // Tambahkan pertanyaan lain
    ]
  },
  // Tambahkan kategori lain
];

const Quiz = () => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    let intervalId;
    if (currentCategory && !showScore && timer > 0) {
      intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }

    if (timer === 0) {
      handleNextQuestion();
    }

    return () => clearInterval(intervalId);
  }, [currentCategory, showScore, timer]);

  const startQuiz = (category) => {
    setCurrentCategory(category);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTimer(15);
  };

  const handleAnswerClick = (optionIndex) => {
    setSelectedAnswer(optionIndex);
    
    const currentCategoryData = quizData.find(cat => cat.category === currentCategory);
    const currentQuestion = currentCategoryData.questions[currentQuestionIndex];

    if (optionIndex === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }

    setTimeout(handleNextQuestion, 500);
  };

  const handleNextQuestion = () => {
    const currentCategoryData = quizData.find(cat => cat.category === currentCategory);
    
    if (currentQuestionIndex + 1 < currentCategoryData.questions.length) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setTimer(15);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentCategory(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTimer(15);
  };

  const renderCategorySelection = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="category-selection"
    >
      <h1>Pilih Kategori Quiz Biologi</h1>
      <div className="category-grid">
        {quizData.map(category => (
          <motion.button 
            key={category.id} 
            onClick={() => startQuiz(category.category)}
            className="category-btn"
            style={{ backgroundColor: category.color }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="category-icon">{category.icon}</span>
            {category.category}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );

  const renderQuizContent = () => {
    if (showScore) {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="score-section"
        >
          <h2>Skor Anda: {score} dari {quizData.find(cat => cat.category === currentCategory).questions.length}</h2>
          
          <div className="score-progress">
            <div 
              className="score-bar" 
              style={{ 
                width: `${(score / quizData.find(cat => cat.category === currentCategory).questions.length) * 100}%`,
                backgroundColor: score === quizData.find(cat => cat.category === currentCategory).questions.length 
                  ? '#4CAF50' 
                  : '#2196F3'
              }}
            ></div>
          </div>

          <div className="score-feedback">
            {score === quizData.find(cat => cat.category === currentCategory).questions.length 
              ? "🌟 Sempurna! Kamu menguasai materi dengan baik!" 
              : score > quizData.find(cat => cat.category === currentCategory).questions.length / 2
                ? "👍 Bagus! Kamu sudah memahami sebagian besar materi."
                : "📖 Ayo belajar lagi! Kamu bisa tingkatkan pemahamanmu."}
          </div>
          <motion.button 
            onClick={restartQuiz} 
            className="restart-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kembali ke Kategori
          </motion.button>
        </motion.div>
      );
    }

    const currentCategoryData = quizData.find(cat => cat.category === currentCategory);
    const currentQuestion = currentCategoryData.questions[currentQuestionIndex];

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="quiz-container"
        style={{ borderTop: `5px solid ${currentCategoryData.color}` }}
      >
        <div className="quiz-header">
          <div className="category-info">
            <span className="category-icon">{currentCategoryData.icon}</span>
            <h2>{currentCategoryData.category}</h2>
          </div>
          <div className="quiz-timer">
            <span>{timer}s</span>
          </div>
        </div>

        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ 
              width: `${((currentQuestionIndex + 1) / currentCategoryData.questions.length) * 100}%`,
              backgroundColor: currentCategoryData.color 
            }}
          ></div>
        </div>

        <motion.div 
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="question-section"
        >
          <h3>{currentQuestion.text}</h3>
          <div className="answer-options">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className={`option-btn ${
                  selectedAnswer !== null 
                  ? index === currentQuestion.correctAnswer 
                    ? 'correct' 
                    : selectedAnswer === index 
                      ? 'incorrect' 
                      : ''
                  : ''
                }`}
                disabled={selectedAnswer !== null}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="quiz-page">
      {!currentCategory ? renderCategorySelection() : renderQuizContent()}
    </div>
  );
};

export default Quiz;


