import React from 'react';

interface IDividerProps {
  title : string
}

function Divider({ title }:IDividerProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="w-full border border-solid border-[#B388FF]" />
      <div className="-mt-4 bg-white px-3">
        <div className="flex h-8 items-center rounded-2xl border border-[#B388FF] bg-white p-3 text-[#B388FF]">
          {title}
        </div>
      </div>
    </div>
  );
}

export default Divider;
