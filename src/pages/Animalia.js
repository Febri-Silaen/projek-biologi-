import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaBook, FaTasks } from 'react-icons/fa';
import MaterialCard from '../components/MaterialCard';
import './Animalia.css';

const Animalia = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const animalGroups = [
    {
      id: 'invertebrata',
      title: 'Invertebrata',
      description: 'Hewan tidak bertulang belakang',
      image: '/images/ikan.jpg',
      groups: ['Porifera', 'Coelenterata', 'Platyhelminthes', 'Nemathelminthes', 'Annelida', 'Mollusca', 'Arthropoda', 'Echinodermata']
    },
    {
      id: 'vertebrata',
      title: 'Vertebrata',
      description: 'Hewan bertulang belakang',
      image: '/images/vertebrata.jpg',
      groups: ['Pisces', 'Amphibia', 'Reptilia', 'Aves', 'Mammalia']
    }
  ];

  const materialContent = {
    overview: {
      title: 'Kingdom Animalia',
      content: `
        Kingdom Animalia adalah kelompok makhluk hidup eukariotik, multiseluler, dan heterotrof.
        Ciri-ciri umum hewan:
        - Tidak dapat membuat makanan sendiri (heterotrof)
        - Memiliki sel eukariotik
        - Multiseluler (bersel banyak)
        - Dapat bergerak aktif
        - Memiliki sistem saraf
      `
    },
    invertebrata: {
      title: 'Invertebrata',
      content: `
        Invertebrata adalah kelompok hewan yang tidak memiliki tulang belakang. 
        Kelompok ini mencakup lebih dari 95% spesies hewan yang ada di dunia.
        
        Klasifikasi Invertebrata:
        1. Porifera (hewan berpori)
        2. Coelenterata (hewan berongga)
        3. Platyhelminthes (cacing pipih)
        4. Nemathelminthes (cacing gilig)
        5. Annelida (cacing gelang)
        6. Mollusca (hewan lunak)
        7. Arthropoda (hewan berbuku-buku)
        8. Echinodermata (hewan berkulit duri)
      `
    },
    vertebrata: {
      title: 'Vertebrata',
      content: `
        Vertebrata adalah kelompok hewan yang memiliki tulang belakang.
        
        Klasifikasi Vertebrata:
        1. Pisces (ikan)
           - Hidup di air
           - Bernapas dengan insang
           - Memiliki sirip
        
        2. Amphibia (amfibi)
           - Hidup di dua alam
           - Mengalami metamorfosis
           - Bernapas dengan insang dan paru-paru
        
        3. Reptilia (reptil)
           - Berdarah dingin
           - Bernapas dengan paru-paru
           - Kulit bersisik
        
        4. Aves (burung)
           - Berdarah panas
           - Memiliki bulu
           - Bernapas dengan paru-paru
        
        5. Mammalia (mamalia)
           - Berdarah panas
           - Memiliki kelenjar susu
           - Bernapas dengan paru-paru
      `
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="animalia-page">
      <motion.header
        className="animalia-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Kingdom Animalia</h1>
        <p>Pelajari tentang klasifikasi dan karakteristik dunia hewan</p>
      </motion.header>

      {/* Navigation Tabs */}
      <div className="tab-navigation">
        {['overview', 'invertebrata', 'vertebrata'].map((tab, index) => (
          <motion.button
            key={index}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </motion.button>
        ))}
      </div>

      <motion.main
        className="animalia-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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

        {activeTab !== 'overview' && (
          <section className="animal-groups">
            <h3>Kelompok {materialContent[activeTab].title}</h3>
            <div className="groups-grid">
              {animalGroups.find(group => group.id === activeTab).groups.map((group, index) => (
                <motion.div
                  key={index}
                  className="group-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4>{group}</h4>
                  <img
                    src={`/images/animals/${group.toLowerCase()}.jpg`}
                    alt={group}
                    className="group-image"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        <section className="interactive-section">
          <h3>Contoh Interaktif</h3>
          <div className="examples-grid">
            {animalGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MaterialCard
                  title={group.title}
                  description={group.description}
                  imageUrl={group.image}
                  link={`#${group.id}`}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="learning-resources">
          <h2>Sumber Belajar</h2>
          <div className="resources-grid">
            <ResourceCard
              icon={<FaVideo />}
              title="Video Pembelajaran"
              description="Pelajari materi melalui video interaktif"
              link="https://youtu.be/ZysZy1OfGII?si=UT6dks4_Y_VPPzxF"
            />
            <ResourceCard
              icon={<FaBook />}
              title="Modul Digital"
              description="Akses modul pembelajaran lengkap"
              link="https://repositori.kemdikbud.go.id/22023/1/X_Biologi_KD-3.10_Final.pdf"
            />
            <ResourceCard
              icon={<FaTasks />}
              title="Latihan Soal"
              description="Uji pemahaman dengan latihan soal"
              link="./fungi"
            />
          </div>
        </section>
      </motion.main>
    </div>
  );
};

const ResourceCard = ({ icon, title, description, link }) => (
  <motion.div
    className="resource-card"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="resource-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link}>Pelajari</a>
  </motion.div>
);

export default Animalia;