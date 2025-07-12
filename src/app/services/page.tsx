
import Image from 'next/image';

export default function Services() {
  return (
    <section className="min-h-screen bg-black text-gold py-16 px-4 font-serif">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-heading mb-6 gold-text">Our Services</h1>
        <div className="h-1 w-24 mx-auto gold-bg mb-8 rounded"></div>
        <Image src="/images/catering1.jpg" alt="Catering Service" width={600} height={256} className="mx-auto rounded-lg mb-8 border-4 gold-border shadow-lg max-h-64 object-cover" />
        <p className="text-lg md:text-xl mb-8">
          We offer a wide range of catering and event services to make your special day truly memorable. Our expertise covers every aspect of event planning and execution.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-rich-black bg-opacity-80 p-6 rounded-lg gold-border border">
            <h2 className="text-2xl font-heading gold-text mb-2">Wedding Catering</h2>
            <p>Lavish spreads, custom menus, and impeccable service for your big day.</p>
            <Image src="/images/food1.jpg" alt="Wedding Food" width={300} height={128} className="rounded-lg mt-4 border-2 gold-border mx-auto max-h-32 object-cover" />
          </div>
          <div className="bg-rich-black bg-opacity-80 p-6 rounded-lg gold-border border">
            <h2 className="text-2xl font-heading gold-text mb-2">Corporate Events</h2>
            <p>Professional catering for meetings, conferences, and business celebrations.</p>
            <Image src="/images/food2.jpg" alt="Corporate Food" width={300} height={128} className="rounded-lg mt-4 border-2 gold-border mx-auto max-h-32 object-cover" />
          </div>
          <div className="bg-rich-black bg-opacity-80 p-6 rounded-lg gold-border border">
            <h2 className="text-2xl font-heading gold-text mb-2">Birthday Parties</h2>
            <p>Fun, themed menus and creative presentations for all ages.</p>
            <Image src="/images/event1.jpg" alt="Birthday Event" width={300} height={128} className="rounded-lg mt-4 border-2 gold-border mx-auto max-h-32 object-cover" />
          </div>
          <div className="bg-rich-black bg-opacity-80 p-6 rounded-lg gold-border border">
            <h2 className="text-2xl font-heading gold-text mb-2">Outdoor & Theme Events</h2>
            <p>Custom setups, live counters, and unique experiences for any occasion.</p>
            <Image src="/images/catering1.jpg" alt="Outdoor Catering" width={300} height={128} className="rounded-lg mt-4 border-2 gold-border mx-auto max-h-32 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
