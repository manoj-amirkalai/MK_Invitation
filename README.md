# Keerthana .P ❤ Manoj .A — Tamil Hindu Wedding Invitation

### 13 September 2026

A cinematic Tamil Nadu Hindu wedding invitation website built with **React + Vite + Three.js + GSAP**.

---

## 🛕 Features

| Scene | Feature                                                                                    |
| ----- | ------------------------------------------------------------------------------------------ |
| 1     | **Temple Door** — 3D carved wooden doors, brass lock, bell sounds, click-to-open animation |
| 2     | **3D Walkthrough** — Temple corridor with stone pillars and hanging lamps                  |
| 3     | **Couple Names** — Animated hero with Om symbol, falling petals, and golden sparkles       |
| 4     | **Clay Lamp Date Reveal** — 4 interactive lamps reveal date + live countdown               |
| 5     | **Thirukkural** — Sacred Tamil verses with decorative frame                                |
| 6     | **Kolam Animation** — SVG path-drawn kolam pattern with surrounding diyas                  |
| 7     | **Love Story Timeline** — Scroll-animated couple story milestones                          |
| 8     | **Event Schedule** — Cards for all wedding events with dates and venues                    |
| 9     | **Family Members** — Bride's and groom's family cards                                      |
| 10    | **Photo Gallery** — Responsive grid with lightbox and swipe support                        |
| 11    | **Guest Photo Upload** — Firebase Storage integration                                      |
| 12    | **Tamil Voice Invitation** — Web Speech API narration                                      |
| 13    | **Venue Map** — Google Maps embeds with directions                                         |
| 14    | **RSVP Form** — Firebase Firestore with QR entry pass generation                           |
| 15    | **PWA** — Installable, offline-ready                                                       |

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure Firebase (see below)

# 3. Start development server
npm run dev

# 4. Build for production
npm run build
```

---

## 🔥 Firebase Setup

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Firestore Database** and **Storage**
3. Copy your config into `src/firebase/firebaseConfig.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

4. Set Firestore rules for RSVP collection:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /rsvp/{doc} {
      allow read: if false;
      allow create: if request.resource.data.name is string
                    && request.resource.data.phone is string;
    }
  }
}
```

5. Set Storage rules for guest photos:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /guest-photos/{file} {
      allow read: if false;
      allow write: if request.resource.size < 10 * 1024 * 1024
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
```

---

## 🎨 Customisation

### Wedding Details — update in these files:

| What               | File                                                 |
| ------------------ | ---------------------------------------------------- |
| Couple names, date | `src/components/CoupleNames/CoupleNames.jsx`         |
| Event details      | `src/components/EventSchedule/EventSchedule.jsx`     |
| Family members     | `src/components/FamilyMembers/FamilyMembers.jsx`     |
| Venue addresses    | `src/components/LocationMap/LocationMap.jsx`         |
| Love story         | `src/components/Timeline/Timeline.jsx`               |
| Voice text         | `src/components/VoiceInvitation/VoiceInvitation.jsx` |

### Photos — replace placeholders:

Add real photo URLs to the `GALLERY_ITEMS` array in `src/components/PhotoGallery/PhotoGallery.jsx`.

### Colors — update CSS variables in `src/styles/global.css`:

```css
:root {
  --maroon: #6b0f1a;
  --gold: #d4a017;
  --sandalwood: #c68642;
}
```

---

## 📱 PWA Icons

Replace the placeholder icons in `/public/`:

- `icon-192.png` — 192×192 PNG
- `icon-512.png` — 512×512 PNG
- `favicon.ico`

---

## 🏗 Project Structure

```
src/
├── components/
│   ├── TempleDoor/        # 3D temple door (Three.js)
│   ├── CoupleNames/       # Hero names section
│   ├── ThirukkuralSection/# Sacred Tamil verses
│   ├── LampCountdown/     # Clay lamp date reveal
│   ├── KolamAnimation/    # SVG kolam drawing
│   ├── Timeline/          # Love story timeline
│   ├── EventSchedule/     # Wedding event cards
│   ├── FamilyMembers/     # Family member cards
│   ├── PhotoGallery/      # Responsive gallery + lightbox
│   ├── GuestUpload/       # Firebase photo upload
│   ├── RSVPForm/          # RSVP + QR pass
│   ├── VoiceInvitation/   # Tamil voice narration
│   └── LocationMap/       # Google Maps embed
├── pages/
│   └── Home.jsx           # Main orchestrator
├── three/
│   ├── sceneManager.js    # WebGL init / dispose
│   ├── lightingSetup.js   # Lamp & directional lights
│   ├── particleSystem.js  # Fire, petals, sparkles
│   ├── cameraController.js# Cinematic camera paths
│   └── templeGeometry.js  # Doors, pillars, gopuram
├── firebase/
│   └── firebaseConfig.js
├── utils/
│   ├── audioController.js # Bell, ambience, voice
│   └── generators.js      # QR code + PDF pass
└── styles/
    └── global.css         # CSS variables + animations
```

---

## 📦 Tech Stack

| Library         | Version | Use                  |
| --------------- | ------- | -------------------- |
| React           | 18      | UI Components        |
| Vite            | 5       | Build tool           |
| Three.js        | 0.163   | 3D temple scene      |
| GSAP            | 3.12    | Scroll animations    |
| Firebase        | 10      | RSVP + Photo storage |
| jsPDF           | 2.5     | QR entry pass PDF    |
| qrcode          | 1.5     | QR code generation   |
| vite-plugin-pwa | 0.19    | PWA support          |

---

## 🌐 Responsive Support

Tested and optimised for:

- 📱 **Mobile** — iOS Safari, Android Chrome (320px+)
- 📟 **Tablet** — iPad, Android tablets (768px+)
- 💻 **Laptop** — 1024px–1440px
- 🖥 **Desktop** — 1440px+

---

## ⚡ Performance

- Three.js canvas renders only during door scene, disposed after
- All heavy sections lazy-loaded with `React.lazy`
- GSAP ScrollTrigger animations activate only when in viewport
- Images lazy-loaded with `loading="lazy"`
- PWA with Workbox offline caching

---

_வாழ்க வளமுடன் — May they live prosperously together_
