import React from "react";
import './Virus.css'

function Virus() {
  const timeline = [
    { year: "1886", event: "Adolf Mayer menemukan penyakit tanaman tembakau." },
    { year: "1892", event: "Dmitri Ivanovsky menemukan patogen yang lebih kecil dari bakteri." },
    { year: "1898", event: "Martinus Beijerinck menyebut agen ini sebagai 'virus'." },
    { year: "1901", event: "Penemuan virus demam kuning pada manusia oleh Walter Reed." },
    { year: "1911", event: "Peyton Rous menemukan virus penyebab kanker pada ayam." },
    { year: "1931", event: "Pengembangan mikroskop elektron oleh Ernst Ruska." },
    { year: "1955", event: "Vaksin polio pertama oleh Jonas Salk." },
    { year: "1980", event: "WHO menyatakan cacar berhasil diberantas." },
    { year: "2019", event: "Pandemi COVID-19 oleh SARS-CoV-2." },
  ];

  return (
    <div className="sejarah-virus">
        <h2>Sejarah Perkembangan Virus</h2>
        <div className="item-container">
            <img src="/images/Virus0.jpg" className="item-image"/>
        </div>

        <h5>Istilah virus berasal dari bahasa Latin, virion yang artinya racun. 
        Sejarah penemuan virus dimulai pada tahun 1883 dengan ditemukannya penyakit yang menyebabkan adanya bintik-bintik kuning pada daun tembakau. 
        Penyakit tersebut kemudian dikenal dengan istilah penyakit mosaik tembakau.
        Beberapa ilmuwan yang terlibat dalam penemuan virus adalah sebagai berikut :</h5>
        <h6>A.Adolf Meyer.</h6>
        <p>Pada tahun 1883, Adolf Meyer, seorang ilmuwan Jerman mengamati penyakit yang menyebabkan adanya bintik-bintik kuning pada daun tembakau. Meyer kemudian melakukan percobaan dengan menyemprotkan getah yang diekstraksi dari tanaman tembakau yang sakit ke tanaman tembakau yang sehat. 
        Ternyata, tanaman tembakau yang sehat menjadi sakit. Meyer kemudian mencoba mengamati daun tembakau yang sakit dengan menggunakan mikroskop biasa. Akan tetapi, ia tidak dapat menemukan bakteri yang diduga menjadi penyebab penyakit tersebut. 
        Meyer kemudian menyimpulkan bahwa bakteri penyebab penyakit pada tanaman tembakau berukuran lebih kecil dari bakteri biasanya.</p>
        <h6>B.Dmitri Ivanovsky.</h6>
        <p>Pada tahun 1892, Dmitri Ivanovsky, seorang ilmuwan Rusia melakukan percobaan dengan menyaring getah tanaman tembakau yang sakit dengan menggunakan saringan bakteri. Selanjutnya, hasil saringan tersebut ditularkan pada tanaman tembakau yang sehat. Ternyata, tanaman tembakau yang sehat tersebut menjadi sakit. 
        Ivanovsky kemudian menyimpulkan bahwa penyebab penyakit pada tanaman tembakau adalah bakteri patogenik yang sangat kecil atau bakteri penghasil toksin yang dapat melewati saringan.</p>
        <h6>C.Martinus Beijerinck.</h6>
        <p>Pada tahun 1897, Martinus Beijerinck, seorang ilmuwan Belanda melakukan percobaan untuk membuktikan bahwa agen penyebab penyakit pada tanaman tembakau dapat berkembang biak. Beijerinck menyemprotkan getah tanaman yang sudah disaring ke tanaman yang sehat. Setelah tanaman yang sehat menjadi sakit, getah tanaman tersebut digunakan untuk menginfeksi tanaman berikutnya, dan seterusnya hingga beberapa kali pemindahan. Ternyata, melalui beberapa kali pemindahan, sifat patogennya tidak berkurang. Agen tersebut juga berbeda dengan bakteri, karena tidak dapat dikembangbiakkan di dalam cawan petri yang berisi nutrisi. Selain itu, juga tidak dapat dinonaktifkan menggunakan alkohol. Beijerinck kemudian menyimpulkan bahwa agen tersebut adalah partikel yang lebih kecil danlebih sederhana dari bakteri. Beijerinck kemudian menyebutnya sebagai virus lolos saring (filterable virus).</p>
        <h6>D.Wendell Meredith Stanley.</h6>
        <p>Pada tahun 1935, Wendell Meredith Stanley, seorang ilmuwan Amerika berhasil mengkristalkan partikel penyebab penyakit pada tanaman tembakau. Penyakit ini kemudian dikenal dengan nama Tobacco Mosaic Virus (TMV).</p>
    </div>

  );
};


export default Virus;
