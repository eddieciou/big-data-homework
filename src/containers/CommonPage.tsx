import React from 'react';
import Selector from '../components/Selector';
import Divider from '../components/Divider';

function CommonPage() {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <h1 className="text-[32px] font-normal leading-[46.34px]">人口數、戶數按戶別及性別統計</h1>
      <form className="flex items-center justify-center gap-3">
        <Selector />
        <Selector />
        <Selector />
        <button type="button" className="h-[36.5px] rounded bg-black bg-opacity-[12%] px-4 py-[6px] text-[14px] font-bold leading-none text-black text-opacity-[26%]">SUBMIT</button>
      </form>
      <Divider title="搜尋結果" color="#B388FF" />
    </div>
  );
}

export default CommonPage;
