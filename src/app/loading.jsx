'use client';

import React from 'react';

const Loading = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-white text-neutral-900">
      <div className="flex flex-col items-center gap-6">
        
        <div className="relative flex h-10 w-10 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-950 opacity-10"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-neutral-950"></span>
        </div>

        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-500 animate-pulse pl-[0.4em]">
          Loading Collection
        </p>
        
      </div>
    </main>
  );
};

export default Loading;