import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Selector from '../components/Selector';
import Divider from '../components/Divider';
import YEAR_LIST, { COUNTY_LIST, TCounty, TOWN_MAP } from '../constant';

function CommonPage() {
  const [year, setYear] = useState('110');
  const [county, setCounty] = useState<TCounty | ''>('');
  const [town, setTown] = useState('');

  const navigate = useNavigate();

  const buttonDisabled = !county || !town;

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    console.log(`/${year}/${county}/${town}`);
    e.preventDefault();
    navigate(`/${year}/${county}/${town}`);
  };

  return (
    <div className="flex w-full flex-col items-center gap-12">
      <h1 className="text-[32px] font-normal leading-[46.34px]">人口數、戶數按戶別及性別統計</h1>
      <form className="flex w-full flex-col items-start justify-center gap-3 px-2 sm:flex-row" onSubmit={handleSubmit}>
        <Selector small label="年份" chooseList={YEAR_LIST} value={year} onChange={(value) => setYear(value)} />
        <Selector label="縣/市" chooseList={COUNTY_LIST} value={county} onChange={(value) => setCounty(value as TCounty)} clearAble={!!county} placeholder="請選擇 縣/市" />
        <Selector label="區" chooseList={county ? TOWN_MAP[county] : []} value={town} placeholder="請選擇區" onChange={(value) => setTown(value)} disable={!county} clearAble={!!town} disablePlaceholder="請先選擇 縣/市" />
        <button type="submit" className={`h-[36.5px] w-full rounded  px-4 py-[6px] text-[14px] font-bold leading-none  sm:w-[83px] ${buttonDisabled ? 'bg-black bg-opacity-[12%] text-black text-opacity-[26%]' : 'bg-[#651FFF] text-white'}`} disabled={buttonDisabled}>SUBMIT</button>
      </form>
      <Divider title="搜尋結果" color="#B388FF" />
    </div>
  );
}

export default CommonPage;
