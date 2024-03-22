import backgroundImage from '../../public/home/iwestorehomebg.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image
          src={backgroundImage}
          alt="iwestorehomebg"
          layout="fill"
          objectFit="cover"
          sizes="100vw"
        />
      </div>
    </main>
  );
}
