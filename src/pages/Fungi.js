import React from 'react';
import zygomta1 from '../assets/images/zygomta1.jpg';
import ascomycota from '../assets/images/ascomycota.jpeg';

const Fungi = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Fungi</h2>
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
            </div>
        </div>
    );
};

export default Fungi;
