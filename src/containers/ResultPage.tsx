import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

type TAPIResult = {
  responseData:Array<{
    household_ordinary_total:string // 共同生活_戶數
    household_single_total: string // 獨立生活_戶數
    household_ordinary_m:string // 共同生活_男
    household_ordinary_f:string // 共同生活_女
    household_single_m: string // 獨立生活_男
    household_single_f:string // 獨立生活_女
  }>
};

const fetcher = (url:string) => fetch(url).then((r) => r.json());

function ResultPage() {
  const { year, county, town } = useParams();

  const { data } = useSWR<TAPIResult>(() => `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}?COUNTY=${county}&TOWN=${town}`, fetcher);

  const result = data?.responseData.reduce((accumulator, currentValue) => ({
    ordinaryM: accumulator.ordinaryM + parseInt(currentValue.household_ordinary_m, 10),
    ordinaryF: accumulator.ordinaryF + parseInt(currentValue.household_ordinary_f, 10),
    singleM: accumulator.singleM + parseInt(currentValue.household_single_m, 10),
    singleF: accumulator.singleF + parseInt(currentValue.household_single_f, 10),
    ordinaryTotal: accumulator.ordinaryTotal + parseInt(currentValue.household_ordinary_total, 10),
    singleTotal: accumulator.singleTotal + parseInt(currentValue.household_single_total, 10),
  }), {
    ordinaryM: 0, ordinaryF: 0, singleM: 0, singleF: 0, ordinaryTotal: 0, singleTotal: 0,
  });

  return (
    <div className="mt-12">
      <div className="text-[25px]">{`${year}年 ${county} ${town}`}</div>
      <div>{`共同生活_男: ${result?.ordinaryM}`}</div>
      <div>{`共同生活_女: ${result?.ordinaryF}`}</div>
      <div>{`獨立生活_男: ${result?.singleM}`}</div>
      <div>{`獨立生活_女: ${result?.singleF}`}</div>
      <div>{`共同生活(戶): ${result?.ordinaryTotal}`}</div>
      <div>{`獨立生活(戶): ${result?.singleTotal}`}</div>
    </div>
  );
}

export default ResultPage;
