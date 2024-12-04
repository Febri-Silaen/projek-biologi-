import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



import zygomta1 from '../assets/images/zygomta1.jpg';
import ascomycota from '../assets/images/ascomycota.jpeg';
import basidiomycota from '../assets/images/basidiomycota.jpg';
import deuteromycota from '../assets/images/deuteromycota.jpg';
import StrukturFungi from '../assets/images/StrukturFungi.png';

import '../styles/Fungi.css';

const FungiCard = ({ image, title, description, link }) => {
    return (
        <motion.div 
            className="fungi-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link to={link} className="card-link">
                <div className="card-image">
                    <img src={image} alt={title} />
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className="card-link-text">Pelajari Lebih Lanjut</span>
                </div>
            </Link>
        </motion.div>
    );
};

const Fungi = () => {
    const [activeSection, setActiveSection] = useState('definisi');

    const fungiTypes = [
        {
            image: zygomta1,
            title: 'Zygomycota',
            link: '/zygomycota',
            description: 'Jamur dengan reproduksi zigospora unik'
        },
        {
            image: ascomycota,
            title: 'Ascomycota',
            link: '/ascomycota',
            description: 'Jamur kantung dengan karakteristik istimewa'
        },
        {
            image: basidiomycota,
            title: 'Basidiomycota',
            link: '/basidiomycota',
            description: 'Jamur payung dengan struktur menarik'
        },
        {
            image: deuteromycota,
            title: 'Deuteromycota',
            link: '/deuteromycota',
            description: 'Jamur tidak sempurna dengan misteri reproduksi'
        }
    ];

    const sectionContent = {
        definisi: (
            <div className="section-content">
                <h2>Definisi Fungi</h2>
                <p>
                    Fungi adalah organisme eukariotik unik yang tidak berklorofil, 
                    berperan penting dalam ekosistem sebagai pengurai dan simbiosis. 
                    Mereka memiliki struktur sel khusus dan cara reproduksi yang kompleks.
                </p>
                <div className="fungi-highlights">
                    <div className="highlight-item">
                       
                        <h4>Struktur Mikroskopis</h4>
                        <p>Tersusun dari hifa dengan dinding sel kitin</p>
                    </div>
                    <div className="highlight-item">
                       
                        <h4>Peranan Ekologis</h4>
                        <p>Berperan dalam daur ulang nutrisi alam</p>
                    </div>
                    <div className="highlight-item">
                       
                        <h4>Reproduksi Kompleks</h4>
                        <p>Berkembang biak secara seksual dan aseksual</p>
                    </div>
                </div>
            </div>
        ),
        ciri: (
            <div className="section-content">
                <h2>Ciri-ciri Khusus Fungi</h2>
                <ul className="feature-list">
                    <li>Sel eukariotik tanpa klorofil</li>
                    <li>Dinding sel tersusun dari kitin</li>
                    <li>Reproduksi melalui spora</li>
                    <li>Hidup sebagai saprofit atau parasit</li>
                    <li>Memiliki struktur hifa kompleks</li>
                </ul>
            </div>
        ),
        struktur: (
            <div className="section-content">
                <h2>Struktur Tubuh Fungi</h2>
                <div className="struktur-container">
                    <img src={StrukturFungi} alt="Struktur Fungi" />
                    <div className="struktur-description">
                        <p>
                            Struktur fungi terdiri dari hifa, struktur benang halus 
                            yang membentuk miselium. Hifa dapat bersekat atau tidak bersekat, 
                            dengan kemampuan menyerap nutrisi dari lingkungan.
                        </p>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <motion.div 
            className="fungi-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="fungi-header">
                <h1>Dunia Fascinating Fungi</h1>
                <p>Menjelajahi Keunikan Dunia Jamur</p>
            </div>

            <div className="section-navigator">
                <button 
                    className={activeSection === 'definisi' ? 'active' : ''}
                    onClick={() => setActiveSection('definisi')}
                >
                    Definisi
                </button>
                <button 
                    className={activeSection === 'ciri' ? 'active' : ''}
                    onClick={() => setActiveSection('ciri')}
                >
                    Ciri-ciri
                </button>
                <button 
                    className={activeSection === 'struktur' ? 'active' : ''}
                    onClick={() => setActiveSection('struktur')}
                >
                    Struktur
                </button>
            </div>

            <div className="main-content">
                {sectionContent[activeSection]}
            </div>

            <div className="fungi-classification">
                <h2>Klasifikasi Fungi</h2>
                <div className="fungi-grid">
                    {fungiTypes.map((fungi, index) => (
                        <FungiCard key={index} {...fungi} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Fungi;

