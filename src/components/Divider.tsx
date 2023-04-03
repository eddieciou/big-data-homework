import React from 'react';

interface IDividerProps {
  title : string
  color: string
}

function Divider({ title, color }:IDividerProps) {
  const dividerStyle = `w-full border border-solid border-[${color}]`;
  const textStyle = `flex h-8 items-center rounded-2xl border border-[#B388FF] bg-white p-3 text-[${color}]`;

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className={dividerStyle} />
      <div className="-mt-4 bg-white px-3">
        <div className={textStyle}>
          {title}
        </div>
      </div>
    </div>
  );
}

export default Divider;
