import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </Layout>
  );
}
