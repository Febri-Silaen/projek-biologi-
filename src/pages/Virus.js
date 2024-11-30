import React from "react";
import { Link } from "react-router-dom";
import './Virus.css';

function Virus() {
  return (
    <div className="card-wrapper">
      
      <div className="hero-section2">
        <div className="container">
          <h1 className="display-4">Virus</h1>
          <p className="judul">Memahami Defenisi dan jenis jenis virus</p>
        </div>
      </div>

      <div className="des">
      <p className="text-description">
          Virus adalah salah satu makhluk mikroskopis paling menarik di dunia. Mereka bukan hanya ancaman, 
          tapi juga kunci untuk memahami biologi dan inovasi teknologi. Temukan cerita di balik virus di sini!
        </p></div>

        <div className="del1">
        <h2 className="isi1">Sejarah Virus</h2>
        <h6>Istilah virus berasal dari bahasa Latin,virion yang artinya racun. Sejarah penemuan virus dimulai pada tahun 1883 dengan 
          ditemukannya penyakit yang menyebabkan adanya bintik-bintik kuning pada daun tembakau. 
          Penyakit tersebut kemudian dikenal dengan istilah penyakit mosaik tembakau. Beberapa ilmuwan yang terlibat dalam penemuan virus adalah sebagai berikut :</h6>
        <p><strong>a. Adolf Meyer.</strong>  Pada tahun 1883, Adolf Meyer, seorang ilmuwan Jerman mengamati penyakit yang menyebabkan adanya bintik-bintik kuning pada daun tembakau. Meyer kemudian melakukan percobaan dengan menyemprotkan getah yang diekstraksi dari tanaman tembakau yang sakit ke tanaman tembakau yang sehat. 
        Ternyata, tanaman tembakau yang sehat menjadi sakit. Meyer kemudian mencoba mengamati daun tembakau yang sakit dengan menggunakan mikroskop biasa. Akan tetapi, ia tidak dapat menemukan bakteri yang diduga menjadi penyebab penyakit tersebut. Meyer kemudian menyimpulkan bahwa bakteri penyebab penyakit pada tanaman tembakau berukuran lebih kecil dari bakteri biasanya. </p>
        <p><strong>b. Dmitri Ivanovsky.</strong>  Pada tahun 1892, Dmitri Ivanovsky, seorang ilmuwan Rusia melakukan percobaan dengan menyaring getah tanaman tembakau yang sakit dengan menggunakan saringan bakteri. 
        Selanjutnya, hasil saringan tersebut ditularkan pada tanaman tembakau yang sehat. Ternyata, tanaman tembakau yang sehat tersebut menjadi sakit. Ivanovsky kemudian menyimpulkan bahwa penyebab penyakit pada tanaman tembakau adalah bakteri patogenik yang sangat kecil atau bakteri penghasil toksin yang dapat melewati saringan. </p>
        <p><strong>c. Martinus Beijerinck.</strong> Pada tahun 1897, Martinus Beijerinck, seorang ilmuwan Belanda melakukan percobaan untuk membuktikan bahwa agen penyebab penyakit pada tanaman tembakau dapat berkembang biak. 
        Beijerinck menyemprotkan getah tanaman yang sudah disaring ke tanaman yang sehat. Setelah tanaman yang sehat menjadi sakit, getah tanaman tersebut digunakan untuk menginfeksi tanaman berikutnya, dan seterusnya hingga beberapa kali pemindahan. Ternyata, melalui beberapa kali pemindahan, sifat patogennya tidak berkurang. 
        Agen tersebut juga berbeda dengan bakteri, karena tidak dapat dikembangbiakkan di dalam cawan petri yang berisi nutrisi. Selain itu, juga tidak dapat dinonaktifkan menggunakan alkohol. 
        Beijerinck kemudian menyimpulkan bahwa agen tersebut adalah partikel yang lebih kecil danlebih sederhana dari bakteri. Beijerinck kemudian menyebutnya sebagai virus lolos saring (filterable virus). </p>
        <p><strong>d. Wendell Meredith Stanley.</strong> Pada tahun 1935, Wendell Meredith Stanley, seorang ilmuwan Amerika berhasil mengkristalkan partikel penyebab penyakit pada tanaman tembakau. Penyakit ini kemudian dikenal dengan nama Tobacco Mosaic Virus (TMV).</p>
      </div>  


      <div className="card-container">
        <img src="./images/Virus1.jpeg" alt="Virus" className="card-img" />
        <h1 className="card-title">Struktur Virus</h1>
        <p className="card-description">Ketahui Struktur dari pengetahuan tentang virus.</p>
        <Link to="/StrukturV" className="card-btn">Learn More</Link>
      </div>

      <div className="card-container">
        <img src="./images/Virus2.jpg" alt="Virus" className="card-img" />
        <h1 className="card-title"> Bentuk Virus</h1>
        <p className="card-description">Ketahui bentuk dari pengetahuan tentang virus.</p>
        <Link to="/BentukV" className="card-btn">Learn More</Link>
      </div>

      <div className="card-container">
        <img src="./images/Virus3.jpg" alt="Virus" className="card-img" />
        <h1 className="card-title">Replikasi Virus</h1>
        <p className="card-description">Ketahui Replikasi dari pengetahuan tentang virus.</p>
        <Link to="/ReplikasiV" className="card-btn">Learn More</Link>
      </div>

      <div className="card-container">
        <img src="./images/Virus4.jpeg" alt="Virus" className="card-img" />
        <h1 className="card-title">Penyakit & Pencegahan Virus</h1>
        <p className="card-description">Ketahui Penyakit serta Pencegahan dari Virus.</p>
        <Link to="/PenyakitV" className="card-btn">Learn More</Link>
      </div>


    </div>
  );
}

export default Virus;
