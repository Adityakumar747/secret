// ===================================
// EDIT THIS FILE TO CUSTOMIZE YOUR WEBSITE
// ===================================

const CONFIG = {
    // === PERSONAL INFORMATION ===
    girlfriendName: "My Love",  // Change to her name
    yourName: "Me",  // Your name
    relationshipStartDate: "2026-01-11",  // Your anniversary date (YYYY-MM-DD)

    // === UNLOCK SETTINGS ===
    enableDateLock: false,  // Set to false to unlock all cards immediately
    unlockYear: 2026,  // Year when cards unlock
    testDate: "", // Set a date here (YYYY-MM-DD) to test the website (Leave empty or null for real-time)

    // === UNLOCK DATES (MM-DD) ===
    unlockDates: {
        rose: "02-07",
        propose: "02-08",
        chocolate: "02-09",
        teddy: "02-10",
        promise: "02-11",
        hug: "02-12",
        kiss: "02-13",
        valentine: "02-14"
    },

    // === MUSIC ===
    // Add your music file paths here. The player will go through them in order.
    musicPlaylist: [
        {
            title: "Main Chahta Hu Tujhko",
            artist: "Unknown",
            file: "assets/music/Main_Chahta_hu_tujhko_dilo_jaan_ki_tarah_256KBPS.webm"
        },
        {
            title: "Chand Si Mehbooba",
            artist: "Mukesh",
            file: "assets/music/Chand_Si_Mehbooba_Ho_Meri_Himalay_Ki_God_Mein_1965_Manoj_Kumar_Mala_Sinha_Mukesh_Song_256kbps.webm"
        },
        {
            title: "Teeji Seat",
            artist: "Kaka",
            file: "assets/music/Kaka_Teeji_Seat_Official_Video_Aakansha_New_Punjabi_Songs_2021-Latest_Punjabi_Songs_2020_2021_256kbps.webm"
        },
        {
            title: "GATA ONLY (Slowed)",
            artist: "FloyyMenor",
            file: "assets/music/GATA_ONLY_SLOWED_256kbps.webm"
        },
        {
            title: "Temporary Pyar",
            artist: "Kaka",
            file: "assets/music/Kaka_New_Song_Temporary_Pyar_-_Kaka_Lyrics_Darling_Adaab_Kharoud_Latest_Punjabi_Songs_2025_256KBPS.webm"
        },
        {
            title: "Midnight Call",
            artist: "Harkirat Sangha",
            file: "assets/music/Midnight_Call_Official_Video_-_Harkirat_Sangha_Starboy_X_Rupan_Bal_Interstellar_2025_256kbps.webm"
        },
        {
            title: "Naam Tera",
            artist: "Ndee Kundu",
            file: "assets/music/NAAM_TERA_Ndee_Kundu_Mp_Sega_Haryanvi_Songs_Haryanavi_2021_Leke_Meri_Kali_Kali_Car_256kbps.webm"
        },
        {
            title: "Me Gustas Tu (Slowed)",
            artist: "Manu Chao",
            file: "assets/music/manu_chao_-_me_gustas_tu_slowed_reverb_128KBPS.mp4"
        },
        {
            title: "Our Special Song",
            artist: "Valentine",
            file: "assets/music/Status_256kbps.mp3"
        }
    ],
    // musicFile: "assets/music/our-song.mp3", // Legacy support (can remove)

    // === ENTRY PAGE ===
    entryPage: {
        title: "A Journey of Love",
        subtitle: "7 Days of Valentine's Memories",
        backgroundImage: "assets/photos/background.png",  // Optional: path to background image
    },

    // === VALENTINE'S DAY PAGE ===
    valentineVideo: {
        meetingVideo: "assets/videos/IMG_5806.mp4",  // Path to "where we met" video
        journeyVideo: "assets/videos/IMG_5808.mp4",  // Path to "our journey" video
        extraVideo: "assets/videos/IMG_5807.mp4",    // Another special memory
    },

    // === VALENTINE'S DAY PHOTOS ===
    valentinePhotos: [
        "assets/photos/IMG_5535.JPG.jpeg",
        "assets/photos/IMG_5562.JPG.jpeg",
        "assets/photos/IMG_5563.JPG.jpeg",
        "assets/photos/IMG_5564.JPG.jpeg",
        "assets/photos/IMG_5565.JPG.jpeg",
        "assets/photos/IMG_5566.JPG.jpeg",
        "assets/photos/IMG_5567.JPG.jpeg",
        "assets/photos/IMG_5568.JPG.jpeg",
        "assets/photos/IMG_5642.JPG.jpeg",
        "assets/photos/IMG_5782.JPG.jpeg",
        "assets/photos/IMG_5783.JPG.jpeg",
        "assets/photos/IMG_5785.JPG.jpeg",
        "assets/photos/IMG_5786.JPG.jpeg",
        "assets/photos/IMG_5845.JPG.jpeg",
        "assets/photos/IMG_5846.JPG.jpeg",
        "assets/photos/IMG_5847.JPG.jpeg",
        "assets/photos/IMG_5848.JPG.jpeg",
        "assets/photos/IMG_5849.JPG.jpeg",
        "assets/photos/IMG_5850.JPG.jpeg",
        "assets/photos/IMG_5852.JPG.jpeg",
        "assets/photos/IMG_5853.JPG.jpeg",
        "assets/photos/IMG_5854.JPG.jpeg",
        "assets/photos/IMG_5855.JPG.jpeg",
        "assets/photos/IMG_5856.JPG.jpeg",
        "assets/photos/IMG_5857.JPG.jpeg",
        "assets/photos/IMG_5858.JPG.jpeg",
        "assets/photos/IMG_5859.JPG.jpeg",
        "assets/photos/IMG_5860.JPG.jpeg",
        "assets/photos/IMG_5861.JPG.jpeg",
        "assets/photos/IMG_5862.JPG.jpeg",
        "assets/photos/IMG_5863.JPG.jpeg",
        "assets/photos/IMG_5864.JPG.jpeg",
        "assets/photos/IMG_5865.JPG.jpeg",
        "assets/photos/IMG_5866.JPG.jpeg",
        "assets/photos/IMG_5867.JPG.jpeg",
        "assets/photos/IMG_5868.JPG.jpeg",
        "assets/photos/IMG_5869.JPG.jpeg",
        "assets/photos/IMG_5870.JPG.jpeg",
        "assets/photos/IMG_5871.JPG.jpeg",
        "assets/photos/IMG_5872.JPG.jpeg",
        "assets/photos/IMG_5873.JPG.jpeg",
        "assets/photos/IMG_5874.JPG.jpeg",
        "assets/photos/IMG_5875.JPG.jpeg",
        "assets/photos/IMG_5876.JPG.jpeg",
        "assets/photos/IMG_5877.JPG.jpeg",
        "assets/photos/IMG_5878.JPG.jpeg",
        "assets/photos/IMG_5879.JPG.jpeg",
        "assets/photos/IMG_5880.JPG.jpeg",
        "assets/photos/IMG_5881.JPG.jpeg",
        "assets/photos/IMG_5882.JPG.jpeg",
        "assets/photos/IMG_5884.JPG.jpeg",
        "assets/photos/IMG_5885.JPG.jpeg",
        "assets/photos/IMG_5886.JPG.jpeg",
        "assets/photos/IMG_5887.JPG.jpeg"
    ],



    loveLetter: {
        content: `My Dearest Love,

Every moment with you is a treasure. From the day we met, my life has been filled with joy, laughter, and endless love.

You are my sunrise and my sunset, my yesterday, today, and all my tomorrows.

This website is a small token of my infinite love for you. Every page, every word, every moment captured here is a reminder of how blessed I am to have you in my life.

I love you more than words can express.

Forever yours,
Your Love`,
    },

    // === 7 DAYS CONTENT ===
    days: {
        roseDay: {
            title: "Rose Day",
            date: "February 7",
            color: "#ff4757",
            message: "In the garden of my life, you’re the only bloom that never fades. I’ve made a place for you in my heart that no one else could ever fill.",
            photos: [
                "assets/photos/IMG_5897.JPG.jpeg",
                "assets/photos/hand.JPG"
            ],
            // Add a cute gif path here (e.g., "assets/photos/cute-cat.gif")
            cuteImage: "assets/photos/rose.gif",
            memories: "The time I spend is such a amzazing and peaceful.your presence always remind me of the most beautiful thing in my life.  I love u soooo sooo much "
        },

        proposeDay: {
            title: "Propose Day",
            date: "February 8",
            color: "#ff6348",
            message: "I choose you. Today, tomorrow, and forever.",
            photos: [
                "assets/photos/IMG_5564.JPG.jpeg",
                "assets/photos/IMG_5846.JPG.jpeg"
            ],
            // Add a cute gif path here (e.g., "assets/photos/cute-cat.gif")
            cuteImage: "assets/photos/Milk And Mocha Love GIF.gif",
            memories: "From the first day  everythings look so magical time pass like air with every moment of time i feel more in love wih u "
        },

        chocolateDay: {
            title: "Chocolate Day",
            date: "February 9",
            color: "#8B4513",
            message: "Life with you is sweeter than the finest chocolate.",
            photos: [
                "assets/photos/IMG_5567.JPG.jpeg",
                "assets/photos/IMG_5568.JPG.jpeg",
                "assets/photos/IMG_5875.JPG.jpeg"
            ],
            // Add a cute gif path here (e.g., "assets/photos/cute-cat.gif")
            cuteImage: "assets/photos/choclate.gif",
            memories: "Like chocolate, you make life sweeter just by being in it… and I always crave chocolate."
        },

        teddyDay: {
            title: "Teddy Day",
            date: "February 10",
            color: "#DEB887",
            message: "You're my comfort, my warmth, my cuddly companion in life.",
            photos: [
                "assets/photos/IMG_5642.JPG.jpeg",
                "assets/photos/IMG_5782.JPG.jpeg",
                "assets/photos/IMG_5853.JPG.jpeg"
            ],
            // Add a cute gif path here (e.g., "assets/photos/cute-cat.gif")
            cuteImage: "assets/photos/Teddy Bear GIF.gif",
            memories: "Soft hearts matter more than soft toys… and yours is really soft 🤤."
        },

        promiseDay: {
            title: "Promise Day",
            date: "February 11",
            color: "#9b59b6",
            message: "I promise to stay, even when things get hard.NO matter what happen in future you will be my first priority",
            photos: [
                "assets/photos/IMG_5783.JPG.jpeg",
                "assets/photos/IMG_5535.JPG.jpeg"
            ],
            // Add a cute gif path here (e.g., "assets/photos/cute-cat.gif")
            cuteImage: "assets/photos/promoise.gif",
            memories: "My promise is simple: effort, honesty, and respect. I promise to grow, with you or for you.No big words, just a real promise."
        },

        hugDay: {
            title: "Hug Day",
            date: "February 12",
            color: "#FF69B4",
            message: "In your arms, I've found my home.",
            photos: [
                "assets/photos/IMG_5785.JPG.jpeg",
                "assets/photos/IMG_5562.JPG.jpeg"
            ],
            // Add a cute gif path here (e.g., "assets/photos/cute-cat.gif")
            cuteImage: "assets/photos/ghost hug GIF.gif",
            memories: "Some magic exists… it’s called your hug.I want to hug u until my clothes smell like you "
        },

        kissDay: {
            title: "Kiss Day",
            date: "February 13",
            color: "#FF1493",
            message: "A kiss from you ? Yeah… I’d risk everything.Let’s skip the words and start with a kiss",
            photos: [
                "assets/photos/IMG_5786.JPG.jpeg",
                "assets/photos/IMG_5563.JPG.jpeg"
            ],
            // Add your cute gif or video paths here
            cuteImage: [
                "assets/photos/kiss.mp4",
                "assets/photos/kiss2.mp4"
            ],
            memories: "Your lips look like they’re about to start a story."
        }
    },

    // === ADDITIONAL CUSTOMIZATION ===
    colors: {
        primary: "#ff6b9d",
        secondary: "#c44569",
        accent: "#ffd93d",
        dark: "#1e1e2e",
        light: "#fff5f7"
    }
};

// Make config available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
