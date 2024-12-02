import React from "react";
import '../../styles/strukturv.css';

function BentukV() {
    return (
        <div className="struktur-container"> 
            <h1>Bentuk Virus</h1>
            <h5>Virus adalah partikel infeksius yang sangat kecil dan tidak memiliki struktur seluler. 
                Mereka hanya dapat berkembang biak di dalam sel inang yang hidup. 
                Bentuk virus sangat bervariasi dan bergantung pada struktur penyusunnya. </h5><br></br>

            <h3>Struktur Dasar Virus</h3>
            <h5>Virus terdiri dari tiga komponen utama : </h5>
            <ul>
                <li>Asam nukleat</li>
                <p>Materi genetik yang dapat berupa DNA atau RNA, tetapi tidak pernah keduanya. Ini bisa beruntai tunggal (single-stranded) atau ganda (double-stranded).</p>
                <li>Kapsid</li>
                <p>Selubung protein yang melindungi asam nukleat. Kapsid tersusun atas subunit protein yang disebut kapsomer.</p>
                <li>Seubung lipid (opsional)</li>
                <p>Beberapa virus memiliki lapisan tambahan yang berasal dari membran sel inang, disebut envelope. Virus tanpa envelope disebut virus telanjang (naked virus).</p>
            </ul>

            <h5>Berikut ini gambar beberapa bentuk Virus</h5>
            <div className="image-container">
            <img className="image"
            src="./images/Virus2.jpg"/>
            </div>

            <div>
            <h5>Bentuk Virus diklasifikasikan berdasarkan struktur kapsaidnya yaitu :</h5>
            <ul>
                <li>Helikal</li>
                <p>Asam nukleat berbentuk seperti spiral yang dikelilingi oleh kapsid berbentuk heliks. Memungkinkan kapsid membungkus erat asam nukleat, cocok untuk RNA panjang.
                   Contohnya virus mozaik tembakau (TMV) dan virus influenza. </p>
                <li>Ikosahedral</li>
                <p>Memiliki simetri yang menyerupai bentuk bola atau poliedron dengan 20 sisi. Stabil dan efisien untuk melindungi asam nukleat dengan volume maksimal dan kapsomer minimal.
                   Contohnya Adenovirus dan virus polio.</p>
                <li>Kompleks</li>
                <p>Memiliki struktur yang lebih rumit, tidak hanya helikal atau ikosahedral. Digunakan oleh virus yang menyerang bakteri (Bakteriofag), dirancang untuk menyuntikkan asam nukleat ke dalam sel inang.
                   Contohnya bakteriofag, yang memiliki kepala ikosahedral dan ekor helikal.</p>
                <li>Bentuk lain (pleomorfik)</li>
                <p>Bentuk tidak teratur atau berubah-ubah, sering ditemukan pada virus dengan envelope.
                   Contohnya virus rabies (berbentuk peluru) dan virus cacar.</p>
            </ul>
            </div>

            <h3>Variasi berdasarkan selubung</h3>
            <ul>
                <li>Virus ber-envelope</li>
                <p>Memiliki lapisan lipid tambahan yang berasal dari membran sel inang.
                Contohnya virus HIV, virus influenza.</p>
                <li>Virus telanjang (non-envelope)</li>
                <p>Tidak memiliki lapisan lipid, sehingga lebih tahan terhadap kondisi lingkungan.
                   Contoh: Virus norovirus dan adenovirus.</p>
                <h5>Dengan struktur yang unik ini, virus mampu menginfeksi berbagai jenis organisme, mulai dari bakteri, tumbuhan, hingga hewan. 
                   Namun, mereka tidak dapat dianggap sebagai makhluk hidup karena tidak memiliki kemampuan untuk bereproduksi sendiri tanpa bantuan sel inang.</h5>
            </ul>
        </div>
    );
}

export default BentukV;