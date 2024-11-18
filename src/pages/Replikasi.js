import React from "react";

const Replikasi = () => {
    return (
        <div>
            <h1>Replikasi Virus </h1>
            <img src ="./images/Virus3.jpg"/>
            <h5>Proses perkembangbiakan virus ada dua macam, yaitu daur litik dan daur lisogenik. </h5>
            <h4>1. Daur Litik </h4>
            <p>Daur litik terjadi jika pertahanan sel inang lebih lemah dibandingkan dengan daya infeksi virus. Virus yang mampu bereproduksi dengan daur litik disebut virus virulen. 
               Pada daur litik, sel inang akan pecah dan mati, serta akan terbentuk virion-virion baru. Seluruh tahapan dalam daur litik berlangsung dengan cepat. Tahapan-tahapan tersebut adalah adsorpsi, penetrasi, sintesis dan replikasi, pematangan (perakitan), serta lisis. </p>
            <h6>a. Adsorpsi </h6>
            <p>Virion menempel pada reseptor spesifik sel inang dengan menggunakan bagian serabut ekornya. Molekul reseptor ini berbeda-beda untuk setiap jenis virus, ada yang berupa protein dan ada yang berupa oligosakarida. Ada tidaknya reseptor juga menentukan patogenesis virus, yaitu mekanisme infeksi dan perkembangan penyakit oleh virus. Sebagai contoh, virus polio hanya dapat melekat pada sel saraf pusat dan saluran usus primata, virus HIV hanya berikatan dengan reseptor T CD4 pada sel sistem imun, atau virus rabies yang hanya berinteraksi dengan reseptor asetilkolin. </p>
            <h6>b. Penetrasi </h6>
            <p>Ujung serabut ekor membuat lubang untuk menembus dinding dan membran sel inang. Selanjutnya, virus menginjeksikan materi genetiknya sehingga kapsid virus menjadi kosong (mati).</p>
            <h6>c. Sintesis dan replikasi</h6>
            <p>DNA virus menghidrolisis dan mengendalikan materi genetik sel inang untuk membuat asam nukleat (salinan genom) dan protein komponen virus. 
               Selanjutnya berlangsung tahap replikasi, yaitu pembentukan bagian-bagian tubuh virus yang baru. </p>
            <h6>d. Pematangan atau perakitan </h6>
            <p>Asam nukleat dan protein hasil sintesis dan replikasi dirakit menjadi partikel partikel virus yang lengkap sehingga terbentuk virion-virion baru. </p>
            <h6>e. Lisis </h6>
            <p>Virus menghasilkan enzim lisozim, yaitu enzim yang dapat merusak dinding sel inang. Dinding sel yang rusak mengakibatkan terjadinya osmosis, sehingga sel inang membesar dan akhirnya pecah. 
               Partikel virus yang baru akan keluar dari sel inang dan menyerang sel inang yang lain.</p><br></br>


            <h4>2. Daur Lisogenik </h4>
            <p>Daur lisogenik terjadi jika pertahanan sel inang lebih baik dibandingkan dengan daya infeksi virus. Sel inang pada daur ini tidak segera pecah, bahkan dapat bereproduksi secara normal. Pada daur lisogenik, replikasi genom virus tidak menghancurkan sel inangnya. DNA virus bakteriofag akan berinteraksi dengan kromosom sel inang membentuk profag. 
                Jika sel inang yang mengandung profag membelah diri untuk bereproduksi, profag akan diwariskan kepada sel-sel anakannya. Profag di dalam sel anakan dapat aktif dan keluar dari kromosom sel inang untuk masuk ke dalam tahapan-tahapan daur litik. Virus yang dapat bereproduksi dengan daur litik dan lisogenik disebut virus temperat, misalnya fag λ.</p>
            <p>Tahapan-tahapan dalam daur lisogenik adalah adsorpsi dan infeksi, penetrasi, penggabungan, pembelahan, serta sintesis.</p>
            <h6>a. Adsorpsi </h6>
            <p>Virion menempel pada reseptor spesifik sel inang dengan menggunakan bagian serabut ekornya. </p>
            <h6>b. Penetrasi </h6>
            <p>Virus menginjeksikan materi genetiknya ke dalam sel inang sehingga kapsid virus menjadi kosong (mati). </p>
            <h6>c. Penggabungan </h6>
            <p>DNA virus bakteriofag bergabung dengan DNA bakteri (sel inang) membentuk profag. Dalam bentuk profag, sebagian besar gen berada dalam fase tidak aktif, tetapi ada sedikitnya satu gen yang selalu aktif. Gen aktif berfungsi mengkode protein reseptor. 
               Protein reseptor berfungsi menjaga agar gen-gen profag tidak aktif.</p>
            <h6>d. Pembelahan </h6>
            <p>Jika sel inang membelah, setiap anakannya akan mewarisi profag. Profag dapat diinduksi menjadi aktif, sehingga mengakibatkan terjadinya daur litik. </p>
            <h6>e. Sintesis </h6>
            <p>Profag aktif dan keluar dari kromosom bakteri, sehingga DNA bakteri (sel inang) hancur. Kemudian, terjadi fase replikasi DNA bakteriofag, sintesis bagian-bagian tubuh virus, dan seterusnya seperti pada daur litik.</p><br></br>
        </div>
    );
};

export default Replikasi;