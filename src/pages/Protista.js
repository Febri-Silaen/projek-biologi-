import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaMicroscope, FaBacteria } from 'react-icons/fa';
import './Protista.css';

const Protista = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const materialContent = {
    overview: {
      title: 'Kingdom Protista',
      content: `
        Kingdom Protista terdiri dari organisme eukariotik yang memiliki satu atau banyak sel. 
        Protista dapat dibagi menjadi tiga kelompok: yang menyerupai hewan (Protozoa), 
        menyerupai tumbuhan (Ganggang), dan menyerupai jamur.
      `,
      icon: <FaLeaf />
    },
    characteristics: {
      title: 'Ciri-ciri Protista',
      content: `
        - Bersifat uniseluler atau multiseluler sederhana.
        - Memiliki membran inti (eukariotik).
        - Dapat hidup bebas atau bersimbiosis.
        - Habitat umumnya di tempat lembab atau air.
        - Dapat bersifat heterotrof atau fotoautotrof.
        - Beberapa protista memiliki alat gerak seperti flagel, silia, atau pseudopodia.
      `,
      icon: <FaMicroscope />
    },
    classification: {
      title: 'Klasifikasi Protista',
      content: `
        1. Protista Mirip Hewan (Protozoa)
        2. Protista Mirip Tumbuhan (Algae)
        3. Protista Mirip Jamur (Myxomycota, Acrasiomycota, Oomycota)
      `,
      icon: <FaBacteria />
    },
    benefits: {
      title: 'Manfaat dan Dampak Protista',
      content: `
        Manfaat:
        - Chlorella sebagai produsen di ekosistem perairan.
        - Paramaecium sebagai indikator pencemaran air.

        Dampak Buruk:
        - Entamoeba histolytica penyebab disentri.
        - Trypanosoma gambiense penyebab penyakit tidur.
      `,
      icon: <FaLeaf />
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="protista-page">
      <motion.header
        className="protista-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Kingdom Protista</h1>
        <p>Pelajari tentang ciri-ciri, klasifikasi, dan peran protista dalam ekosistem.</p>
      </motion.header>

      {/* Navigation Tabs */}
      <div className="tab-navigation">
        {['overview', 'characteristics', 'classification', 'benefits'].map((tab, index) => (
          <motion.button
            key={index}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
            whileHover={{ scale: 1.1, backgroundColor: '#0288d1', color: '#fff' }}
            transition={{ duration: 0.3 }}
          >
            {materialContent[tab].icon}
            <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
          </motion.button>
        ))}
      </div>

      {/* Main Content with Animations */}
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={activeTab}
          className="protista-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <section className="content-section">
            <h2>{materialContent[activeTab].title}</h2>
            <div className="content-text">
              {materialContent[activeTab].content.split('\n').map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Protista;
