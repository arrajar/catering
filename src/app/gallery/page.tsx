import React from 'react';

export default function Gallery() {
  return (
    <section className="min-h-screen bg-black text-gold py-16 px-4 font-serif">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-heading mb-6 gold-text">Gallery</h1>
        <div className="h-1 w-24 mx-auto gold-bg mb-8 rounded"></div>
        <p className="text-lg md:text-xl mb-8">
          Discover moments from our grand events, exquisite setups, and culinary masterpieces. Each picture tells a story of celebration and excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <img src="/images/food1.jpg" alt="Food 1" className="rounded-lg h-48 w-full object-cover gold-border border" />
          <img src="/images/food2.jpg" alt="Food 2" className="rounded-lg h-48 w-full object-cover gold-border border" />
          <img src="/images/catering1.jpg" alt="Catering 1" className="rounded-lg h-48 w-full object-cover gold-border border" />
          <img src="/images/event1.jpg" alt="Event 1" className="rounded-lg h-48 w-full object-cover gold-border border" />
          <div className="bg-rich-black rounded-lg h-48 flex items-center justify-center gold-border border">More coming soon...</div>
          <div className="bg-rich-black rounded-lg h-48 flex items-center justify-center gold-border border">More coming soon...</div>
        </div>
      </div>
    </section>
  );
}
