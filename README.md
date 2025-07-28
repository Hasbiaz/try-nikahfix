# 💍 NIKAHFIX - Modern Wedding Invitation Website

**NIKAHFIX** is a modern, Netflix-inspired wedding invitation website that provides an elegant and interactive experience for wedding guests. Built with React and Vite, featuring Supabase integration for real-time guest messages and a fully configurable design system.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/azharazziz/nikahfix)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://nikahfix-v02.vercel.app/)

## 🌟 Features

### 🎬 Netflix-Inspired Interface
- Landing page with "Who's Watching?" style user selection
- Smooth transitions and hover effects
- Dark theme with elegant gradients
- Responsive design for all devices

### 🎵 Enhanced Audio Experience
- Background music with smart controls
- Auto-pause when tab becomes inactive
- Click sound effects for better interaction
- Smooth fade-in/out animations

### 💝 Modern Gift System
- **Bank Transfer**: Complete bank account information with copy functionality
- **QRIS Payment**: QR code display with merchant and NMID information
- **Physical Gifts**: Delivery address with copy functionality
- **Configurable Options**: Enable/disable payment methods via configuration

### 📱 Responsive Components
- **Gallery Carousel**: Netflix-style navigation with auto-slide
- **Love Story Timeline**: Episode-based relationship journey
- **Real-time Wishes**: Guest messages with profanity filter
- **Location Integration**: Interactive Google Maps embedding
- **Reception Details**: Event information with countdown timer

### ⚙️ Advanced Configuration
- **Modular Sections**: Enable/disable any section via configuration
- **Payment Options**: Flexible gift payment method controls
- **Content Management**: Centralized data management via JSON
- **Environment Variables**: Secure credential management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for guest wishes feature)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/azharazziz/nikahfix.git
   cd nikahfix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your Supabase credentials:
   ```env
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_APP_TABLE_NAME=nikahfix
   ```

4. **Configure your wedding data**
   
   Edit `src/data/config.json` to customize:
   ```json
   {
     "pegantin": {
       "pria": { "nama": "Your Name", "foto": "path/to/photo" },
       "wanita": { "nama": "Partner Name", "foto": "path/to/photo" }
     },
     "show_menu": {
       "breaking_news": true,
       "bride_and_groom": true,
       "reception": true,
       "love_story": true,
       "gallery": true,
       "gift": true,
       "wish": true
     },
     "gift_options": {
       "bank": true,
       "qris": true,
       "physical": true
     }
   }
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Visit your site**
   ```
   http://localhost:5173
   ```

## 📋 Project Structure

```
nikahfix/
├── public/
│   ├── audio/           # Background music & sound effects
│   ├── images/          # Photos, icons, and graphics
│   ├── video/           # Video content (optional)
│   └── template/        # Design templates (AI/PSD)
├── src/
│   ├── components/
│   │   ├── section/     # Main page sections
│   │   │   ├── user-watch/      # Landing page
│   │   │   ├── thumbnail/       # Main video/image
│   │   │   ├── title-info/      # Netflix-style metadata
│   │   │   ├── breaking-news/   # Announcement section
│   │   │   ├── bride-groom/     # Couple profiles
│   │   │   ├── reception/       # Event details
│   │   │   ├── love-story/      # Relationship timeline
│   │   │   ├── our-gallery/     # Photo carousel
│   │   │   ├── gift/            # Payment information
│   │   │   ├── wish/            # Guest messages
│   │   │   └── footer/          # Credits
│   │   └── ui/          # Reusable components
│   ├── data/
│   │   └── config.json  # Central configuration
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── lib/
│   │   └── supabaseClient.js
│   └── ...
├── .env                 # Environment variables
├── package.json
└── README.md
```

## 🎨 Customization Guide

### 🖼️ Adding Your Photos

1. **Couple Photos**: Replace `public/images/Bride.png` and `public/images/Groom.png`
2. **Gallery**: Add images to `public/images/` and update gallery array in config
3. **Love Story**: Replace `public/images/Episode 1-4.png` with your timeline photos

### 💳 Payment Configuration

Configure available payment methods in `config.json`:

```json
{
  "gift_options": {
    "bank": true,        // Enable bank transfer
    "qris": true,        // Enable QRIS payment
    "physical": true     // Enable physical gift address
  },
  "bank": {
    "name": "Bank Name",
    "account": "1234567890",
    "holder": "Account Holder"
  },
  "qris": {
    "merchant": "Merchant Name",
    "nmid": "ID1234567890123456",
    "qr_code": "path/to/qr-code.png"
  }
}
```

### 🎵 Audio & Media

- **Background Music**: Replace `public/audio/lagunya.mp3`
- **Click Sound**: Replace `public/audio/click-sound.mp3`
- **Video**: Update `url_video` in config or use `video_replacement` image

### 📍 Location Setup

Update Google Maps embed in `src/components/section/detail-info/index.jsx`:
1. Get embed code from Google Maps
2. Replace the iframe src with your venue location
3. Update the "Click to see location" link

## 🗄️ Database Setup (Supabase)

### Create Wishes Table

```sql
-- Create table for guest wishes
CREATE TABLE public.nikahfix (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    color VARCHAR(50) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.nikahfix ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Anyone can read wishes" ON public.nikahfix
    FOR SELECT USING (true);

-- Allow public insert access
CREATE POLICY "Anyone can insert wishes" ON public.nikahfix
    FOR INSERT WITH CHECK (true);
```

### Sample Data

Use `nikahfix_rows.sql` to populate with sample wishes for testing.

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial wedding setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy automatically

3. **Environment Variables**
   ```env
   VITE_SUPABASE_ANON_KEY=your-production-key
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_APP_TABLE_NAME=nikahfix
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎯 Advanced Features

### Personalized URLs

Create personalized invitation links:
```
https://your-site.com/?to=john+and+jane
```

### Section Visibility Control

Toggle any section via configuration:
```json
{
  "show_menu": {
    "breaking_news": false,    // Hide announcement
    "bride_and_groom": true,   // Show couple profiles
    "reception": true,         // Show event details
    "love_story": true,        // Show timeline
    "gallery": true,           // Show photos
    "gift": false,             // Hide payment info
    "wish": true               // Show guest messages
  }
}
```

### Animation System

Built-in scroll animations with custom hook:
- `fade-up`: Fade in from bottom
- `slide-left`: Slide in from left
- `slide-right`: Slide in from right
- `scale`: Scale up with fade

## 🛠️ Development Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview build
npm run preview

# Lint code
npm run lint

# Update HTML files
npm run update-html
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Original Creator**: [Tajul Arifin S](https://github.com/arifintajul4/nikahfix) - Initial concept and foundation
- **Enhanced by**: [Azhar Azziz](https://azharazziz.github.io) - Additional features and improvements
- **Design Inspiration**: Netflix interface and modern web design principles
- **Technologies**: React, Vite, TailwindCSS, Supabase

## 📞 Support

Having issues? We're here to help!

- 📝 [Create an Issue](https://github.com/azharazziz/nikahfix/issues)
- 📧 Contact via GitHub profile
- 💬 Check existing discussions and solutions

---

<div align="center">

**💖 Happy Wedding! 💖**

Made with ❤️ for couples celebrating their special day

[Demo](https://nikahfix-v02.vercel.app/) • [GitHub](https://github.com/azharazziz/nikahfix) • [Issues](https://github.com/azharazziz/nikahfix/issues)

</div>

#### **Detail Info** (`src/components/section/detail-info/`)
- Container utama untuk semua section dengan scroll animations
- Video placeholder dengan fallback image
- Koordinasi semua komponen section

#### **Title Info** (`src/components/section/title-info/`)
- Informasi judul dengan metadata Netflix-style
- Rating, durasi, dan kualitas video indicator

#### **Breaking News** (`src/components/section/breaking-news/`)
- Section berita dengan HTML content yang dapat dikustomisasi
- Gambar hero dan konten yang dapat diatur melalui config

#### **Bride & Groom** (`src/components/section/bride-groom/`)
- Profil pengantin pria dan wanita
- Foto, nama lengkap, dan informasi orang tua
- Layout grid responsive untuk kedua profil

#### **Reception** (`src/components/section/reception/`)
- Informasi acara akad dan resepsi
- Tanggal, waktu, dan lokasi lengkap
- Styling card ala netflix
- Countdown

#### **Love Story** (`src/components/section/love-story/`)
- Timeline perjalanan cinta dalam format episode
- Random duration generator untuk setiap episode
- Layout grid dengan gambar dan deskripsi

#### **Our Gallery** (`src/components/section/our-gallery/`)
- Carousel gallery dengan navigasi Netflix-style
- Auto-slide functionality setiap 3 detik
- Navigation arrows dan dots indicator
- Aspect ratio 9:16 untuk tampilan mobile-first

#### **Gift** (`src/components/section/gift/`)
- Informasi rekening bank untuk transfer hadiah
- Alamat lengkap untuk pengiriman hadiah fisik
- Icon dan styling card yang ala netflix payment

#### **Wish Section** (`src/components/section/wish/`)
- Form ucapan dan doa untuk pengantin
- Filter kata kasar menggunakan Indonesian Badwords
- Real-time updates menggunakan Supabase
- Auto-scroll ke pesan terbaru
- Validasi form dengan minimum character requirements
- Custom scrollbar styling
- Mobile-responsive dengan keyboard detection
- Ditambahkan fitur emoji

#### **Footer** (`src/components/section/footer/`)
- Credit dan informasi pembuat
- Link ke profile developer

### 🎛️ Komponen UI

#### **Song Button** (`src/components/ui/song-button/`)
- Kontrol audio background dengan play/pause
- Auto-pause saat browser tab tidak aktif
- Spinning animation saat musik diputar
- Icon SVG custom untuk kontrol audio

### 🔧 Hooks Custom

#### **useScrollAnimation** (`src/hooks/useScrollAnimation.js`)
- Intersection Observer untuk scroll-triggered animations
- Configurable threshold dan root margin
- One-time animation trigger untuk performa optimal

### ⚙️ Konfigurasi

#### **config.json** (`src/data/config.json`)
Data terpusat untuk semua informasi pernikahan:
- **Pengantin**: Foto, nama, dan informasi keluarga
- **Media**: URL audio, video, dan gambar thumbnail
- **Content**: Intro text, breaking news, dan love story timeline
- **Gallery**: Array URL gambar untuk carousel
- **Bank**: Informasi rekening untuk hadiah
- **Events**: Detail acara akad dan resepsi
- **Address**: Alamat lengkap untuk pengiriman
- **Show Menu**: Toggle visibility untuk setiap section

#### **Environment Variables** (`.env`)
```env
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_SUPABASE_URL=your-supabase-url
VITE_APP_TABLE_NAME=your-table-name
```

### 🗄️ Database (Supabase)

#### **Tabel Wish** 
Structure untuk menyimpan ucapan tamu:
```sql
CREATE TABLE nikahfix (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  color VARCHAR(50) NOT NULL
);
```

### 📁 Struktur File Asset

```
public/
├── favicon.ico                 # Icon aplikasi
├── vite.svg                   # Vite logo
├── audio/
│   ├── lagunya.mp3           # Background music
│   └── click-sound.mp3       # Sound effect untuk interaksi
├── images/
│   ├── NIKAHFIX.webp         # Logo utama
│   ├── Bride.png             # Foto pengantin wanita
│   ├── Groom.png             # Foto pengantin pria
│   ├── Episode 1-4.png       # Timeline love story
│   ├── News.png              # Breaking news image
│   ├── Video.jpg             # Video placeholder
│   ├── face.png              # Avatar untuk wish section
│   ├── guest-icon.png        # Icon user watching
│   ├── 4k-icon.png           # Quality indicator
│   ├── hd-icon.png           # Quality indicator
│   ├── dummy.png             # Placeholder image
│   └── thumbnail.webp        # Main thumbnail
├── template/                  # Design templates
│   ├── master thumbnail.ai   # Adobe Illustrator template
│   └── Poster Film.psd       # Photoshop template
└── video/
    └── videonya.mp4          # Video content (optional)
```

## Instalasi

## Instalasi dan Setup

Berikut adalah langkah-langkah untuk menginstal proyek ini di lingkungan lokal Anda:

### 📦 Instalasi Dasar

1. **Clone Repository**:
   ```bash
   git clone https://github.com/azharazziz/nikahfix.git
   ```

2. **Masuk ke Direktori Proyek**:
   ```bash
   cd nikahfix
   ```

3. **Instal Dependensi**:
   Pastikan Anda sudah menginstal Node.js. Jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan.
   ```bash
   npm install
   ```

4. **Setup Environment Variables**:
   Salin file `.env.example` menjadi `.env` dan isi dengan kredensial Supabase Anda:
   ```bash
   cp .env.example .env
   ```
   
   Edit file `.env`:
   ```env
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   VITE_SUPABASE_URL=your-supabase-url
   VITE_APP_TABLE_NAME=nikahfix
   ```

5. **Menjalankan Proyek**:
   Setelah semua dependensi terpasang, jalankan proyek dengan perintah:
   ```bash
   npm run dev
   ```

6. **Mengakses Proyek**:
   Buka browser Anda dan akses proyek di:
   ```
   http://localhost:5173
   ```

### 🏗️ Build untuk Production

```bash
# Build project
npm run build

# Preview build result
npm run preview

# Linting code
npm run lint
```

### 🎨 Customization

#### **Mengubah Data Pengantin**
Edit file `src/data/config.json` untuk menyesuaikan:
- Nama dan foto pengantin
- Informasi acara (tanggal, waktu, lokasi)
- Love story timeline
- Gallery images
- Bank account information

#### **Mengganti Media**
- **Audio**: Replace `public/audio/lagunya.mp3`
- **Images**: Replace files di `public/images/`
- **Video**: Update `video_replacement` atau `url_video` di config

#### **Mengatur Visibility Section**
Gunakan `show_menu` object di config.json:
```json
{
  "show_menu": {
    "breaking_news": true,
    "bride_and_groom": true,
    "reception": true,
    "love_story": true,
    "gallery": true,
    "gift": true,
    "wish": true
  }
}
```

---

## 🗄️ Integrasi Supabase di NIKAHFIX

NIKAHFIX menggunakan **Supabase** untuk mengelola data undangan pernikahan, seperti informasi tamu, pesan, dan ucapan. Supabase menyediakan layanan **database** dan **API real-time** untuk membangun aplikasi secara cepat dan efisien.

### 🚀 Langkah-langkah Integrasi Supabase

#### **1. Mendaftar ke Supabase**

- Kunjungi [Supabase](https://supabase.io) dan buat akun, kemudian buat proyek baru.
- Setelah proyek dibuat, Anda akan mendapatkan URL dan **anon key** untuk mengakses Supabase.

#### **2. Setup Database Table**

Buat tabel untuk menyimpan ucapan tamu:

```sql
-- Membuat tabel nikahfix
CREATE TABLE public.nikahfix (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    color VARCHAR(50) NOT NULL
);

-- Mengatur Row Level Security (RLS)
ALTER TABLE public.nikahfix ENABLE ROW LEVEL SECURITY;

-- Policy untuk membaca data (semua orang bisa membaca)
CREATE POLICY "Anyone can read wishes" ON public.nikahfix
    FOR SELECT USING (true);

-- Policy untuk insert data (semua orang bisa menambah ucapan)
CREATE POLICY "Anyone can insert wishes" ON public.nikahfix
    FOR INSERT WITH CHECK (true);
```

#### **3. Menambahkan Environment Variables**

Untuk menyimpan kredensial Supabase, buat file `.env` di root proyek dan tambahkan variabel berikut:

```env
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SUPABASE_URL=https://your-project-url.supabase.co
VITE_APP_TABLE_NAME=nikahfix
```

Gantilah `your-anon-key` dan `your-project-url.supabase.co` sesuai dengan kredensial proyek Supabase Anda.

#### **4. Konfigurasi Supabase Client**

File konfigurasi sudah tersedia di `src/lib/supabaseClient.js`:

```javascript
import { createClient } from '@supabase/supabase-js';

const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
```

### 🔧 Fitur Database yang Digunakan

- **Real-time Updates**: Ucapan baru muncul secara otomatis tanpa reload
- **Content Filtering**: Filter kata kasar menggunakan Indonesian Badwords
- **Data Validation**: Validasi panjang nama (min 3 karakter) dan pesan (min 10 karakter)
- **Color Randomization**: Warna avatar acak untuk setiap ucapan
- **Auto Scroll**: Otomatis scroll ke ucapan terbaru

### 📊 Sample Data

File `nikahfix_rows.sql` berisi contoh data untuk testing:
- 38 sample records dengan berbagai nama dan pesan
- 4 pilihan warna untuk avatar: red, #ffdb58, #6bc76b, #48cae4
- Timestamps yang realistis untuk development

## 🏗️ Struktur Proyek Lengkap

```
nikahfix/
├── public/                     # Static assets
│   ├── audio/                  # Audio files
│   ├── images/                 # Image assets
│   ├── video/                  # Video files
│   ├── favicon.ico
│   └── vite.svg
├── src/
│   ├── components/             # React components
│   │   ├── section/           # Page sections
│   │   │   ├── breaking-news/
│   │   │   ├── bride-groom/
│   │   │   ├── detail-info/
│   │   │   ├── footer/
│   │   │   ├── gift/
│   │   │   ├── love-story/
│   │   │   ├── our-gallery/
│   │   │   ├── reception/
│   │   │   ├── thumbnail/
│   │   │   ├── title-info/
│   │   │   ├── user-watch/
│   │   │   └── wish/
│   │   └── ui/                # Reusable UI components
│   │       └── song-button/
│   ├── data/                  # Configuration
│   │   └── config.json
│   ├── hooks/                 # Custom React hooks
│   │   └── useScrollAnimation.js
│   ├── lib/                   # External integrations
│   │   └── supabaseClient.js
│   ├── App.jsx               # Main app component
│   ├── App.css              # Global styles
│   ├── index.css            # Tailwind imports
│   └── main.jsx             # React entry point
├── .env.example             # Environment template
├── .gitignore              # Git ignore rules
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── nikahfix_rows.sql       # Sample database data
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── README.md               # Documentation
├── tailwind.config.js      # Tailwind configuration
└── vite.config.js          # Vite configuration
```

### 💡 Tips Development

1. **Hot Reload**: Vite menyediakan hot reload untuk pengembangan yang cepat
2. **Responsive Testing**: Gunakan DevTools untuk test berbagai ukuran layar
3. **Performance**: Gunakan Lighthouse untuk audit performa
4. **Accessibility**: Test dengan screen reader untuk aksesibilitas
5. **Cross Browser**: Test di Chrome, Firefox, Safari, dan Edge
6. **Component Structure**: Gunakan struktur komponen yang modular untuk maintainability
7. **Audio Management**: Test audio playback di berbagai browser untuk compatibility
8. **Animation Performance**: Monitor performance animasi terutama di mobile devices
9. **URL Parameter Testing**: Test berbagai format nama di URL parameter
10. **Dark Theme Optimization**: Pastikan contrast ratio yang baik untuk readability

### 🎨 Design Guidelines

- **Netflix-inspired**: Ikuti design language Netflix untuk konsistensi
- **Dark Theme**: Gunakan gradasi hitam dan abu-abu untuk background
- **Smooth Transitions**: Implementasikan transisi yang halus (300ms duration)
- **Hover Effects**: Berikan feedback visual untuk semua interactive elements
- **Responsive**: Mobile-first approach dengan breakpoint yang tepat
- **Typography**: Gunakan font weight yang tepat untuk hierarchy
- **Color Palette**: Stick dengan white, gray variations, dan accent colors
- **Spacing**: Consistent spacing menggunakan Tailwind's spacing scale

## 🚀 Deployment

### **Vercel (Recommended)**

1. Push code ke GitHub repository
2. Connect repository di [Vercel](https://vercel.com)
3. Set environment variables di Vercel dashboard
4. Deploy otomatis setiap push ke main branch

### **Environment Variables untuk Production**

```env
VITE_SUPABASE_ANON_KEY=your-production-key
VITE_SUPABASE_URL=https://your-production-url.supabase.co
VITE_APP_TABLE_NAME=nikahfix
```

## 🤝 Contributing

Kami menyambut kontribusi dari komunitas! Untuk berkontribusi:

1. Fork repository ini dari [azharazziz/nikahfix](https://github.com/azharazziz/nikahfix)
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request dengan deskripsi yang jelas

### 📋 Contribution Guidelines

- Pastikan kode mengikuti ESLint configuration yang ada
- Test fitur baru di berbagai ukuran layar
- Dokumentasikan perubahan yang signifikan
- Pertahankan kompatibilitas dengan existing features

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Original Design**: Inspired by Netflix interface
- **Original Creator**: [Tajul Arifin S](https://www.facebook.com/arifintajul4) - [Original Repository](https://github.com/arifintajul4/nikahfix)
- **Fork & Enhanced by**: [Azhar Azziz](https://azharazziz.github.io) - [Current Repository](https://github.com/azharazziz/nikahfix)
- **Technologies**: React, Vite, TailwindCSS, Supabase

### 📝 Fork Information

Proyek ini merupakan fork dan pengembangan lanjutan dari repository asli yang dibuat oleh [Tajul Arifin S](https://github.com/arifintajul4/nikahfix). Berbagai peningkatan dan fitur baru telah ditambahkan, termasuk:

- ✨ Enhanced UI/UX dengan animasi yang lebih smooth
- 🎵 Sistem audio control yang lebih baik
- 🖼️ Gallery carousel dengan navigasi Netflix-style
- 💌 Sistem wish dengan filter kata kasar
- 📱 Responsive design yang lebih optimal
- 🎊 Scroll animations menggunakan Intersection Observer
- 📍 Integrasi Google Maps
- 🔧 Custom hooks dan utilities
- 📊 Real-time updates dengan Supabase

Terima kasih kepada Tajul Arifin S atas fondasi yang luar biasa untuk proyek ini!

---

## 📞 Support

Jika Anda mengalami masalah atau memiliki pertanyaan, silakan:

1. Check existing [Issues](https://github.com/azharazziz/nikahfix/issues)
2. Create new issue dengan detail yang lengkap
3. Contact developer melalui link yang tersedia di footer

** 💖 Happy Wedding 💖**