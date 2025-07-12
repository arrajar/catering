import React from 'react';

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-gold py-16 px-4 font-serif">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-heading mb-6 gold-text">Contact Us</h1>
        <div className="h-1 w-24 mx-auto gold-bg mb-8 rounded"></div>
        <p className="text-lg md:text-xl mb-8">
          Ready to plan your next event? Reach out to us for personalized catering and event solutions.
        </p>
        <form className="space-y-6 mt-8">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-rich-black border gold-border text-gold placeholder-gold" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-rich-black border gold-border text-gold placeholder-gold" />
          <textarea placeholder="Your Message" className="w-full p-3 rounded bg-rich-black border gold-border text-gold placeholder-gold" rows={5}></textarea>
          <button type="submit" className="gold-bg text-black font-bold py-3 px-8 rounded hover:opacity-90 transition">Send Message</button>
        </form>
        <div className="mt-12 text-sm opacity-80">
          <p>Email: info@ubaharweddingevents.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: 123 Royal Street, City, State</p>
        </div>
      </div>
    </section>
  );
}
