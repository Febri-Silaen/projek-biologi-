import React from 'react';
import zygomta1 from '../assets/images/zygomta1.jpg';
import ascomycota from '../assets/images/ascomycota.jpeg';

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
            </p>
        </div>

        <div className="mb-5">
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
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm">
                        <img src={zygomta1} className="card-img-top" alt="Zygomta" />
                        <div className="card-body">
                            <h5 className="card-title">Zygomycota </h5>
                            <p className="card-text">
                                <strong>Deskripsi:</strong> Fungi ini dinamakan sebagai fungi Zygomycota karena fungi ini membentuk spora istirahat berdinding tebal yang disebut dengan zigospora. Fungi Zygomycota merupakan fungi yang memiliki hifa tidak bersekat dan menghasilkan zigospora sebagai spora seksual. 
                            </p>
                            <p className="text-muted">Habitat: Zygomycota tinggal dan berhabitat di darat, tanah, makanan membusuk ataupun pada sisa organisme mati.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm">
                        <img src={ascomycota} className="card-img-top" alt="Jamur Tiram" />
                        <div className="card-body">
                            <h5 className="card-title">Ascomycota</h5>
                            <p className="card-text">
                                <strong>Deskripsi:</strong> Ascomycota adalah kelompok fungi yang hifanya bersekat, sehingga di tiap sel hifanya berinti satu. Ascomycota Dikenal sebagai jamur kantung, menghasilkan askospora dalam struktur khusus yang disebut askus. 
                            </p>
                            <p className="text-muted">Habitat: Ascomycota tinggal dan hidup di dalam tanah (hypogean) dan juga hidup pada sisa-sisa binatang (coprofil),</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card-container">
                        <div className="card h-100 shadow-sm fungi-card">
                            <img src={basidiomycota} className="card-img-top" alt="Basidiomycota" />
                            <div className="card-body">
                                <h5 className="card-title">Basidiomycota</h5>
                                <p className="card-text">
                                    <strong>Deskripsi</strong>Basidiomycota memiliki bentuk seperti payung dan bereproduksi dengan membentuk spora pada basidium.
                                </p>
                                <p className="text-muted">Habitat: Kebanyakan basidiomycota bersifat terestrial dengan spora yang tersebar melalui angin, tetapi beberapa tumbuh di habitat air tawar atau laut.,</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card-container">
                        <div className="card h-100 shadow-sm fungi-card">
                            <img src={deuteromycota} className="card-img-top" alt="Deuteromycota" />
                            <div className="card-body">
                                <h5 className="card-title">Deuteromycota</h5>
                                <p className="card-text">
                                    <strong>Deskripsi</strong>Deuteromycota atau jamur tidak sempurna adalah kelompok fungi yang belum diketahui cara reproduksi seksualnya.
                                </p>
                                <p className="text-muted">Habitat: Jamur Deuteromycota adalah kelompok jamur beragam yang dapat ditemukan di berbagai habitat termasuk tanah, air, dan tanaman.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fungi;
