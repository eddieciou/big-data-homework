import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { select } from 'd3';

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

const svgData = [25, 30, 45, 60, 20];

function ResultPage() {
  const { year, county, town } = useParams();

  const { data, isLoading } = useSWR<TAPIResult>(() => `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}?COUNTY=${county}&TOWN=${town}`, fetcher);

  const barChartSVGRef = useRef<SVGSVGElement | null>(null);

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

  if (isLoading) return <div />;

  const barChartSVG = select(barChartSVGRef.current);
  barChartSVG.selectAll('circle')
    .data(svgData)
    .join(
      (enter) => enter.append('circle')
        .attr('class', 'new')
        .attr('r', (value) => value)
        .attr('cx', (value) => value * 2)
        .attr('cy', (value) => value * 2)
        .attr('stroke', 'red'),
      (update) => update.attr('class', 'updated'),
      (exit) => exit.remove(),
    );

  return (
    <div className="mt-12 flex w-full flex-col items-center gap-12">
      <div className="text-[25px]">{`${year}年 ${county} ${town}`}</div>
      <svg ref={barChartSVGRef} className="h-[60px] w-[60px] bg-gray-200" />
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
