
import Image from 'next/image';

export default function Menu() {
  return (
    <section className="min-h-screen bg-black text-gold py-16 px-4 font-serif">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-heading mb-6 gold-text">Our Menu</h1>
        <div className="h-1 w-24 mx-auto gold-bg mb-8 rounded"></div>
        <Image src="/images/food1.jpg" alt="Royal Biryani" width={600} height={256} className="mx-auto rounded-lg mb-8 border-4 gold-border shadow-lg max-h-64 object-cover" />
        <p className="text-lg md:text-xl mb-8">
          Explore our diverse menu, featuring traditional and contemporary dishes crafted with the finest ingredients. Each menu is tailored to your event, ensuring a memorable dining experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-rich-black bg-opacity-80 p-6 rounded-lg gold-border border">
            <h2 className="text-2xl font-heading gold-text mb-2">Wedding Specials</h2>
            <ul className="list-disc list-inside text-left">
              <li>Royal Biryani</li>
              <li>Paneer Tikka</li>
              <li>Exotic Salads</li>
              <li>Signature Desserts</li>
            </ul>
            <Image src="/images/food2.jpg" alt="Paneer Tikka" width={300} height={128} className="rounded-lg mt-4 border-2 gold-border mx-auto max-h-32 object-cover" />
          </div>
          <div className="bg-rich-black bg-opacity-80 p-6 rounded-lg gold-border border">
            <h2 className="text-2xl font-heading gold-text mb-2">Corporate Events</h2>
            <ul className="list-disc list-inside text-left">
              <li>Continental Platters</li>
              <li>Live Counters</li>
              <li>Gourmet Appetizers</li>
              <li>Custom Beverages</li>
            </ul>
            <Image src="/images/catering1.jpg" alt="Corporate Catering" width={300} height={128} className="rounded-lg mt-4 border-2 gold-border mx-auto max-h-32 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
