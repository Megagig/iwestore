import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/solid';
const Logo = () => {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <SparklesIcon className="h-12 w-12 text-gray-500" />
      <p className="text-[28px] ml-1">Iwestore</p>
    </div>
  );
};

export default Logo;
