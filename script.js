// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    loadConfigData(); // Load config first so other initializers have the data
    initializeApp();
    createBackgroundEffects();
    initializeCountdown();
    initializeMusicPlayer();
    initializeThemeToggle();
    initializeProposalPage();
    initializeNavigation();
    initializeDebugMode();
});

// ===================================
// CONFIGURATION
// ===================================

function loadConfigData() {
    if (typeof CONFIG !== 'undefined') {
        // Update entry page
        const mainTitle = document.getElementById('mainTitle');
        const subtitle = document.getElementById('subtitle');

        if (CONFIG.entryPage) {
            if (mainTitle && CONFIG.entryPage.title) {
                mainTitle.textContent = CONFIG.entryPage.title;
            }
            if (subtitle && CONFIG.entryPage.subtitle) {
                subtitle.textContent = CONFIG.entryPage.subtitle;
            }
        }

        // Set music if available
        const bgMusic = document.getElementById('bgMusic');
        if (bgMusic && CONFIG.musicFile) {
            bgMusic.src = CONFIG.musicFile;
        }
    }
}

// ===================================
// BACKGROUND EFFECTS
// ===================================

function createBackgroundEffects() {
    createStars();
    createFloatingHearts();
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;

    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

function createFloatingHearts() {
    const heartsContainer = document.getElementById('hearts');
    if (!heartsContainer) return;

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = ['💕', '💖', '💗', '💝', '❤️'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 7000);
    }, 2000);
}

// ===================================
// COUNTDOWN TIMER
// ===================================

function initializeCountdown() {
    const dEl = document.getElementById('days');
    const hEl = document.getElementById('hours');
    const mEl = document.getElementById('minutes');
    const sEl = document.getElementById('seconds');

    if (!dEl) return;

    function updateCountdown() {
        const startDate = new Date(CONFIG?.relationshipStartDate || '2024-02-14');
        const now = new Date();
        const diff = now - startDate;

        if (diff < 0) {
            // Future date, show all zeros
            dEl.textContent = '0';
            hEl.textContent = '0';
            mEl.textContent = '0';
            sEl.textContent = '0';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        dEl.textContent = days;
        hEl.textContent = hours.toString().padStart(2, '0');
        mEl.textContent = minutes.toString().padStart(2, '0');
        sEl.textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// ===================================
// MUSIC PLAYER
// ===================================

let isPlaying = false;
let currentSongIndex = 0;

function initializeMusicPlayer() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const songTitle = document.getElementById('currentSongTitle');

    if (!musicToggle || !bgMusic) {
        console.error("Music elements not found!");
        return;
    }

    function updateSongUI() {
        if (CONFIG.musicPlaylist && CONFIG.musicPlaylist[currentSongIndex]) {
            const song = CONFIG.musicPlaylist[currentSongIndex];
            if (songTitle) songTitle.textContent = song.title;
        }
    }

    function playSong() {
        if (!CONFIG.musicPlaylist || CONFIG.musicPlaylist.length === 0) return;
        bgMusic.src = CONFIG.musicPlaylist[currentSongIndex].file;
        bgMusic.load();
        bgMusic.play().then(() => {
            isPlaying = true;
            musicToggle.classList.add('playing');
            if (playPauseBtn) playPauseBtn.textContent = '⏸️';
            updateSongUI();
        }).catch(err => console.log('Playback failed:', err));
    }

    function togglePlay() {
        if (isPlaying) {
            bgMusic.pause();
            isPlaying = false;
            musicToggle.classList.remove('playing');
            if (playPauseBtn) playPauseBtn.textContent = '▶️';
        } else {
            playSong();
        }
    }

    updateSongUI();

    if (playPauseBtn) playPauseBtn.addEventListener('click', (e) => { e.stopPropagation(); togglePlay(); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentSongIndex = (currentSongIndex + 1) % CONFIG.musicPlaylist.length;
        playSong();
    });
    if (prevBtn) prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentSongIndex = (currentSongIndex - 1 + CONFIG.musicPlaylist.length) % CONFIG.musicPlaylist.length;
        playSong();
    });

    musicToggle.addEventListener('click', togglePlay);
    bgMusic.addEventListener('ended', () => {
        currentSongIndex = (currentSongIndex + 1) % CONFIG.musicPlaylist.length;
        playSong();
    });

    document.addEventListener('click', () => {
        if (bgMusic.paused && !isPlaying) {
            bgMusic.play().then(() => bgMusic.pause()).catch(e => { });
        }
    }, { once: true });
}

// ===================================
// THEME TOGGLE
// ===================================

function initializeThemeToggle() {
    const toggleBtn = document.getElementById('toggleBtn');
    const body = document.body;

    if (!toggleBtn) return;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.className = savedTheme + '-mode';

    toggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light');
        }
    });
}

// ===================================
// PROPOSAL PAGE (New)
// ===================================

function initializeProposalPage() {
    const proposalPage = document.getElementById('proposalPage');
    const entryPage = document.getElementById('entryPage');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const proposalGif = document.getElementById('proposalGif');

    if (!proposalPage || !yesBtn || !noBtn) return;

    // The No Button Dodge Logic
    const moveButton = () => {
        // Calculate random positions across the entire screen
        // Subtract a margin (e.g., 100px) to keep it within view
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 80);

        noBtn.classList.add('moving');
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;

        // Change GIF on dodge
        if (proposalGif) {
            proposalGif.src = 'assets/photos/Teddy Bear GIF.gif';
        }
    };

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton);

    // The Yes Button Success Logic
    yesBtn.addEventListener('click', () => {
        // Change feedback
        if (proposalGif) {
            proposalGif.src = 'assets/photos/Milk And Mocha Love GIF.gif';
        }

        // Celebration effect
        createFloatingHearts();

        // Transition to main site
        proposalPage.style.opacity = '0';
        proposalPage.style.transform = 'scale(1.5)';

        setTimeout(() => {
            proposalPage.classList.add('hidden');
            entryPage.classList.remove('hidden');

            // Auto-start music if possible after "Yes" interaction
            const bgMusic = document.getElementById('bgMusic');
            if (bgMusic) {
                bgMusic.play().catch(e => console.log("Auto-play blocked, user needs another click"));
            }
        }, 1000);
    });
}

// ===================================
// NAVIGATION
// ===================================

function initializeNavigation() {
    const enterBtn = document.getElementById('enterBtn');
    const backToEntry = document.getElementById('backToEntry');
    const entryPage = document.getElementById('entryPage');
    const galleryPage = document.getElementById('galleryPage');

    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            entryPage.classList.add('hidden');
            galleryPage.classList.remove('hidden');
            if (typeof updateLockedCards === 'function') updateLockedCards();
        });
    }

    if (backToEntry) {
        backToEntry.addEventListener('click', () => {
            galleryPage.classList.add('hidden');
            entryPage.classList.remove('hidden');
        });
    }

    // Day card clicks
    const dayCards = document.querySelectorAll('.day-card');
    dayCards.forEach(card => {
        card.addEventListener('click', () => {
            const day = card.dataset.day;

            // Check lock status
            if (typeof isCardLocked === 'function' && isCardLocked(day)) {
                // Shake animation for locked card
                card.classList.add('shake');
                setTimeout(() => card.classList.remove('shake'), 500);

                const unlockDate = getUnlockDate(day);
                showToast(`Opens in ${getTimeRemaining(unlockDate)} 🔒`);
                return;
            }

            if (day === 'valentine') {
                openValentinePage();
            } else {
                openDayPage(day);
            }
        });
    });
}

// ===================================
// DAY PAGES
// ===================================

function openDayPage(dayType) {
    const galleryPage = document.getElementById('galleryPage');
    const dayPage = document.getElementById('dayPage');

    galleryPage.classList.add('hidden');
    dayPage.classList.remove('hidden');
    window.scrollTo(0, 0);

    const dayData = getDayData(dayType);
    renderDayPage(dayPage, dayData, dayType);
}

function getDayData(dayType) {
    const dayMap = {
        'rose': 'roseDay',
        'propose': 'proposeDay',
        'chocolate': 'chocolateDay',
        'teddy': 'teddyDay',
        'promise': 'promiseDay',
        'hug': 'hugDay',
        'kiss': 'kissDay'
    };

    const configKey = dayMap[dayType];
    return CONFIG?.days?.[configKey] || {
        title: dayType.charAt(0).toUpperCase() + dayType.slice(1) + ' Day',
        color: '#ff6b9d',
        message: 'A special day in our journey together.',
        photos: [],
        memories: 'Beautiful memories...'
    };
}

function renderDayPage(container, dayData, dayType) {
    container.innerHTML = `
        <style>
            .day-page {
                min-height: 100vh;
                padding: 6rem 2rem 4rem;
            }
            
            .day-header {
                text-align: center;
                margin-bottom: 3rem;
                animation: fadeInDown 0.8s ease;
            }
            
            .day-icon-large {
                font-size: 5rem;
                margin-bottom: 1rem;
                animation: bounce 2s infinite;
            }
            
            .day-title-page {
                font-family: var(--font-display);
                font-size: clamp(2.5rem, 6vw, 4rem);
                color: ${dayData.color};
                margin-bottom: 0.5rem;
            }
            
            .day-date-page {
                font-size: 1.2rem;
                color: var(--text-secondary);
                margin-bottom: 2rem;
            }
            
            .day-message {
                max-width: 800px;
                margin: 0 auto 3rem;
                padding: 2rem;
                background: var(--card-bg);
                backdrop-filter: blur(var(--blur));
                border: 2px solid var(--glass-border);
                border-radius: 20px;
                text-align: center;
                font-size: 1.3rem;
                font-style: italic;
                color: var(--text-primary);
                box-shadow: var(--shadow);
            }
            
            .photos-section {
                max-width: 1200px;
                margin: 0 auto 3rem;
            }
            
            .section-title {
                font-family: var(--font-display);
                font-size: 2rem;
                color: var(--text-primary);
                text-align: center;
                margin-bottom: 2rem;
            }
            
            .photos-grid {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 1rem;
                margin-bottom: 3rem;
                width: 100%;
            }
            
            .photo-card {
                position: relative;
                width: 100%;
                max-width: 800px;
                aspect-ratio: auto;
                border-radius: 15px;
                overflow: hidden;
                background: var(--card-bg);
                backdrop-filter: blur(var(--blur));
                border: 3px solid white;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                transition: all 0.3s ease;
                margin: 0 auto;
            }
            
            .photo-card img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
            
            .photo-placeholder {
                width: 100%;
                min-height: 300px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, ${dayData.color}33, ${dayData.color}66);
                color: white;
                font-size: 3rem;
            }
            
            .memories-section {
                max-width: 800px;
                margin: 0 auto 3rem;
                padding: 2rem;
                background: var(--card-bg);
                backdrop-filter: blur(var(--blur));
                border: 2px solid var(--glass-border);
                border-left: 5px solid ${dayData.color};
                border-radius: 15px;
                box-shadow: var(--shadow);
            }
            
            .memories-text {
                color: var(--text-primary);
                font-size: 1.1rem;
                line-height: 1.8;
            }
            
            /* Cute Mascot Animation */
            .cute-mascot-container {
                text-align: center;
                margin: 2rem auto;
                max-width: 300px;
            }

            .cute-mascot {
                width: 100%;
                max-width: 250px;
                height: auto;
                filter: drop-shadow(0 5px 15px rgba(0,0,0,0.1));
                animation: floatMascot 3s ease-in-out infinite;
            }
            
            .back-btn {
                display: block;
                margin: 2rem auto;
                padding: 1rem 2rem;
                background: var(--card-bg);
                backdrop-filter: blur(var(--blur));
                border: 2px solid var(--glass-border);
                border-radius: 50px;
                color: var(--text-primary);
                font-size: 1rem;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .back-btn:hover {
                border-color: ${dayData.color};
                transform: translateX(-5px);
            }
        </style>
        
        <div class="day-header">
            <div class="day-icon-large">${getDayIcon(dayType)}</div>
            <h1 class="day-title-page">${dayData.title}</h1>
            <p class="day-date-page">${dayData.date}</p>
        </div>
        
        <div class="day-message">
            ${dayData.message}
        </div>
        
        <div class="photos-section">
            <h2 class="section-title">Our Memories 📸</h2>
            <div class="photos-grid">
                ${generatePhotoCards(dayData.photos, dayType, dayData.color)}
            </div>
        <div class="memories-section">
            <p class="memories-text">${dayData.memories}</p>
        </div>

        <!-- CUTE MASCOT SECTION -->
        <div class="cute-mascot-container" style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            ${(() => {
            const images = Array.isArray(dayData.cuteImage) ? dayData.cuteImage : (dayData.cuteImage ? [dayData.cuteImage] : []);
            return images.map(img => {
                if (img.toLowerCase().endsWith('.mp4')) {
                    return `<video src="${img}" class="cute-mascot" autoplay loop muted playsinline style="max-width: 150px; height: auto;"></video>`;
                } else {
                    return `<img src="${img}" class="cute-mascot" alt="Cute Valentine Mascot" style="max-width: 150px; height: auto;">`;
                }
            }).join('');
        })()}
            
            ${(!dayData.cuteImage || (Array.isArray(dayData.cuteImage) && dayData.cuteImage.length === 0)) ? '' : ''}
        </div>
        
        <button class="back-btn" id="backToGallery">
            ← Back to Gallery
        </button>
    `;

    // Back button
    document.getElementById('backToGallery').addEventListener('click', () => {
        container.classList.add('hidden');
        document.getElementById('galleryPage').classList.remove('hidden');
    });
}

function getDayIcon(dayType) {
    const icons = {
        'rose': '🌹',
        'propose': '💍',
        'chocolate': '🍫',
        'teddy': '🧸',
        'promise': '🤝',
        'hug': '🤗',
        'kiss': '💋'
    };
    return icons[dayType] || '💕';
}

function generatePhotoCards(photos, dayType, color) {
    if (photos && photos.length > 0) {
        return photos.map(photo => {
            const isVideo = photo.toLowerCase().endsWith('.mp4');
            return `
                <div class="photo-card">
                    ${isVideo ?
                    `<video src="${photo}" controls playsinline style="width: 100%; height: auto; object-fit: contain; display: block;"></video>` :
                    `<img src="${photo}" alt="${dayType} memory" style="width: 100%; height: auto; display: block;">`
                }
                </div>
            `;
        }).join('');
    }

    // Generate placeholder cards
    const icons = ['💕', '💖', '💗', '💝', '❤️', '💘'];
    return icons.map(icon => `
        <div class="photo-card">
            <div class="photo-placeholder">${icon}</div>
        </div>
    `).join('');
}

// ===================================
// VALENTINE'S DAY PAGE
// ===================================

function openValentinePage() {
    const galleryPage = document.getElementById('galleryPage');
    const valentinePage = document.getElementById('valentinePage');

    galleryPage.classList.add('hidden');
    valentinePage.classList.remove('hidden');
    window.scrollTo(0, 0);

    renderValentinePage(valentinePage);
}

function renderValentinePage(container) {
    container.innerHTML = `
        <style>
            .valentine-page {
                min-height: 100vh;
                padding: 6rem 2rem 4rem;
            }
            
            .valentine-header {
                text-align: center;
                margin-bottom: 3rem;
                animation: fadeInDown 0.8s ease;
            }
            
            .valentine-title {
                font-family: var(--font-script);
                font-size: clamp(3rem, 8vw, 5rem);
                background: linear-gradient(135deg, #e74c3c, #ff6b9d, #c44569);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 1rem;
            }
            
            .confetti {
                position: fixed;
                width: 10px;
                height: 10px;
                background: #e74c3c;
                position: absolute;
                animation: confetti-fall 3s linear;
            }

            @keyframes confetti-fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
            
            .video-section {
                max-width: 900px;
                margin: 0 auto 4rem;
            }
            
            .video-container {
                position: relative;
                padding-bottom: 56.25%;
                margin-bottom: 3rem;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                background: var(--card-bg);
                backdrop-filter: blur(var(--blur));
            }
            
            .video-container video {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .letter-section {
                max-width: 800px;
                margin: 0 auto;
            }
            
            .letter-paper {
                background: #fdfbf7;
                padding: 4rem;
                position: relative;
                box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                border-radius: 5px;
                transform: rotate(-1deg);
                transition: transform 0.3s ease;
            }
            
            .letter-paper::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e74c3c' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
            }
            
            .letter-paper:hover {
                transform: rotate(0deg) translateY(-5px);
                box-shadow: 0 15px 50px rgba(0,0,0,0.15);
            }
            
            .letter-header {
                text-align: center;
                margin-bottom: 3rem;
                position: relative;
                z-index: 1;
            }
            
            .letter-header-icon {
                font-size: 3rem;
                margin-bottom: 1rem;
                animation: heartBeat 2s infinite;
            }
            
            .letter-title {
                font-family: var(--font-script);
                font-size: 3rem;
                color: #c44569;
                margin-bottom: 0.5rem;
            }
            
            .letter-subtitle {
                font-family: var(--font-display);
                font-size: 1.1rem;
                color: #8b7355;
                font-style: italic;
            }
            
            .letter-body {
                position: relative;
                z-index: 1;
            }
            
            .letter-content {
                font-family: Georgia, 'Times New Roman', serif;
                font-size: 1.15rem;
                line-height: 2.2;
                color: #2d2416;
                margin-bottom: 3rem;
                white-space: pre-wrap;
                text-align: justify;
            }
            
            .letter-content::first-letter {
                font-size: 4rem;
                line-height: 1;
                float: left;
                margin: 0 0.1em 0 0;
                font-family: var(--font-display);
                color: #c44569;
            }
            
            .letter-signature-section {
                margin-top: 4rem;
                text-align: right;
            }
            
            .letter-closing {
                font-family: var(--font-display);
                font-size: 1.2rem;
                color: #5d4e37;
                font-style: italic;
                margin-bottom: 1.5rem;
            }
            
            .letter-signature {
                font-family: var(--font-script);
                font-size: 3rem;
                color: #c44569;
                margin-bottom: 0.5rem;
            }
            
            .letter-date {
                font-family: var(--font-display);
                font-size: 0.95rem;
                color: #8b7355;
            }
            
            .letter-decoration {
                position: absolute;
                opacity: 0.05;
                pointer-events: none;
            }
            
            .letter-decoration-1 {
                font-size: 15rem;
                top: -3rem;
                right: -2rem;
                transform: rotate(15deg);
            }
            
            .letter-decoration-2 {
                font-size: 12rem;
                bottom: -2rem;
                left: -2rem;
                transform: rotate(-20deg);
            }

            @media (max-width: 768px) {
                .letter-paper {
                    padding: 2.5rem 1.5rem;
                }
                
                .letter-content {
                    font-size: 1.05rem;
                    line-height: 2;
                }
            }
            
            .back-btn-valentine {
                display: block;
                margin: 4rem auto 2rem;
                padding: 1rem 2.5rem;
                background: linear-gradient(135deg, var(--primary), var(--secondary));
                color: white;
                border: none;
                border-radius: 50px;
                font-size: 1.1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 5px 20px rgba(231, 76, 60, 0.3);
            }
            
            .back-btn-valentine:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 30px rgba(231, 76, 60, 0.5);
            }

            /* Memory Wall Styles */
            .memory-wall-container {
                max-width: 900px;
                margin: 4rem auto;
                overflow: hidden;
            }

            .memory-wall {
                position: relative;
                height: 500px; 
                overflow-y: auto;
                border-radius: 20px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                background: rgba(255, 255, 255, 0.1);
                border: 5px solid #fff;
                padding: 15px;
            }

            .memory-track {
                columns: 2 180px; /* Masonry layout for the letter wall */
                column-gap: 15px;
                display: block;
            }

            .wall-item {
                break-inside: avoid;
                margin-bottom: 15px;
            }

            .wall-item img {
                width: 100%;
                height: auto;
                display: block;
                border-radius: 8px;
            }
        </style>
        
        <div class="valentine-header">
            <h1 class="valentine-title">Happy Valentine's Day! 💝</h1>
            <p style="font-size: 1.5rem; color: var(--text-secondary);">
                This day, and every day, I choose you.
            </p>
        </div>
        
        <div class="video-section">
            <h2 class="section-title">Where It All Began 🎬</h2>
            <div class="video-container">
                ${CONFIG?.valentineVideo?.meetingVideo ?
            `<video controls playsinline preload="auto" class="valentine-video" style="width: 100%; border-radius: 15px;">
                        <source src="${CONFIG.valentineVideo.meetingVideo}" type="video/mp4">
                        <p>Your browser doesn't support this video format. 
                           <a href="${CONFIG.valentineVideo.meetingVideo}" target="_blank" style="color: var(--primary); text-decoration: underline;">
                           Click here to download/play it directly.</a>
                        </p>
                    </video>` :
            `<div class="video-placeholder">
                        <div class="video-placeholder-icon">🎥</div>
                        <div class="video-placeholder-text">
                            Add your "where we met" video<br>
                            <small>Edit config.js → valentineVideo → meetingVideo</small>
                        </div>
                    </div>`
        }
            </div>
            
            <h2 class="section-title">Our Beautiful Journey 💕</h2>
            <div class="video-container">
                ${CONFIG?.valentineVideo?.journeyVideo ?
            `<video controls playsinline preload="auto" class="valentine-video" style="width: 100%; border-radius: 15px;">
                        <source src="${CONFIG.valentineVideo.journeyVideo}" type="video/mp4">
                        <p>Your browser doesn't support this video format. 
                           <a href="${CONFIG.valentineVideo.journeyVideo}" target="_blank" style="color: var(--primary); text-decoration: underline;">
                           Click here to download/play it directly.</a>
                        </p>
                    </video>` :
            `<div class="video-placeholder">
                        <div class="video-placeholder-icon">🎥</div>
                        <div class="video-placeholder-text">
                            A Beautiful Memory...
                        </div>
                    </div>`
        }
            </div>

            ${CONFIG?.valentineVideo?.extraVideo ? `
            <h2 class="section-title">A Special Memory ✨</h2>
            <div class="video-container">
                <video controls playsinline preload="auto" class="valentine-video" style="width: 100%; border-radius: 15px;">
                    <source src="${CONFIG.valentineVideo.extraVideo}" type="video/mp4">
                    <p>Your browser doesn't support this video format. 
                       <a href="${CONFIG.valentineVideo.extraVideo}" target="_blank" style="color: var(--primary); text-decoration: underline;">
                       Click here to download/play it directly.</a>
                    </p>
                </video>
            </div>` : ''}
        </div>
        
        <div class="letter-section">
            <h2 class="section-title">A Love Letter For You 💌</h2>
            <div class="letter-paper">
                <div class="letter-decoration letter-decoration-1">💕</div>
                <div class="letter-decoration letter-decoration-2">💝</div>
                
                <div class="letter-header">
                    <div class="letter-header-icon">💌</div>
                    <h3 class="letter-title">My Dearest Love</h3>
                    <p class="letter-subtitle">A message from the heart</p>
                </div>
                
                <div class="love-letter">
                    <div class="letter-content">${CONFIG?.loveLetter?.content ? CONFIG.loveLetter.content.replace(/\n/g, '<br>') : `My dearest love,\n\nEvery moment with you is a treasure. From the day we met, my life has been filled with joy, laughter, and endless love.\n\nYou are my sunrise and my sunset, my yesterday, today, and all my tomorrows.\n\nForever yours,\nWith all my heart`}</div>
                </div>
                    
                <div class="letter-signature-section">
                        <div class="letter-closing">With all my love,</div>
                        <div class="letter-signature">Forever Yours</div>
                        <div class="letter-date">Valentine's Day 2026 💕</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- MEMORY WALL SECTION (Infinite Scroll) -->
        <div class="memory-wall-container">
            <h2 class="section-title">Our Memory Wall 💖</h2>
            <div class="memory-wall">
                <div class="memory-track">
                    ${(() => {
            const photos = CONFIG.valentinePhotos || [];
            // Triplicate the photos array for an even smoother loop in masonry layout
            const duplicatedPhotos = [...photos, ...photos, ...photos];
            return duplicatedPhotos.map(photo => `
                            <div class="wall-item">
                                <img src="${photo}" alt="Memory" loading="lazy">
                            </div>
                        `).join('');
        })()}
                </div>
            </div>
        </div>
        
        <button class="back-btn-valentine" id="backToGalleryValentine">
            ← Back to Gallery
        </button>
    `;

    // Create confetti
    createConfetti();

    // Attach Video Listeners for Audio Sync
    const vids = document.querySelectorAll('.valentine-video');
    const bgMusic = document.getElementById('bgMusic');

    vids.forEach(v => {
        v.addEventListener('play', () => {
            // Unmute video explicitly
            v.muted = false;
            v.volume = 1.0;
            // Pause background music to avoid clash
            if (bgMusic && !bgMusic.paused) {
                bgMusic.pause();
                const musicToggle = document.getElementById('musicToggle');
                if (musicToggle) musicToggle.classList.remove('playing');
                const playPauseBtn = document.getElementById('playPauseBtn');
                if (playPauseBtn) playPauseBtn.textContent = '▶️';
            }
        });
    });

    // Back button
    document.getElementById('backToGalleryValentine').addEventListener('click', () => {
        container.classList.add('hidden');
        document.getElementById('galleryPage').classList.remove('hidden');
    });
}

function createConfetti() {
    const colors = ['#e74c3c', '#ff6b9d', '#c44569', '#ffd93d', '#ff1493'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animation = `confetti-fall ${3 + Math.random() * 2}s linear`;
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';

            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 5000);
        }, i * 100);
    }
}

// ===================================
// LOCK SYSTEM
// ===================================

function parseLocalDate(dateStr) {
    if (!dateStr) return null;

    // If it's already a date object, return it centered to start of day if it's just a date
    if (dateStr instanceof Date) return dateStr;

    // Handle YYYY-MM-DD format manually to ensure local time
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }

    // Fallback to standard constructor
    return new Date(dateStr);
}

function getCurrentDate() {
    // Check for test date in CONFIG
    if (CONFIG.testDate) {
        return parseLocalDate(CONFIG.testDate);
    }

    // Check for simulated date in sessionStorage (legacy/debug)
    const simulated = sessionStorage.getItem('simulatedDate');
    if (simulated) {
        return parseLocalDate(simulated);
    }

    return new Date();
}

function getUnlockDate(dayType) {
    const year = CONFIG?.unlockYear || 2026;
    const dateStr = CONFIG?.unlockDates?.[dayType];

    if (dateStr) {
        return parseLocalDate(`${year}-${dateStr}`);
    }

    // Fallback if not in config
    const dates = {
        'rose': new Date(year, 1, 7),
        'propose': new Date(year, 1, 8),
        'chocolate': new Date(year, 1, 9),
        'teddy': new Date(year, 1, 10),
        'promise': new Date(year, 1, 11),
        'hug': new Date(year, 1, 12),
        'kiss': new Date(year, 1, 13),
        'valentine': new Date(year, 1, 14)
    };
    return dates[dayType];
}

function isCardLocked(dayType) {
    if (CONFIG?.enableDateLock === false) return false;

    // Check if we have a manually forced state (for toggle)
    if (localStorage.getItem('lockSystemDisabled') === 'true') return false;

    const unlockDate = getUnlockDate(dayType);
    const now = getCurrentDate();

    // Set both to start of day for comparison
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const target = new Date(unlockDate.getFullYear(), unlockDate.getMonth(), unlockDate.getDate());

    return today < target;
}

function updateLockedCards() {
    const dayCards = document.querySelectorAll('.day-card');

    dayCards.forEach(card => {
        const day = card.dataset.day;
        const currentOverlay = card.querySelector('.lock-overlay');

        // If system is disabled, clear everything
        if (!isCardLocked(day)) {
            card.classList.remove('locked');
            if (currentOverlay) currentOverlay.remove();
            return;
        }

        // If locked but no overlay, create one
        if (!currentOverlay) {
            card.classList.add('locked');

            const overlay = document.createElement('div');
            overlay.className = 'lock-overlay';
            const unlockDate = getUnlockDate(day);

            overlay.innerHTML = `
                <div class="lock-icon">🔒</div>
                <div class="lock-text">Unlocks in</div>
                <div class="lock-timer">${getTimeRemaining(unlockDate)}</div>
            `;

            card.appendChild(overlay);
        } else {
            // Update existing timer
            const timer = currentOverlay.querySelector('.lock-timer');
            if (timer) {
                const unlockDate = getUnlockDate(day);
                timer.textContent = getTimeRemaining(unlockDate);
            }
        }
    });

    // Start live countdown loop if not already running
    if (!window.lockInterval) {
        window.lockInterval = setInterval(() => {
            updateLockedCards();
        }, 1000);
    }
}

function getTimeRemaining(endtime) {
    const now = getCurrentDate();

    const total = Date.parse(endtime) - Date.parse(now);
    if (total <= 0) return "UNLOCKED";

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger reflow
    toast.offsetHeight;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===================================
// APP DEBUG INITIALIZATION
// ===================================

function initializeDebugMode() {
    // Add hidden toggle for lock system (triple click on title)
    const title = document.querySelector('.gallery-title');
    if (title) {
        let clicks = 0;
        title.addEventListener('click', () => {
            clicks++;
            if (clicks === 3) {
                const current = localStorage.getItem('lockSystemDisabled') === 'true';
                localStorage.setItem('lockSystemDisabled', !current);
                showToast(current ? 'Re-enabling Date Locks 🔒' : 'Disabling Date Locks 🔓');
                updateLockedCards();
                clicks = 0;
            }
            setTimeout(() => clicks = 0, 1000);
        });
    }
}

function initializeApp() {
    console.log('💕 Valentine Website Initialized!');
    console.log('Edit config.js to customize your content');
}
