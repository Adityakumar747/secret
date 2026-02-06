# 🎨 Quick Customization Guide

## Adding Your Own Photos

I've created some beautiful sample romantic images for you in the brain folder. Here's how to use your own photos:

### Step 1: Prepare Your Photos
1. Collect your favorite photos with your girlfriend
2. Organize them by day (Rose Day, Propose Day, etc.)
3. Resize them if needed (recommended: 800x600px or similar)
4. Save them with descriptive names like:
   - `rose_day_1.jpg`
   - `rose_day_2.jpg`
   - `our_first_date.jpg`
   - etc.

### Step 2: Add Photos to the Project
1. Copy your photos to: `Y:\antigravity\works\valentine-website\assets\photos\`
2. Or create subfolders: `assets/photos/rose-day/`, `assets/photos/propose-day/`, etc.

### Step 3: Update config.js

Open `config.js` and add your photo paths:

```javascript
days: {
    roseDay: {
        title: "Rose Day",
        date: "February 7",
        color: "#ff4757",
        message: "Like a rose, your beauty and grace captivate my heart every single day.",
        photos: [
            "assets/photos/rose_day_1.jpg",
            "assets/photos/rose_day_2.jpg",
            "assets/photos/rose_day_3.jpg",
        ],
        memories: "Remember that day in the garden when you gave me that beautiful rose..."
    },
    
    proposeDay: {
        title: "Propose Day",
        date: "February 8",
        color: "#ff6348",
        message: "I choose you. Today, tomorrow, and forever.",
        photos: [
            "assets/photos/our_proposal.jpg",
            "assets/photos/us_together_1.jpg",
        ],
        memories: "The moment I knew I wanted to spend forever with you..."
    },
    
    // Continue for other days...
}
```

## Adding Videos

### Step 1: Prepare Your Videos
1. Gather your special videos
2. Convert to MP4 format if needed
3. Name them descriptively:
   - `our_first_meeting.mp4`
   - `our_journey_together.mp4`

### Step 2: Add Videos
1. Create folder: `assets/videos/`
2. Copy your video files there

### Step 3: Update config.js

```javascript
valentineVideo: {
    meetingVideo: "assets/videos/our_first_meeting.mp4",
    journeyVideo: "assets/videos/our_journey_together.mp4",
},
```

## Adding Background Music

### Step 1: Prepare Music
1. Choose your special song
2. Convert to MP3 format
3. Name it: `our_song.mp3`

### Step 2: Add Music
1. Copy to: `assets/our_song.mp3`

### Step 3: Update config.js

```javascript
musicFile: "assets/our_song.mp3",
```

## Customizing Messages

### Love Letter
Edit the main love letter in `config.js`:

```javascript
loveLetter: {
    content: `My Dearest [Her Name],

From the moment I met you, my life changed forever. 
Every day with you is a gift I cherish.

[Write your heartfelt message here - be genuine and personal]

You are my everything.

Forever and always,
[Your Name]`,
},
```

### Daily Messages
Customize the message for each day:

```javascript
roseDay: {
    message: "Your custom romantic message here...",
    memories: "Share a specific memory from your relationship...",
}
```

## Personalizing Colors

Change the color scheme to her favorite colors:

```javascript
colors: {
    primary: "#ff6b9d",    // Main color (pink by default)
    secondary: "#c44569",  // Secondary color
    accent: "#ffd93d",     // Accent color (yellow/gold)
    dark: "#1e1e2e",       // Dark mode background
    light: "#fff5f7"       // Light mode background
}
```

## Pro Tips 💡

### 1. Photo Quality
- Use high-quality photos (not blurry or pixelated)
- Keep file sizes reasonable (under 2MB each)
- Landscape orientation works best for the gallery

### 2. Video Tips
- Keep videos under 5 minutes for faster loading
- Compress large videos using online tools
- MP4 format has best browser compatibility

### 3. Music Selection
- Choose a song that's special to both of you
- Not too loud - should be background ambiance
- Around 3-5 minutes is ideal (it will loop)

### 4. Writing the Love Letter
- Be genuine and speak from your heart
- Include specific memories and inside jokes
- Don't worry about being perfect - sincerity matters most
- Keep it between 200-500 words for easy reading

### 5. Testing
- Preview everything before showing her
- Test on mobile phone (she might view it there)
- Make sure all photos/videos load correctly
- Check that music plays (might need to click music button)

## File Structure

Your final project should look like:

```
valentine-website/
├── index.html
├── styles.css
├── script.js
├── config.js
├── README.md
├── CUSTOMIZATION_GUIDE.md
└── assets/
    ├── photos/
    │   ├── rose_day_1.jpg
    │   ├── rose_day_2.jpg
    │   ├── propose_day_1.jpg
    │   └── ... (all your photos)
    ├── videos/
    │   ├── our_first_meeting.mp4
    │   └── our_journey_together.mp4
    └── our_song.mp3
```

## Quick Edits Checklist

Before sharing with her:

- [x] Basic structure created
- [ ] Added personal photos (at least 3-4 per day)
- [ ] Added videos (if you have them)
- [ ] Added your special song
- [ ] Updated love letter with personal message
- [ ] Customized daily messages for each of 7 days
- [ ] Updated relationship start date
- [ ] Added her name and your name
- [ ] Tested everything works
- [ ] Previewed on mobile

## Need Help?

If anything isn't working:
1. Check file paths are correct (case-sensitive!)
2. Make sure files are in the right folders
3. Open browser console (F12) to see any errors
4. Double-check `config.js` syntax (commas, quotes, brackets)

---

**Remember**: The most important thing is that it's personal and from your heart! 💕

She'll love the effort and thought you put into this, regardless of technical perfection.
