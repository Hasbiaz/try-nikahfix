import React from 'react';
import TitleInfo from '../title-info';
import BreakingNews from '../breaking-news';
import Bridegroom from '../bride-groom';
import LoveStory from '../love-story';
import OurGallery from '../our-gallery';
import WishSection from '../wish';
import Footer from '../footer';
import data from '../../../data/config.json';
import SongButton from '../../ui/song-button';

export default function DetailInfo() {
  return (
    <div className="space-y-5 pb-10">
      <video className="w-full" autoPlay muted>
        <source src={data.url_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="px-4 space-y-4">
        <TitleInfo />
        {data.show_menu.breaking_news && <BreakingNews />}
        {data.show_menu.bride_and_groom && <Bridegroom />}
        {data.show_menu.love_story && <LoveStory />}
        {data.show_menu.gallery && (
          <OurGallery gallery={data.gallery} show_menu={data.show_menu} />
        )}
        <div className="text-center pb-4">
          <div className="mb-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.9839907468668!2d110.2801894!3d-7.5767207999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8bb5aab69a41%3A0x9e8788d66dfb950f!2sGedung%20Muhammadiyah%20Bakalan!5e0!3m2!1sid!2sid!4v1753235603881!5m2!1sid!2sid"
              style={{
                border: 0,
                width: '100%',
                rounding: '8px',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a 
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            href="https://maps.app.goo.gl/12pjqXd5sRPq9jrv6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lihat Lokasi
          </a>
        </div>
        {data.show_menu.wish && import.meta.env.VITE_APP_TABLE_NAME ? (
          <WishSection />
        ) : null}
      </div>
      <Footer />
      <SongButton />
    </div>
  );
}
