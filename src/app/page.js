import backgroundImage from '../../public/home/iwestorehomebg.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { SparklesIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className="flex flex-col relative justify-content center items-center h-screen">
      <Image
        className="blur-sm"
        src={backgroundImage}
        alt="iwestorehomebg"
        layout="fill"
        objectFit="cover"
        sizes="100vw"
      />
      <div className="flex flex-col justify-center items-center pg-purple-100 rounded-md p-2 lg:w-2/5 h-1/4 z-10">
        <div>
          <SparklesIcon className="w-12 h-12" />
          <h1 className="text-4xl font-bold text-white-800 text-center">
            Iwestore
          </h1>
          <p className="flex pb-5 mb-5 text-5xl text-purple-800 text-center">
            An online bookstore
          </p>
        </div>
        <div>
          <Link href="/store">
            {' '}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Shop now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
