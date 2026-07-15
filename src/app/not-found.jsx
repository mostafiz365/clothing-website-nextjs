import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-white text-neutral-900 px-6">
      <div className="flex flex-col items-center max-w-md text-center">
        
        <h1 className="text-7xl font-black tracking-widest text-neutral-950 sm:text-8xl">
          404
        </h1>
        <h2 className="mt-4 text-xs font-black tracking-[0.4em] uppercase text-neutral-400">
          Page Not Found
        </h2>

        <div className="my-6 h-[1.5px] w-8 bg-neutral-950" />

        <p className="text-xs tracking-wide leading-relaxed text-neutral-500 uppercase max-w-[280px]">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block border border-neutral-950 bg-neutral-950 px-8 py-4 text-[10px] font-bold tracking-[0.25em] uppercase text-white transition-all duration-300 hover:bg-white hover:text-neutral-950"
          >
            Go Back Home
          </Link>
        </div>

      </div>
    </main>
  );
};

export default NotFound;