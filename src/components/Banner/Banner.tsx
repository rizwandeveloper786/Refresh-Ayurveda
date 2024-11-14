import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <div style={{ position: 'relative', height: '300px', textAlign: 'center', color: '#fff' }}>
      <Image src="/path-to-your-image.jpg" alt="Banner" layout="fill" objectFit="cover" quality={100} />
      <div style={{ position: 'relative', zIndex: 1, paddingTop: '100px' }}>
        <h2>Welcome to My Website</h2>
        <p>Your go-to place for all things amazing!</p>
      </div>
    </div>
  );
};

export default Banner;
