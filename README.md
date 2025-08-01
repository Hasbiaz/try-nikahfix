# NIKAHFIX - Netflix-Style Wedding Invitation

A modern, interactive wedding invitation website inspired by Netflix's interface design. This project is an enhanced version of the original [NIKAHFIX](https://github.com/arifintajul4/nikahfix/) by [@arifintajul4](https://github.com/arifintajul4), featuring additional Netflix-style animations, improved audio handling, and enhanced mobile experience.

NIKAHFIX memberikan pengalaman visual menarik dan modern untuk undangan pernikahan digital, dirancang agar mudah diakses, responsif, dan estetis dengan tampilan yang terinspirasi dari Netflix.

## 🎬 Demo

You can see the live demo of the original NIKAHFIX here: [NIKAHFIX - Demo](https://nikahfix-v02.vercel.app/)

For specific invitation purposes, you can create custom links like: `https://nikahfix-v02.vercel.app/?to=tajul+dan+gorbon`

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
- **Build Tool**: Vite (bundler modern untuk pengembangan aplikasi web cepat)
- **Backend**: Supabase (untuk autentikasi, database, dan API real-time)
- **Deployment**: Vercel-ready configuration
- **Audio**: HTML5 Audio API with fallback controls
- **Animations**: CSS animations + React transitions

### Original Tech Stack (from arifintajul4):
- **React**: Library JavaScript untuk membangun antarmuka pengguna
- **Vite**: Bundler modern untuk pengembangan aplikasi web cepat dengan konfigurasi minimal
- **TailwindCSS**: Untuk mendesain tampilan visual agar lebih menarik
- **Supabase**: Backend sebagai layanan untuk autentikasi, database, dan API real-time
- **Vercel**: Platform hosting yang digunakan untuk menyajikan demo

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 atau lebih tinggi)
- npm atau yarn
- Akun Supabase (opsional, untuk fitur database original)

### Clone & Install
1. Clone the repository:
```bash
git clone https://github.com/azharazziz/nikahfix.git
cd nikahfix
```

2. Install dependencies:
```bash
npm install
# atau
yarn install
```

3. Start development server:
```bash
npm run dev
# atau
yarn dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Supabase Configuration (Optional)
Jika ingin menggunakan fitur database original (guest book, comments, dll):

1. Buat akun di [Supabase](https://supabase.com)
2. Buat project baru
3. Copy environment variables dari Supabase dashboard
4. Buat file `.env.local` dan isi dengan:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Build untuk Production
```bash
# Build aplikasi
npm run build
# atau
yarn build
```

*Note: Instruksi setup lengkap termasuk konfigurasi Supabase tersedia di [repository original](https://github.com/arifintajul4/nikahfix) oleh arifintajul4.*

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

Kontribusi sangat diterima! Berikut cara untuk berkontribusi:

1. Fork repository ini
2. Buat branch fitur baru: `git checkout -b feature/amazing-feature`
3. Commit perubahan: `git commit -m 'Add some amazing feature'`
4. Push ke branch: `git push origin feature/amazing-feature`
5. Buka Pull Request

### Original Repository
Repository ini adalah pengembangan dari karya original oleh **arifintajul4**. Jika ingin berkontribusi ke versi original, silakan kunjungi:
- 🔗 **Original Repository**: https://github.com/arifintajul4/nikahfix/
- 🌐 **Original Demo**: https://nikahfix-v01.vercel.app/

Pastikan untuk memberikan credit yang sesuai untuk kontribusi pada kedua repository.

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