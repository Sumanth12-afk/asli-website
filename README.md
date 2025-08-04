# Asli Indian Restaurant - Elegant Website

A highly polished, cinematic restaurant website featuring a scroll-free hero section, sticky navigation, and elegant gallery sections with unified image management.

## 🌟 Features

### 🎬 **Landing Page (Scroll-Free Hero)**
- **Fullscreen cinematic experience** with no vertical scroll
- **Animated particle background** with floating golden elements
- **Elegant typography** with gradient text effects
- **Smooth fade-in animations** for logo and content
- **Call-to-Action buttons** with hover effects
- **Responsive design** for all screen sizes

### 🧭 **Sticky Navigation Bar**
- **Transparent by default**, solid background on scroll
- **Smooth scrolling** to sections with active highlighting
- **Mobile hamburger menu** with smooth transitions
- **Elegant hover effects** with gold accents

### 🖼️ **Unified Image Management**
All images are organized in a single `/public/images/` folder using **filename prefixes**:

- `ambience*.jpg` or `.png` → **Ambience Section**
- `food*.jpg` → **Food Section**  
- `menu*.png` → **Menu Section**

### 📱 **Elegant Gallery Sections**

#### 1. **Ambience Section - Cinematic Slideshow**
- **Ken Burns effect** with subtle zoom and fade
- **Auto-playing slideshow** (6-second intervals)
- **Manual navigation** with arrows and dots
- **Play/pause controls** and progress indicator
- **Elegant content overlay** with descriptions

#### 2. **Food Section - Interactive Gallery**
- **Responsive grid layout** with hover effects
- **Lightbox modal** with detailed dish information
- **Smooth zoom and tilt effects** on hover
- **Full keyboard navigation** support
- **Category badges** and detailed descriptions

#### 3. **Menu Section - Zoomable Viewer**
- **Expandable lightbox** for menu readability
- **Zoom functionality** up to 300% with pan/drag
- **Page numbering** and navigation
- **Keyboard controls** (+/- zoom, arrows navigate)
- **Professional menu presentation**

### 📋 **Advanced Reservation System**
- **Elegant booking form** with validation
- **Occasion selection** and special requests
- **Restaurant hours** and contact information
- **WhatsApp and phone integration**
- **Success animations** and confirmations

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone and Install**
   ```bash
   git clone <your-repo-url>
   cd asli-indian-restaurant
   npm install
   ```

2. **Add Your Images**
   Place your images in `public/images/` with proper prefixes:
   ```
   public/images/
   ├── ambience01.jpg     # Restaurant interior
   ├── ambience02.jpg     # Dining area
   ├── ambience03.jpg     # Bar area
   ├── food01.jpg         # Signature dishes
   ├── food02.jpg         # Appetizers
   ├── food03.jpg         # Main courses
   ├── menu01.png         # Menu page 1
   ├── menu02.png         # Menu page 2
   └── menu03.png         # Menu page 3
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Open Your Browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
asli-indian-restaurant/
├── public/
│   ├── images/           # Unified image folder
│   │   ├── ambience*.jpg # Restaurant ambience photos
│   │   ├── food*.jpg     # Food dish photos
│   │   └── menu*.png     # Menu page images
│   └── index.html
├── src/
│   ├── components/
│   │   ├── HeroSection.js      # Cinematic landing page
│   │   ├── Navbar.js           # Sticky navigation
│   │   ├── AmbienceSection.js  # Slideshow with Ken Burns
│   │   ├── FoodSection.js      # Interactive food gallery
│   │   ├── MenuSection.js      # Zoomable menu viewer
│   │   ├── ReservationSection.js # Booking system
│   │   └── ContactSection.js   # Contact & location
│   ├── utils/
│   │   └── imageLoader.js      # Image management utilities
│   ├── App.js                  # Main app with scroll handling
│   ├── index.js
│   └── index.css              # Elegant styling
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Design System

### Color Palette
- **Background**: Black (`#000000`)
- **Primary Gold**: `#D4AF37` (yellow-400)
- **Secondary Gold**: `#F7E98E` (yellow-300)
- **Deep Burgundy**: `#8B1A1A` (red-900)
- **Text**: White and gray variations

### Typography
- **Headings**: Playfair Display (serif) - elegant and classic
- **Body Text**: Lato (sans-serif) - clean and readable
- **Effects**: Gradient text, text shadows, letter spacing

### Animations
- **Floating particles** in hero section
- **Ken Burns effect** in ambience slideshow
- **Smooth hover transitions** throughout
- **Fade-in animations** for content loading
- **Scale and glow effects** on interactive elements

## 🔧 Customization

### Adding More Images
1. **Name your images** with proper prefixes:
   - `ambience04.jpg`, `ambience05.png`, etc.
   - `food08.jpg`, `food09.jpg`, etc.
   - `menu13.png`, `menu14.png`, etc.

2. **Update image data** in `src/utils/imageLoader.js`:
   ```javascript
   const imageDatabase = {
     ambience: [
       { filename: 'ambience01.jpg', title: 'Your Title', description: 'Your description' },
       // Add more entries...
     ]
   };
   ```

### Contact Information
Update details in `src/components/ContactSection.js` and `ReservationSection.js`:
- Phone numbers
- Email addresses  
- Physical address
- Social media links

### Restaurant Hours
Modify operating hours in `ReservationSection.js`:
```javascript
const timeSlots = ['12:00 PM', '12:30 PM', /* your times */];
```

### Google Maps Integration
Replace the map placeholder in `ContactSection.js` with your actual Google Maps embed:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Restaurant Location"
></iframe>
```

## 📦 Building for Production

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

## 🚀 Deployment Options

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the deployment prompts

### Traditional Hosting
1. Run `npm run build`
2. Upload the `build` folder contents to your web server

## ⚡ Performance Features

- **Lazy loading** for all images
- **Responsive image sizing** 
- **Code splitting** with React
- **Optimized animations** with CSS transforms
- **Efficient re-renders** with React hooks
- **Smooth scroll behavior** with intersection observers

## 🎯 Browser Support

- Chrome/Chromium (recommended)
- Firefox 60+
- Safari 12+
- Edge 79+

## 🛠️ Development Tools

### Dependencies
- **React 18** - UI framework
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations (optional)
- **Intersection Observer** - Scroll detection

### Key Features
- **TypeScript ready** (optional migration)
- **ESLint configuration** for code quality
- **Responsive breakpoints** for all devices
- **Accessibility features** built-in

## 📱 Mobile Experience

- **Touch-friendly navigation** with swipe gestures
- **Optimized image sizes** for mobile networks
- **Fast loading times** with progressive enhancement
- **Mobile-first responsive design**

## 🎊 Special Effects

- **Particle animation system** in hero section
- **Backdrop blur effects** for modern glass morphism
- **Gradient animations** and color transitions
- **3D transform effects** on hover states
- **Smooth page transitions** between sections

## 📞 Support & Contact

For customization help or questions:
- Email: support@asliindian.com
- Phone: +91 89777 10146

---

**Built with precision and passion for Asli Indian Restaurant** ✨

### Image Folder Instructions

To use your existing images, simply move them to the unified folder:

1. **Move ambience images** from `/ambience/` to `/public/images/` and rename:
   - `0eb08a52e0e4b35f7d155610d9ca4d81.avif` → `ambience01.jpg`
   - `431d1d05b37a1c7b601d4f1ee7f7d407.avif` → `ambience02.jpg`
   - etc.

2. **Move food images** from `/food/` to `/public/images/` and rename:
   - `1539d0683dac8a4bda6872979c1c1ef3_1752398577.avif` → `food01.jpg`
   - `55d47d5e8be3837e28cbdc1a31a5f023.avif` → `food02.jpg`
   - etc.

3. **Move menu images** from `/menu/` to `/public/images/` and rename:
   - `menu01753263717091.webp` → `menu01.png`
   - `menu11753263721104.webp` → `menu02.png`
   - etc.

The website will automatically load and display your images using the new naming convention!