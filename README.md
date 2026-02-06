# 💕 Valentine's Love Website

A beautiful, interactive website to celebrate your love through 7 days of Valentine's week!

## ✨ Features

### 🌟 Entry Page
- Beautiful animated background with floating hearts
- Day/Night mode toggle with twinkling stars
- Relationship countdown timer
- Global music player
- Smooth animations and effects

### 📅 7 Days of Valentine's Week
Each day has its own themed page with:
- 🌹 **Rose Day** (Feb 7)
- 💍 **Propose Day** (Feb 8)
- 🍫 **Chocolate Day** (Feb 9)
- 🧸 **Teddy Day** (Feb 10)
- 🤝 **Promise Day** (Feb 11)
- 🤗 **Hug Day** (Feb 12)
- 💋 **Kiss Day** (Feb 13)

### 💝 Valentine's Day Special
- Video players for special moments
- Animated envelope with love letter
- Confetti celebration
- Photo galleries

### 🎮 Interactive Elements
- Tic-Tac-Toe game on each day page
- Photo galleries with hover effects
- Music player with controls
- Smooth page transitions
- Glassmorphism effects

## 🚀 How to Use

### 1. Quick Start
Simply open `index.html` in your browser!

### 2. Customize Your Content

Edit the `config.js` file to personalize everything:

#### Personal Information
```javascript
girlfriendName: "My Love",  // Her name
yourName: "Me",  // Your name
relationshipStartDate: "2024-02-14",  // Your anniversary (YYYY-MM-DD)
```

#### Add Music
```javascript
musicFile: "assets/our-song.mp3",  // Path to your music file
```

#### Add Photos
For each day, add your photo paths:
```javascript
roseDay: {
    photos: [
        "assets/photos/rose1.jpg",
        "assets/photos/rose2.jpg",
        // Add more photos
    ],
    memories: "Remember when we first walked in the garden..."
}
```

#### Add Videos (Valentine's Day)
```javascript
valentineVideo: {
    meetingVideo: "assets/videos/our-meeting.mp4",
    journeyVideo: "assets/videos/our-journey.mp4",
}
```

#### Customize Love Letter
```javascript
loveLetter: {
    content: `Your personal love letter here...`
}
```

### 3. Organize Your Files

Create an `assets` folder structure:
```
valentine-website/
├── index.html
├── styles.css
├── script.js
├── config.js
├── README.md
└── assets/
    ├── photos/
    │   ├── rose1.jpg
    │   ├── rose2.jpg
    │   └── ...
    ├── videos/
    │   ├── our-meeting.mp4
    │   └── our-journey.mp4
    └── our-song.mp3
```

## 🎨 Customization Tips

### Colors
Edit the color scheme in `config.js`:
```javascript
colors: {
    primary: "#ff6b9d",    // Main pink color
    secondary: "#c44569",  // Secondary color
    accent: "#ffd93d",     // Accent color
}
```

### Messages
Customize romantic messages for each day in `config.js` under the `days` object.

### Memories
Add personal stories and memories for each day in the `memories` field.

## 📱 Responsive Design
The website is fully responsive and works perfectly on:
- 💻 Desktop
- 📱 Mobile phones
- 📱 Tablets

## 🎭 Features Explained

### Day/Night Mode
- Click the sun/moon button to toggle between light and dark themes
- Dark mode features a beautiful starry night sky
- Preference is saved in browser

### Music Player
- Click the music icon to play/pause background music
- Add your special song in config.js
- Controls are always accessible

### Countdown Timer
- Automatically calculates days together
- Based on your relationship start date
- Animated number counting

### Games
- Each day page includes a Tic-Tac-Toe game
- Play with hearts (❤️) vs blue hearts (💙)
- Reset button to start new games

### Photo Galleries
- Polaroid-style photo cards
- Hover effects and animations
- If no photos added, shows placeholder hearts
- Easy to replace with your own photos

### Valentine's Day Letter
- Click the envelope to open
- Beautiful animation
- Fully customizable text
- Handwritten-style font

### Videos
- Two video players on Valentine's Day page
- Support for MP4 format
- Custom video controls
- Placeholder if videos not added yet

## 🛠️ Technical Details

### Built With
- Pure HTML5
- Vanilla CSS3 with animations
- Vanilla JavaScript (no frameworks)
- Google Fonts (Playfair Display, Poppins, Great Vibes)

### Performance
- Optimized animations (60fps)
- Lazy loading ready
- Minimal file size
- Fast loading times

### Browser Support
- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 💡 Pro Tips

1. **High-Quality Photos**: Use good quality photos for best results
2. **Video Format**: Use MP4 format for maximum compatibility
3. **Music Format**: MP3 works best for background music
4. **File Sizes**: Compress large videos/images for faster loading
5. **Test First**: Preview everything before sharing with her!

## 🎁 Deployment Options

### Option 1: Local Viewing
Just open `index.html` in a browser

### Option 2: Free Hosting
Deploy to:
- GitHub Pages (free)
- Netlify (free)
- Vercel (free)

### Option 3: Custom Domain
Get a romantic domain like:
- yournames.com
- ourlovestory.com
- foreveryours.com

## 📝 Editing Checklist

Before sharing with your girlfriend:

- [ ] Update `girlfriendName` and `yourName` in config.js
- [ ] Set correct `relationshipStartDate`
- [ ] Add your music file
- [ ] Add photos for each day
- [ ] Add your videos (Valentine's page)
- [ ] Customize the love letter
- [ ] Update romantic messages for each day
- [ ] Add personal memories
- [ ] Test all features
- [ ] Preview on mobile device
- [ ] Check music plays correctly

## ❤️ Special Notes

This website is designed to be:
- **Personal**: Make it uniquely yours with custom content
- **Romantic**: Every detail is crafted with love
- **Interactive**: Engaging features keep her exploring
- **Memorable**: A keepsake she can revisit anytime

## 🆘 Need Help?

### Images Not Showing?
- Check file paths in config.js
- Make sure images are in the correct folder
- Use relative paths like "assets/photos/image.jpg"

### Music Not Playing?
- Some browsers require user interaction before playing audio
- Click the music button after page loads
- Check if music file path is correct

### Videos Not Working?
- Use MP4 format
- Check file paths are correct
- Ensure files aren't too large

## 💝 Final Touch

Add a personal touch:
1. Record a voice message and add it as background music
2. Create a custom favicon (small heart icon)
3. Add Easter eggs (hidden messages she can discover)
4. Include inside jokes in the memories sections

---

**Made with 💕 for celebrating love!**

Enjoy creating beautiful memories together! 🌹✨

