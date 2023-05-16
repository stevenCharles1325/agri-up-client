'use client';

import Image from 'next/image';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white w-screen h-screen flex justify-center items-center">
      <div className="w-fit h-fit m-0 p-0 flex flex-col justify-center items-center text-center gap-3">
        <Image
          width={100}
          height={100}
          src='/images/AgriUp! Logo with Title.png'
          alt="Logo"
        />
        {children}
      </div>
    </div>
  );
}