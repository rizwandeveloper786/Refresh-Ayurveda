// pages/index.tsx
import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import CardSection from '../components/CardSection';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import CarouselComponent from '@/components/Banner/Carousel/Carousel';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Website</title>
        <meta name="description" content="A sample website created in Next.js with TypeScript" />
      </Head>
      <Header />
      <Navbar />
      <Banner />
      <CarouselComponent /> {/* Carousel Component */}
      <CardSection />
      <Footer />
    </>
  );
};

export default Home;
