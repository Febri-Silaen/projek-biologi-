
import React, { useState } from "react";

import '../styles/Virus.css';


function Virus() {
  const [activeSection, setActiveSection] = useState('sejarah');

  const sections = [
    { 
      id: 'sejarah', 
     
      title: 'Sejarah Virus',
      content: (
        <div className="section-content">
          <p>Perjalanan penemuan virus adalah kisah inspiratif dalam sains. Dari bintik kuning pada daun tembakau hingga pemahaman molekuler, ilmuwan besar telah mengungkap rahasia mikroorganisme misterius ini.</p>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">1883</div>
              <div className="timeline-content">
                <h3>Adolf Meyer</h3>
                <p>Pertama kali mengamati penyakit bintik kuning pada daun tembakau</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">1892</div>
              <div className="timeline-content">
                <h3>Dmitri Ivanovsky</h3>
                <p>Melakukan percobaan penyaringan dan menemukan agen penyakit mikroskopis</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">1935</div>
              <div className="timeline-content">
                <h3>Wendell Meredith Stanley</h3>
                <p>Berhasil mengkristalkan Tobacco Mosaic Virus (TMV)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'ciri', 
     
      title: 'Ciri-ciri Virus',
      content: (
        <div className="section-content">
          <div className="virus-characteristics">
            <div className="characteristic-card">
             
              <h4>Ukuran Mikroskopis</h4>
              <p>Berukuran 0,02-0,3 µm, hanya dapat dilihat dengan mikroskop elektron</p>
            </div>
            <div className="characteristic-card">
              
              <h4>Struktur Genetik</h4>
              <p>Terdiri dari selubung protein (kapsid) dan materi genetik RNA atau DNA</p>
            </div>
            <div className="characteristic-card">
             
              <h4>Reproduksi</h4>
              <p>Hanya dapat bereproduksi di dalam sel atau jaringan hidup</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="virus-page">
      <div className="virus-header">
        <h1>Dunia Virus</h1>
        <p>Menjelajahi Mikroorganisme Misterius</p>
      </div>

      <div className="section-navigator">
        {sections.map(section => (
          <button 
            key={section.id}
            className={activeSection === section.id ? 'active' : ''}
            onClick={() => setActiveSection(section.id)}
          >
            {section.icon}
            <span>{section.title}</span>
          </button>
        ))}
      </div>

      <div className="main-content">
        {sections.find(section => section.id === activeSection)?.content}
      </div>
    </div>
  );
}

export default Virus;
