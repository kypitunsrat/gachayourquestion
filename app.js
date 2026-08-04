// Paksa input nama selalu kosong saat halaman di-refresh
document.getElementById('playerNameInput').value = "";

// 1. Database Pertanyaan
const quizData = {
    "💻 Sistem Informasi": [
        { text: "Jelaskan apa perbedaan mendasar antara Data dan Informasi?", diff: "Easy" },
        { text: "Apa yang dimaksud dengan Sistem Informasi secara umum?", diff: "Easy" },
        { text: "Sebutkan tiga komponen utama dalam sebuah sistem informasi (Hardware, Software, Brainware) beserta perannya.", diff: "Easy" },
        { text: "Apa fungsi utama dari sebuah perangkat masukan (input device) dalam sistem?", diff: "Easy" },
        { text: "Berikan satu contoh penerapan sistem informasi sederhana di sebuah rumah sakit.", diff: "Easy" },
        { text: "Sebutkan dan jelaskan secara singkat tahapan-tahapan dalam SDLC (System Development Life Cycle).", diff: "Medium" },
        { text: "Apa peran dan tanggung jawab seorang Sistem Analis dalam sebuah proyek pengembangan perangkat lunak?", diff: "Medium" },
        { text: "Jelaskan perbedaan antara TPS (Transaction Processing System) dan MIS (Management Information System).", diff: "Medium" },
        { text: "Apa yang dimaksud dengan Enterprise Resource Planning (ERP)?", diff: "Medium" },
        { text: "Jelaskan konsep dasar dari Supply Chain Management (SCM) berbasis Teknologi Informasi.", diff: "Medium" },
        { text: "Berikan contoh penerapan Sistem Pendukung Keputusan (DSS) di dunia nyata dan bagaimana algoritma membantu keputusan tersebut.", diff: "Hard" },
        { text: "Mengapa tata kelola keamanan informasi sangat krusial dalam arsitektur Enterprise?", diff: "Hard" },
        { text: "Menurut Anda, apa tantangan teknis dan non-teknis terbesar saat mengimplementasikan ERP pada perusahaan berskala besar?", diff: "Hard" },
        { text: "Apa itu UML, apa berapa diagram UML? apa saja?", diff: "Hard" }
    ],
    "🌐 Pemrograman Web": [
        { text: "Apa kepanjangan dari HTML, apa HTML itu bahasa pemrograman?", diff: "Easy" },
        { text: "Buat halaman biodata HTML Sederhana", diff: "Easy" },
        { text: "Tag HTML apa yang digunakan untuk membuat sebuah tautan (hyperlink) ke halaman lain?", diff: "Easy" },
        { text: "Sebutkan fungsi utama dari CSS (Cascading Style Sheets) dalam pengembangan web.", diff: "Easy" },
        { text: "Apa yang dimaksud dengan Responsive Web Design?", diff: "Easy" },
        { text: "Buat sebuah halaman web sederhana menggunakan HTML yang menampilkan biodata mahasiswa. Halaman tersebut harus menampilkan informasi berupa nama, NIM, program studi, email, dan foto profil. Gunakan struktur HTML yang sesuai agar informasi dapat ditampilkan dengan rapi", diff: "Medium" },
        { text: "Apa keuntungan menggunakan framework modern seperti React, Vue, atau Laravel dibandingkan Native?", diff: "Medium" },
        { text: "Jelaskan perbedaan antara fungsi LocalStorage, SessionStorage, dan Cookies pada browser.", diff: "Medium" },
        { text: "Buat sebuah halaman web sederhana menggunakan HTML dan JavaScript yang menampilkan tombol. Ketika tombol diklik, tampilkan pesan Hello World!", diff: "Medium" },
        { text: "Jelaskan perbedaan arsitektur Client-Side Rendering (CSR) dan Server-Side Rendering (SSR).", diff: "Hard" }
    ],
    "📚 Rekayasa Perangkat Lunak": [
        { text: "Apa yang dimaksud dengan Rekayasa Perangkat Lunak (Software Engineering)?", diff: "Easy" },
        { text: "Jelaskan perbedaan paling dasar antara Black-Box Testing dan White-Box Testing.", diff: "Easy" },
        { text: "Mengapa version control (seperti Git) wajib digunakan saat bekerja dalam tim pengembangan?", diff: "Easy" },
        { text: "Apa fungsi utama dari Flowchart dan Use Case Diagram sebelum mulai mengoding?", diff: "Easy" },
        { text: "Sebutkan perbedaan antara 'Error', 'Bug', dan 'Failure' dalam perangkat lunak.", diff: "Easy" },
        { text: "Apa kelebihan dan kekurangan metode Agile dibandingkan dengan metode Waterfall?", diff: "Medium" },
        { text: "Jelaskan apa itu Unit Testing dan mengapa hal tersebut penting dalam siklus pengembangan.", diff: "Medium" },
        { text: "Apa perbedaan antara Functional Requirement (Kebutuhan Fungsional) dan Non-Functional Requirement?", diff: "Medium" },
        { text: "Apa yang dimaksud dengan Code Refactoring dan kapan sebaiknya itu dilakukan?", diff: "Medium" },
        { text: "Apa itu UML? ada berapa diagram UML? sebutkan", diff: "Hard" },
        { text: "Apa itu Object Oriented Design, berikan contoh!", diff: "Hard" }
    ],
    "🎮 Game Development": [
        { text: "Apa yang dimaksud dengan Game Engine? Berikan 2 contoh Game Engine terpopuler.", diff: "Easy" },
        { text: "Jelaskan fungsi utama dari komponen Collider dan Rigidbody pada game engine seperti Unity.", diff: "Easy" },
        { text: "Apa yang dimaksud dengan Asset dalam pembuatan game?", diff: "Easy" },
        { text: "Jelaskan perbedaan paling terlihat antara pengembangan game 2D dan 3D.", diff: "Easy" },
        { text: "Sebutkan dan jelaskan tiga elemen utama dalam desain game yang menentukan pengalaman pemain", diff: "Easy" },
        { text: "Buatkan contoh aset baru untuk game anda", diff: "Medium" },
        { text: "lakukan perubahan tampilan game anda", diff: "Medium" },
        { text: "alasan menggunakan metode pengembangan game ini apa, apa kelebihan dan kekurangan dengan metode lain?", diff: "Medium" },
        { text: "kenapa menggunakan metode pengujian ini, apa kelemahan dan kelebihan dari metode lain? apa ini sudah bisa mengukur gamenya dan apakah tujuan sudah tercapai?", diff: "Medium" },
        { text: "Sebutkan perbedaan antara UI (User Interface) menu dan HUD (Heads-Up Display) saat in-game.", diff: "Medium" },
        { text: "Bagaimana konsep dasar pembuatan kecerdasan buatan (AI) musuh (seperti State Machine atau Behavior Tree)?", diff: "Hard" },
        { text: "Sebutkan teknik optimasi performa agar game tidak lag di HP spesifikasi rendah.", diff: "Hard" }
    ],
    "💾 Basis Data": [
        { text: "Apa perbedaan utama antara database Relasional (SQL) dan Non-Relasional (NoSQL)?", diff: "Easy" },
        { text: "Apa yang dimaksud dengan Primary Key dalam sebuah tabel database?", diff: "Easy" },
        { text: "Apa fungsi dari perintah dasar SELECT, INSERT, UPDATE, dan DELETE dalam SQL?", diff: "Easy" },
        { text: "Apa perbedaan antara penggunaan tipe data VARCHAR dan INT di database?", diff: "Easy" },
        { text: "Sebutkan 3 contoh Sistem Manajemen Basis Data (DBMS) yang populer.", diff: "Easy" },
        { text: "Jelaskan apa itu proses Normalisasi dalam perancangan database dan sebutkan tujuannya.", diff: "Medium" },
        { text: "Apa kegunaan dari operasi JOIN (Inner, Left, Right)? Berikan contoh kasus penggunaannya.", diff: "Medium" },
        { text: "Apa yang dimaksud dengan Foreign Key dan apa fungsinya dalam menjaga relasi data?", diff: "Medium" },
        { text: "Jelaskan perbedaan antara kelompok perintah DDL (Data Definition) dan DML (Data Manipulation).", diff: "Medium" },
        { text: "Apa itu Entity Relationship Diagram (ERD) dan mengapa penting sebelum membuat tabel database?", diff: "Medium" },
        { text: "buat ERD dari suatu sistem informasi, misalnya sistem informasi akademik sekolah", diff: "Hard" }
    ],
    "🧠 Logika": [
        { text: "Aku memiliki ruang (Space) tapi tak punya planet. Aku bisa masuk (Enter) tapi tak punya pintu. Siapakah aku?", diff: "Easy" },
        { text: "Jika kamu membuat Array berisi teks: ['Data1', 'Data2', 'Data10'] di JavaScript, lalu menjalankan perintah .sort(), urutannya malah menjadi Data1, Data10, baru Data2. Mengapa logika dasar bahasa pemrograman mengurutkannya seperti itu?", diff: "Easy" },
        { text: "Seorang user mengeluh gagal login padahal dia yakin 100% ketikan password-nya benar. Jaringan internet lancar, server aman, dan keyboard tidak rusak. Kesalahan sepele apa yang paling logis terjadi di komputernya?", diff: "Easy" },
        { text: "Sebuah program kalkulator sederhana yang baru saja dibuat menampilkan hasil: 1 + 1 = 11. Kesalahan logika dasar apa yang dilakukan oleh programmernya?", diff: "Easy" },
        { text: "Kamu mendownload file dengan estimasi selesai 1 jam. Tiba-tiba teman sebelahmu mematikan komputernya, dan estimasi download-mu berubah drastis menjadi 30 menit. Apa penjelasan logisnya?", diff: "Easy" },
        { text: "Jika 5 mesin butuh 5 menit untuk membuat 5 alat, berapa lama 100 mesin membuat 100 alat?", diff: "Medium" },
        { text: "Kereta listrik melaju ke arah utara dengan kecepatan 100 km/jam, ke arah mana asapnya berhembus?", diff: "Medium" },
        { text: "Kamu berada di ruang gelap gulita, di sana ada obor, lilin, dan tungku kayu. Kamu hanya punya 1 korek api. Apa yang kamu nyalakan duluan?", diff: "Medium" },
        { text: `Seorang petani harus menyeberangkan serigala, kambing, dan kol menggunakan satu perahu kecil (kapasitas: petani + 1 objek).<br><br>Aturan:<br>- Serigala tidak boleh ditinggal bersama kambing.<br>- Kambing tidak boleh ditinggal bersama kol.<br><br>Pertanyaan:<br>Jelaskan urutan logika penyeberangan agar semua selamat.`, diff: "Hard" }
    ],
    "💼 Interview Kerja": [
        { text: "Ceritakan tentang diri Anda dan mengapa Anda sangat tertarik melamar posisi ini?", diff: "Easy" },
        { text: "Apa motivasi terbesar Anda melamar di perusahaan kami dibandingkan perusahaan lain?", diff: "Easy" },
        { text: "Sebutkan satu mata kuliah atau proyek di kampus yang membuat Anda merasa siap bekerja.", diff: "Easy" },
        { text: "Apa 3 kelebihan dan 1 kelemahan terbesar yang Anda miliki saat ini?", diff: "Easy" },
        { text: "Lingkungan kerja dan gaya kepemimpinan atasan seperti apa yang membuat Anda merasa produktif?", diff: "Easy" },
        { text: "Apa pencapaian akademis atau organisasi terbesar Anda sejauh ini selama menjadi mahasiswa?", diff: "Medium" },
        { text: "Di mana Anda melihat diri Anda dan karir Anda dalam 3 hingga 5 tahun ke depan?", diff: "Medium" },
        { text: "Ceritakan pengalaman Anda saat harus bekerja di dalam tim yang anggotanya memiliki pendapat yang saling bertentangan.", diff: "Medium" },
        { text: "Bagaimana cara Anda mengatur prioritas ketika dihadapkan pada banyak tugas dengan tenggat waktu (deadline) yang bersamaan?", diff: "Medium" },
        { text: "Berikan contoh situasi spesifik di mana Anda mengambil inisiatif untuk melakukan pekerjaan di luar dari tanggung jawab utama Anda.", diff: "Medium" },
        { text: "Ceritakan pengalaman saat Anda menghadapi konflik personal dengan rekan satu tim atau dosen. Bagaimana Anda menyelesaikannya secara profesional?", diff: "Hard" },
        { text: "Ceritakan sebuah pengalaman terberat ketika Anda GAGAL mencapai target/ekspektasi. Apa yang Anda pelajari dari kegagalan tersebut?", diff: "Hard" },
        { text: "Jika perusahaan memiliki *best practice* teknis yang bertolak belakang dengan apa yang Anda yakini benar, bagaimana sikap Anda?", diff: "Hard" },
        { text: "Bagaimana Anda menghadapi klien atau stakeholder yang selalu mengubah-ubah requirement (kebutuhan) di pertengahan *sprint* proyek?", diff: "Hard" },
        { text: "Sebagai penutup, mengapa kami harus merekrut Anda dibandingkan dengan kandidat lain yang memiliki IPK lebih tinggi dan kampus lebih ternama?", diff: "Hard" }
    ]
};

// 2. State Aplikasi
let selectedCategories = new Set(); 
let shownQuestions = new Set(); 
let answeredCount = 0;
let isGachaRolling = false;
let isJackpotMode = false;

// --- STATE PROGRESS BARU ---
let playerName = "";
let progressStep = 0;
let correctCount = 0;
let answerRecords = []; 
const MAX_STEPS = 4;

// 3. Konfigurasi Desain Tingkat Kesulitan
const diffConfig = {
    "Easy": { color: "#26890c", icon: "👶" },     
    "Medium": { color: "#f26200", icon: "🧑‍💻" }, 
    "Hard": { color: "#e21b3c", icon: "🤯" }      
};

// 4. Inisialisasi Audio
const soundRolling = new Audio('rolling.MP3');
soundRolling.loop = true; 
const soundTada = new Audio('tada.MP3');
const soundVictory = new Audio('victory.mp3');

// 5. Elemen Utama HTML
const categoryContainer = document.getElementById('categoryContainer');
const generateBtn = document.getElementById('generateBtn');
const actionButtons = document.getElementById('actionButtons');
const questionDisplay = document.getElementById('questionDisplay');
const answeredCountDisplay = document.getElementById('answeredCount');
const questionBox = document.querySelector('.question-box');
const popupOverlay = document.getElementById('skipPopup');
const historyBody = document.getElementById('historyBody');
const welcomeModal = document.getElementById('welcomeModal');
const progressBarContainer = document.getElementById('progressBarContainer');

// FUNGSI KESULITAN BERDASARKAN PROGRESS
function getRequiredDifficulty() {
    if (progressStep === 0 || progressStep === 1) return "Easy";
    if (progressStep === 2) return "Medium";
    if (progressStep === 3) return "Hard";
    return "Selesai";
}

// AWAL MULAI
document.getElementById('startBtn').addEventListener('click', () => {
    const inputName = document.getElementById('playerNameInput').value.trim();
    if (inputName) {
        playerName = inputName;
        // Hanya update value namanya saja, karena labelnya dipisah di span
        document.getElementById('userNameDisplay').innerText = playerName;
        welcomeModal.style.display = 'none';
        initProgressBar(); 
        updateProgressUI(); 
        checkGenerateButton(); 
    } else {
        alert("Silakan masukkan nama lengkap mahasiswa terlebih dahulu!");
    }
});

// TUTUP POPUP JACKPOT (Dihitung Benar)
document.getElementById('closePopupBtn').addEventListener('click', () => {
    popupOverlay.style.display = 'none';
    if (isJackpotMode) {
        isJackpotMode = false;
        handleAnswer(true); 
    }
});

// 6. KATEGORI BUTTONS
let colorIndex = 0;
Object.keys(quizData).forEach(category => {
    const btn = document.createElement('button');
    btn.classList.add('cat-btn');
    btn.innerText = category;
    
    const btnColorClass = `color-${colorIndex % 7}`;
    colorIndex++;

    btn.addEventListener('click', () => {
        if (isGachaRolling || progressStep >= MAX_STEPS) return; 

        if (selectedCategories.has(category)) {
            selectedCategories.delete(category);
            btn.classList.remove('active', btnColorClass);
        } else {
            selectedCategories.add(category);
            btn.classList.add('active', btnColorClass);
        }
        checkGenerateButton();
    });
    categoryContainer.appendChild(btn);
});

function checkGenerateButton() {
    if (progressStep >= MAX_STEPS) return; 

    if (selectedCategories.size > 0 && !isGachaRolling) {
        generateBtn.disabled = false;
        generateBtn.innerText = "Gacha Pertanyaan! 🎲"; 
    } else {
        generateBtn.disabled = true;
        if (!isGachaRolling) generateBtn.innerText = "Pilih kategori ujian...";
    }
}

function fireConfetti() {
    if (typeof confetti === 'function') {
        var duration = 3000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, zIndex: 10000 });
            confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, zIndex: 10000 });
            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    }
}

// 7. EFEK GACHA
function rollGacha(finalResult) {
    isGachaRolling = true;
    checkGenerateButton(); 
    
    questionBox.classList.remove('result-question', 'result-skip');
    questionBox.classList.add('gacha-rolling');
    
    soundRolling.currentTime = 0;
    soundRolling.play();

    let allQuestionsText = [];
    Object.values(quizData).forEach(qArr => {
        qArr.forEach(qObj => allQuestionsText.push(qObj.text));
    });

    let rollTime = 0;
    const duration = 3500; 
    const intervalTime = 80; 

    const rollingInterval = setInterval(() => {
        const randomDummy = allQuestionsText[Math.floor(Math.random() * allQuestionsText.length)];
        questionDisplay.innerHTML = randomDummy;
        rollTime += intervalTime;

        if (rollTime >= duration) {
            clearInterval(rollingInterval);
            finishGacha(finalResult);
        }
    }, intervalTime);
}

function finishGacha(finalResult) {
    isGachaRolling = false;
    questionBox.classList.remove('gacha-rolling');
    questionDisplay.innerHTML = finalResult.html;
    soundRolling.pause();
    
    if (finalResult.type === "skip") {
        questionBox.classList.add('result-skip');
        soundVictory.currentTime = 0;
        soundVictory.play();
        
        isJackpotMode = true; 
        popupOverlay.style.display = 'flex';
        fireConfetti();
        
    } else {
        questionBox.classList.add('result-question');
        soundTada.currentTime = 0;
        soundTada.play();
        
        answeredCount++;
        answeredCountDisplay.innerText = answeredCount;
        
        // Simpan History
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="text-align: center;">${answeredCount}</td>
            <td style="font-weight: bold; color: #555;">${finalResult.category}</td>
            <td style="color: ${diffConfig[finalResult.diff].color};">
                ${diffConfig[finalResult.diff].icon} ${finalResult.diff}
            </td>
            <td>${finalResult.rawText}</td>
        `;
        historyBody.prepend(tr);
        
        // Munculkan Action Benar/Salah
        actionButtons.style.display = 'flex';
        generateBtn.style.display = 'none';
        document.querySelectorAll('.cat-btn').forEach(b => b.disabled = true);
    }
}

// 8. GENERATE TOMBOL GACHA
generateBtn.addEventListener('click', () => {
    if (selectedCategories.size === 0 || isGachaRolling || progressStep >= MAX_STEPS) return;

    let reqDiff = getRequiredDifficulty();
    let availableQuestions = [];
    
    selectedCategories.forEach(cat => {
        quizData[cat].forEach(qObj => {
            if (!shownQuestions.has(qObj.text) && qObj.diff === reqDiff) {
                availableQuestions.push({ ...qObj, category: cat });
            }
        });
    });

    let finalResult = { type: "", html: "", rawText: "", category: "", diff: "" };
    
    if (availableQuestions.length === 0) {
        questionBox.className = 'question-box result-question';
        questionDisplay.innerHTML = `⚠️ <b>Opss!</b> Tidak ada soal tingkat <b>${reqDiff}</b> tersisa di kategori ini. Silakan centang kategori lain!`;
        return; 
    } 

    const randomNumber = Math.random(); 
    
    if (randomNumber < 0.10) {
        finalResult.type = "skip";
        finalResult.html = "🎉 JACKPOT! Anda mendapatkan SKIP pertanyaan di putaran ini 😁";
    } else {
        const randomObj = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
        const config = diffConfig[randomObj.diff];
        
        finalResult.type = "question";
        finalResult.rawText = randomObj.text;
        finalResult.category = randomObj.category;
        finalResult.diff = randomObj.diff;
        
        finalResult.html = `
            <div style="font-size: 1.1rem; font-weight: 800; margin-bottom: 15px; letter-spacing: 1px; text-transform: uppercase; color: #555;">
                TINGKAT KESULITAN: <span style="color: ${config.color};">${config.icon} ${randomObj.diff}</span>
            </div>
            ${randomObj.text}
        `;
        shownQuestions.add(finalResult.rawText);
    }

    rollGacha(finalResult);
});

// ==========================================
// LOGIKA TOMBOL AKSI BENAR & SALAH
// ==========================================

document.getElementById('btnBenar').addEventListener('click', () => handleAnswer(true));
document.getElementById('btnSalah').addEventListener('click', () => handleAnswer(false));

function handleAnswer(isCorrect) {
    if (progressStep < MAX_STEPS) {
        if (isCorrect) {
            correctCount++;
            answerRecords.push("correct");
        } else {
            answerRecords.push("wrong");
        }
        
        progressStep++; 
        updateProgressUI();
    }
    
    if (progressStep >= MAX_STEPS) {
        finishExam();
    } else {
        resetForNextQuestion();
    }
}

function resetForNextQuestion() {
    actionButtons.style.display = 'none';
    generateBtn.style.display = 'block';
    document.querySelectorAll('.cat-btn').forEach(b => b.disabled = false); 
    
    questionBox.className = 'question-box';
    questionDisplay.innerHTML = `Silakan gacha pertanyaan selanjutnya!`;
    checkGenerateButton();
}

function initProgressBar() {
    progressBarContainer.innerHTML = '';
    for(let i=0; i<MAX_STEPS; i++){
        const seg = document.createElement('div');
        seg.className = 'progress-segment segment-empty';
        progressBarContainer.appendChild(seg);
    }
}

function updateProgressUI() {
    progressBarContainer.innerHTML = '';
    for(let i=0; i<MAX_STEPS; i++){
        const seg = document.createElement('div');
        seg.className = 'progress-segment';
        
        if (i < answerRecords.length) {
            seg.classList.add(answerRecords[i] === 'correct' ? 'segment-correct' : 'segment-wrong');
        } else {
            seg.classList.add('segment-empty');
        }
        progressBarContainer.appendChild(seg);
    }

    document.getElementById('progressText').innerText = `${progressStep}/${MAX_STEPS}`;

    const currentDiff = getRequiredDifficulty();
    if (currentDiff !== "Selesai") {
        const diffSpan = document.getElementById('currentDiffText');
        diffSpan.innerText = currentDiff;
        diffSpan.style.color = diffConfig[currentDiff].color;
    }
}

function finishExam() {
    actionButtons.style.display = 'none';
    generateBtn.style.display = 'none'; 
    document.querySelectorAll('.cat-btn').forEach(b => b.disabled = true);
    
    const percentage = (correctCount / MAX_STEPS) * 100;
    let finalGrade = "";
    
    if (percentage === 0) finalGrade = "E (0%)";
    else if (percentage === 25) finalGrade = "D (25%)";
    else if (percentage === 50) finalGrade = "C+ (50%)";
    else if (percentage === 75) finalGrade = "B+ (75%)";
    else if (percentage === 100) finalGrade = "A (100%)";

    questionBox.className = 'question-box result-skip';
    questionDisplay.innerHTML = `
        <h2 style="margin: 0; color: #1b6308; font-size: 2rem;">🎉 UJIAN SELESAI 🎉</h2>
        <h3 style="margin-top: 10px; color: #1368ce;">Mahasiswa: ${playerName.toUpperCase()}</h3>
        <div style="font-size: 1.5rem; font-weight: 800; margin-top: 20px; margin-bottom: 25px; color: #333;">
            GRADE AKHIR: <span style="color: var(--orange); font-size: 2.2rem;">${finalGrade}</span>
        </div>
        <!-- TOMBOL RESTART -->
        <button id="btnRestart" class="kahoot-btn btn-play" style="width: auto; padding: 12px 30px; font-size: 1.1rem; margin: 0 auto; display: inline-block;">
            🔄 Main Lagi!
        </button>
    `;
    
    // Fungsi me-refresh halaman untuk mahasiswa berikutnya
    document.getElementById('btnRestart').addEventListener('click', () => {
        location.reload(); 
    });
    
    document.getElementById('currentDiffText').innerText = "Selesai";
    document.getElementById('currentDiffText').style.color = "#864cbf";

    fireConfetti();
    soundVictory.currentTime = 0;
    soundVictory.play();
}
