// pages/index.tsx
import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import CardSection from '../components/CardSection';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import Carousel from '@/components/Banner/Carousel/Carousel'; // Ensure the correct path

const Home: React.FC = () => {
  const slides = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];

  return (
    <>
      <Head>
        <title>My Website</title>
        <meta name="description" content="A sample website created in Next.js with TypeScript" />
      </Head>
      <Header />
      <Navbar />
      <Banner />
      <Carousel slides={slides} /> {/* Using the Carousel Component */}
      <CardSection />
      <Footer />
    </>
  );
};

export default Home;
