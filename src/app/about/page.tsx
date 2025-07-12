
import Image from 'next/image';

export default function About() {
  return (
    <section className="min-h-screen bg-black text-gold py-16 px-4 font-serif">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-heading mb-6 gold-text">About Us</h1>
        <div className="h-1 w-24 mx-auto gold-bg mb-8 rounded"></div>
        <Image src="/images/event1.jpg" alt="Catering Event" width={600} height={256} className="mx-auto rounded-lg mb-8 border-4 gold-border shadow-lg max-h-64 object-cover" />
        <p className="text-lg md:text-xl mb-8">
          With 29 years of expertise, UBAHAR Wedding Events brings a royal touch to every celebration. Our legacy is built on trust, taste, and timeless elegance, making us a preferred choice for weddings, corporate events, and special occasions.
        </p>
        <p className="mb-8">
          Our team of culinary experts and event professionals ensure every detail is perfect, from gourmet cuisine to stunning decor. We believe in creating unforgettable experiences that reflect your unique style and vision.
        </p>
        <div className="gold-border border-t pt-8 mt-8">
          <span className="text-2xl font-heading gold-text">29 Years of Expertise</span>
        </div>
      </div>
    </section>
  );
}
