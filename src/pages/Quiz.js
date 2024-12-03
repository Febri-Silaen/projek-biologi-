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
        correctAnswer: 2
      },
      
      {
        text: 'Berapa perkiraan jumlah spesies yang telah dikatalogkan di Bumi?',
        options: [
          '100.000 spesies',
          ' 500.000 spesies',
          '1.2 juta spesies',
          '8.7 juta spesies'
        ],
        correctAnswer: 3
      },

      {
        text: 'Apa yang dimaksud dengan keanekaragaman genetik?',

        options: [
          'Perbedaan kingdom dalam klasifikasi',
          ' Variasi dalam material genetik suatu spesies',
          'Jumlah total spsies di dunia',
          ' Perbedaan ekosistem'
        ],
        correctAnswer: 2
      },

      {
        text: 'Berapa persen biodiversitas dunia yang dimiliki Indonesia?',

        options: [
          ' 5%',
          '10%',
          '15%',
          ' 17%'
        ],
        correctAnswer: 4
      },

      {
        text: 'Apa yang termasuk dalam jasa ekosistem penyediaan?',

        options: [
          ' Regulasi iklim',
          'penyerbukan',
          'Pangan dan air bersih',
          'Nilai spiritual'
        ],
        correctAnswer: 3
      },

      
      {
        text: 'Dalam sistem klasifikasi tradisional, apa urutan terakhir?',

        options: [
          'Genus',
          'Kingdom',
          'Famili',
          'Spesies'
        ],
        correctAnswer: 4
      },

      {
        text: 'Apa yang dimaksud dengan konservasi in-situ?',

        options: [
          'Perlindungan di luar habitat asli',
          'perlindungan di dalam habitat asli',
          'Penanaman di kebun raya',
          'Pembibitan di laboratorium'
        ],
        correctAnswer: 2
      },

      {
        text: 'Berapa jumlah spesies mamalia di Indonesia?',

        options: [
          '250',
          '350',
          '415',
          '515'
        ],
        correctAnswer: 4
      },

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

      {
        text: 'Dari manakah asal kata "virus"?',
        options: [
          'Bahasa Inggris',
          'Bahasa Latin (virion)',
          'Bahasa Yunani',
          'Bahasa Prancis'
        ],
        correctAnswer: 2
      },

      {
        text: 'Siapakah ilmuwan pertama yang mengamati penyakit bintik kuning pada daun tembakau pada tahun 1883?',

        options: [
          'Dmitri Ivanovsky',
          'Martinus Beijerinck',
          'Adolf Meyer',
          'Wendell Meredith Stanley'
        ],
        correctAnswer: 3
      },

      {
        text: 'Pada tahun berapa Dmitri Ivanovsky melakukan percobaan penyaringan getah tanaman tembakau?',
        
        options: [
          '1883',
          '1892',
          '1897',
          '1935'
        ],
        correctAnswer: 2
      },

      {
        text: 'Apa kesimpulan Martinus Beijerinck tentang agen penyebab penyakit pada tanaman tembakau?',
        
        options: [
          'Bakteri biasa',
          'Partikel lebih kecil dan sederhana dari bakteri',
          'Racun tanaman',
          ' Mikroorganisme kompleks'
        ],
        correctAnswer: 2
      },

      {
        text: 'Siapakah ilmuwan yang berhasil mengkristalkan partikel penyebab penyakit tanaman tembakau pada tahun 1935?',
        
        options: [
          'Adolf Meyer',
          'Dmitri Ivanovsky',
          'Martinus Beijerinck',
          'Wendell Meredith Stanley'
        ],
        correctAnswer: 4
      },

      {
        text: ' Apakah nama virus yang ditemukan pada tanaman tembakau?',
        
        options: [
          'Corona Virus',
          ' Influenza Virus',
          'obacco Mosaic Virus (TMV)',
          'HIV Virus'
        ],
        correctAnswer: 3
      },
     
      {
        text: ' Apa yang dilakukan Adolf Meyer dalam percobaannya?',
        
        options: [
          'Mengkristalkan virus',
          'Menyaring getah tanaman',
          ' Menyemprotkan getah dari tanaman sakit ke tanaman sehat',
          ' Menggunakan mikroskop elektron'
        ],
        correctAnswer: 3
      },

      {
        text: 'Menurut percobaan Beijerinck, agen penyakit tersebut memiliki karakteristik apa?',
        
        options: [
          'Dapat dikembangbiakkan di cawan petri',
          'Dapat dinonaktifkan dengan alkohol',
          ' Tidak dapat dikembangbiakkan di cawan petri',
          'Mudah dilihat dengan mikroskop biasa'
        ],
        correctAnswer: 3
      },

      {
        text: ' Apa kesimpulan awal Meyer tentang penyebab penyakit?',
        
        options: [
          'Virus ukuran besar',
          'Bakteri berukuran normal',
          ' Bakteri berukuran lebih kecil dari biasanya',
          'Racun tanaman'
        ],
        correctAnswer: 3
      },

    


      
    ]
  },


  {
    id: 3,
    category: 'Plantae',
    icon: '🌱',
    color: 'orange',
    questions: [
      {
        text: ' Apakah yang dimaksud dengan ciri utama Kingdom Plantae?',
        options: [
          'Hidup di air dan dapat bergerak bebas',
          'Multiseluler dan mampu melakukan fotosintesis ',
          'Memiliki sistem pencernaan komplek             ',
          'Hanya dapat hidup di daratan kering   '
        ],
        correctAnswer: 2
      },
      {
        text: ' Apa fungsi klorofil pada tumbuhan?',
        options: [
          'Menghasilkan protein',
          'Menyimpan air',
          'Proses fotosintesis',
          'Melindungi dari serangan hama'
       
        ],
        correctAnswer: 3
      },


      {
        text: ' Berapa perkiraan jumlah spesies dalam Kingdom Plantae?',
        options: [
          '100.000 spesies',
          '200.000 spesies',
          '300.000 spesies',
          '400.000 spesies'
       
        ],
        correctAnswer: 4
      },

      {
        text: ' Filum manakah yang bereproduksi menggunakan spora?',
        options: [
          'Spermatophyta',
          'Bryophyta',
          'Pteridophyta',
          'Animalia'
       
        ],
        correctAnswer: 3
      },

      {
        text: '  Ciri apakah yang membedakan Kingdom Plantae dengan Kingdom Animalia?',

        options: [
          'Memiliki dinding sel',
          'Bersifat multiseluler',
          'Kemampuan fotosintesis',
          'Memiliki inti sel'
       
        ],
        correctAnswer: 3
      },

      {
        text: ' Tumbuhan lumut termasuk dalam filum?',


        options: [
          'Spermatophyta',
          'Pteridophyta',
          ' Bryophyta',
          'Animalia'
       
        ],
        correctAnswer: 3
      },

      {
        text: ' Salah satu manfaat Kingdom Plantae adalah?',


        options: [
          'Menghasilkan karbondioksida',
          'Menghasilkan oksigen melalui fotosintesis',
          ' Menurunkan suhu global',
          'Memproduksi protein hewani'
       
        ],
        correctAnswer: 2
      },

      {
        text: 'Struktur apakah yang membedakan tumbuhan dari organisme lain?',



        options: [
          'Klorofil',
          'Dinding sel dari selulosa',
          ' Kemampuan bergerak',
          'Sistem pencernaan'
       
        ],
        correctAnswer: 2
      },

      {
        text: 'Tumbuhan berbiji termasuk dalam filum?',


        options: [
          'Bryophyta',
          ' Pteridophyta',
          ' Spermatophyta',
          ' Animalia'
       
        ],
        correctAnswer: 3
      }

      
    ]
  },

  

  {
    id: 4,
    category: 'Fungi',
    icon: '🍄',
    color: '#D3F1DF',
    questions: [
      {
        text: 'Apa arti kata "Fungi" dalam Bahasa Latin?',
        options: [
          'Tumbuhan',
          'Jamur',
          'Mikroorganisme',
          'Organisme'
        ],
        correctAnswer: 1
      },

      {
        text: 'Fungi bersifat heterotrof, artinya...',
        options: [
          ' Dapat melakukan fotosintesis',
          'Menghasilkan makanannya sendiri',
          ' Mendapatkan nutrisi dari bahan organik di lingkungannya',
          'Tidak membutuhkan nutrisi'
        ],
        correctAnswer: 2
      },

      {
        text: 'Apakah bahan utama penyusun dinding sel fungi?',
        options: [
          'Selulosa',
          'Kitin',
          'Proteina',
          ' Lignin'
        ],
        correctAnswer: 1
      },

      {
        text: 'Bagaimana cara reproduksi fungi?',
        options: [
          'Hanya secara seksual',
          'Hanya secara aseksual',
          'Secara seksual dan aseksual dengan membentuk spora',
          ' Melalui pencangkokan'
        ],
        correctAnswer: 2
      },

      {
        text: 'Struktur dasar pada fungi yang menyerupai benang halus disebut...',
        options: [
          'Spora',
          'Miselium',
          'Hifa',
          ' Zigospora'
        ],
        correctAnswer: 2
      },

      {
        text: ' Kelompok fungi yang belum diketahui cara reproduksi seksualnya adalah...',

        options: [
          ' Zygomycota',
          'Ascomycota',
          'Basidiomycota',
          'Deuteromycota'
        ],
        correctAnswer: 3
      },

      {
        text: ' Ciri khas Ascomycota adalah...',

        options: [
          'Menghasilkan zigospora',
          'Menghasilkan askospora dalam askus',
          'Memiliki bentuk seperti payung',
          'Tidak memiliki septa'
        ],
        correctAnswer: 3
      },

      
      {
        text: 'Pada hifa senositik, proses pembelahan ditandai oleh...',

        options: [
          'Pembelahan sitoplasma',
          'Pembelahan sel',
          ' Pembelahan inti sel berkali-kali tanpa diikuti pembelahan sitoplasma',
          'Pertumbuhan membran sel'
        ],
        correctAnswer: 2
      },

      {
        text: 'Bagaimana fungi mendapatkan nutrisi dari lingkungannya?',

        options: [
          'Menyerap cahaya matahari melalui klorofil.',
          'Mencerna makanan di luar tubuh dan menyerap molekul nutrisi ke dalam sel.',
          'Menggunakan akar untuk menyerap nutrisi dari tanah.',
          'Melakukan simbiosis dengan hewan.'
        ],
        correctAnswer: 2
      },

      {
        text: ' Septa pada hifa memiliki fungsi...',

        options: [
          'Mencegah pertumbuhan',
          ' Memisahkan inti sel',
          ' Menghambat nutrisi',
          'Mempermudah aliran organel antar sel'
        ],
        correctAnswer: 3
      },
    ]
  },


  {
    id: 5,
    category: 'Animalia',
    icon: '🦋',
    color: '#8174A0',
    questions: [
      {
        text: 'Berapa perkiraan jumlah spesies hewan yang sudah teridentifikasi?',
        options: [
          '1 juta',
          '2 juta',
          '5 juta', 
          '10 juta'
        ],
        correctAnswer: 1
      },
      {
        text: 'Karakteristik dasar sel hewan adalah...',
        options: [
          'Memiliki dinding sel',
          'Memiliki kloroplas',
          'Membran sel fleksibel tanpa dinding sel',
          'Bersifat autotrof'
        ],
        correctAnswer: 2
      },
      {
        text: 'Kapan kemunculan hewan multiseluler pertama diperkirakan terjadi?',
        options: [
          '400 juta tahun lalu',
          '600 juta tahun lalu',
          '500 juta tahun lalu',
          '300 juta tahun lalu'
        ],
        correctAnswer: 1
      },
      {
        text: 'Yang BUKAN merupakan jaringan utama pada hewan adalah...',
        options: [
          'Epitel',
          'Otot',
          'Saraf',
          'Akar'
        ],
        correctAnswer: 3
      },
      {
        text: 'Metode reproduksi aseksual pada hewan tidak termasuk...',
        options: [
          'Pembelahan biner',
          'Budding',
          'Fertilisasi internal',
          'Fragmentasi'
        ],
        correctAnswer: 2
      },
      {
        text: 'Hewan nokturnal yang memiliki racun di lengannya adalah...',
        options: [
          'Kelelawar',
          'Kukang',
          'Orangutan',
          'Anoa'
        ],
        correctAnswer: 1
      },
      {
        text: 'Kelompok vertebrata yang mengalami metamorfosis adalah...',
        options: [
          'Reptilia',
          'Mammalia',
          'Amphibia',
          'Aves'
        ],
        correctAnswer: 2
      },
      {
        text: 'Karakteristik umum Arthropoda adalah...',
        options: [
          'Tidak memiliki eksoskeleton',
          'Eksoskeleton dari selulosa',
          'Eksoskeleton dari kitin',
          'Tubuh tidak bersegmen'
        ],
        correctAnswer: 2
      },
      {
        text: 'Yang termasuk mamalia laut adalah...',
        options: [
          'Hiu paus',
          'Dugong',
          'Lumba-lumba',
          'Semua benar'
        ],
        correctAnswer: 3
      },
      {
        text: 'Hewan endemik Sulawesi yang termasuk Bovidae terkecil di dunia adalah...',
        options: [
          'Komodo',
          'Orangutan',
          'Anoa',
          'Cendrawasih'
        ],
        correctAnswer: 2
      }
    ],
  },




  {
    id: 6,
    category: 'Protista',
    icon: '🔬',
    color: '#85A98F',
    questions: [
      {
        question: "Protista adalah kingdom organisme yang bersifat...",
        options: [
          "Prokariotik",
          "Eukariotik", 
          "Tidak berinti",
          "Kompleks"
        ],
        correctAnswer: 1
      },
      {
        question: "Mayoritas protista hidup di...",
        options: [
          "Daratan kering",
          "Perairan", 
          "Gurun",
          "Kawah panas"
        ],
        correctAnswer: 1
      },
      {
        question: "Yang termasuk protista mirip hewan (protozoa) adalah...",
        options: [
          "Chlorella",
          "Amoeba", 
          "Diatom",
          "Ganggang merah"
        ],
        correctAnswer: 1
      },
      {
        question: "Protista yang bergerak menggunakan silia disebut...",
        options: [
          "Rhizopoda",
          "Flagellata", 
          "Ciliata",
          "Sporozoa"
        ],
        correctAnswer: 2
      },
      {
        question: "Euglenophyta memiliki sifat...",
        options: [
          "Hanya heterotrof",
          "Hanya autotrof", 
          "Autotrof dan heterotrof",
          "Tidak memiliki nutrisi"
        ],
        correctAnswer: 2
      },
      {
        question: "Protista dengan pigmen fikobilin adalah...",
        options: [
          "Chlorophyta",
          "Rhodophyta", 
          "Phaeophyta",
          "Chrysophyta"
        ],
        correctAnswer: 1
      },
      {
        question: "Plasmodium termasuk dalam klasifikasi...",
        options: [
          "Rhizopoda",
          "Sporozoa", 
          "Ciliata",
          "Flagellata"
        ],
        correctAnswer: 1
      },
      {
        question: "Manfaat Radiolaria adalah...",
        options: [
          "Bahan makanan",
          "Bahan penggosok", 
          "Indikator pencemaran",
          "Menghasilkan minyak"
        ],
        correctAnswer: 2
      },
      {
        question: "Protista yang dapat bercahaya adalah...",
        options: [
          "Chrysophyta",
          "Pyrrophyta", 
          "Euglenophyta",
          "Bacillariophyta"
        ],
        correctAnswer: 1
      },
      {
        question: "Chlorella dimanfaatkan sebagai...",
        options: [
          "Bahan bakar",
          "Protein sel tunggal", 
          "Obat-obatan",
          "Pupuk"
        ],
        correctAnswer: 1
      },
    ],
},

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

    setTimeout(handleNextQuestion, 2000);
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


