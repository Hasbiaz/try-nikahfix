# NIKAHFIX - Netflix-Style Wedding Invitation

A modern, interactive wedding invitation website inspired by Netflix's interface design. This project is an enhanced version of the original [NIKAHFIX](https://github.com/arifintajul4/nikahfix/) by [@arifintajul4](https://github.com/arifintajul4), featuring additional Netflix-style animations, improved audio handling, and enhanced mobile experience.

NIKAHFIX provides an attractive and modern visual experience for digital wedding invitations, designed to be easily accessible, responsive, and aesthetic with an interface inspired by Netflix.

## 🎬 Demo

You can see the live demo of the original NIKAHFIX here: [NIKAHFIX - Demo](https://nikahfix-v02.vercel.app/)
## ✉️ Personalized Invitations

For personalized invitations, you can generate custom links such as:

```
https://nikahfix-v02.vercel.app/?to=tajul+dan+gorbon
```

You may use parameters like `to`, `dear`, or `kepada` to address specific recipients. For example:

- `https://nikahfix-v02.vercel.app/?to=Andi+&+Siti`
- `https://nikahfix-v02.vercel.app/?dear=Keluarga+Besar+Rahman`
- `https://nikahfix-v02.vercel.app/?kepada=Pak+Budi`

These parameters will display the recipient's name on the invitation page.

## 🌟 Features

- **Netflix-Style Intro**: Custom Netflix-inspired animation with letter "N" effect
- **Auto-playing Audio**: Background sound with smart autoplay handling and user-friendly controls
- **Interactive Thumbnail**: Movie poster-style wedding photo presentation
- **Smooth Animations**: Fade transitions, scroll animations, and cinematic effects
- **Mobile Responsive**: Optimized for all devices with touch-friendly interactions
- **Modern UI/UX**: Glassmorphism design elements and smooth transitions
- **Dynamic Content**: JSON-configurable wedding details and information

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Build Tool**: Vite (modern bundler for fast web application development)
- **Backend**: Supabase (for authentication, database, and real-time API)
- **Deployment**: Vercel-ready configuration
- **Audio**: HTML5 Audio API with fallback controls
- **Animations**: CSS animations + React transitions

### Original Tech Stack (from arifintajul4):
- **React**: JavaScript library for building user interfaces
- **Vite**: Modern bundler for fast web application development with minimal configuration
- **TailwindCSS**: For designing more attractive visual appearances
- **Supabase**: Backend service for authentication, database, and real-time API
- **Vercel**: Hosting platform used to serve the demo

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn
- Supabase account (for database features)

### Clone & Install
1. Clone the repository:
```bash
git clone https://github.com/azharazziz/nikahfix.git
cd nikahfix
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start development server:
```bash
npm run dev
# or
yarn dev
```

The application will run at `http://localhost:5173`

### Supabase Configuration
To use the database features (guest book, comments, etc.):

1. Create an account at [Supabase](https://supabase.com)
2. Create a new project
3. Copy environment variables from Supabase dashboard
4. Create `.env.local` file and fill with:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Build for Production
```bash
# Build the application
npm run build
# or
yarn build
```

*Note: Complete setup instructions including Supabase configuration are available in the [original repository](https://github.com/arifintajul4/nikahfix) by arifintajul4.*

## 🎵 Audio Setup

The project includes audio features with smart autoplay handling:

- Place your audio files in `public/audio/`
- Supported formats: MP3, WAV, OGG
- Auto-unmute functionality with user interaction fallback
- Browser policy compliance for modern browsers

## 🎨 Customization

### Wedding Data Configuration

Edit `src/data/config.json` to customize wedding details:

```json
{
  "pegantin": {
    "wanita": {
      "panggilan": "Bride Name"
    },
    "pria": {
      "panggilan": "Groom Name"
    }
  },
  "tanggal_pernikahan": "Your Wedding Date",
  "thumbnail_image_url": "/images/your-photo.jpg"
}
```

### Styling Customization

- **Colors**: Modify Tailwind config in `tailwind.config.js`
- **Animations**: Edit CSS animations in component files
- **Layout**: Customize components in `src/components/section/`

## 📁 Project Structure

```
src/
├── components/
│   ├── section/
│   │   ├── intro/          # Netflix-style intro animation
│   │   ├── thumbnail/      # Movie poster-style landing
│   │   ├── detail-info/    # Wedding details page
│   │   └── ...
│   └── ui/                 # Reusable UI components
├── data/
│   └── config.json         # Wedding configuration
├── hooks/                  # Custom React hooks
└── lib/                    # Utility libraries
```

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build:vercel`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
# Deploy dist/ folder to your hosting provider
```

## 🎯 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ Internet Explorer (Not supported)

## 🤝 Contributing

Contributions are very welcome! Here's how to contribute:

1. Fork this repository
2. Create a new feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Original Repository
This repository is a development of the original work by **arifintajul4**. If you want to contribute to the original version, please visit:
- 🔗 **Original Repository**: https://github.com/arifintajul4/nikahfix/
- 🌐 **Original Demo**: https://nikahfix-v01.vercel.app/

Make sure to give appropriate credit for contributions to both repositories.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

This project is a development and enhancement of the original **NIKAHFIX** project. Special thanks to:

- **Original Repository**: [nikahfix](https://github.com/arifintajul4/nikahfix/) by [@arifintajul4](https://github.com/arifintajul4)
- **Netflix Design**: UI/UX inspiration from Netflix's interface design
- **Open Source Community**: Various libraries and tools that made this project possible
- **React Team**: For the amazing React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Vite Team**: For the fast build tool

### Enhancements Made in This Fork:
- ✨ Added Netflix-style intro animation with letter "N" effect
- 🎵 Implemented smart audio autoplay with browser policy compliance
- 📱 Enhanced mobile responsiveness and touch interactions
- 🎨 Added glassmorphism design elements and smooth transitions
- ⚡ Migrated to Vite for faster development and build process
- 🌟 Improved fade animations and cinematic effects

## 📧 Contact

- **Developer**: Azhar Azziz
- **GitHub**: [@azharazziz](https://github.com/azharazziz)
- **Repository**: [nikahfix](https://github.com/azharazziz/nikahfix)

---

**Note**: This project is a fork and enhancement of the original [NIKAHFIX](https://github.com/arifintajul4/nikahfix/) repository. All credit for the foundational concept and initial implementation goes to [@arifintajul4](https://github.com/arifintajul4).

Made with ❤️ for couples planning their special day