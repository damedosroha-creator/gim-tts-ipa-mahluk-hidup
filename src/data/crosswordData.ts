/**
 * Bank Soal Teka-Teki Silang (TTS) Petualangan Cerdas IPA
 * SD TERAMIA - Kelas 6 SD
 * 5 Level x 2 Tim (Tim Merah & Tim Putih) x 10 Pertanyaan = 100 Pertanyaan TTS Lengkap
 * Setiap kisi terverifikasi 100% interlocking tanpa konflik huruf perpotongan.
 */

import { LevelData } from '../types/game';

export const GAME_LEVELS: LevelData[] = [
  {
    "id": 1,
    "title": "LEVEL 1 – ADAPTASI MAKHLUK HIDUP",
    "subtitle": "Ciri Khusus Hewan & Tumbuhan Bertahan Hidup",
    "theme": "Morfologi, Fisiologi, dan Tingkah Laku",
    "description": "Jelajahi keajaiban bentuk paruh elang, punuk unta, duri kaktus, hingga kemampuan mimikri bunglon di habitat aslinya.",
    "iconName": "Sparkles",
    "merahClues": [
      {
        "id": "1A",
        "number": 1,
        "direction": "across",
        "answer": "PUNUK",
        "clue": "Bagian punggung unta untuk menyimpan cadangan lemak energi di habitat gurun.",
        "explanation": "Punuk unta berisi jaringan lemak yang dapat diubah menjadi energi dan air saat melakukan perjalanan melintasi padang pasir yang gersang.",
        "phenomenon": "Unta sanggup melintasi gurun pasir panas selama berminggu-minggu tanpa makan karena memanfaatkan lemak di punuknya.",
        "row": 8,
        "col": 15
      },
      {
        "id": "2D",
        "number": 2,
        "direction": "down",
        "answer": "PARUH",
        "clue": "Bentuk moncong keras pada burung pemakan daging yang tajam dan melengkung.",
        "explanation": "Bentuk paruh melengkung dan kokoh berfungsi mengoyak daging mangsa seperti yang dimiliki burung elang dan rajawali.",
        "phenomenon": "Burung elang menyambar ikan lalu mencabik mangsanya dengan paruh bengkok yang sangat kuat.",
        "row": 8,
        "col": 15
      },
      {
        "id": "3A",
        "number": 3,
        "direction": "across",
        "answer": "KAKTUS",
        "clue": "Tumbuhan gurun berduri dengan batang tebal berlapis lilin penyimpan air.",
        "explanation": "Batang kaktus tersusun atas jaringan spons tebal yang menyerap dan mengunci air hujan, sementara lapisan lilin mencegah penguapan.",
        "phenomenon": "Di gurun pasir yang tidak pernah hujan berbulan-bulan, batang kaktus tetap montok dan menyimpan cadangan air berlimpah.",
        "row": 9,
        "col": 14
      },
      {
        "id": "4D",
        "number": 4,
        "direction": "down",
        "answer": "MIMIKRI",
        "clue": "Kemampuan bunglon mengubah warna kulit sesuai dengan lingkungan sekitarnya.",
        "explanation": "Bunglon mengatur sel kromatofora di kulitnya agar selaras dengan warna dahan atau daun untuk bersembunyi dari predator.",
        "phenomenon": "Bunglon yang semula berwarna hijau di dedaunan perlahan berubah cokelat saat merayap ke batang pohon tua.",
        "row": 5,
        "col": 14
      },
      {
        "id": "5A",
        "number": 5,
        "direction": "across",
        "answer": "TERATAI",
        "clue": "Tumbuhan air berdaun lebar tipis untuk mempercepat penguapan air.",
        "explanation": "Daun teratai yang lebar dan tipis memaksimalkan penyerapan sinar matahari dan mempercepat proses transpirasi (penguapan air).",
        "phenomenon": "Daun teratai mengapung tenang di permukaan kolam dan tidak membusuk berkat lapisan pembersih alami pada daunnya.",
        "row": 6,
        "col": 8
      },
      {
        "id": "6D",
        "number": 6,
        "direction": "down",
        "answer": "SELAPUT",
        "clue": "Lapisan tipis di antara jari kaki bebek yang berfungsi mendayung saat berenang.",
        "explanation": "Kaki berselaput memperluas bidang dorong di air sehingga bebek dapat meluncur cepat dan tidak terbenam di lumpur sawah.",
        "phenomenon": "Bebek berjalan santai di atas lumpur basah yang licin tanpa terperosok berkat kakinya yang berselaput.",
        "row": 0,
        "col": 8
      },
      {
        "id": "7A",
        "number": 7,
        "direction": "across",
        "answer": "INSANG",
        "clue": "Alat pernapasan utama pada ikan untuk menyerap oksigen di dalam air.",
        "explanation": "Lembaran insang yang kemerahan penuh dengan kapiler darah untuk pertukaran gas oksigen dan karbon dioksida di dalam air.",
        "phenomenon": "Ikan terus membuka mulut dan menggerakkan operkulum agar air segar yang mengandung oksigen mengalir ke insangnya.",
        "row": 0,
        "col": 6
      },
      {
        "id": "8D",
        "number": 8,
        "direction": "down",
        "answer": "AUTOTOMI",
        "clue": "Perilaku cicak memutuskan ekornya saat merasa terancam bahaya.",
        "explanation": "Ekor yang terlepas terus menggeliat di tanah untuk mengecoh perhatian predator sementara cicak melarikan diri ke celah aman.",
        "phenomenon": "Ketika kucing berusaha menangkap cicak di dinding, ekor cicak tiba-tiba putus dan bergerak sendiri di lantai.",
        "row": 6,
        "col": 11
      },
      {
        "id": "9A",
        "number": 9,
        "direction": "across",
        "answer": "NOKTURNAL",
        "clue": "Sifat hewan yang aktif mencari makan pada malam hari seperti kelelawar.",
        "explanation": "Hewan nokturnal memiliki mata berlensa peka cahaya atau pendengaran ultrasonik untuk berburu mangsa di kegelapan.",
        "phenomenon": "Burung hantu dan kelelawar tidur sepanjang siang dan mulai terbang berburu serangga segera setelah senja tiba.",
        "row": 2,
        "col": 0
      },
      {
        "id": "10D",
        "number": 10,
        "direction": "down",
        "answer": "EKOLOKASI",
        "clue": "Kemampuan kelelawar mendeteksi mangsa menggunakan pantulan gelombang bunyi.",
        "explanation": "Kelelawar mengeluarkan gelombang ultrasonik lewat mulut atau hidung, lalu mendengarkan gema pantulannya untuk navigasi.",
        "phenomenon": "Di dalam gua yang gelap gulita, kelelawar terbang gesit tanpa pernah menabrak dinding batu berkat pantulan gelombang suaranya.",
        "row": 6,
        "col": 9
      }
    ],
    "putihClues": [
      {
        "id": "1A",
        "number": 1,
        "direction": "across",
        "answer": "BUNGLON",
        "clue": "Reptil pemanjat ranting yang lidahnya panjang lengket dan matanya dapat berputar ke dua arah.",
        "explanation": "Mata bunglon bergerak secara independen 360 derajat sehingga ia dapat mengintai serangga tanpa menggerakkan badannya.",
        "phenomenon": "Bunglon mengincar jangkrik dari kejauhan lalu menyemburkan lidahnya secepat kilat untuk menangkap mangsa.",
        "row": 3,
        "col": 2
      },
      {
        "id": "2D",
        "number": 2,
        "direction": "down",
        "answer": "KELELAWAR",
        "clue": "Satu-satunya kelompok mamalia yang memiliki selaput sayap dan dapat terbang.",
        "explanation": "Sayap kelelawar berupa selaput kulit patagium yang membentang di antara jari-jari tangannya yang panjang.",
        "phenomenon": "Rombongan kelelawar keluar bersamaan dari liang gua saat matahari terbenam untuk mencari buah dan serangga.",
        "row": 1,
        "col": 6
      },
      {
        "id": "3A",
        "number": 3,
        "direction": "across",
        "answer": "BERUANG",
        "clue": "Mamalia kutub dengan lapisan lemak tebal dan rambut putih lebat penghangat tubuh.",
        "explanation": "Bulu beruang kutub transparan dan berongga untuk memerangkap panas matahari, sementara kulit hitam di bawahnya menyerap panas.",
        "phenomenon": "Beruang kutub melompat menyelam ke dalam air laut es yang dingin membeku tanpa mengalami hipotermia.",
        "row": 2,
        "col": 5
      },
      {
        "id": "4D",
        "number": 4,
        "direction": "down",
        "answer": "CUMI",
        "clue": "Hewan lunak laut yang menyemburkan tinta hitam pekat untuk mengelabui pemangsa.",
        "explanation": "Tinta hitam cumi-cumi mengandung pigmen melanin yang membingungkan indra penglihatan dan penciuman musuh.",
        "phenomenon": "Saat diserang hiu kecil, cumi-cumi melepaskan gumpalan awan hitam pekat lalu meluncur mundur dengan cepat.",
        "row": 2,
        "col": 3
      },
      {
        "id": "5A",
        "number": 5,
        "direction": "across",
        "answer": "PENGUIN",
        "clue": "Burung kutub selatan yang sayapnya berubah menjadi sirip renang handal.",
        "explanation": "Penguin memiliki lapisan bulu lebat kedap air dan lapisan lemak subkutan tebal penahan angin dingin Antartika.",
        "phenomenon": "Di daratan es penguin berjalan lucu berbaris, namun di dalam air laut ia berenang lincah meliuk-liuk seperti torpedo.",
        "row": 4,
        "col": 5
      },
      {
        "id": "6D",
        "number": 6,
        "direction": "down",
        "answer": "KANTUNG",
        "clue": "Tumbuhan pemakan serangga memiliki daun berbentuk piala atau ... semar.",
        "explanation": "Kantung semar menangkap serangga di cairan enzim pencernaannya untuk memperoleh unsur nitrogen yang minim di tanah gambut.",
        "phenomenon": "Serangga yang terpikat aroma nektar manis di bibir tanaman kantung semar terpeleset ke dasar dan terurai menjadi nutrisi.",
        "row": 1,
        "col": 4
      },
      {
        "id": "7A",
        "number": 7,
        "direction": "across",
        "answer": "GURUN",
        "clue": "Lingkungan kering tandus bersuhu ekstrem tempat hidup kaktus dan unta.",
        "explanation": "Ekosistem gurun memiliki kelembapan udara sangat rendah sehingga organisme di dalamnya harus beradaptasi menghemat cairan.",
        "phenomenon": "Hanya tumbuhan berduri dan hewan bertubuh khusus yang sanggup bertahan hidup di tengah panas terik padang pasir gurun.",
        "row": 9,
        "col": 4
      },
      {
        "id": "8D",
        "number": 8,
        "direction": "down",
        "answer": "BAKAU",
        "clue": "Tumbuhan pantai berlumpur dengan akar tunjang kokoh penahan ombak laut.",
        "explanation": "Akar tunjang pohon bakau mencengkeram erat tanah lumpur pantai dan memiliki celah lentisel untuk bernapas saat pasang surut.",
        "phenomenon": "Desa tepi pantai tetap aman dari hantaman ombak besar karena terbentengi oleh lebatnya rumpun pohon bakau.",
        "row": 3,
        "col": 2
      },
      {
        "id": "9A",
        "number": 9,
        "direction": "across",
        "answer": "HIBERNASI",
        "clue": "Tidur panjang hewan di musim dingin untuk menghemat energi saat makanan langka.",
        "explanation": "Saat hibernasi, detak jantung dan frekuensi napas hewan melambat drastis sehingga cadangan lemak tubuh bertahan lama.",
        "phenomenon": "Tupai tanah dan beruang tidur berbulan-bulan di sarangnya yang hangat selama badai salju musim dingin melanda.",
        "row": 8,
        "col": 0
      },
      {
        "id": "10D",
        "number": 10,
        "direction": "down",
        "answer": "MORFOLOGI",
        "clue": "Bentuk adaptasi berupa penyesuaian bentuk luar tubuh makhluk hidup.",
        "explanation": "Adaptasi morfologi dapat dilihat langsung secara kasat mata, seperti bentuk cakar elang dan paruh bebek.",
        "phenomenon": "Kaki burung pelatuk berujung dua jari ke depan dan dua ke belakang memudahkan mencengkeram batang pohon tegak.",
        "row": 0,
        "col": 1
      }
    ],
    "challenge": {
      "id": "ch-1",
      "title": "Tantangan Penerapan: Adaptasi Ekstrem Gurun",
      "scenario": "Sebuah ekspedisi penelitian SD TERAMIA akan menjelajahi Gurun Sahara yang bersuhu 48°C pada siang hari dan sangat jarang terdapat sumber air.",
      "question": "Berdasarkan adaptasi morfologi dan fisiologi, hewan mana yang paling tepat dipilih untuk membawa perbekalan dan peralatan melintasi gurun tersebut?",
      "options": [
        {
          "id": "opt-1a",
          "label": "Unta Berpunuk (Camelus dromedarius)",
          "description": "Memiliki punuk lemak energi, telapak kaki lebar empuk, bulu mata lentik, dan urine sangat pekat.",
          "isCorrect": true,
          "explanation": "Sempurna! Unta memiliki adaptasi lengkap: punuk sebagai cadangan energi/air metabolik, kaki lebar agar tidak terperosok di pasir lunak, bulu mata lentik penangkal badai pasir, dan minim pengeluaran keringat."
        },
        {
          "id": "opt-1b",
          "label": "Kuda Balap (Equus caballus)",
          "description": "Berlari sangat cepat di padang rumput dan bertenaga besar.",
          "isCorrect": false,
          "explanation": "Kurang tepat. Kaki kuda yang berkuku kecil akan mudah terbenam ke dalam pasir halus dan kuda membutuhkan asupan air dalam jumlah banyak setiap hari sehingga cepat lelah di gurun pasir."
        },
        {
          "id": "opt-1c",
          "label": "Beruang Madu (Helarctos malayanus)",
          "description": "Memiliki cakar melengkung kuat dan bulu lebat hitam.",
          "isCorrect": false,
          "explanation": "Belum tepat. Beruang berbulu lebat hitam akan menyerap panas matahari ekstrem dan cepat mengalami dehidrasi karena tidak memiliki adaptasi penghematan air tubuh di padang gurun."
        }
      ]
    },
    "reflection": {
      "id": "ref-1",
      "question": "Refleksi Pembelajaran: Keagungan Adaptasi Makhluk Hidup",
      "prompt": "Setelah mempelajari ciri khusus hewan dan tumbuhan di Level 1, hikmah apa yang paling berkesan bagi kalian?",
      "options": [
        "Setiap makhluk hidup diciptakan Tuhan dengan keistimewaan tubuh yang sempurna untuk bertahan di habitatnya.",
        "Kita harus menjaga kelestarian habitat alami hewan dan tumbuhan agar ciri khusus mereka tidak punah.",
        "Manusia dapat meniru adaptasi makhluk hidup untuk menciptakan teknologi ramah lingkungan (biomimikri).",
        "Saya semakin termotivasi mengamati keunikan hewan dan tumbuhan di sekitar lingkungan sekolah dan rumah."
      ]
    }
  },
  {
    "id": 2,
    "title": "LEVEL 2 – PERKEMBANGBIAKAN TUMBUHAN",
    "subtitle": "Generatif & Vegetatif Alami Maupun Buatan",
    "theme": "Penyerbukan Bunga, Tunas, Umbi, Spora, dan Cangkok",
    "description": "Pelajari bagaimana tumbuhan berbunga diserbuki lebah serta kehebatan perkembangbiakan tunas, stek, dan okulasi.",
    "iconName": "Sprout",
    "merahClues": [
      {
        "id": "1A",
        "number": 1,
        "direction": "across",
        "answer": "TUNAS",
        "clue": "Anakan tumbuhan baru yang tumbuh dari pangkal batang induk seperti pada pohon pisang dan bambu.",
        "explanation": "Perkembangbiakan dengan tunas batang menghasilkan rumpun baru yang memiliki sifat sama persis dengan tanaman induk.",
        "phenomenon": "Di samping batang pohon pisang dewasa selalu muncul tunas-tunas muda kecil yang tumbuh menjadi rumpun baru.",
        "row": 11,
        "col": 4
      },
      {
        "id": "2D",
        "number": 2,
        "direction": "down",
        "answer": "GENERATIF",
        "clue": "Perkembangbiakan tumbuhan yang melibatkan peleburan sel kelamin jantan dan betina melalui penyerbukan.",
        "explanation": "Perkembangbiakan generatif menghasilkan biji yang mengandung perpaduan sifat genetik dari kedua tanaman induk.",
        "phenomenon": "Bunga mawar merah yang diserbuki dapat menghasilkan biji yang kemudian tumbuh menjadi tanaman mawar baru.",
        "row": 5,
        "col": 4
      },
      {
        "id": "3A",
        "number": 3,
        "direction": "across",
        "answer": "PUTIK",
        "clue": "Alat kelamin betina pada bunga yang terdiri atas kepala, tangkai, dan bakal buah.",
        "explanation": "Kepala putik mengandung cairan lengket untuk menangkap butir serbuk sari saat peristiwa penyerbukan berlangsung.",
        "phenomenon": "Serbuk sari yang menempel pada kepala putik akan menumbuhkan buluh serbuk sari menuju ke bakal biji.",
        "row": 12,
        "col": 1
      },
      {
        "id": "4D",
        "number": 4,
        "direction": "down",
        "answer": "CANGKOK",
        "clue": "Cara memperbanyak tanaman berkayu dengan mengupas kulit batang hingga tumbuh akar baru.",
        "explanation": "Mencangkok menghasilkan bibit tanaman yang cepat berbuah dan mewarisi kualitas manis dari tanaman induknya.",
        "phenomenon": "Petani membungkus dahan pohon mangga manis dengan tanah humus dan plastik sampai keluar akar-akar putih yang lebat.",
        "row": 9,
        "col": 6
      },
      {
        "id": "5A",
        "number": 5,
        "direction": "across",
        "answer": "STEK",
        "clue": "Metode vegetatif buatan dengan memotong bagian batang atau daun lalu menancapkannya ke tanah.",
        "explanation": "Stek batang sangat umum digunakan pada singkong dan tebu karena murah, cepat, dan mudah dipraktikkan.",
        "phenomenon": "Batang singkong yang dipotong miring lalu ditancapkan ke tanah gembur akan segera menumbuhkan tunas daun dan akar umbi.",
        "row": 6,
        "col": 2
      },
      {
        "id": "6D",
        "number": 6,
        "direction": "down",
        "answer": "SPORA",
        "clue": "Butiran sel perkembangbiakan mikroskopis pada bagian bawah daun tumbuhan paku.",
        "explanation": "Kotak spora (sporangium) yang sudah matang akan pecah dan spora berhamburan terbawa hembusan angin ke tempat lembap.",
        "phenomenon": "Pada permukaan bawah daun suplir tua terlihat bintik-bintik cokelat kehitaman yang berisi ribuan butir spora halus.",
        "row": 7,
        "col": 7
      },
      {
        "id": "7A",
        "number": 7,
        "direction": "across",
        "answer": "GERAGIH",
        "clue": "Batang mendatar yang menjalar di atas permukaan tanah dan beruas seperti pada tanaman stroberi.",
        "explanation": "Geragih atau stolon memiliki buku-buku batang yang bila menyentuh tanah gembur akan segera menumbuhkan akar dan tunas daun baru.",
        "phenomenon": "Tanaman stroberi di pot cepat merambat ke pot tetangga melalui sulur geragih panjang yang menumbuhkan anakan baru.",
        "row": 5,
        "col": 4
      },
      {
        "id": "8D",
        "number": 8,
        "direction": "down",
        "answer": "RIZOMA",
        "clue": "Batang yang tumbuh mendatar di dalam tanah menyerupai akar seperti pada jahe, kunyit, dan lengkuas.",
        "explanation": "Rizoma atau akar tinggal berbuku-buku dan beruas, memiliki mata tunas yang dapat tumbuh menjadi tanaman baru.",
        "phenomenon": "Ibu meletakkan rimpang jahe di dapur yang lembap, lalu beberapa hari kemudian muncul tunas hijau dari mata rimpangnya.",
        "row": 0,
        "col": 7
      },
      {
        "id": "9A",
        "number": 9,
        "direction": "across",
        "answer": "BUNGA",
        "clue": "Organ reproduksi generatif pada tumbuhan yang memiliki mahkota dan kelopak indah.",
        "explanation": "Mahkota bunga yang berwarna cerah memikat serangga penyerbuk seperti kupu-kupu dan lebah madu.",
        "phenomenon": "Bunga melati mekar mengeluarkan semerbak wangi manis yang menarik perhatian lebah untuk mendekat.",
        "row": 10,
        "col": 0
      },
      {
        "id": "10D",
        "number": 10,
        "direction": "down",
        "answer": "BIJI",
        "clue": "Hasil pembuahan di dalam bakal biji yang dilindungi oleh daging buah dan siap berkecambah.",
        "explanation": "Biji mengandung embrio tanaman muda dan cadangan makanan berupa endosperma untuk pertumbuhan awal.",
        "phenomenon": "Biji kacang hijau yang ditaruh di atas kapas basah berkecambah menumbuhkan akar dan pucuk daun dalam beberapa hari.",
        "row": 4,
        "col": 9
      }
    ],
    "putihClues": [
      {
        "id": "1A",
        "number": 1,
        "direction": "across",
        "answer": "VEGETATIF",
        "clue": "Perkembangbiakan tumbuhan tanpa melalui proses perkawinan atau peleburan sel kelamin.",
        "explanation": "Perkembangbiakan vegetatif hanya melibatkan satu induk sehingga sifat tanaman anakan identik dengan sifat induknya.",
        "phenomenon": "Mencangkok dahan jambu air menghasilkan tanaman baru yang langsung memiliki rasa manis sama persis dengan pohon asalnya.",
        "row": 7,
        "col": 3
      },
      {
        "id": "2D",
        "number": 2,
        "direction": "down",
        "answer": "PENYERBUKAN",
        "clue": "Peristiwa jatuhnya serbuk sari dari kepala sari ke kepala putik bunga.",
        "explanation": "Penyerbukan dapat dibantu oleh tiupan angin (anemogami), hewan serangga (zoidiogami), air, atau bantuan tangan manusia.",
        "phenomenon": "Kupu-kupu yang hinggap mengisap madu tanpa sengaja memindahkan serbuk sari kuning dari satu bunga ke bunga lainnya.",
        "row": 6,
        "col": 4
      },
      {
        "id": "3A",
        "number": 3,
        "direction": "across",
        "answer": "MAHKOTA",
        "clue": "Bagian perhiasan bunga yang berwarna-warni memikat untuk menarik serangga penyerbuk.",
        "explanation": "Warna mahkota bunga yang mencolok dan kelenjar nektar berfungsi sebagai pemandu visual bagi lebah dan kupu-kupu.",
        "phenomenon": "Bunga kembang sepatu memiliki helaian mahkota merah menyala yang sangat menarik perhatian burung penghisap madu.",
        "row": 14,
        "col": 1
      },
      {
        "id": "4D",
        "number": 4,
        "direction": "down",
        "answer": "BENANGSARI",
        "clue": "Alat kelamin jantan pada bunga yang menghasilkan butiran serbuk sari.",
        "explanation": "Benang sari terdiri atas tangkai sari yang menyangga kepala sari tempat butir-butir polen matang diproduksi.",
        "phenomenon": "Jika jari kita menyentuh bagian tengah bunga lili mekar, serbuk sari kuning dari benang sari akan menempel di kulit.",
        "row": 2,
        "col": 5
      },
      {
        "id": "5A",
        "number": 5,
        "direction": "across",
        "answer": "LAPIS",
        "clue": "Jenis umbi pada bawang merah yang tersusun atas lapisan daun tebal berdaging.",
        "explanation": "Umbi lapis memiliki cakram kecil di pangkalnya yang menumbuhkan akar serabut dan siung tunas baru di sela pelepah daunnya.",
        "phenomenon": "Saat mengiris bawang merah melintang, kita dapat melihat lembaran-lembaran siung berlapis yang rapat membungkus tunas inti.",
        "row": 15,
        "col": 3
      },
      {
        "id": "6D",
        "number": 6,
        "direction": "down",
        "answer": "MERUNDUK",
        "clue": "Cara memperbanyak tanaman dengan membengkokkan cabang ke tanah hingga berakar seperti pada melati.",
        "explanation": "Cabang pohon yang lentur ditimbun sedikit tanah basah sampai nodus batangnya menumbuhkan akar kokoh sebelum dipotong.",
        "phenomenon": "Batang tanaman sirih gading dibengkokkan ke pot tanah basah dan dalam dua minggu telah menancapkan akar baru yang kuat.",
        "row": 14,
        "col": 1
      },
      {
        "id": "7A",
        "number": 7,
        "direction": "across",
        "answer": "ADVENTIF",
        "clue": "Jenis tunas liar yang tumbuh tidak lazim di tepi daun seperti pada tanaman cocor bebek.",
        "explanation": "Tunas adventif daun cocor bebek dapat lepas sendiri lalu berakar dan tumbuh menjadi individu baru saat menyentuh tanah.",
        "phenomenon": "Helai daun cocor bebek yang dipetik dan ditaruh di tanah basah menumbuhkan anakan daun-daun kecil di sekeliling pinggirannya.",
        "row": 3,
        "col": 2
      },
      {
        "id": "8D",
        "number": 8,
        "direction": "down",
        "answer": "GRAFTING",
        "clue": "Istilah penyambungan batang atas dengan batang bawah dua tanaman sejenis untuk memadukan keunggulan.",
        "explanation": "Grafting atau menyambung menggabungkan batang bawah tahan hama dengan batang atas penghasil buah lebat dan manis.",
        "phenomenon": "Tanaman kopi robusta dengan perakaran kuat disambung batangnya dengan kopi arabika yang beraroma harum istimewa.",
        "row": 5,
        "col": 8
      },
      {
        "id": "9A",
        "number": 9,
        "direction": "across",
        "answer": "KELOPAK",
        "clue": "Bagian pelindung luar bunga yang berwarna hijau saat kuncup belum mekar.",
        "explanation": "Kelopak bunga melindungi bagian dalam bunga yang masih muda dari gangguan luar sebelum mekar sempurna.",
        "phenomenon": "Kuncup bunga mawar dibungkus rapat oleh helai kelopak hijau kokoh agar tidak dimakan serangga perusak.",
        "row": 5,
        "col": 0
      },
      {
        "id": "10D",
        "number": 10,
        "direction": "down",
        "answer": "SERBUK",
        "clue": "Butir halus kuning penghasil sel jantan pada kepala sari bunga yang disebut ... sari.",
        "explanation": "Serbuk sari terbawa angin atau menempel pada bulu kaki serangga penyerbuk menuju putik bunga lain.",
        "phenomenon": "Di musim semi, butiran serbuk sari jagung beterbangan ditiup angin sepoi-sepoi memenuhi areal persawahan.",
        "row": 0,
        "col": 0
      }
    ],
    "challenge": {
      "id": "ch-2",
      "title": "Tantangan Penerapan: Perbanyakan Bibit Unggul",
      "scenario": "Pak Budi memiliki sebatang pohon mangga arumanis di halaman rumah yang buahnya sangat manis, dagingnya tebal, dan beraroma harum. Beliau ingin memperbanyak tanaman tersebut menjadi 5 pohon baru yang menghasilkan buah manis sama persis dan cepat berbuah.",
      "question": "Metode perkembangbiakan tumbuhan apa yang paling tepat disarankan kepada Pak Budi?",
      "options": [
        {
          "id": "opt-2a",
          "label": "Mencangkok Cabang Dahan Pohon Mangga",
          "description": "Mengupas kulit dahan lalu membalutnya dengan media tanah subur dan plastik berlubang hingga berakar.",
          "isCorrect": true,
          "explanation": "Luar biasa! Mencangkok adalah metode vegetatif buatan yang menghasilkan tanaman dengan sifat genetik 100% sama dengan pohon induknya dan masa berbuahnya jauh lebih cepat dibanding menanam dari biji."
        },
        {
          "id": "opt-2b",
          "label": "Menanam Biji Buah Mangga yang Matang",
          "description": "Menyemai biji sisa buah mangga manis ke dalam polybag tanah.",
          "isCorrect": false,
          "explanation": "Kurang tepat. Menanam dari biji (generatif) membutuhkan waktu 7-10 tahun untuk berbuah dan sifat buahnya dapat berubah menjadi asam akibat penyerbukan silang dari pohon lain."
        },
        {
          "id": "opt-2c",
          "label": "Melakukan Stek Daun Mangga",
          "description": "Memotong lembaran daun mangga tua lalu menancapkannya ke media air.",
          "isCorrect": false,
          "explanation": "Belum tepat. Daun mangga tidak memiliki sel meristem tunas adventif seperti cocor bebek, sehingga daun mangga tidak dapat menumbuhkan akar dan akan layu mengering."
        }
      ]
    },
    "reflection": {
      "id": "ref-2",
      "question": "Refleksi Pembelajaran: Melestarikan Keanekaragaman Tumbuhan",
      "prompt": "Mempelajari cara perkembangbiakan vegetatif dan generatif tumbuhan, apa komitmen nyata yang ingin kamu lakukan?",
      "options": [
        "Mencoba mempraktikkan stek batang atau merawat tanaman hias sendiri di rumah atau sekolah.",
        "Menghargai peranan serangga penyerbuk seperti kupu-kupu dan lebah dengan tidak merusak tanaman berbunga.",
        "Menanam tanaman obat keluarga (TOGA) seperti jahe dan kunyit dengan memanfaatkan perkembangbiakan rizoma.",
        "Lebih giat mengonsumsi sayur dan buah lokal hasil budidaya petani Indonesia."
      ]
    }
  },
  {
    "id": 3,
    "title": "LEVEL 3 – PERKEMBANGBIAKAN HEWAN",
    "subtitle": "Ovipar, Vivipar, dan Ovovivipar",
    "theme": "Bertelur, Melahirkan, dan Menetas di Dalam Tubuh",
    "description": "Telusuri rahasia kelahiran anak mamalia di rahim, telur unggas bersarang hangat, hingga hewan unik seperti platipus.",
    "iconName": "Egg",
    "merahClues": [
      {
        "id": "1A",
        "number": 1,
        "direction": "across",
        "answer": "OVIPAR",
        "clue": "Golongan hewan yang berkembang biak dengan cara bertelur seperti ayam, bebek, dan penyu.",
        "explanation": "Embrio ovipar berkembang di luar tubuh induknya di dalam telur yang dilindungi oleh cangkang keras berkapur.",
        "phenomenon": "Ayam betina mengerami butir-butir telurnya di dalam sarang jerami hangat selama 21 hari hingga menetas menjadi anak ayam.",
        "row": 3,
        "col": 2
      },
      {
        "id": "2D",
        "number": 2,
        "direction": "down",
        "answer": "VIVIPAR",
        "clue": "Golongan hewan yang berkembang biak dengan cara melahirkan atau beranak seperti sapi, kucing, dan kuda.",
        "explanation": "Embrio vivipar tumbuh dan berkembang di dalam rahim induk serta memperoleh suplai makanan melalui tali pusar plasenta.",
        "phenomenon": "Sapi betina melahirkan seekor anak sapi yang langsung dapat berdiri dan menyusu pada induknya.",
        "row": 3,
        "col": 3
      },
      {
        "id": "3A",
        "number": 3,
        "direction": "across",
        "answer": "RAHIM",
        "clue": "Organ di dalam tubuh induk hewan mamalia betina tempat embrio tumbuh dan berkembang.",
        "explanation": "Dinding rahim memiliki jaringan pembuluh darah lebat untuk menyalurkan nutrisi dan oksigen bagi janin yang sedang bertumbuh.",
        "phenomenon": "Selama masa kehamilan, perut kucing betina membesar karena anak-anak kucing tumbuh terlindungi di dalam rahimnya.",
        "row": 4,
        "col": 0
      },
      {
        "id": "4D",
        "number": 4,
        "direction": "down",
        "answer": "EMBRIO",
        "clue": "Calon individu baru hasil peleburan sel telur dan sel sperma yang sedang berkembang.",
        "explanation": "Embrio tumbuh dengan membelah sel secara teratur hingga membentuk organ-organ tubuh lengkap seperti jantung dan mata.",
        "phenomenon": "Di dalam butir telur burung yang dierami, embrio kecil bertumbuh memanfaatkan kuning telur sebagai sumber makanannya.",
        "row": 0,
        "col": 7
      },
      {
        "id": "5A",
        "number": 5,
        "direction": "across",
        "answer": "AMFIBI",
        "clue": "Kelompok hewan yang hidup di dua alam dan bertelur di air seperti katak.",
        "explanation": "Katak betina melepaskan ribuan butir telur berlendir di kolam air tawar yang kemudian menetas menjadi berudu bernapas insang.",
        "phenomenon": "Di pinggir kolam setelah hujan deras tampak gumpalan jeli bening berisi bintik hitam yang merupakan telur katak.",
        "row": 6,
        "col": 0
      },
      {
        "id": "6D",
        "number": 6,
        "direction": "down",
        "answer": "MAMALIA",
        "clue": "Kelompok hewan menyusui yang memiliki kelenjar susu dan daun telinga.",
        "explanation": "Mamalia betina menghasilkan air susu yang kaya antibodi dan protein untuk memberi makan anak-anaknya yang baru lahir.",
        "phenomenon": "Induk kelinci merawat dan menyusui bayi-bayinya yang baru lahir di dalam sarang rumput yang empuk dan terlindung.",
        "row": 2,
        "col": 6
      },
      {
        "id": "7A",
        "number": 7,
        "direction": "across",
        "answer": "REPTIL",
        "clue": "Kelompok hewan melata bersisik yang sebagian besar bertelur seperti buaya dan kura-kura.",
        "explanation": "Telur reptil memiliki cangkang liat seperti kulit samak yang kedap air agar embrio di dalamnya tidak kering di daratan.",
        "phenomenon": "Kura-kura menggali lubang pasir pantai di malam hari untuk mengubur puluhan butir telurnya dari pemangsa.",
        "row": 9,
        "col": 3
      },
      {
        "id": "8D",
        "number": 8,
        "direction": "down",
        "answer": "KADAL",
        "clue": "Contoh reptil ovovivipar yang telurnya menetas di dalam perut sebelum dilahirkan keluar.",
        "explanation": "Beberapa jenis kadal gurun dan kadal kebun menyimpan telurnya di dalam saluran telur hingga menetas tepat saat dilahirkan.",
        "phenomenon": "Seekor kadal betina melahirkan anak-anak kadal kecil yang langsung bergerak lincah dan berburu serangga.",
        "row": 5,
        "col": 8
      },
      {
        "id": "9A",
        "number": 9,
        "direction": "across",
        "answer": "LARVA",
        "clue": "Fase perkembangan hewan yang bentuknya sangat berbeda dari induk dewasa seperti ulat pada kupu-kupu.",
        "explanation": "Larva menghabiskan sebagian besar waktunya makan secara intensif untuk mengumpulkan cadangan energi sebelum masuk ke fase pupa.",
        "phenomenon": "Ulat hijau gemuk memakan daun tanaman mawar dengan lahap sebelum membentuk kepompong sutra di ranting.",
        "row": 5,
        "col": 0
      },
      {
        "id": "10D",
        "number": 10,
        "direction": "down",
        "answer": "SPERMA",
        "clue": "Sel kelamin jantan yang membuahi sel telur pada peristiwa fertilisasi.",
        "explanation": "Sel sperma memiliki ekor flagela yang bergerak aktif berenang untuk membuahi sel ovum betina.",
        "phenomenon": "Pada ikan mas, ikan jantan melepaskan cairan sperma ke dalam air kolam untuk membuahi telur-telur betina.",
        "row": 8,
        "col": 5
      }
    ],
    "putihClues": [
      {
        "id": "1A",
        "number": 1,
        "direction": "across",
        "answer": "OVOVIVIPAR",
        "clue": "Cara bertelur dan menetas di dalam tubuh induk sehingga tampak seperti melahirkan.",
        "explanation": "Embrio ovovivipar tidak disuplai melalui tali pusar, melainkan menyerap nutrisi langsung dari kuning telur di dalam tubuh induknya.",
        "phenomenon": "Ikan hiu macan melahirkan anak-anak hiu muda yang sebelumnya telah menetas dari cangkang telur di dalam rahim induknya.",
        "row": 8,
        "col": 1
      },
      {
        "id": "2D",
        "number": 2,
        "direction": "down",
        "answer": "PLATIPUS",
        "clue": "Mamalia unik berparuh bebek dari Australia yang berkembang biak dengan bertelur namun tetap menyusui.",
        "explanation": "Platipus adalah mamalia monotremata yang bertelur, namun setelah menetas anaknya menjilati susu yang keluar dari pori kulit perut induknya.",
        "phenomenon": "Platipus menyelam di sungai mencari cacing dan mengerami telur kecilnya di liang tanah tepi sungai.",
        "row": 4,
        "col": 5
      },
      {
        "id": "3A",
        "number": 3,
        "direction": "across",
        "answer": "FERTILISASI",
        "clue": "Peristiwa peleburan antara sel telur betina dengan sel sperma jantan.",
        "explanation": "Fertilisasi dapat terjadi di dalam tubuh induk (internal) seperti pada burung dan mamalia, atau di luar tubuh (eksternal) pada ikan.",
        "phenomenon": "Peleburan sel sperma dan ovum menghasilkan zigot yang segera membelah menjadi embrio calon anak.",
        "row": 5,
        "col": 0
      },
      {
        "id": "4D",
        "number": 4,
        "direction": "down",
        "answer": "METAMORFOSIS",
        "clue": "Perubahan bentuk tubuh secara bertahap dari fase telur hingga menjadi hewan dewasa.",
        "explanation": "Metamorfosis sempurna melalui empat tahapan yaitu telur, larva, kepompong (pupa), dan imago dewasa.",
        "phenomenon": "Kupu-kupu indah bersayap warna-warni bermula dari telur kecil yang menetas menjadi ulat pemakan daun.",
        "row": 3,
        "col": 3
      },
      {
        "id": "5A",
        "number": 5,
        "direction": "across",
        "answer": "PLASENTA",
        "clue": "Organ sementara yang menghubungkan janin dengan dinding rahim induk mamalia untuk suplai nutrisi.",
        "explanation": "Plasenta mengalirkan sari makanan, oksigen, dan menyaring zat racun antara aliran darah induk dengan janin anak.",
        "phenomenon": "Setelah melahirkan bayinya, induk kambing memotong tali plasenta dan merawat anaknya dengan penuh kasih sayang.",
        "row": 4,
        "col": 5
      },
      {
        "id": "6D",
        "number": 6,
        "direction": "down",
        "answer": "LUMBALUMBA",
        "clue": "Mamalia air laut cerdas bernapas paru-paru yang melahirkan dan menyusui anaknya di samudera.",
        "explanation": "Lumba-lumba bukan ikan melainkan mamalia air vivipar yang melahirkan anak tunggal dan mendorongnya ke permukaan untuk bernapas pertama kali.",
        "phenomenon": "Induk lumba-lumba berenang berdampingan melindungi anaknya yang baru lahir di tengah gelombang laut biru.",
        "row": 0,
        "col": 12
      },
      {
        "id": "7A",
        "number": 7,
        "direction": "across",
        "answer": "NIMFA",
        "clue": "Bentuk hewan muda pada metamorfosis tidak sempurna yang menyerupai dewasa tapi tanpa sayap.",
        "explanation": "Nimfa mengalami pergantian kulit (ekdisis) berkali-kali hingga sayapnya berkembang sempurna menjadi belalang dewasa.",
        "phenomenon": "Anak belalang kecil yang melompat di rumput bentuknya mirip belalang dewasa hanya saja belum memiliki sayap terbang.",
        "row": 3,
        "col": 1
      },
      {
        "id": "8D",
        "number": 8,
        "direction": "down",
        "answer": "PUPA",
        "clue": "Fase istirahat atau kepompong saat ulat merombak tubuhnya menjadi kupu-kupu dewasa.",
        "explanation": "Di dalam kepompong pupa terjadi pembongkaran jaringan larva dan pembentukan sayap, mata majemuk, dan kaki kupu-kupu.",
        "phenomenon": "Kepompong cokelat bergantung diam di balik daun sebelum robek dan mengeluarkan kupu-kupu bersayap indah.",
        "row": 8,
        "col": 8
      },
      {
        "id": "9A",
        "number": 9,
        "direction": "across",
        "answer": "INSANG",
        "clue": "Alat pernapasan kecebong katak saat masih hidup berenang di perairan kolam.",
        "explanation": "Saat berubah menjadi katak dewasa, insang berudu akan menyusut dan digantikan oleh paru-paru serta kulit lembap.",
        "phenomenon": "Berudu kecil berenang lincah mengandalkan insang luarnya sebelum tumbuh kaki belakang dan kaki depannya.",
        "row": 12,
        "col": 1
      },
      {
        "id": "10D",
        "number": 10,
        "direction": "down",
        "answer": "INTERNAL",
        "clue": "Jenis pembuahan yang berlangsung di dalam tubuh induk betina seperti pada bangsa burung dan mamalia.",
        "explanation": "Pembuahan internal melindungi sel telur dan sperma dari kekeringan dan bahaya pemangsa di lingkungan luar.",
        "phenomenon": "Unggas dan hewan menyusui melakukan perkawinan agar sperma membuahi sel telur secara langsung di dalam saluran reproduksi.",
        "row": 8,
        "col": 7
      }
    ],
    "challenge": {
      "id": "ch-3",
      "title": "Tantangan Penerapan: Mengelompokkan Satwa Air",
      "scenario": "Siswa kelas 6 SD TERAMIA mengunjungi akuarium laut raksasa dan mengamati tiga satwa laut berukuran besar: Ikan Paus Biru, Ikan Hiu Macan, dan Penyu Hijau.",
      "question": "Manakah pengelompokan cara perkembangbiakan yang benar dari ketiga satwa laut tersebut?",
      "options": [
        {
          "id": "opt-3a",
          "label": "Paus: Vivipar | Hiu: Ovovivipar | Penyu: Ovipar",
          "description": "Paus melahirkan dan menyusui, telur hiu menetas di dalam rahim, penyu bertelur di pasir pantai.",
          "isCorrect": true,
          "explanation": "Tepat sekali! Paus adalah mamalia vivipar yang melahirkan dan menyusui. Hiu umumnya ovovivipar (embrio berkembang dalam telur di saluran telur induk hingga menetas lalu dilahirkan). Penyu adalah reptil ovipar yang mengubur telurnya di pasir pantai."
        },
        {
          "id": "opt-3b",
          "label": "Paus: Ovipar | Hiu: Vivipar | Penyu: Ovipar",
          "description": "Paus bertelur di laut, hiu melahirkan langsung, penyu bertelur.",
          "isCorrect": false,
          "explanation": "Kurang tepat. Paus bukan ikan yang bertelur; paus bernapas dengan paru-paru dan melahirkan bayi paus di permukaan laut."
        },
        {
          "id": "opt-3c",
          "label": "Paus: Ovovivipar | Hiu: Ovipar | Penyu: Vivipar",
          "description": "Paus bertelur-menetas di tubuh, hiu bertelur biasa, penyu melahirkan.",
          "isCorrect": false,
          "explanation": "Belum tepat. Penyu tidak melahirkan anak, melainkan bertelur di pantai (ovipar)."
        }
      ]
    },
    "reflection": {
      "id": "ref-3",
      "question": "Refleksi Pembelajaran: Kasih Sayang dan Perlindungan Hewan",
      "prompt": "Dari cara perkembangbiakan ovipar, vivipar, dan ovovivipar, sikap positif apa yang harus kita kembangkan?",
      "options": [
        "Menyayangi hewan peliharaan dan tidak menyakiti hewan liar yang sedang mengerami telur atau menyusui anak.",
        "Tidak membeli atau memelihara satwa langka yang dilindungi undang-undang negara.",
        "Menjaga kebersihan lingkungan agar siklus perkembangbiakan satwa air dan darat tidak terganggu polusi.",
        "Mengagumi proses menakjubkan bagaimana sebutir telur dapat menetas menjadi kehidupan baru."
      ]
    }
  },
  {
    "id": 4,
    "title": "LEVEL 4 – KESEIMBANGAN EKOSISTEM",
    "subtitle": "Rantai Makanan & Simbiosis Kehidupan",
    "theme": "Produsen, Konsumen, Pengurai, dan Hubungan Simbiosis",
    "description": "Pahami aliran energi matahari di sawah, peranan dekomposer jamur, serta simbiosis lebah madu dan ikan remora.",
    "iconName": "Network",
    "merahClues": [
      {
        "id": "1A",
        "number": 1,
        "direction": "across",
        "answer": "PRODUSEN",
        "clue": "Makhluk hidup berklorofil yang mampu membuat makanannya sendiri melalui fotosintesis.",
        "explanation": "Tumbuhan hijau bertindak sebagai produsen utama yang menyediakan sumber energi dasar bagi seluruh makhluk hidup di bumi.",
        "phenomenon": "Hamparan rumput hijau di padang rumput savana menyerap cahaya matahari untuk tumbuh subur menjadi santapan kawanan rusa.",
        "row": 6,
        "col": 6
      },
      {
        "id": "2D",
        "number": 2,
        "direction": "down",
        "answer": "PENGURAI",
        "clue": "Organisme yang membusukkan sisa makhluk hidup mati menjadi zat hara tanah seperti jamur dan bakteri.",
        "explanation": "Dekomposer mengembalikan unsur nitrogen, fosfor, dan karbon dari bangkai ke dalam tanah untuk diserap kembali oleh tumbuhan.",
        "phenomenon": "Daun-daun kering yang gugur di lantai hutan lebat membusuk menjadi tanah humus subur berkat kerja jamur dan bakteri pengurai.",
        "row": 6,
        "col": 6
      },
      {
        "id": "3A",
        "number": 3,
        "direction": "across",
        "answer": "KONSUMEN",
        "clue": "Makhluk hidup yang tidak dapat membuat makanan sendiri dan bergantung pada organisme lain.",
        "explanation": "Konsumen terdiri dari herbivora (konsumen 1), karnivora (konsumen 2), dan predator puncak seperti harimau dan elang.",
        "phenomenon": "Kambing memakan rumput, lalu serigala memburu kambing untuk memperoleh energi bagi kelangsungan hidupnya.",
        "row": 7,
        "col": 0
      },
      {
        "id": "4D",
        "number": 4,
        "direction": "down",
        "answer": "RANTAI",
        "clue": "Peristiwa makan dan dimakan antar makhluk hidup dengan urutan tertentu disebut ... makanan.",
        "explanation": "Rantai makanan menggambarkan perpindahan energi kimia dari produsen ke konsumen tingkat satu hingga konsumen puncak.",
        "phenomenon": "Di sawah, padi dimakan belalang, belalang dimakan katak, katak dimakan ular, dan ular dimakan burung elang.",
        "row": 4,
        "col": 13
      },
      {
        "id": "5A",
        "number": 5,
        "direction": "across",
        "answer": "MUTUALISME",
        "clue": "Hubungan timbal balik antara dua makhluk hidup berbeda yang saling memberikan keuntungan satu sama lain.",
        "explanation": "Contoh mutualisme adalah lebah mendapat nektar manis dari bunga, sementara bunga terbantu proses penyerbukannya oleh lebah.",
        "phenomenon": "Kerbau merasa nyaman saat burung jalak mematuk dan memakan kutu-kutu parasit yang gatal di punggungnya.",
        "row": 10,
        "col": 5
      },
      {
        "id": "6D",
        "number": 6,
        "direction": "down",
        "answer": "POPULASI",
        "clue": "Kumpulan individu sejenis yang hidup bersama di suatu wilayah habitat tertentu.",
        "explanation": "Ukuran populasi dipengaruhi oleh angka kelahiran, kematian, ketersediaan mangsa, dan keberadaan pemangsa di habitat tersebut.",
        "phenomenon": "Populasi kijang di padang rumput tetap seimbang karena dikendalikan secara alami oleh populasi harimau.",
        "row": 0,
        "col": 11
      },
      {
        "id": "7A",
        "number": 7,
        "direction": "across",
        "answer": "HABITAT",
        "clue": "Tempat tinggal alami suatu makhluk hidup untuk hidup, mencari makan, dan berkembang biak.",
        "explanation": "Habitat menyediakan air, makanan, tempat berlindung, dan pasangan kawin yang sesuai dengan kebutuhan adaptasi organisme.",
        "phenomenon": "Hutan hujan tropis Kalimantan merupakan habitat asli bagi orangutan untuk bergelantungan dan mencari buah-buahan hutan.",
        "row": 12,
        "col": 5
      },
      {
        "id": "8D",
        "number": 8,
        "direction": "down",
        "answer": "HERBIVORA",
        "clue": "Hewan pemakan tumbuhan yang menduduki tingkat konsumen pertama dalam rantai makanan.",
        "explanation": "Herbivora memiliki sistem pencernaan khusus dengan usus panjang dan gigi geraham lebar untuk mengunyah serat selulosa tanaman.",
        "phenomenon": "Kawanan sapi dan kerbau merumput bersama di ladang hijau memakan daun-daun rumput segar.",
        "row": 0,
        "col": 8
      },
      {
        "id": "9A",
        "number": 9,
        "direction": "across",
        "answer": "KARNIVORA",
        "clue": "Hewan pemakan daging yang menduduki konsumen tingkat dua atau pemangsa puncak.",
        "explanation": "Karnivora dilengkapi gigi taring runcing dan cakar tajam untuk mencengkeram dan merobek mangsa buruannya.",
        "phenomenon": "Singa menyergap zebra di padang rumput dengan taringnya yang tajam untuk memenuhi kebutuhan makan kelompoknya.",
        "row": 11,
        "col": 4
      },
      {
        "id": "10D",
        "number": 10,
        "direction": "down",
        "answer": "OMNIVORA",
        "clue": "Hewan pemakan segala jenis makanan baik tumbuhan maupun daging hewan lain.",
        "explanation": "Omnivora seperti ayam, bebek, dan beruang memiliki gigi yang dapat mengunyah biji-bijian sekaligus mencabik daging lunak.",
        "phenomenon": "Ayam kampung mematuk butiran jagung di halaman lalu mengejar dan menelan cacing tanah yang menggeliat.",
        "row": 7,
        "col": 1
      }
    ],
    "putihClues": [
      {
        "id": "1A",
        "number": 1,
        "direction": "across",
        "answer": "PARASITISME",
        "clue": "Hubungan dua makhluk hidup di mana satu pihak untung sedangkan pihak lain dirugikan.",
        "explanation": "Parasit menyerap sari makanan atau darah inang hingga inang menjadi lemah, sakit, atau bahkan mati.",
        "phenomenon": "Benalu tumbuh menempel di dahan pohon mangga menyerap air dan hara mineral hingga dahan mangga mengering mati.",
        "row": 6,
        "col": 0
      },
      {
        "id": "2D",
        "number": 2,
        "direction": "down",
        "answer": "KOMENSALISME",
        "clue": "Hubungan dua makhluk hidup di mana satu pihak untung namun pihak lain tidak dirugikan maupun diuntungkan.",
        "explanation": "Contohnya ikan remora menempel pada tubuh hiu untuk memakan remah makanan sisa hiu tanpa mengganggu hiu sama sekali.",
        "phenomenon": "Tanaman anggrek menumpang hidup menempel pada kulit pohon mangga tinggi hanya untuk mendapat sinar matahari tanpa mencuri hara.",
        "row": 0,
        "col": 1
      },
      {
        "id": "3A",
        "number": 3,
        "direction": "across",
        "answer": "FOTOSINTESIS",
        "clue": "Proses tumbuhan hijau mengolah air dan karbon dioksida menjadi karbohidrat dengan bantuan cahaya matahari.",
        "explanation": "Fotosintesis menghasilkan glukosa sebagai sumber energi tumbuhan dan melepaskan gas oksigen segar ke atmosfer bumi.",
        "phenomenon": "Di siang hari yang terik, udara di bawah pohon beringin rindang terasa sejuk dan segar karena pelepasan oksigen fotosintesis.",
        "row": 1,
        "col": 0
      },
      {
        "id": "4D",
        "number": 4,
        "direction": "down",
        "answer": "SIMBIOSIS",
        "clue": "Pola interaksi dan hubungan hidup bersama yang sangat erat antara dua makhluk hidup berbeda jenis.",
        "explanation": "Simbiosis terbagi menjadi tiga bentuk utama di alam yaitu simbiosis mutualisme, komensalisme, dan parasitisme.",
        "phenomenon": "Ikan badut merasa aman berlindung di sela tentakel anemon laut yang menyengat karena kulit ikan dilapisi lendir khusus.",
        "row": 6,
        "col": 4
      },
      {
        "id": "5A",
        "number": 5,
        "direction": "across",
        "answer": "KLOROFIL",
        "clue": "Zat warna hijau daun yang berfungsi menangkap energi cahaya matahari saat fotosintesis.",
        "explanation": "Klorofil berada di dalam kloroplas sel daun dan menyerap spektrum cahaya merah dan biru untuk menggerakkan sintesis makanan.",
        "phenomenon": "Daun pepaya yang terkena sinar matahari pagi berwarna hijau segar karena klorofilnya aktif memproses makanan.",
        "row": 0,
        "col": 1
      },
      {
        "id": "6D",
        "number": 6,
        "direction": "down",
        "answer": "PREDATOR",
        "clue": "Hewan pemangsa yang memburu, menangkap, dan memakan hewan lain untuk bertahan hidup.",
        "explanation": "Predator memegang peranan krusial menjaga keseimbangan alam agar populasi herbivora tidak membludak merusak tumbuhan.",
        "phenomenon": "Burung elang terbang berputar di angkasa mengincar ular yang sedang merayap di pematang sawah.",
        "row": 6,
        "col": 0
      },
      {
        "id": "7A",
        "number": 7,
        "direction": "across",
        "answer": "MANGSA",
        "clue": "Hewan yang diburu dan dimakan oleh predator pemangsa dalam rantai makanan.",
        "explanation": "Hewan mangsa biasanya mengembangkan indra tajam, kemampuan berlari kencang, atau kamuflase untuk menghindari pemangsa.",
        "phenomenon": "Rusa tutul yang sedang minum di tepi sungai langsung berlari kencang saat mendengar desiran langkah macan tutul.",
        "row": 2,
        "col": 1
      },
      {
        "id": "8D",
        "number": 8,
        "direction": "down",
        "answer": "BAKTERI",
        "clue": "Mikroorganisme renik pengurai sisa makhluk hidup mati di dalam tanah.",
        "explanation": "Bakteri tanah menguraikan protein dan bahan organik bangkai menjadi amonia dan nitrat penyubur tanah pertanian.",
        "phenomenon": "Bangkai hewan yang terkubur di dalam tanah berangsur-angsur hilang terurai menjadi mineral tanah yang subur.",
        "row": 5,
        "col": 3
      },
      {
        "id": "9A",
        "number": 9,
        "direction": "across",
        "answer": "EKOSISTEM",
        "clue": "Sistem kesatuan interaksi timbal balik antara makhluk hidup dengan lingkungan tak hidup di sekitarnya.",
        "explanation": "Komponen biotik (makhluk hidup) dan abiotik (tanah, air, udara, cahaya) saling mempengaruhi membentuk keseimbangan alam.",
        "phenomenon": "Danau air tawar merupakan ekosistem lengkap tempat hidup ikan, lumut, teratai, katak, serta air dan lumpur dasar.",
        "row": 3,
        "col": 1
      },
      {
        "id": "10D",
        "number": 10,
        "direction": "down",
        "answer": "PESTISIDA",
        "clue": "Bahan kimia buatan manusia yang bila digunakan berlebihan dapat merusak rantai makanan dan mencemari ekosistem.",
        "explanation": "Pestisida berlebih membunuh serangga predator alami dan meninggalkan racun berbahaya yang terakumulasi di tubuh burung pemangsa.",
        "phenomenon": "Penyemprotan racun kimia berlebihan di sawah mematikan belalang dan katak sehingga populasi burung pemakan serangga ikut punah.",
        "row": 5,
        "col": 10
      }
    ],
    "challenge": {
      "id": "ch-4",
      "title": "Tantangan Penerapan: Mengatasi Hama Tikus Sawah",
      "scenario": "Para petani di Desa Sukamaju mengeluhkan sawah mereka diserang hama tikus yang memakan batang padi bunting. Beberapa petani berniat menggunakan racun kimia tikus dalam jumlah besar, namun dikhawatirkan dapat membahayakan burung hantu dan ternak warga.",
      "question": "Tindakan pelestarian keseimbangan ekosistem apa yang paling bijak dan efektif untuk mengendalikan hama tikus sawah secara alami?",
      "options": [
        {
          "id": "opt-4a",
          "label": "Membuat Rumah Burung Hantu (Tyto alba) di Areal Persawahan",
          "description": "Mengembangkan predator alami tikus yaitu sepasang burung hantu yang mampu memangsa 2-5 ekor tikus setiap malam.",
          "isCorrect": true,
          "explanation": "Hebat sekali! Pengendalian hayati dengan melestarikan burung hantu (predator alami) sangat efektif menjaga populasi tikus tetap rendah tanpa meninggalkan residu racun kimia yang merusak jaring makanan."
        },
        {
          "id": "opt-4b",
          "label": "Membakar Seluruh Jerami dan Menabur Racun Tikus Dosis Tinggi",
          "description": "Memusnahkan semua semak belukar dan meracuni liang tanah sawah.",
          "isCorrect": false,
          "explanation": "Kurang tepat. Menabur racun kimia berlebihan dapat meracuni rantai makanan, membunuh hewan pemangsa alami tikus, dan mencemari air irigasi yang dikonsumsi ternak."
        },
        {
          "id": "opt-4c",
          "label": "Menangkap dan Membasmi Semua Ular Sawah",
          "description": "Memburu ular sawah agar sawah aman dari gigitan ular.",
          "isCorrect": false,
          "explanation": "Salah besar! Jika ular sawah dibasmi, musuh alami tikus hilang sehingga populasi tikus sawah justru akan meledak semakin banyak dan merusak padi."
        }
      ]
    },
    "reflection": {
      "id": "ref-4",
      "question": "Refleksi Pembelajaran: Menjaga Keharmonisan Rantai Makanan",
      "prompt": "Mengapa menjaga setiap rantai makanan dan keseimbangan ekosistem sangat penting bagi manusia?",
      "options": [
        "Karena kepunahan satu jenis hewan predator dapat merusak rantai makanan dan merugikan hasil panen manusia.",
        "Simbiosis di alam mengajarkan kita untuk saling tolong-menolong dan hidup rukun berdampingan.",
        "Mengurangi pemakaian zat kimia berbahaya agar air dan tanah persawahan tetap sehat dan subur.",
        "Menghargai peranan produsen tumbuhan hijau sebagai paru-paru bumi yang menyuplai oksigen segar."
      ]
    }
  },
  {
    "id": 5,
    "title": "LEVEL 5 – PELESTARIAN LINGKUNGAN",
    "subtitle": "Penyelamatan Flora Fauna Langka & 3R",
    "theme": "Pelestarian In Situ, Ex Situ, Taman Nasional, dan Reboisasi",
    "description": "Jadilah pahlawan konservasi komodo, badak bercula satu, bunga Rafflesia, serta aksi nyata reboisasi dan daur ulang.",
    "iconName": "ShieldCheck",
    "merahClues": [
      {
        "id": "1A",
        "number": 1,
        "direction": "across",
        "answer": "INSITU",
        "clue": "Upaya pelestarian makhluk hidup langka yang dilakukan langsung di dalam habitat aslinya.",
        "explanation": "Pelestarian in situ seperti di taman nasional dan cagar alam menjaga keutuhan ekosistem asli tanpa memindahkan satwa.",
        "phenomenon": "Pemerintah melindungi badak bercula satu di habitat aslinya di Taman Nasional Ujung Kulon Banten.",
        "row": 5,
        "col": 10
      },
      {
        "id": "2D",
        "number": 2,
        "direction": "down",
        "answer": "REBOISASI",
        "clue": "Penanaman kembali pohon-pohon di hutan yang telah gundul atau rusak akibat penebangan liar.",
        "explanation": "Reboisasi mengembalikan fungsi hutan sebagai penyerap air hujan, pencegah tanah longsor, dan habitat satwa liar.",
        "phenomenon": "Siswa dan relawan menanam seribu bibit pohon mahoni di lereng bukit tandus untuk mencegah bencana banjir bandang.",
        "row": 1,
        "col": 10
      },
      {
        "id": "3A",
        "number": 3,
        "direction": "across",
        "answer": "KOMODO",
        "clue": "Kadal raksasa purba endemik Indonesia yang dilindungi ketat di kawasan Nusa Tenggara Timur.",
        "explanation": "Komodo adalah reptil pemakan daging terbesar di dunia yang hanya hidup di pulau Komodo, Rinca, dan Flores.",
        "phenomenon": "Turis dari berbagai belahan dunia datang menyaksikan komodo raksasa berjalan gagah di savana Pulau Komodo.",
        "row": 4,
        "col": 9
      },
      {
        "id": "4D",
        "number": 4,
        "direction": "down",
        "answer": "EROSI",
        "clue": "Peristiwa pengikisan lapisan tanah subur oleh aliran air hujan deras karena bukit gundul tanpa akar pohon.",
        "explanation": "Akar pepohonan mengikat butiran tanah; jika hutan ditebang habis, air hujan akan dengan mudah menghanyutkan tanah ke sungai.",
        "phenomenon": "Sungai di hilir menjadi cokelat pekat berlumpur akibat erosi hebat di perbukitan hulu yang ditebangi liar.",
        "row": 2,
        "col": 12
      },
      {
        "id": "5A",
        "number": 5,
        "direction": "across",
        "answer": "ABRASI",
        "clue": "Pengikisan garis pantai oleh hempasan gelombang laut akibat rusaknya hutan pohon bakau.",
        "explanation": "Hutan bakau berfungsi memecah energi ombak laut; ketiadaan bakau membuat daratan pantai tergerus ombak secara drastis.",
        "phenomenon": "Jalan tepi pantai amblas ke laut karena deburan ombak besar terus mengikis pasir pantai yang tidak memiliki pohon bakau.",
        "row": 1,
        "col": 8
      },
      {
        "id": "6D",
        "number": 6,
        "direction": "down",
        "answer": "LANGKA",
        "clue": "Status makhluk hidup yang jumlah populasinya sangat sedikit di alam dan terancam punah selamanya.",
        "explanation": "Hewan langka dilindungi oleh undang-undang dan dilarang keras untuk diperjualbelikan atau diburu secara ilegal.",
        "phenomenon": "Burung jalak bali berbulu putih bersih berstatus hewan langka yang diawasi ketat di pusat penangkaran cagar alam.",
        "row": 0,
        "col": 8
      },
      {
        "id": "7A",
        "number": 7,
        "direction": "across",
        "answer": "CAGARALAM",
        "clue": "Kawasan suaka alam yang melindungi keanekaragaman tumbuhan dan ekosistem unik di dalamnya tanpa campur tangan manusia.",
        "explanation": "Cagar alam dijaga ketat agar proses evolusi dan kehidupan tumbuhan langka seperti bunga Rafflesia berjalan alami tanpa gangguan.",
        "phenomenon": "Di Cagar Alam Rafflesia Bengkulu, kuntum bunga bangkai raksasa mekar alami di lantai hutan lindung.",
        "row": 7,
        "col": 9
      },
      {
        "id": "8D",
        "number": 8,
        "direction": "down",
        "answer": "KOMPOSTING",
        "clue": "Pengolahan sampah organik seperti sisa daun dan sayuran menjadi pupuk penyubur tanaman.",
        "explanation": "Kompos menyuburkan tanah pertanian secara alami tanpa merusak mikroorganisme tanah seperti pestisida kimia sintetis.",
        "phenomenon": "Siswa SD Teramia mengumpulkan sisa daun kering di taman sekolah ke dalam wadah komposter untuk dijadikan pupuk bunga.",
        "row": 5,
        "col": 17
      },
      {
        "id": "9A",
        "number": 9,
        "direction": "across",
        "answer": "ORANGUTAN",
        "clue": "Kera besar berbulu cokelat kemerahan dari hutan Kalimantan dan Sumatra yang dilindungi dari perburuan.",
        "explanation": "Orangutan berperan menyebarkan biji buah-buahan di hutan belantara dan terancam punah akibat pembukaan kebun sawit.",
        "phenomenon": "Induk orangutan menggendong bayinya bergelantungan di dahan pohon kanopi hutan tropis yang rindang.",
        "row": 2,
        "col": 0
      },
      {
        "id": "10D",
        "number": 10,
        "direction": "down",
        "answer": "SANCTUARY",
        "clue": "Kawasan suaka atau suaka margasatwa tempat perlindungan khusus bagi satwa liar yang terancam punah.",
        "explanation": "Suaka margasatwa memelihara kelangsungan hidup jenis satwa tertentu beserta habitat aslinya dari gangguan perburuan liar.",
        "phenomenon": "Gajah sumatra bebas berjalan mencari makan di kawasan suaka margasatwa Way Kambas tanpa rasa takut tertembak pemburu.",
        "row": 6,
        "col": 16
      }
    ],
    "putihClues": [
      {
        "id": "1A",
        "number": 1,
        "direction": "across",
        "answer": "EXSITU",
        "clue": "Upaya pelestarian satwa dan tumbuhan langka di luar habitat aslinya seperti di kebun binatang dan taman safari.",
        "explanation": "Pelestarian ex situ dilakukan ketika habitat asli satwa sudah sangat rusak atau terancam parah akibat bencana alam dan perburuan.",
        "phenomenon": "Harimau sumatra yang terluka dirawat dan dikembangbiakkan di taman safari sebelum kelak dilepasliarkan kembali ke hutan.",
        "row": 6,
        "col": 5
      },
      {
        "id": "2D",
        "number": 2,
        "direction": "down",
        "answer": "RAFFLESIA",
        "clue": "Bunga raksasa parasit endemik Sumatra yang tidak memiliki daun sejati maupun akar biasa.",
        "explanation": "Rafflesia arnoldii memiliki bunga terbesar di dunia yang mengeluarkan aroma bangkai busuk untuk memikat lalat penyerbuk.",
        "phenomenon": "Kuntum bunga Rafflesia mekar selebar satu meter di lantai hutan hujan Bengkulu dan hanya mekar selama beberapa hari.",
        "row": 1,
        "col": 5
      },
      {
        "id": "3A",
        "number": 3,
        "direction": "across",
        "answer": "RECYCLE",
        "clue": "Prinsip daur ulang sampah anorganik seperti mengolah botol plastik bekas menjadi barang kerajinan berguna.",
        "explanation": "Recycle adalah pilar 3R (Reduce, Reuse, Recycle) yang mengurangi timbunan sampah di tempat pembuangan akhir (TPA).",
        "phenomenon": "Siswa kreatif mengubah tutup botol plastik bekas menjadi pot tanaman hias warna-warni yang indah di teras kelas.",
        "row": 1,
        "col": 5
      },
      {
        "id": "4D",
        "number": 4,
        "direction": "down",
        "answer": "TAMAN",
        "clue": "Kawasan konservasi alam yang memiliki ekosistem asli dan dimanfaatkan untuk penelitian serta edukasi disebut ... nasional.",
        "explanation": "Taman nasional dikelola dengan sistem zonasi untuk melindungi satwa liar sekaligus sarana edukasi lingkungan generasi muda.",
        "phenomenon": "Keluarga berkunjung ke Taman Nasional Baluran untuk melihat kawanan banteng liar dan burung merak hijau di alam bebas.",
        "row": 6,
        "col": 9
      },
      {
        "id": "5A",
        "number": 5,
        "direction": "across",
        "answer": "CENDRAWASIH",
        "clue": "Burung surga berbulu indah memesona yang merupakan satwa khas kebanggaan tanah Papua.",
        "explanation": "Burung cendrawasih jantan menari memperagakan bulu ekor kuning keemasannya yang menjuntai indah untuk memikat betina.",
        "phenomenon": "Cendrawasih bertengger di pucuk pohon hutan Papua menari dengan bulu ekor yang berkilauan diterpa mentari pagi.",
        "row": 2,
        "col": 0
      },
      {
        "id": "6D",
        "number": 6,
        "direction": "down",
        "answer": "BADAK",
        "clue": "Mamalia darat bercula satu yang dilindungi ketat di kawasan Taman Nasional Ujung Kulon.",
        "explanation": "Badak jawa bercula satu merupakan salah satu mamalia paling langka di dunia dengan populasi kurang dari seratus ekor.",
        "phenomenon": "Badak bercula satu berendam di kubangan lumpur hutan Ujung Kulon untuk mendinginkan suhu tubuh dan mengusir lalat.",
        "row": 0,
        "col": 3
      },
      {
        "id": "7A",
        "number": 7,
        "direction": "across",
        "answer": "REUSE",
        "clue": "Prinsip menggunakan kembali barang yang masih layak pakai tanpa harus langsung dibuang ke tempat sampah.",
        "explanation": "Reuse memperpanjang masa pakai suatu barang, misalnya menggunakan kaleng biskuit bekas untuk wadah penyimpanan benang.",
        "phenomenon": "Ibu menggunakan kembali kaleng susu bekas menjadi wadah pensil yang rapi di meja belajar anak.",
        "row": 7,
        "col": 2
      },
      {
        "id": "8D",
        "number": 8,
        "direction": "down",
        "answer": "REDUCE",
        "clue": "Prinsip mengurangi pemakaian barang sekali pakai seperti kantong plastik untuk mengurangi timbunan sampah.",
        "explanation": "Membawa tas belanja kain sendiri dan botol minum tumbler ke sekolah adalah contoh nyata penerapan prinsip reduce.",
        "phenomenon": "Siswa SD Teramia selalu membawa kotak bekal makanan dan botol minum sendiri sehingga tidak menghasilkan sampah plastik di kantin.",
        "row": 0,
        "col": 11
      },
      {
        "id": "9A",
        "number": 9,
        "direction": "across",
        "answer": "SUAKA",
        "clue": "Kawasan cagar yang didirikan khusus untuk melindungi jenis hewan liar tertentu dari bahaya kepunahan dinamakan ... margasatwa.",
        "explanation": "Suaka margasatwa memiliki penjagaan khusus oleh polisi hutan untuk mencegah perambahan hutan dan jerat pemburu liar.",
        "phenomenon": "Di Suaka Margasatwa Danau Sentarum, populasi bekantan dan burung rangkong hidup aman terlindung.",
        "row": 9,
        "col": 3
      },
      {
        "id": "10D",
        "number": 10,
        "direction": "down",
        "answer": "HABITAT",
        "clue": "Lingkungan alam tempat suatu makhluk hidup melangsungkan hidupnya yang harus dilestarikan dari penebangan liar.",
        "explanation": "Kehilangan habitat merupakan penyebab nomor satu penurunan populasi satwa liar dan kepunahan spesies langka di dunia.",
        "phenomenon": "Ketika hutan dibuka, satwa liar kehilangan rumah dan sumber makanan hingga sering tersesat masuk ke perkebunan warga.",
        "row": 8,
        "col": 7
      }
    ],
    "challenge": {
      "id": "ch-5",
      "title": "Tantangan Penerapan: Aksi Nyata Pelestarian Lingkungan",
      "scenario": "Kawasan pesisir pantai dekat desa nelayan mengalami abrasi parah akibat deburan ombak laut yang mengikis jalan raya dan menghancurkan tambak ikan warga.",
      "question": "Aksi nyata konservasi lingkungan apa yang paling tepat dan berkesinambungan untuk mengatasi bencana abrasi tersebut?",
      "options": [
        {
          "id": "opt-5a",
          "label": "Menanam Rimbun Hutan Bakau (Mangrove) di Sepanjang Garis Pantai",
          "description": "Akar tunjang bakau yang kokoh memecah energi ombak, mengendapkan lumpur, dan menjadi tempat berkembang biak ikan kepiting.",
          "isCorrect": true,
          "explanation": "Tepat sekali! Hutan bakau adalah benteng alami terkuat melawan abrasi laut. Selain meredam hantaman gelombang air laut, rumpun bakau juga menyuburkan biota laut seperti kepiting dan ikan."
        },
        {
          "id": "opt-5b",
          "label": "Membangun Tanggul Pasir Sementara dari Karung Plastik",
          "description": "Menumpuk karung plastik berisi pasir di bibir pantai.",
          "isCorrect": false,
          "explanation": "Kurang tepat. Tanggul karung pasir bersifat sementara dan mudah hancur diterjang ombak pasang, serta serpihan karung plastik justru akan mencemari lautan dengan sampah mikroplastik."
        },
        {
          "id": "opt-5c",
          "label": "Mengeruk Pasir Pantai untuk Dijual ke Kota",
          "description": "Memperdalam dasar pantai agar air laut tidak meluap ke daratan.",
          "isCorrect": false,
          "explanation": "Salah! Penambangan pasir pantai justru memperparah abrasi pantai dan menenggelamkan garis daratan pemukiman warga."
        }
      ]
    },
    "reflection": {
      "id": "ref-5",
      "question": "Refleksi Pembelajaran: Duta Penjaga Kelestarian Bumi",
      "prompt": "Sebagai generasi hebat SD TERAMIA, tindakan nyata apa yang akan kamu terapkan mulai hari ini?",
      "options": [
        "Membawa botol minum dan bekal makan sendiri untuk mengurangi sampah plastik sekali pakai (Reduce & Reuse).",
        "Ikut serta menanam dan menyiram pohon di sekolah untuk mencegah pemanasan global.",
        "Membuang sampah pada tempatnya sesuai kategori organik dan anorganik untuk didaur ulang.",
        "Mengajak keluarga dan teman untuk tidak membeli suvenir yang terbuat dari bagian satwa langka."
      ]
    }
  }
];
