import React from 'react';
import zygomta1 from '../assets/images/zygomta1.jpg';
import ascomycota from '../assets/images/ascomycota.jpeg';
import basidiomycota from '../assets/images/basidiomycota.jpg';
import deuteromycota from '../assets/images/deuteromycota.jpg';
import StrukturFungi from '../assets/images/StrukturFungi.png';
import '../styles/Fungi.css';
import { Link } from 'react-router-dom';

const Fungi = () => {
    return (
        <div className="container my-5">
            <h2 className="fungi-header animate-text text-center mb-4">Fungi</h2>

            <div className="mb-5">
                <h4>Definisi Fungi</h4>
                <p>
                    “Fungi” merupakan Bahasa latin dari kata Jamur. Jamur atau fungi merupakan tanaman yang bersifat eukariotik heterotrof dan tidak berklorofil. 
                    Jamur bersifat eukariotik heterotrof yang artinya mendapatkan nutrisi dari bahan organik di lingkungan mereka hidup. 
                    Fungi memiliki kemampuan untuk mencerna makanan di luar tubuh mereka dan kemudian menyerap molekul nutrisi ke dalam sel-selnya.
                    Kata  jamur berasal dari kata latin yakni fungi.  Jamur (fungi) bereproduksi secara aseksual yang menghasilkan spora, kuncup, dan fragmentasi. 
                    Sedangkan dengan cara seksual pada zigospora, askospora, dan basidiospora. Jamur (fungi) hidup di tempat-tempat yang lembap, air laut, air tawar, 
                    tempat yang asam dan bersimbosis dengan ganggang hingga kemudian membentuk lumut (lichenes). Menurut Gandjar (2006) jamur atau fungi adalah sel 
                    eukariotik yang tidak memiliki klorofil, tumbuh sebagai hifa, memiliki dinding sel yang mengandung kitin, bersifat heterotrof, menyerap nutrien
                    melalui dinding selnya, mengekskresikan enzim ekstraselular ke lingkungan melalui spora, dan melakukan reproduksi secara seksual dan aseksual. 
                    Sementara menurut Campbell (2003) Fungi adalah eukariota, dan sebagian besarnya merupakan eukariota multiseluler. Meskipun fungi pernah dikelompokkan 
                    ke dalam kingdom tumbuhan, fungi adalah organisme unik yang umumnya berbeda dari eukariota lainnya ditinjau dari caranya memperoleh makanan, organisasi 
                    struktural, pertumbuhan dan cara bereproduksi.
                </p>
            </div>

            <div className="mb-4">
                <h4>Ciri-ciri Umum Fungi</h4>
                <ul>
                    <li>Fungi bersifat eukariotik, yaitu memiliki inti sel yang terbungkus membran.</li>
                    <li>Fungi tidak memiliki klorofil sehingga tidak dapat melakukan fotosintesis (heterotrof).</li>
                    <li>Memiliki dinding sel yang terbuat dari kitin, bukan selulosa seperti pada tumbuhan.</li>
                    <li>Umumnya hidup sebagai saprofit (menguraikan bahan organik mati) atau parasit.</li>
                    <li>Reproduksi dapat berlangsung secara seksual dan aseksual dengan membentuk spora.</li>
                    <li>Hifa merupakan struktur dasar fungi, yang dapat bersekat (septat) atau tidak bersekat (aseptat).</li>
                    <li>Mampu mencerna makanan di luar tubuh melalui sekresi enzim ekstraseluler.</li>
                    <li>Dapat hidup di berbagai lingkungan, termasuk di tanah, air, dan sebagai parasit pada makhluk hidup lain.</li>
                </ul>
            </div>

            <div className="row">
                <div className="fungi-card-wrapper">
                    <div className="card-container">
                        <Link to="/zygomycota" className="text-decoration-none">
                        <div className="card h-100 shadow-sm fungi-card">
                            <img src={zygomta1} className="card-img-top" alt="Zygomycota" />
                            <div className="card-body">
                                <h5 className="card-title">Zygomycota</h5>
                                <p className="card-text">
                                    Zygomycota membentuk spora istirahat berdinding tebal yang disebut zigospora. Memiliki hifa tidak bersekat dan menghasilkan zigospora sebagai spora seksual.
                                </p>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="fungi-card-wrapper">
                    <div className="card-container">
                        <Link to="/ascomycota" className="card-img-top" alt="Ascomycota">
                        <div className="card h-100 shadow-sm fungi-card">
                            <img src={ascomycota} className="card-img-top" alt="Ascomycota" />
                            <div className="card-body">
                                <h5 className="card-title">Ascomycota</h5>
                                <p className="card-text">
                                    Ascomycota dikenal sebagai jamur kantung, menghasilkan askospora dalam askus. Hifanya bersekat dengan inti tunggal.
                                </p>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="fungi-card-wrapper">
                    <div className="card-container">
                        <Link to="/basidiomycota" className="card-img-top" alt="Basidiomycota">
                        <div className="card h-100 shadow-sm fungi-card">
                            <img src={basidiomycota} className="card-img-top" alt="Basidiomycota" />
                            <div className="card-body">
                                <h5 className="card-title">Basidiomycota</h5>
                                <p className="card-text">
                                    Basidiomycota memiliki bentuk seperti payung dan bereproduksi dengan membentuk spora pada basidium.
                                </p>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="fungi-card-wrapper">
                    <div className="card-container">
                        <Link to="/deuteromycota" className='card-img-top' alt="Deuteromycota">
                        <div className="card h-100 shadow-sm fungi-card">
                            <img src={deuteromycota} className="card-img-top" alt="Deuteromycota" />
                            <div className="card-body">
                                <h5 className="card-title">Deuteromycota</h5>
                                <p className="card-text">
                                    Deuteromycota (jamur tidak sempurna) adalah kelompok fungi yang belum diketahui cara reproduksi seksualnya.
                                </p>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="mb-3">
                <h4>Struktur Tubuh Fungi</h4>
                <div className="struktur-fungi">
                <img src={StrukturFungi} className/>
                <ul>
                    <li>Pada dasarnya, struktur jamur terbentuk dari komponen disebut hifa. Hifa sendiri adalah struktur menyerupai benang halus yang tersusun dari dinding berbentuk pipa. Dinding ini menyelubungi membran plasma dan sitoplasma hifa yang mengandung organel eukariotik. Kebanyakan hifa jamur dibatasi oleh dinding melintang atau septa.
                    Septa pada jamur memiliki pori besar yang cukup untuk dilewati ribosom, mitokondria, dan inti sel yang mengalir dari sel ke sel. Namun, ada pula hifa jamur yang tidak bersepta atau hifa senositik. Secara umum, struktur jamur hifa senositik dihasilkan oleh pembelahan inti sel berkali-kali yang tidak diikuti dengan pembelahan sitoplasma.
                    </li>
                </ul>
            </div>
            </div>

            </div>
        </div>
    );
};

export default Fungi;
